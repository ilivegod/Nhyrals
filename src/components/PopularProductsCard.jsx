import React from "react";

const PopularProductsCard = ({ imgURL, name, description }) => {
  return (
    // <div className="flex flex-1 flex-col w-full max-sm:w-full">
    //   <img src={imgURL} alt={name} className="w-[335px] h-[360px]" />
    //   <div className="border-1 bg-black border-white py-2 px-1 flex flex-1 relative bottom-20">
    //     <p className="text-white">{name}</p>
    //   </div>
    // </div>

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div href="#">
        <img src={imgURL} alt="image" className="rounded-lg" />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more →
          {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
        </a>
      </div>
    </div>
  );
};

export default PopularProductsCard;
