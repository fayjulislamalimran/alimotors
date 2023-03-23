import React from "react";
import { Link } from "react-router-dom";
import Electric from "../../assets/electric.png";

const HeaderElectric = () => {
  return (
    <div data-aos="fade-up">
      <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">Electric Rickshaw</h1>

            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300 text-justify">To ensure complete ease and convenience of your journey on the road, our electric vehicle and e-rickshaw batteries are reliable and long-lasting.</p>
            <div className="flex justify-center">
              <Link href="#" className="inline-flex text-white  border-2 py-2 px-6 focus:outline-none hover:bg-white rounded hover:text-black text-lg mr-2 bg-black">
                Read Articles
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img className="object-cover object-center rounded" alt="hero" src={Electric} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderElectric;
