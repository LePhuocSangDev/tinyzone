'use client';

import Movies from '@/components/Movies';
import { useQueryStore } from '@/app/zustand/store';
import React, { useEffect, useState } from 'react';

const SearchPage = () => {
  const query = useQueryStore.getState().query;
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
      );
      const data = await res.json();
      setSearchResults(data.results);
    };
    fetchData();
  }, [query]);

  return <Movies hasTypeof data={searchResults} />;
};

export default SearchPage;
