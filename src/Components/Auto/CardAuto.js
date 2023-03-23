import React from "react";
import { Link } from "react-router-dom";
import Auto1 from "../../assets/auto1.png";
import Auto2 from "../../assets/auto2.png";
import Auto3 from "../../assets/auto3.png";

const CardAuto = () => {
  return (
    <div>
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl  leading-none md:text-3xl text-gray border-b border-transparent border-green-600 font-bold ">Auto Rickshaw Reselling</h2>
          <Link href="#" className="block pb-1 mt-2 text-base uppercase border-b border-transparent  font-bold underline ">
            See All Auto
          </Link>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={Auto1} alt="Card img" className="object-cover object-center w-11/12 h-9/12" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <Link href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                    Auto Rickshaw
                  </Link>
                  <Link href="#" className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600">
                    1 Year Use Rickshaw Reselling
                  </Link>
                  <p className="mb-4  text-lg">
                    Original Price: 60K
                    <br />
                    Sell Price:50K
                    <br />
                    Post Date: 1 Jan 2023
                    <br />
                    Used time: 1Year
                    <br />
                    Location: Nabiganj
                    <br />
                    Seller Name: Joy Miah
                    <br />
                    Mobile: 017123456789
                  </p>
                </div>
                <div>
                  <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={Auto2} alt="Card img" className="object-cover object-center w-11/12 h-9/12" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                    Auto Rickshaw
                  </Link>
                  <Link href="#" className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600">
                    2Year Use Rickshaw Reselling
                  </Link>
                  <p className="mb-4  text-lg">
                    Original Price: 90K
                    <br />
                    Sell Price:70K
                    <br />
                    Post Date: 15 Jan 2023
                    <br />
                    Used time: 2Year
                    <br />
                    Location: Habiganj
                    <br />
                    Seller Name: Afif Miah
                    <br />
                    Mobile: 017123456789
                  </p>
                </div>
                <div>
                  <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={Auto3} alt="Card img" className="object-cover object-center w-11/12 h-9/12" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <Link href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                    Auto Rickshaw
                  </Link>
                  <Link href="#" className="block mb-4 text-xl font-black leading-tight hover:underline hover:text-blue-600">
                    1 Year Use Rickshaw Reselling
                  </Link>
                  <p className="mb-4  text-lg">
                    Original Price: 100K
                    <br />
                    Sell Price:800K
                    <br />
                    Post Date: 25 Jan 2023
                    <br />
                    Used time: 1Year
                    <br />
                    Location: Nabiganj
                    <br />
                    Seller Name: Dipu
                    <br />
                    Mobile: 017123456789
                  </p>
                </div>
                <div>
                  <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardAuto;
