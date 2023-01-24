import React from 'react';
import { AiFillHome, AiOutlineRocket, AiFillAndroid, AiOutlineArrowDown } from 'react-icons/ai';
import { TiVideo } from 'react-icons/ti';
import { MdLocalMovies } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="text-white col-span-2 hidden lg:block">
      <ul className=" text-lg flex gap-6 flex-col my-4">
        <li className="p-1 ">
          <a className="flex justify-center items-center text-l gap-2" href="/home">
            <AiFillHome /> Home
          </a>
        </li>
        <li className="p-1">
          <a className="flex justify-center items-center text-l gap-2" href="/home">
            <AiOutlineRocket /> Top IMDB
          </a>
        </li>
        <li className="p-1">
          <a className="flex justify-center items-center text-l gap-2" href="/home">
            <MdLocalMovies /> Movies
          </a>
        </li>
        <li className="p-1">
          <a className="flex justify-center items-center text-l gap-2" href="/home">
            <TiVideo /> TV Shows
          </a>
        </li>
        <li className="p-1">
          <a className="flex justify-center items-center text-l gap-2" href="/home">
            <AiFillAndroid /> Android App
          </a>
        </li>
      </ul>
      <div className="flex justify-between py-5 px-2 border-t border-t-[rgba(0,0,0,0.2)] items-center border-b border-b-[rgba(0,0,0,0.2)]">
        Genre <AiOutlineArrowDown style={{ cursor: 'pointer' }} />
      </div>

      <div className="flex justify-between px-2 items-center py-5 border-b border-b-[rgba(0,0,0,0.2)]">
        Country <AiOutlineArrowDown style={{ cursor: 'pointer' }} />
      </div>

      <div className="text-[#9e9b9b] pl-4 text-sm  my-4">
        <span>Terms of service</span>-<span>Contact</span>-<span>Sitemap</span>
        <p className="text-white">© 2020 TinyZone</p>
      </div>
    </div>
  );
};

export default Sidebar;
