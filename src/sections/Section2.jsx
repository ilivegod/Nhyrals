import React from "react";
import { section2 } from "../constants";
import ParagraphCard from "../components/ParagraphCard";

const Section2 = () => {
  return (
    <section id="section2" className="max-container ">
      <div className="border-2 border-gray-100 shadow-lg flex flex-col justify-center items-center gap-5 xl:py-11 xl:px-4 py-5">
        <h2 className="text-3xl font-bold font-palanquin">How Stitch works</h2>
        <div className="flex xl:flex-row flex-col xl:gap-[100px] gap-10  xl:mt-10 sm:mt-5">
          {section2.map((paragraph) => (
            <ParagraphCard
              key={paragraph.title}
              {...paragraph}
              className="flex flex-1 text-center"
            />
          ))}
        </div>
        <div className="mt-3">
          <p className="text-gray-600 font-montserrat  text-center text-wrap leading-7">
            <span className="font-bold text-black">
              No subscription needed{" "}
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
