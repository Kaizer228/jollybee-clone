import React from "react";
import Logo from "../assets/logo.webp";
import fb from "../assets/facebook.webp";
import ig from "../assets/instagram.webp";
import vb from "../assets/viber.webp";
import tw from "../assets/twitter.webp";
import gplay from '../assets/gplay.webp'
import store from '../assets/store.webp'


function Footer() {
  return (
    <div className="m-auto flex-col mb-[300px] justify-center mt-[630px] relative">
      <div>
        <img src={Logo} className="w-[300px] flex ml-[350px]" alt="" />
      </div>
      <div>
        <h3 className="ml-[350px] mt-[50px] font-bold">Follow Us</h3>
      </div>
      <div className="flex items-center gap-[10px] mt-8 ml-[340px]">
        <img src={fb} className="w-[40px]" alt="" />
        <img src={ig} className="w-[40px]" alt="" />
        <img src={tw} className="w-[40px]" alt="" />
        <img src={vb} className="w-[40px]" alt="" />
      </div>
      <div className="absolute left-[600px] bottom-[-135px] flex gap-[80px] text-start">
        <div className="mt-4" > 
          <h1 className="mb-4 font-bold">How to Order</h1>
          <ul>
            <li>View Menu</li>
            <li>Delivery</li>
            <li>Multi-Delivery</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="mt-4" >  
          <h1 className="mb-4 font-bold">Promotions</h1>
          <ul>
            <li>Promos</li>
            <li>Gift Cards</li>
          
          </ul>
        </div>
        <div className="mt-4" >  
          <h1 className="mb-4 font-bold">About Us</h1>
          <ul>
            <li>About Jollibee</li>
            <li>Safety</li>
            <li>Investors</li>
            <li>Franchising</li>
            <li>Careers</li>
            <li>Jollibee Group Foundation</li>
            <li>Contact Us</li>
            <li>Rate Our Stores</li>

          </ul>
        </div>
        <div className="mt-4" >  
          <h1 className="mb-4 font-bold">About Our Website</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
        <button className="bg-[#fa8003] text-white rounded-full  h-21 w-40 p-2 font-bold mb-12 shadow-lg shadow-gray-500/50
           hover:bg-[#FF620F]">
            Order Now
          </button>
          <img src={gplay} className="w-[200px]" alt="" />
          <img src={store} className="w-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
