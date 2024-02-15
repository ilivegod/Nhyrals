import React from "react";
import { products2 } from "../constants";
import ProductsCard from "../components/ProductsCard";

const Section3 = () => {
  return (
    <section id="section3" className="max-container">
      <div className="border-2 border-purple-600 flex flex-col justify-center items-center xl:gap-2 gap-5  ">
        <h2 className="text-3xl font-bold font-palanquin">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-gray-600 font-montserrat  text-center text-wrap">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          consequuntur ratione modi animi cupiditate?
        </p>
        <div className="mt-6 grid lg:grid-cols-8 md:grid-cols-3 grid-cols-1 gap-6 xl:gap-2 ">
          {products2.map((product) => (
            <ProductsCard key={product.imgURL} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
