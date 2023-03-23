import React from "react";

const Footer = () => {
  return (
    <div>
      {/* This is footer start */}
      <div className="bg-gray-900 text-white pt-10 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6   flex-wrap  flex justify-between">
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Home</div>
            <a className="my-3 block" href="/#">
              Services <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              About Us <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Pricing <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Partners <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Services</div>

            <a className="my-3 block" href="/#">
              Auto Rickshaw<span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Electric Rickshaw <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Solar Rickshaw <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Modern Cycle Rickshaw <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Support</div>

            <a className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Contact us</div>

            <a className="my-3 block" href="/#">
              0171 123 4567, Floor 4 San Dhaka, BD
              <span className="text-teal-600 text-xs p-1"></span>
            </a>

            <a className="my-3 block" href="/#">
              contact@alimotors.com
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>
      {/* <div classNameName="footer footer-center p-4 bg-gray-900 text-white text-center">
        <p>Copyright © 2023 - Design by Fayjul Islam Al Imran.</p>
      </div> */}
    </div>
  );
};

export default Footer;
