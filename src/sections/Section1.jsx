import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";

const Section1 = () => {
  return (
    <section id="Section1" className="max-container max-sm:mt-12">
      <div className="border-2 border-red-500 flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold font-palanquin">
          We'll find style for your life
        </h2>
        <p className="lg:max-w-[650px] text-base mt-1 font-montserrat text-gray-500 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          totam maxime aliquid eius, cupiditate nihil nostrum, fugit tempora ab
          minima non neque molestias. A.
        </p>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <PopularProductsCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
