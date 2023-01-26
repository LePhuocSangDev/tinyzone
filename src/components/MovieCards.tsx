'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Movie } from 'typings';
import notFound from '../assets/notFound.png';
interface Props {
  movie: Movie;
  mediaType?: string;
  size?: string;
}

const MovieCards = ({ movie, mediaType, size }: Props) => {
  const [show, setShow] = useState(false);
  const truncate = (str: string, limit: number) => {
    if (str.length >= limit) {
      // const newString: string = str.substring(0, limit);
      return str.slice(0, limit) + '...';
    } else {
      return str;
    }
  };
  return (
    // to handle if there might be no mediaType
    <Link
      href={`/watch${mediaType === 'movie' || !mediaType ? '/movie' : '/' + mediaType}/${
        movie?.id
      }`}
      className="block"
    >
      <div
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        className={`${
          size === 'lg' && 'w-[20vw] max-w-[240px] min-w-[190px]'
        } hover:opacity-60 cursor-pointer shadow-md shadow-black`}
      >
        {/* // Play button */}
        <div className="relative w-full h-full">
          <div
            className={`${
              !show && 'hidden'
            } w-[45px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[60px] text-white`}
          >
            <AiFillPlayCircle />
          </div>
          <Image
            className="w-full h-full object-cover"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                : notFound
            }
            alt="No image to show"
            width="300"
            height="500"
          />
        </div>
        <div className="h-[80px] flex flex-col justify-center pl-2">
          <h4 className="text-white font-[600] text-sm lg:py-2 ">
            {truncate(
              movie?.title || movie?.original_title || movie?.name || movie?.original_name,
              size === 'lg' ? 30 : 18
            )}
          </h4>
          <div className="text-[#aaa] text-[12px] lg:text-sm flex items-center justify-evenly">
            <span className="px-1 text-sm border-white border rounded-[3px] mx-1">HD</span>
            <span className="mx-2 text-2xl ">&#8226;</span>
            <span className="px-[2px] py-[1px] text-sm rounded-sm text-black bg-[#ffc107]">
              {movie.vote_average?.toFixed(1)}
            </span>
            <span className="mx-2 text-2xl ">&#8226;</span>
            <span className="capitalize px-1 text-sm border-white border rounded-[3px] mx-1">
              {mediaType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCards;
