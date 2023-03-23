import React from "react";
import Abouts from "../../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div class="sm:flex items-center max-w-screen-xl mt-10 mb-10">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src={Abouts} alt="" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-black-600 uppercase">About Us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About Our Rickshaw Reselling</h2>
            <p class="text-gray-700">Easily get requirements from businesses and individual buyers for Auto Rickshaw . Register and start selling Auto Rickshaw to millions of buyers .</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
