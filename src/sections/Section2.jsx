import React from "react";
import { section2 } from "../constants";
import ParagraphCard from "../components/ParagraphCard";

const Section2 = () => {
  return (
    <section id="section2" className="max-container max-sm:mt-8">
      <div className="border-2 border-blue-700 flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold font-palanquin">How Stitch works</h2>
        <div className="flex lg:flex-row sm:flex-col ">
          {section2.map((paragraph) => (
            <ParagraphCard
              key={paragraph.title}
              {...paragraph}
              className="justify-between"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
