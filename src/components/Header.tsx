import { AiOutlineMenu } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import logo from '../assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';

import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

const Header = () => {
  return (
    <div className="h-[100px] px-2 text-white md:h-[50px] bg-[#1f1f1f] sticky top-0 right-0 left-0 z-10">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center relative">
          <button>
            <AiOutlineMenu style={{ margin: '4px' }} />
          </button>

          {/* <ul className="z-999 text-center md:top-[40px] absolute p-2 top-[90px] left-[-16px] bg-white w-[150px] rounded-[10px]">
            <li className="p-4 text-black text-l">
              <Link href="/Home">Home</Link>
            </li>
            <li className="p-4 text-black text-l">
              <a href="/">Movies</a>
            </li>
            <li className="p-4 text-black text-l">
              <a href="/">Tv Show</a>
            </li>
            <li className="p-4 text-black text-l">
              <a href="/">Top IMDB</a>
            </li>
          </ul> */}

          <Link href="/">
            <div className="logo w-[30px] mx-4 my-2 flex items-center cursor-pointer ">
              <Image className="w-full" src={logo} alt="" />
            </div>{' '}
          </Link>
        </div>
        <Search type="search header" />
        <Link href="/login" className="block">
          {/* <button className={`${'hidden'} flex items-center hover:opacity-60 `}>
            <CgProfile
              style={{
                marginRight: '8px',
              }}
            />
            Login
          </button> */}
          <button className={`flex items-center hover:opacity-60 `}>
            <CgProfile
              style={{
                marginRight: '8px',
              }}
            />
            Login
          </button>
        </Link>
        {/* <Link
          className={`${userInfo ? "flex" : "hidden"} items-center mr-2`}
          href="/profile"
        >
          <CgProfile
            style={{
              marginRight: '8px',
            }}
          />
          {userInfo?.username}
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
