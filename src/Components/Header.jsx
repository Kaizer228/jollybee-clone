import React from "react";
import Jollybee from "../assets/jl.webp";
import JollybeeHome from "../assets/bg.png";

function Header() {
  return (
    <>
      <div className=" sticky bg-[#D6001C] h-25">
        <img src={Jollybee} alt="" className="w-60 absolute top-4 left-80 " />
        <ul className="flex gap-10 absolute left-96 top-9 text-xl text-white font-bold">
          <li className="my-1">
            <a href="">Delivery</a>
          </li>
          <li className="my-1">
            <a href="">Location</a>
          </li>

          <li className="my-1">
            <a href="">Menu</a>
          </li>
          <li className="my-1">
            <a href="">Promotion</a>
          </li>
          <button className="bg-[#fa8003] rounded-full text-xl  h-21 w-40 p-2 font-extrabold mb-12 shadow-lg shadow-gray-500/50
           hover:bg-[#FF620F]">
            Order Now
          </button>
        </ul>
        <hr className="border-[#D6001C]" />
        <div
          className="mt-28 h-128 max-w-10xl bg-cover bg-center relative"
          style={{ backgroundImage: `url(${JollybeeHome})` }}
        >
          <div className="absolute top-20 left-60 text-white text-center">
            <h1 className=" text-6xl font-bold w-64 mt-14  mb-7">Bringing joy to you</h1>
            <h3 className="text-4xl font-bold w-64 mb-7 ">
              Have your Jollibee favorites delivered right to your doorstep! 
            </h3>
            <button className="mt-4 bg-[#fa8003] text-[30px] text-white font-extrabold py-2 px-4 rounded-full h-[70px] w-[220px] shadow-lg 
            hover:shadow-gray-700 text-lg hover:bg-[#FF620F]">
              Order Now 
            </button>
          </div>
          <hr className="border-[#fa8003] border-b-8" />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Header;
