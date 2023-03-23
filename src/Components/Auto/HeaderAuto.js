import React from "react";
import Auto from "../../assets/auto.png";

const HeaderAuto = () => {
  return (
    <div>
      <div className="hero mt-20 mb-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Auto} className="lg:w-2/5 rounded-lg shadow-2xl" alt="" />
          <div className="lg:w-6/12 lg:ml-5">
            <h1 className="text-5xl font-bold">Auto Rickshaw!</h1>
            <p className="py-6 text-justify ">The auto rickshaw is a common form of transport around the world, both as a vehicle for hire and for private use. They are especially common in countries with tropical or subtropical climates, since they usually are not fully enclosed, and are found in many developing countries because they are relatively inexpensive to own and operate. </p>
            <button className="inline-flex text-white  border-2 py-2 px-6 focus:outline-none hover:bg-white rounded hover:text-black text-lg mr-2 bg-black">Find Auto</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAuto;
