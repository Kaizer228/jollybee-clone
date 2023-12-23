import React from "react";
 
import pec1 from '../assets/1.webp';
import pec2 from '../assets/2.webp';
import pec3 from '../assets/3.webp';

function Promos() {
  return (
    <div className="flex flex-col items-center mt-20 mx-8">
    <h1 className="text-4xl font-bold mb-8">Exclusive Promos</h1>

    <div className="flex gap-8">
      <img src={pec1} alt="" className="w-[350px] h-[400px] rounded-2xl" />
      <img src={pec2} alt="" className="w-[350px] h-[400px] rounded-2xl" />
      <img src={pec3} alt="" className="w-[350px] h-[400px] rounded-2xl" />
    </div>
    <button className="bg-[#fa8003] rounded-full mt-16 text-gray-50  h-[70px] w-70 p-4 font-bold text-3xl mb-12 shadow-lg shadow-gray-500/50
           hover:bg-[#FF620F]">
          See All Promos
          </button>
  </div>
    
  );
}

export default Promos;
