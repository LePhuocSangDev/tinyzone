'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ type }: { type: string }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      {type === 'search header' ? (
        <div className=" w-full flex px-2">
          <input
            className="w-full p-1 rounded-l-[4px] border-none outline-none bg-[#121212]"
            placeholder="Enter keywords"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            href={`/search?q=${searchQuery}`}
            className="text-white px-6 py-2 bg-[#4d4c4b] rounded-r-[4px] cursor-pointer "
          >
            <AiOutlineSearch />
          </Link>
        </div>
      ) : (
        <div className="w-[90%] flex ">
          <input
            className="w-full p-2 rounded-l-[4px] border-none outline-none"
            placeholder="Enter keywords"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            href={`/search?q=${searchQuery}`}
            className="text-white px-6 py-2 bg-[#d41f1c] flex items-center rounded-r-[4px] font-bold "
          >
            <AiOutlineSearch />
          </Link>
        </div>
      )}
    </>
  );
};

export default Search;
