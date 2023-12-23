import React from "react";
import Chicken from "../assets/chickenjoy.webp";
import Spag from "../assets/spag.webp";
import Burger from "../assets/burger.webp";
import Fam from "../assets/stand.webp";
import TakeOut from "../assets/fam.webp";
import line from "../assets/border.png";

function Menu() {
  return (
    <div className="bg-[#FFEAB8] h-[700px]">
      <div className="flex items-center mt-20 mx-8 flex-col">
        <h1 className="text-4xl font-bold mb-8 mt-16 text-[#212529] ">
          Featured Menu Items
        </h1>

        <div className="flex gap-8">
          <div className="h-[400px] w-[400px] flex flex-col items-start rounded-2xl bg-[#D6001C]">
            <h1 className="text-white text-4xl p-7 font-extrabold">
              Chicken Bucket
            </h1>
            <p className="text-white text-lg m-6 font-bold">
              Philippines' best-tasting crispylicious, juicylicious.
            </p>
            <img src={Chicken} className="ml-20" alt="" />
          </div>

          <div className="h-[400px] w-[400px] flex flex-col items-start rounded-2xl bg-[#FFA400]">
            <h1 className="text-white text-4xl  p-7 font-extrabold">
              Spaghetti Pan
            </h1>
            <p className="text-white text-lg m-6 font-bold">
              The meatiest, cheesiest, and sweet-sarap Jolly Spaghetti!
            </p>
            <img src={Spag} className="ml-12" alt="" />
          </div>

          <div className="h-[400px] w-[400px] flex flex-col items-start rounded-2xl bg-[#009CA6]">
            <h1 className="text-white text-4xl  p-7 font-extrabold">
              Yam Burger
            </h1>
            <p className="text-white text-lg m-6 font-bold">
              Your favorite 100% Beefy Langhap-Sarap Burgers.
            </p>
            <img src={Burger} className="ml-16" alt="" />
          </div>
        </div>

        <button className="bg-[#fa8003] rounded-full mt-16 text-gray-50 h-16 w-70 p-4 font-bold text-3xl mb-12 shadow-lg shadow-gray-500/50 hover:bg-[#FF620F]">
          View Menu
        </button>
      </div>
      <div></div>
      <div className="flex justify-center ml-40 mt-20 gap-60">
        <div>
          <div className="bg-[#fa8003] rounded-xl w-[219px] h-[218px]   ">
            <img
              src={Fam}
              className="flex justify-center absolute translate-x-[-30px] translate-y-[-30px] "
              alt=""
            />
          </div>
          <h1 className=" flex text-3xl font-extrabold mt-10 mr-60 justify-center text-[#212529]">
            What We Do
          </h1>
          <img src={line} className="w-[300px]" alt="" />
          <p className="flex w-[300px] text-start text-lg mt-5 mr-24">
            Jollibee's Mission is to serve great-tasting food, bringing the joy
            of eating to everyone.
          </p>
        </div>
        <div>
        <div className="bg-[#D6001C] rounded-xl  w-[219px] h-[218px]   ">
            <img
              src={TakeOut}
              className="flex justify-center absolute translate-x-[30px] translate-y-[-30px] "
              alt=""
            />
          </div>

          <h1 className="flex w-[290px]  font-extrabold text-3xl mt-10 text-[#212529]">
            What We Stand For
          </h1>
          <img src={line} className="w-[300px]" alt="" />
          <p className="flex w-[360px] text-start text-lg mt-5">
            Jollibee is a family-centric brand that promotes family values and
            togetherness and espouses Filipino pride.
          </p>
        </div>
      </div>
      <hr className="border-[#fa8003] mt-16 border-b-8" />
    </div>
  );
}

export default Menu;
