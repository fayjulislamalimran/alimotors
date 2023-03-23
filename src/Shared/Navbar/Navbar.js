import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase  ">AliMotors</span>
          </Link>
          <div className="flex md:order-2">
            <button type="button" className=" rounded-lg inline-flex text-white  border-2 py-2 px-6 focus:outline-none hover:bg-white  hover:text-black text-lg mr-2 bg-black ">
              Post FREE AD
            </button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/"} className="block py-2 pl-3 pr-4   md:bg-transparent text-gray-700  md:p-0 dark:text-white uppercase border-b-2 border-gray-50  " aria-current="page">
                  Home
                </Link>
              </li>

              <li>
                <Link to={"/about"} className="block py-2 pl-3 pr-4 text-gray-700   md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 uppercase border-b-2 border-gray-50 ">
                  About us
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="block py-2 pl-3 pr-4 text-gray-700   md:hover:bg-transparent md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 uppercase border-b-2 border-gray-50 ">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to={"/signin"} className="block py-2 pl-3 pr-4 text-gray-700   md:hover:bg-transparent md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 uppercase border-b-2 border-gray-50">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to={"/signup"} className="block py-2 pl-3 pr-4 text-gray-700   md:hover:bg-transparent md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 uppercase border-b-2 border-gray-50 ">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
