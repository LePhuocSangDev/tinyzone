/* eslint-disable react/no-unescaped-entities */
import { AiOutlineLike, AiOutlineDislike, AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { BsCameraVideoFill, BsFillPlayFill, BsMenuButtonWide } from 'react-icons/bs';

import Loader from '@/components/Loader/Loader';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '@/components/SocialIcons';
import MovieCards from '@/components/MovieCards';
import { Movie } from 'typings';
import ScrollToTop from '@/components/ScrollToTop';
import ChooseTVDetails from './Watch2';
import Watch from '../../Watch';

const TvShowsPage = async ({ params }: { params: { id: string } }) => {
  const isLoading = false;
  const { id } = params;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const tvDetails = await fetchData(
    `${BASE_URL}/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const episodesSS1Data = await fetchData(
    `${BASE_URL}/tv/${id}/season/1?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const episodesSS1 = episodesSS1Data.episodes;
  const similarData = await fetchData(
    `${BASE_URL}/tv/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const similarTv = similarData.results;
  const trailer = await fetchData(
    `${BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  const createArray = () => {
    let arr = [];
    for (let i = 1; i <= tvDetails.number_of_seasons; i++) arr.push(i);
    return arr;
  };
  const seasons = createArray();
  return (
    // <>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <>
    //       <ScrollToTop />
    //       <div className="p-4 flex flex-col gap-4">
    //         <p className="flex gap-4 text-sm">
    //           <Link href="/home" className="text-white">
    //             Home
    //           </Link>
    //           /<span className="text-white">Movie</span>/
    //           <span className="text-white">{tvDetails.original_title || tvDetails.name}</span>
    //         </p>
    //         <div className="h-[400px] lg:h-[500px]">
    //           <iframe
    //             id="iframe-embed"
    //             title="trailer"
    //             width="100%"
    //             height="100%"
    //             src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
    //             allowFullScreen={true}
    //           ></iframe>
    //         </div>
    //         {/* for mobile */}
    //         <div className="flex-1 flex gap-2 flex-col lg:hidden">
    //           <a
    //             href={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
    //             className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
    //           >
    //             Watch Now
    //           </a>
    //           <button className="w-full px-2 py-2 rounded-sm text-center bg-white">
    //             + Add favorite
    //           </button>
    //         </div>
    //         {/* for mobile */}
    //         <div>
    //           <div className="flex gap-4 border-b-4 border-b-[#333] pb-6">
    //             <div className="flex-1  lg:flex-col gap-8 hidden lg:block ">
    //               <Image
    //                 src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`}
    //                 alt=""
    //                 className="h-auto"
    //                 width={500}
    //                 height={500}
    //               />
    //               <div className="py-4">
    //                 <p>
    //                   <span className="font-bold text-md text-white">9.2</span>{' '}
    //                   <span className="text-[#aaa] text-sm">/ 29 voted</span>
    //                 </p>
    //                 <div className="relative h-[5px] rounded-md bg-[#333]">
    //                   <div className="absolute h-[5px] w-[92%] bg-[#28a745]"></div>
    //                 </div>
    //               </div>

    //               <div className="flex gap-2 justify-evenly mt-2">
    //                 <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
    //                   <AiOutlineLike style={{ color: 'green' }} className="text-green" /> Like
    //                 </button>
    //                 <button className="flex gap-2 rounded-md px-4 py-1 bg-white border items-center ">
    //                   <AiOutlineDislike style={{ color: 'red' }} /> DisLike
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="flex-5 flex gap-8 flex-col text-white">
    //               <h4 className="text-3xl text-white">
    //                 {tvDetails.original_title || tvDetails.name}
    //               </h4>
    //               <div className="flex gap-2">
    //                 <button className="flex gap-1 items-center p-1 rounded-sm text-black bg-white">
    //                   <BsCameraVideoFill /> Trailer
    //                 </button>
    //                 <button className="p-1 rounded-sm text-black bg-white font-bold">HD</button>
    //                 <button className="p-1 rounded-sm text-black bg-[#ffc107]">
    //                   {tvDetails.vote_average.toFixed(1)}
    //                 </button>
    //               </div>
    //               <p className="text-sm">{tvDetails.overview}</p>
    //               <div className="flex flex-col lg:flex-row">
    //                 <div className="flex-1">
    //                   <p className="font-bold">
    //                     {tvDetails.release_date ? 'Release:' : 'Number of seasons:'}{' '}
    //                     <span className="font-thin">
    //                       {tvDetails.release_date || tvDetails.number_of_seasons}
    //                     </span>
    //                   </p>
    //                   <p className="font-bold flex gap-2">
    //                     Genre:{' '}
    //                     {tvDetails.genres.map((genre: { name: string }) => (
    //                       <span key={genre.name} className="font-thin">
    //                         {genre.name}
    //                       </span>
    //                     ))}
    //                   </p>
    //                   <p className="font-bold">
    //                     {tvDetails.runtime ? 'Runtime:' : 'Number of episodes:'}{' '}
    //                     <span className="font-thin">
    //                       {tvDetails.runtime
    //                         ? tvDetails.runtime + ' minutes'
    //                         : tvDetails.number_of_episodes + ' episodes'}
    //                     </span>
    //                   </p>
    //                 </div>
    //                 <div className="flex-1">
    //                   <p className="font-bold">
    //                     Popularity: <span className="font-thin">{tvDetails.popularity}</span>
    //                   </p>
    //                   <p className="font-bold">
    //                     Language:{' '}
    //                     <span className="font-thin">
    //                       {tvDetails.spoken_languages[0]?.english_name}
    //                     </span>
    //                   </p>
    //                   <p className="font-bold">
    //                     Production Company:{' '}
    //                     <span className="font-thin">{tvDetails.production_companies[0]?.name}</span>
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex-1 hidden lg:flex gap-2 flex-col ">
    //               <a
    //                 href={`https://2embed.org/embed/tvDetailstmdb=${id}`}
    //                 target="blank"
    //                 className="w-full px-2 py-2 block text-white rounded-sm text-center bg-[#9b1a29]"
    //               >
    //                 Watch Now
    //               </a>
    //               <button className="w-full px-2 py-2 rounded-sm text-center bg-white">
    //                 + Add favorite
    //               </button>
    //             </div>
    //           </div>
    //           <div className="flex gap-4 flex-wrap pt-4">
    //             <a href="/" className="block p-1 bg-white rounded-md">
    //               Watch {tvDetails.title} Online free
    //             </a>
    //             <a href="/" className="block p-1 bg-white rounded-md">
    //               {tvDetails.title} Online free
    //             </a>
    //             <a href="/" className="block p-1 bg-white rounded-md">
    //               where to watch {tvDetails.title}
    //             </a>
    //             <a href="/" className="block p-1 bg-white rounded-md">
    //               {tvDetails.title} online free
    //             </a>
    //             <a href="/" className="block p-1 bg-white rounded-md">
    //               {tvDetails.title} free online{' '}
    //             </a>
    //           </div>
    //           <SocialIcons />
    //           <div className="text-white bg-[#171717]">
    //             <select
    //               name="season"
    //               defaultValue="option1"
    //               className="flex gap-2 text-lg items-center mb-2 bg-[#171717] outline-none"
    //             >
    //               {seasons.map((ss) => (
    //                 <option key={ss} value={`option${ss}`}>
    //                   <span>Season {ss}</span>
    //                   <AiFillCaretDown />
    //                 </option>
    //               ))}
    //             </select>
    //             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-2 cursor-pointer">
    //               {episodes.map((eps: any) => (
    //                 <div
    //                   className="py-3 lg:p-2 px-[10px] flex  bg-[#1c1c1c] items-center gap-2"
    //                   key={eps}
    //                 >
    //                   <i>
    //                     <AiFillCaretRight />
    //                   </i>
    //                   <span>
    //                     Eps {eps.episode_number}: {eps.name}
    //                   </span>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //           <div className="py-4 px-8 flex flex-col gap-2 bg-[rgba(255,255,255,.05)]  rounded-md">
    //             <p className="text-center text-white">
    //               If current server doesn't work please try other servers below.
    //             </p>
    //             <div className="  gap-4 flex justify-evenly flex-wrap">
    //               <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
    //                 <i>
    //                   <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
    //                 </i>
    //                 <div>
    //                   <p className="text-[#ccc]">Sever</p>
    //                   <p className="text-white">Vidcloud</p>
    //                 </div>
    //               </div>
    //               <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
    //                 <i>
    //                   <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
    //                 </i>
    //                 <div>
    //                   <p className="text-[#ccc]">Sever</p>
    //                   <p className="text-white">Vidcloud</p>
    //                 </div>
    //               </div>
    //               <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
    //                 <i>
    //                   <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
    //                 </i>
    //                 <div>
    //                   <p className="text-[#ccc]">Sever</p>
    //                   <p className="text-white">Vidcloud</p>
    //                 </div>
    //               </div>
    //               <div className="rounded-md p-2 bg-[rgba(255,255,255,.05)] flex gap-2 items-center">
    //                 <i>
    //                   <BsFillPlayFill style={{ color: 'white', fontSize: '24px' }} />
    //                 </i>
    //                 <div>
    //                   <p className="text-[#ccc]">Sever</p>
    //                   <p className="text-white">Vidcloud</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <p className="text-white text-2xl">You may also like</p>
    //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
    //             {similarMovies?.map((movie: Movie, index: number) => (
    //               <MovieCards mediaType={tvDetails.media_type} movie={movie} key={index} />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </>
    <Watch
      data={tvDetails}
      id={id}
      type="tv"
      isLoading={isLoading}
      similarMovies={similarTv}
      seasons={seasons}
      episodesSS1={episodesSS1}
    />
  );
};

export default TvShowsPage;
