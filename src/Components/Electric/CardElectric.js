import React from "react";
import { Link } from "react-router-dom";
import Electric1 from "../../assets/electric1.png";
import Electric2 from "../../assets/electric2.png";
import Electric3 from "../../assets/electric3.png";
import Electric4 from "../../assets/electric4.png";

const CardElectric = () => {
  return (
    <div>
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Electric Rickshaw Reselling</h1>
      </div>

      <section id="Projects" class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={Electric1} alt="Product" class="h-60 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <p class="text-lg font-bold text-black truncate block capitalize">Electric Rickshaw</p>
              <p className="mb-4  text-lg">
                Original Price: 70K
                <br />
                Sell Price:40K
                <br />
                Post Date: 15 Jan 2023
                <br />
                Used time: 2 Year
                <br />
                Location: Sylhet
                <br />
                Seller Name: Rakib Islam
                <br />
                Mobile: 017123456789
              </p>
            </div>
          </Link>
          <div>
            <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg  mb-5 ml-5">
              Start Chat Seller
            </Link>
          </div>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={Electric2} alt="Product" class="h-60 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <p class="text-lg font-bold text-black truncate block capitalize">Electric Rickshaw</p>
              <p className="mb-4  text-lg">
                Original Price: 70K
                <br />
                Sell Price:30K
                <br />
                Post Date: 25 Jan 2023
                <br />
                Used time: 1Year
                <br />
                Location: Dhaka
                <br />
                Seller Name: Rahul Khan
                <br />
                Mobile: 017123456789
              </p>
            </div>
          </Link>
          <div>
            <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg  mb-5 ml-5">
              Start Chat Seller
            </Link>
          </div>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={Electric3} alt="Product" class="h-60 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <p class="text-lg font-bold text-black truncate block capitalize">Electric Rickshaw</p>
              <p className="mb-4  text-lg">
                Original Price: 100K
                <br />
                Sell Price:80K
                <br />
                Post Date: 25 Jan 2023
                <br />
                Used time: 1Year
                <br />
                Location: Nabiganj
                <br />
                Seller Name: Dipu Ahmed
                <br />
                Mobile: 017123456789
              </p>
            </div>
          </Link>
          <div>
            <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg  mb-5 ml-5">
              Start Chat Seller
            </Link>
          </div>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={Electric4} alt="Product" class="h-60 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              <p class="text-lg font-bold text-black truncate block capitalize">Electric Rickshaw</p>
              <p className="mb-4  text-lg">
                Original Price: 79K
                <br />
                Sell Price:660K
                <br />
                Post Date: 25 Jan 2023
                <br />
                Used time: 1Year
                <br />
                Location: Habiganj
                <br />
                Seller Name: Foysal Ahmed
                <br />
                Mobile: 017123456789
              </p>
            </div>
          </Link>
          <div>
            <Link href="#" className="inline-flex text-black  border-2 py-2 px-6 focus:outline-none hovertext-white hover:bg-black rounded hover:text-white text-lg  mb-5 ml-5">
              Start Chat Seller
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardElectric;
