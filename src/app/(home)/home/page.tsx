import Loader from '@/components/Loader/Loader';
import Movies from '@/components/Movies';
import SocialIcons from '@/components/SocialIcons';
import requests from '@/utils/requests';
import { GoBroadcast } from 'react-icons/go';
import TopRated from './TopRated';

const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};

const Page = async () => {
  const isLoading = false;
  const topRatedMovies = await fetchData(requests.fetchTopRated);
  const trendingMovies = await fetchData(requests.fetchTrending);
  const newTvShows = await fetchData(requests.fetchNetflixOriginals);
  const actionMovies = await fetchData(requests.fetchActionMovies);
  console.log(newTvShows);
  return (
    <>
      {' '}
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" col-span-12 md:col-span-10 p-4">
          <div className="flex flex-col lg:flex-row items-center bg-[#333] p-4 text-sm">
            <div className="mx-2 text-8xl">
              <GoBroadcast />
            </div>
            <div className="pt-4 lg:pt-0">
              <p>
                Tinyzone is a Free Movies Streaming site with following feature : <br />- Free hd
                movies streaming in 1080p and 720p. - English and Spanish subtitles supported.{' '}
                <br /> - Watch movies online and Free movies streaming for REAL. <br /> 123movies or
                fmovies used to be a really good choice but now they give too much buffering, so if
                you need a better place to stream movies in high speed streaming, try tinyzonetv. We
                have over 250000 videos in our database, all come with both English and Spanish
                subtitles, and most interesting thing is you can stream hd movies with no account
                required. Enjoy your favorite movies and shows now with just one click on Tinyzone
                now.
                <span className="text-[#aaa]">
                  watch it romantic online free, the dark knight online free, watch mean girls
                  online free, watch cars online free, watch white chicks online free, watch fyre
                  fraud online free
                </span>
              </p>
            </div>
          </div>
          <SocialIcons />
          <TopRated data={topRatedMovies} />
          <Movies caption="Trending" hasTypeof={true} data={trendingMovies} />
          <Movies caption="Top Rated TV Shows" data={newTvShows} type="tv" />
          <Movies caption="Action movies" type="movie" data={actionMovies} />
        </div>
      )}
    </>
  );
};

export default Page;
