import React from "react";

const Sell = () => {
  return (
    <div>
      <section class="pt-10 mb-10">
        <section>
          <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
            <div class="flex w-full mx-auto text-left">
              <div class="relative inline-flex items-center mx-auto align-middle">
                <div class="text-center">
                  <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">Reselling your rickshaw own sell post🚀</h1>
                  <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">Buy the rickshaws you need and sell the rickshaws you don't need.</p>
                  <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                    <div class="mt-3 rounded-lg sm:mt-0">
                      <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-black lg:px-10 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 ">Get Post</button>
                    </div>
                    <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Sell;
