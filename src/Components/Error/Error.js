import React from "react";
import { Link } from "react-router-dom";
import Errors from "../../assets/error.jpg";

const Error = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 ">
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div class="text-left">
            <h2 class=" font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">Sorry couldn't page.</h2>

            <div class="mt-5 sm:flex md:mt-8">
              <div class="rounded-md shadow">
                <Link to={"/"} class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                  Home
                </Link>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to={"/"} class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-green-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-green-600 focus:outline-none focus:shadow-outline-green md:py-4 md:text-lg md:px-10">
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg bg-white text-black w-full">
              <img src={Errors} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
