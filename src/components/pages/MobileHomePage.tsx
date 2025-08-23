"use client";
import { IoMdTime } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import GoogleMap from "@/components/GoogleMap";

export default function MobileHomePage() {
  return (
    <div className="relative pb-30">
      <div className="relative">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-80 overflow-hidden rounded-br-[130px]"></div>
        <div className="absolute z-10 bg-[#F2F2F7] w-28 h-28 -bottom-14 left-16 overflow-hidden rounded-4xl p-2">
          <div className="bg-pink-400 w-full h-full rounded-4xl"></div>
        </div>
      </div>
      <div className="pl-20 pr-20 mt-26">
        <div className="text-5xl font-bold mb-4">Pebbble Shop</div>
        <div className="text-sm flex items-center mb-6 font-bold">
          We are a barber shop with very rich experience. We have been in
          business for more than ten years and have received many favorable
          reviews
        </div>
        <div className="text-sm flex items-center mb-4">
          <IoMdTime className="mr-2" />
          Closed ~ Opens 8 AM Mon
        </div>
        <div className="text-sm flex items-center mb-4">
          <CiPhone className="mr-2" />
          <span className="underline">+92 12349876</span>
        </div>
        <div className="text-sm flex items-center mb-4">
          <MdOutlineEmail className="mr-2" />
          <span className="underline">shane@shane.com</span>
        </div>
        <div className="text-sm flex items-center mb-4">
          <SlLocationPin className="mr-2 w-5 h-5" />
          <span className="underline">
            10 Dunkineely Road, Flat Bush Auckland, Auckland 2011
          </span>
        </div>
        <div className="w-full h-52 overflow-hidden rounded-2xl mb-4">
          <GoogleMap />
        </div>
      </div>
      <div className="pl-18 pr-18 fixed w-full bottom-10">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 w-full rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </div>
  );
}
