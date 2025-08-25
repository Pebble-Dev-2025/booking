"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiUser, FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import FallingStars from "@/components/FallingStars";

const serviceMap: { [key: string]: { name: string; price: string } } = {
  haircut: { name: "Haircut", price: "$25" },
  shampoo: { name: "Shampoo & Blow Dry", price: "$15" },
  "deep-cleansing": { name: "Deep Cleansing Treatment", price: "$35" },
  styling: { name: "Professional Styling", price: "$40" },
  updo: { name: "Updo & Formal Styling", price: "$60" },
  curls: { name: "Curls & Waves", price: "$45" },
  "full-coloring": { name: "Full Hair Coloring", price: "$120" },
  highlights: { name: "Highlights", price: "$90" },
  "touch-up": { name: "Root Touch-up", price: "$70" },
};

export default function BookingConfirmed() {
  const { data, reset } = useBookingStore();
  const { isDark } = useTheme();
  const router = useRouter();

  const service = serviceMap[data.service || ""];
  const selectedDate = data.date ? new Date(data.date) : new Date();

  // Generate a booking reference number
  const bookingRef = `BK${Date.now().toString().slice(-6)}`;

  // If no booking data, redirect to home
  useEffect(() => {
    if (!data.service || !data.time || !data.firstName) {
      router.push("/");
    }
  }, [data, router]);

  const handleNewBooking = () => {
    reset();
    router.push("/booking");
  };

  const handleGoHome = () => {
    reset();
    router.push("/");
  };

  if (!data.service || !data.time || !data.firstName) {
    return null;
  }

  return (
    <div
      className={`min-h-screen relative ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Falling Stars Animation */}
      <FallingStars />

      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="relative">
              <FaCheckCircle className="w-24 h-24 text-[#007AFF] mx-auto mb-6 animate-bounce-in animate-float" />
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-[#007AFF] opacity-20 animate-ping"></div>
            </div>
            <h1
              className={`text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Booking Confirmed! 🎉
            </h1>
            <p
              className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-2`}
            >
              Your appointment has been successfully booked
            </p>
            <p
              className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"} font-mono`}
            >
              Booking Reference: {bookingRef}
            </p>
          </div>

          {/* Booking Summary Card */}
          <div
            className={`
            p-6 rounded-2xl border shadow-lg mb-8
            ${
              isDark
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
            }
          `}
          >
            <h2
              className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Booking Details
            </h2>

            <div className="space-y-4">
              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <FiUser
                  className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                />
                <div>
                  <p
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Customer
                  </p>
                  <p
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {data.firstName} {data.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FiPhone
                  className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                />
                <div>
                  <p
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Phone
                  </p>
                  <p
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {data.tel}
                  </p>
                </div>
              </div>

              {data.email && (
                <div className="flex items-center space-x-3">
                  <MdOutlineEmail
                    className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  />
                  <div>
                    <p
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Email
                    </p>
                    <p
                      className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {data.email}
                    </p>
                  </div>
                </div>
              )}

              <hr
                className={`border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
              />

              {/* Service Info */}
              <div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-2`}
                >
                  Service
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {service?.name}
                  </span>
                  <span className="font-bold text-lg text-[#007AFF]">
                    {service?.price}
                  </span>
                </div>
              </div>

              <hr
                className={`border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
              />

              {/* Date & Time */}
              <div className="flex items-center space-x-3">
                <FaCalendarAlt
                  className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                />
                <div>
                  <p
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Date
                  </p>
                  <p
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {selectedDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      weekday: "long",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <IoMdTime
                  className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                />
                <div>
                  <p
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Time
                  </p>
                  <p
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {data.time}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div
            className={`
            p-4 rounded-xl mb-8
            ${
              isDark
                ? "bg-blue-900/20 border border-blue-500/30"
                : "bg-blue-50 border border-blue-200"
            }
          `}
            style={{ animationDelay: "1.5s", animationFillMode: "both" }}
          >
            <h3
              className={`font-semibold mb-2 ${isDark ? "text-blue-300" : "text-blue-800"}`}
            >
              What&apos;s Next?
            </h3>
            <ul
              className={`text-sm space-y-1 ${isDark ? "text-blue-300" : "text-blue-700"}`}
            >
              <li>• We&apos;ll send you a confirmation email shortly</li>
              <li>• Our team will contact you within 30 minutes to confirm</li>
              <li>• Please arrive 10 minutes before your appointment time</li>
              <li>• Bring a valid ID for verification</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="animate-bounce-in">
            <button
              onClick={handleNewBooking}
              className="py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95 mb-4 w-full"
            >
              Book Another Appointment
            </button>
            <button
              onClick={handleGoHome}
              className={`
                 py-3 px-6 rounded-xl font-semibold transition-all duration-200 w-full
                ${
                  isDark
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }
              `}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
