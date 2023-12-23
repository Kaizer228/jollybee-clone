import React from "react";
import pic1 from '../assets/order.png'
import pic2 from '../assets/phone.png';
import pic3 from '../assets/download.png';  

 

function Offers() {
  return (
    <div className=" flex mt-[600px] w-auto ml-[400px] gap-48 ">
      <div className="text-center">
        <img src={pic1} alt="Order & Pick Up" className="mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-[#212529]">Order & Pick Up</h1>
      </div>
      <div className="text-center">
        <img src={pic2} alt="Download the App" className="mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-[#212529]">Download the App</h1>
      </div>
      <div className="text-center">
        <img src={pic3} alt="#87000" className="mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-[#212529]">#87000</h1>
      </div>
      <hr className="border-[#bbb6b6] w-25 absolute top-[1000px] right-[330px]" />
    </div>
    
  );
}

export default Offers;
