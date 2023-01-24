'use client';

import MovieCards from '@/components/MovieCards';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Movie } from 'typings';

const TopRated = ({ data }: { data: Movie[] }) => {
  const handleNext = () => {
    const slider = document.getElementById('slider');
    slider && (slider.scrollLeft = slider.scrollLeft + 500);
  };
  const handlePrev = () => {
    const slider = document.getElementById('slider');
    slider && (slider.scrollLeft = slider.scrollLeft - 500);
  };
  return (
    <div>
      <h2 className="text-xl font-extrabold text-white my-4">Top Rated</h2>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute top-[50%] left-[10px] translate-y-[-50%] z-10"
        >
          <AiOutlineArrowLeft
            style={{
              color: 'white',
              fontSize: '35px',
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}
          />
        </button>
        <div
          className="flex overflow-x-scroll scroll-smooth container hidden-x-scrollbar"
          id="slider"
        >
          {data.map((movie: Movie, index: number) => (
            <MovieCards mediaType={movie?.media_type || ''} key={index} size="lg" movie={movie} />
          ))}
        </div>
        <button
          className="absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%]"
          onClick={handleNext}
        >
          <AiOutlineArrowRight
            style={{
              color: 'white',
              fontSize: '35px',
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TopRated;
