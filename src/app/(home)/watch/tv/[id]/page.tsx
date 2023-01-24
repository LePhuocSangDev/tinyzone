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
    <Watch
      data={tvDetails}
      id={id}
      type="tv"
      isLoading={isLoading}
      similarMovies={similarTv}
      seasons={seasons}
    />
  );
};

export default TvShowsPage;
