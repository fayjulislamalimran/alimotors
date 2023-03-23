import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <section class="pt-10 pb-10 text-gray-600 body-font bg-gray-50 dark:bg-slate-900">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal"> Rickshaw Reselling</h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">Buy the rickshaws you need and sell the rickshaws you don't need.</p>
            <div class="flex justify-center">
              <Link href="#" class="inline-flex text-white  border-2 py-2 px-6 focus:outline-none hover:bg-white rounded hover:text-black text-lg mr-2 bg-black">
                Start Sell
              </Link>
              <Link href="#" class="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg">
                Start Buy
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src={Hero1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
