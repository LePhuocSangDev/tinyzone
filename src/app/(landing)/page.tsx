import React from 'react';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://img.wallpapersafari.com/desktop/1280/1024/24/74/zgeTuV.jpg')] bg-cover bg-no-repeat bg-center object-contain h-screen text-center">
        <div className=" h-screen bg-black bg-opacity-80 flex justify-center items-center flex-col">
          <div className="flex flex-col   items-center mt-10">
            <Image className="w-[80px] m-4" src={Logo} alt="" />
            <h2 className="text-2xl text-white p-4 font-extrabold">TinyZone</h2>
          </div>
          <Search type="landing search" />
          <SocialIcons />
          <Link
            href="/home"
            className="text-white flex items-center justify-center rounded-[32px] bg-[#d41f1c] font-bold px-12 min-w-[90%] md:min-w-[250px] py-4"
          >
            <span className="">View Full Site</span>
            <AiOutlineArrowRight
              style={{
                backgroundColor: 'white',
                borderRadius: '4px',
                color: '#d41f1c',
                marginLeft: '16px',
              }}
            />
          </Link>
        </div>
      </div>
      <div className="text-white mx-2 my-4">
        <p>
          Tinyzone is the best one could ask for when it comes to free online movies streaming
          sites. We offer hundreds of thousands of free movies and TV shows in 1080p and 720p, with
          multiple subtitles and fast loading speed. As the site is mobile-friendly and Chromecast
          supported, Tinyzone can be your companion no matter where you are, which device you use,
          and when the mood strikes you.
        </p>
        <p>
          At Tinyzone, users come first. Therefore, please rest assured that there be any fraud or
          clickbait, and your requests and messages will all be appreciated.
        </p>
        <h2 className="font-extrabold pt-4">What is Tinyzone</h2>
        <p>
          Tinyzone is the place to go when you are looking for free movies and TV shows to watch.
          Whatever you can ask from a free streaming site, you can find it at Tinyzone. We have an
          extensive content library, HD resolution, English and Spanish subtitles, seamless
          streaming, and other outstanding features, to make sure you can get a premium watching
          experience at Tinyzone without having to pay a dime.
        </p>
        <h2 className="font-extrabold pt-4">Watch Movies online free on Tinyzone</h2>
        <p>
          We host a huge collection of movies and TV shows with up to 25,000 titles in 1080p and
          720p. All of them are completely free to access without any account or registration
          needed. Your experience can be simple and painless. You only need to give the website a
          visit, search for a movie to watch, hit the Play button, enjoy the content, and leave as
          you please. All you need is the Internet, a device, and your interest to indulge yourself
          in the cinematic world.
        </p>
        <h2 className="font-extrabold pt-4">Is Tinyzone Safe? Is it Legal to use Tinyzone?</h2>
        <p>
          Tinyzone is a safe place to stream movies and TV shows online and you can make it safer by
          having your VPN and AdBlock on. You can stay completely anonymous while visiting the site
          by leaving no name, email, credit card number, and even IP address. At Tinyzone, you can
          let the guard down and enjoy our content without worries.
        </p>
        <h2 className="font-extrabold pt-4">Tinyzone Proxy sites?</h2>
        <p>
          Tinyzone has no Proxy site now. Please be aware of fake sites, they try to be us but they
          us! To stay updated for the news about proxy site, please follow our Twitter page.
        </p>
        <h2 className="font-extrabold pt-4">Why Tinyzone should be your movies streaming site?</h2>
        <ol className="ml-8 my-4" type="1" start={1}>
          <li>1. Safety</li>
          <li>2. Amazing user-interface</li>
          <li>3. Impressive content library</li>
          <li>4. Streaming experience</li>
          <li>5. Device compatibility</li>
          <li>6. Ads and popups</li>
          <li>7. Great customer care</li>
        </ol>
        <p>
          If you are happy with our service, please help us spread the words and let your friends
          know about Tinyzone too. Thank you!
        </p>
        <Link
          href="home"
          className="text-white flex items-center justify-center rounded-[32px] bg-[#d41f1c] font-bold px-12 min-w-[90%] md:min-w-[250px] py-4 m-auto mt-8"
        >
          <span className="">Go to TinyZone</span>
          <AiOutlineArrowRight
            style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              color: '#d41f1c',
              marginLeft: '16px',
            }}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
