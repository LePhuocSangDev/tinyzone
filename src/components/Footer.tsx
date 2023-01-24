import React from 'react';

const Footer = () => {
  return (
    <div className="text-white text-center">
      <ul className=" flex justify-center flex-wrap">
        <li className="p-4 text-l">
          <a href="">Android App</a>
        </li>
        <li className="p-4 text-l">
          <a href="">Terms of Service</a>
        </li>
        <li className="p-4 text-l">
          <a href="">Contact</a>
        </li>
        <li className="p-4 text-l">
          <a href="">Sitemap</a>
        </li>
        <li className="p-4 text-l">
          <a href="">9anime</a>
        </li>
      </ul>
      <p className="text-gray-500 text-xs mx-8 ">
        TinyZone is a Free Movies streaming site with zero ads. We let you watch movies online
        without having to register or paying, with over 10000 movies and TV-Series. You can also
        Download full movies from MoviesCloud and watch it later if you want.
      </p>
      <p className="text-xs py-4">© TinyZone</p>
    </div>
  );
};

export default Footer;
