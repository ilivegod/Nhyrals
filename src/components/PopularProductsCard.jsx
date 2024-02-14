import React from "react";

const PopularProductsCard = ({ imgURL, name }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[335px] h-[360px]" />
      <div className="border-2 bg-black border-white py-2 px-1">
        <p className="text-white">{name}</p>
      </div>
    </div>
  );
};

export default PopularProductsCard;
