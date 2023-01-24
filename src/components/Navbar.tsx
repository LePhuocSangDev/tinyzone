'use client';

import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="nav flex justify-between fixed top-0 bg-[black] w-full h-[60px]">
      <div className="logo w-[30px] mx-8 my-2 flex items-center cursor-pointer ">
        <Link href="/">
          <Image className="w-full" src={Logo} alt="" />
        </Link>
      </div>

      <ul className="hidden md:flex items-center p-2">
        <li className="p-4 text-white text-l">
          <Link href="/Home">Home</Link>
        </li>
        <li className="p-4 text-white text-l">
          <a href="/">Movies</a>
        </li>
        <li className="p-4 text-white text-l">
          <a href="/">Tv Show</a>
        </li>
        <li className="p-4 text-white text-l">
          <a href="/">Top IMDB</a>
        </li>
      </ul>
      {/* mobile */}
      <div className="md:hidden relative menu flex items-center justify-center p-2 mr-5">
        <button
          className={`flex text-md bg-white p-1 rounded-sm items-center ${show && 'text-red-500'}`}
          onClick={handleShow}
        >
          Menu
          <AiOutlineMenu style={{ margin: '4px' }} />
        </button>
      </div>
      {show && (
        <ul className="md:hidden absolute top-[60px] w-[50%] right-[20px] p-2 bg-white text-center rounded-[5px] mr-2">
          <li className="p-4 text-l">
            <Link href="/Home">Home</Link>
          </li>
          <li className="p-4 text-l">
            <a href="/">Movies</a>
          </li>
          <li className="p-4 text-l">
            <a href="/">Tv Show</a>
          </li>
          <li className="p-4 text-l">
            <a href="/">Top IMDB</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
