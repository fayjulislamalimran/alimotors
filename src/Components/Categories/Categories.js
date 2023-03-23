import React from "react";
import { Link } from "react-router-dom";
import Cat1 from "../../assets/cat1.png";
import Cat2 from "../../assets/cat2.png";
import Cat3 from "../../assets/cat3.png";
import Cat4 from "../../assets/cat4.jpg";

const Categories = () => {
  return (
    <div>
      <div data-aos="fade-up" class="container relative z-40 mx-auto mt-12">
        <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          <Link href="#" class="block w-1/2 py-10 text-center bg-white border lg:w-1/4 border-grey-lighter group category hover:bg-gradient-to-l from-green-bright to-green from relative overflow-hidden">
            <div>
              <img src={Cat1} alt="category icon on hover" class="block mx-auto icon-small" />
              <div>
                <p class="pt-4 text-sm font-medium capitalize font-body text-green-darkest lg:text-lg md:text-base md:pt-6">Auto Rickshaw</p>
              </div>
            </div>
          </Link>

          <Link href="#" class="block w-1/2 py-10 text-center bg-white border lg:w-1/4 border-grey-lighter group category hover:bg-gradient-to-l from-green-bright to-green from relative overflow-hidden">
            <div>
              <img src={Cat2} alt="category icon on hover" class="block mx-auto icon-small" />
              <div>
                <p class="pt-4 text-sm font-medium capitalize font-body text-green-darkest lg:text-lg md:text-base md:pt-6">Electric Rickshaw</p>
              </div>
            </div>
          </Link>

          <Link href="#" class="block w-1/2 py-10 text-center bg-white border lg:w-1/4 border-grey-lighter group category hover:bg-gradient-to-l from-green-bright to-green from relative overflow-hidden">
            <div>
              <img src={Cat4} alt="category icon on hover" class="block mx-auto icon-small" />
              <div>
                <p class="pt-4 text-sm font-medium capitalize font-body text-green-darkest lg:text-lg md:text-base md:pt-6">Solar Rickshaw</p>
              </div>
            </div>
          </Link>

          <Link href="#" class="block w-1/2 py-10 text-center bg-white border lg:w-1/4 border-grey-lighter group category hover:bg-gradient-to-l from-green-bright to-green from relative overflow-hidden">
            <div>
              <img src={Cat3} alt="category icon on hover" class="block mx-auto icon-small" />
              <div>
                <p class="pt-4 text-sm font-medium capitalize font-body text-green-darkest lg:text-lg md:text-base md:pt-6">Modern Cycle Rickshaw</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
