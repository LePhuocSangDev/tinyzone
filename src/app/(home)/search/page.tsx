import Movies from '@/components/Movies';
import { NextPage } from 'next';
import React from 'react';
interface SearchParams {
  q?: string;
}
interface Props {
  searchParams?: SearchParams;
}
const SearchPage = async ({ searchParams }: Props) => {
  const query = searchParams?.q?.toLowerCase();

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
    );
    const data = res.json();
    return data;
  };
  const data = await fetchData();
  const searchResults = data.results;
  return <Movies hasTypeof data={searchResults} />;
};

export default SearchPage;
