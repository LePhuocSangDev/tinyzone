'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Movie } from 'typings';

interface Props {
  movie: Movie;
  mediaType?: string;
  size?: string;
}

const MovieCards = ({ movie, mediaType, size }: Props) => {
  const [show, setShow] = useState(false);
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
        } hover:opacity-60 cursor-pointer`}
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
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt="/"
            width="300"
            height="500"
          />
        </div>
        <div>
          <h4 className="text-white font-[600] text-md lg:py-2">
            {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
          </h4>
          <div className="text-[#aaa] text-[12px] lg:text-sm flex items-center">
            <span className="p-1 border-white border rounded-[3px] mx-1">HD</span>
            <span className="mx-2 text-2xl ">&#8226;</span>
            <span className="p-1 rounded-sm text-black bg-[#ffc107]">
              {movie.vote_average?.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCards;
