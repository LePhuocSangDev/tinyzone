import React from 'react';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePlus,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="text-white flex p-4 text-lg lg:text-2xl my-2 justify-center">
      <a href="/" className="p-1 ml-2 bg-[#1da1f2] ">
        <AiOutlineTwitter />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#3b5998]">
        <AiFillFacebook />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#4dc247]">
        <AiOutlineWhatsApp />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#0088cc]">
        <FaTelegram />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#848484]">
        <AiOutlineMail />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#dbaf1d]">
        <AiFillInstagram />
      </a>
      <a href="/" className="p-1 ml-2 bg-[#ff6550]">
        <AiOutlinePlus />
      </a>
    </div>
  );
};

export default SocialIcons;
