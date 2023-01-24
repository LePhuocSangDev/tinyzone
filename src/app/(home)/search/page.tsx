import Movies from '@/components/Movies';
import React from 'react';

const page = async ({ searchParams }: { searchParams: any }) => {
  const query = searchParams.q.toLowerCase();

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
    );
    const data = res.json();
    return data;
  };
  const data = await fetchData();
  const searchResults = data.results;
  console.log(searchResults);
  return <Movies hasTypeof data={searchResults} />;
};

export default page;
