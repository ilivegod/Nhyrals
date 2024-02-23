import React from "react";
import { navLinks } from "../constants";
import HeroLips from "../assets/HeroLips.jpg";
import makeUp from "../assets/darknew.jpg";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${makeUp})` }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold md:max-w-[600px] max-w-[300px] text-[#F5F5DC]">
            Nhyrals is the beeest in the world!!
          </h1>
          <p className=" md:text-xl mt-4 md:max-w-[600px] max-w-[300px] text-sm text-gray-400 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
            consequuntur sit tenetur cupiditate omnis distinctio ut recusandae
            neque quibusdam.
          </p>
          <div className="mt-8">
            <button className="bg-[#F5F5DC] text-black px-6 py-3 rounded-md mr-4 hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <button className="bg-gray-800 text-[#F5F5DC] px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
