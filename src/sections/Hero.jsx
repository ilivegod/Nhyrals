import React from "react";
import { navLinks } from "../constants";
import HeroLips from "../assets/HeroLips.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex xl:flex-row flex-col justify-center  w-full h-[90vh] gap-10"
    >
      <div className="flex flex-2 flex-col items-center justify-center md:top-[25%] w-full max-xl:padding-x absolute">
        <p className="text-center text-white font-bold text-5xl sm:text-6xl md:text-8xl  font-palanquin z-10">
          Personal styling <br /> for everybody
        </p>
        <p className="mt-5 font-montserrat text-xl sm:text-2xl md:text-3xl  text-white z-10">
          Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40s">
        <img
          src={HeroLips}
          alt="Hero image"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
