'use client';

import React, { useEffect, useState } from 'react';
import { Movie } from 'typings';
import MovieCards from './MovieCards';

interface Props {
  caption?: string;
  hasTypeof?: boolean;
  type?: string;
  data?: Movie[];
}

const Movies = ({ caption, hasTypeof, data, type }: Props) => {
  const [typeMovie, setTypeMovie] = useState(true);
  const [typeTvShow, setTypeTvShow] = useState(false);
  const movies = data?.filter((movie: Movie) => movie.media_type === 'movie');
  const tvShows = data?.filter((movie: Movie) => movie.media_type === 'tv');

  const handleType = () => {
    setTypeMovie((prevTypeMovie) => !prevTypeMovie);
    setTypeTvShow((prevTypeTvShow) => !prevTypeTvShow);
  };

  const handleRender = () => {
    if (hasTypeof && typeMovie) {
      return movies?.map((movie: Movie, index: number) => (
        <MovieCards mediaType={movie?.media_type || type} key={index} movie={movie} />
      ));
    } else if (hasTypeof && typeTvShow) {
      return tvShows?.map((movie: Movie, index: number) => (
        <MovieCards mediaType={movie?.media_type || type} key={index} movie={movie} />
      ));
    } else {
      return data?.map((movie: Movie, index: number) => (
        <MovieCards mediaType={movie?.media_type || type} key={index} movie={movie} />
      ));
    }
  };

  return (
    <div>
      <div className="my-4">
        <h2 className="inline text-2xl text-white font-bold text-">{caption}</h2>
        <div className={`${hasTypeof ? 'inline-block' : 'hidden'} mx-2`}>
          <button
            onClick={handleType}
            className={`px-2 ${typeMovie && 'bg-white text-black'} text-white`}
          >
            Movies
          </button>
          <button
            onClick={handleType}
            className={`h-full px-2 ${typeTvShow && 'bg-white text-black'} text-white`}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {handleRender()}
      </div>
    </div>
  );
};

export default Movies;
