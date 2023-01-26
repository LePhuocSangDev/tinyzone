'use client';

import Movies from '@/components/Movies';
import { useQueryStore } from '@/app/zustand/store';
import React, { useEffect, useState } from 'react';
import { Movie } from 'typings';

const SearchPage = () => {
  const query = useQueryStore.getState().query;
  const [data, setData] = useState([]);
  const searchResults = data.filter(
    (result: Movie) => result?.media_type === 'tv' || result?.media_type === 'movie'
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
      );
      const fetchData = await res.json();
      setData(fetchData.results);
    };
    fetchData();
  }, [query]);

  return <Movies hasTypeof data={searchResults} />;
};

export default SearchPage;
