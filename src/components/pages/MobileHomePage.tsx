"use client";
import { IoMdTime } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import GoogleMap from "@/components/GoogleMap";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export default function MobileHomePage() {
  const { getBackgroundColor, isDark } = useTheme();
  const router = useRouter();
  const [isShowOpeningHours, setShowOpeningHours] = useState(false);

  const handleShowOpeningHousr = () => {
    setShowOpeningHours(prev => !prev);
  };

  return (
    <div className="relative pb-30">
      <div className="relative">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-80 overflow-hidden rounded-br-[130px]"></div>
        <div
          className="absolute z-10 w-28 h-28 -bottom-14 left-16 overflow-hidden rounded-4xl p-2"
          style={{ backgroundColor: getBackgroundColor() }}
        >
          <div className="bg-pink-400 w-full h-full rounded-4xl"></div>
        </div>
      </div>
      <div className="pl-20 pr-20 mt-26">
        <div className="text-5xl font-bold mb-4 wrap-break-word">
          Pebbble Shop
        </div>
        <div className="text-sm mb-6 font-bold leading-relaxed">
          We are a barber shop with very rich experience. We have been in
          business for more than ten years and have received many favorable
          reviews
        </div>
        <div
          className={`text-sm flex items-center ${!isShowOpeningHours && "mb-4"}`}
          onClick={handleShowOpeningHousr}
        >
          <IoMdTime className="mr-2" />
          Closed ~ Opens 8 AM Mon
          <FaAngleUp
            className={`ml-2 duration-200 ${isShowOpeningHours && "rotate-180"}`}
          />
        </div>
        {isShowOpeningHours && (
          <div className="text-sm w-4/5 mb-4 text-gray-400 ml-6">
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
            <div
              className={`flex justify-between  ${isDark ? "text-gray-50" : "text-gray-800"}`}
            >
              <span>Monday</span>
              <span>8 AM - 5 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Wendnesday</span>
              <span>8 AM - 5 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Thursday</span>
              <span>8 AM - 5 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday</span>
              <span>8 AM - 5 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>Closed</span>
            </div>
          </div>
        )}
        <div className="text-sm flex items-center mb-4">
          <CiPhone className="mr-2 flex-shrink-0" />
          <a
            className={`underline transition-colors duration-200 break-all ${
              isDark
                ? "!text-white hover:!text-gray-300"
                : "!text-black hover:!text-gray-800"
            }`}
            href="tel:+8613800138000"
          >
            +92 12349876
          </a>
        </div>
        <div className="text-sm flex items-center mb-4">
          <MdOutlineEmail className="mr-2 flex-shrink-0" />
          <a
            className={`underline transition-colors duration-200 break-all ${
              isDark
                ? "!text-white hover:!text-gray-300"
                : "!text-black hover:!text-gray-800"
            }`}
            href="mailto:someone@example.com"
          >
            shane@shane.com
          </a>
        </div>
        <div className="text-sm flex items-start mb-4">
          <SlLocationPin className="mr-2 w-5 h-5 flex-shrink-0 mt-0.5" />
          <a
            className={`underline transition-colors duration-200 break-words leading-relaxed ${
              isDark
                ? "!text-white hover:!text-gray-300"
                : "!text-black hover:!text-gray-800"
            }`}
            href="https://www.google.com/maps?q=781 Prospect Pl, Brooklyn, NY 11216"
            target="_blank"
            rel="noopener noreferrer"
          >
            781 Prospect Pl, Brooklyn, NY 11216
          </a>
        </div>
        <div className="w-full h-52 overflow-hidden rounded-2xl mb-4">
          <GoogleMap />
        </div>
      </div>
      <div className="pl-18 pr-18 fixed w-full bottom-10">
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 w-full rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => router.push("/booking")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
