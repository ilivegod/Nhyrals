import React from "react";

const ProductsCard = ({ imgURL }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="pictures" className="w-[250px] h-[350px]" />
    </div>
  );
};

export default ProductsCard;
