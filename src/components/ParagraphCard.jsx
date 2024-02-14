import React from "react";

const ParagraphCard = ({ title, content }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <p className="text-gray-600 font-montserrat lg:max-w-[220px]">
        <span className="font-bold">{title}</span>
        {content}
      </p>
    </div>
  );
};

export default ParagraphCard;
