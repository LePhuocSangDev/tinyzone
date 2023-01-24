import Watch from '../../Watch';

const TrailerPage = async ({ params }: { params: { id: string } }) => {
  const isLoading = false;
  const { id } = params;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  const movie = await fetchData(
    `${BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const similarData = await fetchData(
    `${BASE_URL}/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const similarMovies = similarData.results;
  const trailerData = await fetchData(
    `${BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const trailer = trailerData.results;
  return (
    <Watch
      data={movie}
      id={id}
      type="movie"
      isLoading={isLoading}
      similarMovies={similarMovies}
      trailer={trailer}
    />
  );
};

export default TrailerPage;
