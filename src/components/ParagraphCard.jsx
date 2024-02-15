import React from "react";

const ParagraphCard = ({ title, content, isLast }) => {
  return (
    <div
      className={`flex flex-1 ${
        isLast ? "" : "border-r border-gray-300"
      } flex-col w-full max-sm:w-full`}
    >
      <p className="text-gray-600 font-montserrat lg:max-w-[800px] sm:max-w-[1000px] text-center text-wrap leading-7">
        <span className="font-bold text-black">{title}</span> {content}
      </p>
    </div>
  );
};

export default ParagraphCard;
