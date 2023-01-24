'use client';

import Loader from '@/components/Loader/Loader';
import MovieCards from '@/components/MovieCards';
import ScrollToTop from '@/components/ScrollToTop';
import SocialIcons from '@/components/SocialIcons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretRight, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { BsCameraVideoFill, BsFillPlayFill } from 'react-icons/bs';
import { Episode, Movie } from 'typings';

interface Props {
  isLoading: boolean;
  type: string;
  data: Movie;
  id: string;
  similarMovies: Movie[];
  seasons?: number[];
  episodesSS1: Episode[];
}

const Watch = ({ isLoading, type, data, similarMovies, id, seasons, episodesSS1 }: Props) => {
  const [eps, setEps] = useState('1');
  const [selectedEps, setSelectedEps] = useState('');
  const [season, setSeason] = useState('1');
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setEpisodes(data.episodes));
    };
    fetchEpisodes();
  }, [season, id]);

  const handleClick = (value: string) => {
    setEps(value);
    setSelectedEps(value);
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });
  };
  const handleChange = (value: string) => {
    setSeason(value);
  };
  console.log(episodesSS1);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <div className="p-4 flex flex-col gap-4">
            <p className="flex gap-4 text-sm">
              <Link href="/home" className="text-white">
                Home
              </Link>
              /<span className="text-white">Movie</span>/
              <span className="text-white">{data.original_title || data.name}</span>
            </p>
            <div className="h-[400px] lg:h-[500px]">
              <iframe
                id="iframe-embed"
                title="trailer"
                width="100%"
                height="100%"
                src={
                  type === 'movie'
                    ? `https://www.2embed.to/embed/tmdb/movie?id=${id}`
                    : `https://2embed.org/embed/series?tmdb=${id}&s=${season}&e=${eps}`
                }
                allowFullScreen={true}
              ></iframe>
            </div>
            {/* for mobile */}
            <div className="flex-1 flex gap-2 flex-col lg:hidden">
              <a
                href={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
                className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
              >
                Watch Now
              </a>
              <button className="w-full px-2 py-2 rounded-sm text-center bg-white">
                + Add favorite
              </button>
            </div>
            {/* for mobile */}
            <div>
              <div className="flex gap-4 border-b-4 border-b-[#333] pb-6">
                <div className="flex-1  lg:flex-col gap-8 hidden lg:block ">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt=""
                    className="h-auto"
                    width={300}
                    height={300}
                  />
                  <div className="py-4">
                    <p>
                      <span className="font-bold text-md text-white">9.2</span>{' '}
                      <span className="text-[#aaa] text-sm">/ 29 voted</span>
                    </p>
                    <div className="relative h-[5px] rounded-md bg-[#333]">
                      <div className="absolute h-[5px] w-[92%] bg-[#28a745]"></div>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-evenly mt-2">
                    <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
                      <AiOutlineLike style={{ color: 'green' }} className="text-green" /> Like
                    </button>
                    <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
                      <AiOutlineDislike style={{ color: 'red' }} /> DisLike
                    </button>
                  </div>
                </div>
                <div className="flex-5 flex gap-4 flex-col text-white">
                  <h4 className="text-3xl text-white">{data.original_title || data.name}</h4>
                  <div className="flex gap-2">
                    <button className="flex gap-1 items-center p-1 rounded-sm text-black bg-white">
                      <BsCameraVideoFill /> Trailer
                    </button>
                    <button className="p-1 rounded-sm text-black bg-white font-bold">HD</button>
                    <button className="p-1 rounded-sm text-black bg-[#ffc107]">
                      {data.vote_average?.toFixed(1)}
                    </button>
                  </div>
                  <p className="text-sm">{data.overview}</p>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="flex-1">
                      <p className="font-bold">
                        {data.release_date ? 'Release:' : 'Number of seasons:'}{' '}
                        <span className="font-thin">
                          {data.release_date || data.number_of_seasons}
                        </span>
                      </p>
                      <p className="font-bold flex gap-2">
                        Genre:{' '}
                        {data.genres?.map((genre: { name: string }) => (
                          <span key={genre.name} className="font-thin">
                            {genre.name},
                          </span>
                        ))}
                      </p>
                      <p className="font-bold">
                        {data.runtime ? 'Runtime:' : 'Number of episodes:'}{' '}
                        <span className="font-thin">
                          {data.runtime
                            ? data.runtime + ' minutes'
                            : data.number_of_episodes + ' episodes'}
                        </span>
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">
                        Popularity: <span className="font-thin">{data.popularity}</span>
                      </p>
                      <p className="font-bold">
                        Language:{' '}
                        <span className="font-thin">{data.spoken_languages[0]?.english_name}</span>
                      </p>
                      <p className="font-bold">
                        Production Company:{' '}
                        <span className="font-thin">{data.production_companies[0]?.name}</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex-1 hidden lg:flex gap-2 flex-col ">
                  <a
                    href={`https://2embed.org/embed/datatmdb=${id}`}
                    target="blank"
                    className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
                  >
                    Watch Now
                  </a>
                  <button className="w-full px-2 py-2 rounded-sm text-center bg-white">
                    + Add favorite
                  </button>
                </div> */}
              </div>
              <div className="flex gap-4 flex-wrap pt-4">
                <a href="/" className="block p-1 bg-white rounded-md">
                  Watch {data.title} Online free
                </a>
                <a href="/" className="block p-1 bg-white rounded-md">
                  {data.title} Online free
                </a>
                <a href="/" className="block p-1 bg-white rounded-md">
                  where to watch {data.title}
                </a>
                <a href="/" className="block p-1 bg-white rounded-md">
                  {data.title} online free
                </a>
                <a href="/" className="block p-1 bg-white rounded-md">
                  {data.title} free online{' '}
                </a>
              </div>
              <SocialIcons />
              {type === 'tv' && (
                <div className="text-white bg-[#171717]">
                  <select
                    onChange={(e) => handleChange(e.target.value)}
                    name="season"
                    defaultValue="option1"
                    className="flex gap-2 text-lg items-center mb-2 bg-[#171717] outline-none"
                  >
                    {seasons?.map((ss) => (
                      <option key={ss} value={`${ss}`}>
                        <span>Season {ss}</span>
                        <AiFillCaretDown />
                      </option>
                    ))}
                  </select>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-2 cursor-pointer">
                    {episodes.map((eps: Episode) => (
                      <div
                        onClick={() => handleClick(eps.episode_number)}
                        className={`${
                          selectedEps === eps.episode_number ? 'bg-red-500' : 'bg-[#1c1c1c]'
                        } py-3 lg:p-2 px-[10px] flex   items-center gap-2`}
                        key={eps.name}
                      >
                        <i>
                          <AiFillCaretRight />
                        </i>
                        <span>
                          Eps {eps.episode_number}: {eps.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="py-4 px-8 flex flex-col gap-2 bg-[rgba(255,255,255,.05)]  rounded-md">
                <p className="text-center text-white">
                  If current server doesnt work please try other servers below.
                </p>
                <div className="  gap-4 flex justify-evenly flex-wrap">
                  <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                    <i>
                      <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
                    </i>
                    <div>
                      <p className="text-[#ccc]">Sever</p>
                      <p className="text-white">Vidcloud</p>
                    </div>
                  </div>
                  <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                    <i>
                      <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
                    </i>
                    <div>
                      <p className="text-[#ccc]">Sever</p>
                      <p className="text-white">Vidcloud</p>
                    </div>
                  </div>
                  <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                    <i>
                      <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
                    </i>
                    <div>
                      <p className="text-[#ccc]">Sever</p>
                      <p className="text-white">Vidcloud</p>
                    </div>
                  </div>
                  <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
                    <i>
                      <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
                    </i>
                    <div>
                      <p className="text-[#ccc]">Sever</p>
                      <p className="text-white">Vidcloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white text-2xl">You may also like</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
                {similarMovies?.map((movie: Movie, index: number) => (
                  <MovieCards mediaType={data.media_type} movie={movie} key={index} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Watch;
