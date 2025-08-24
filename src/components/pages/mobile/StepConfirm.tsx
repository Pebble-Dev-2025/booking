"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { FaCheckCircle, FaRegCommentDots } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { CiPhone, CiCalendarDate } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useRouter } from "next/navigation";

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

export default function StepConfirm() {
  const { data, setStep, reset } = useBookingStore();
  const { isDark } = useTheme();
  const router = useRouter();

  const service = serviceMap[data.service || ""];
  const selectedDate = data.date ? new Date(data.date) : new Date();

  const handleConfirm = () => {
    // Here you can call API to submit booking
    console.log("Booking information:", data);

    // Simulate successful submission
    alert("Booking successful! We will contact you shortly to confirm.");
    reset();
    router.push("/");
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <FaCheckCircle className="w-16 h-16 text-[#007AFF] mx-auto mb-4" />
        <h2
          className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Confirm Booking Information
        </h2>
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Please review the following information carefully before confirming
          your booking
        </p>
      </div>

      {/* Booking Information Card */}
      <div
        className={`
        p-6 rounded-2xl border
        ${isDark ? "border-gray-600 bg-gray-800" : "border-gray-200 bg-gray-50"}
      `}
      >
        <div className="space-y-4">
          {/* User Information */}
          <div className="flex items-center space-x-3">
            <FiUser
              className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            />
            <div>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Name
              </p>
              <p
                className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {data.firstName} {data.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <CiPhone
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

          {data.comments && (
            <div className="flex items-start space-x-3">
              <FaRegCommentDots
                className={`w-5 h-5 mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
              />
              <div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Comments
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {data.comments}
                </p>
              </div>
            </div>
          )}

          <hr
            className={`border-t ${isDark ? "border-gray-600" : "border-gray-200"}`}
          />

          {/* Service Information */}
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
              <span className={`font-bold text-lg text-[#007AFF]`}>
                {service?.price}
              </span>
            </div>
          </div>

          <hr
            className={`border-t ${isDark ? "border-gray-600" : "border-gray-200"}`}
          />

          {/* Date & Time Information */}
          <div className="flex items-center space-x-3">
            <CiCalendarDate
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

      {/* Important Notice */}
      <div
        className={`
        p-4 rounded-xl
        ${
          isDark
            ? "bg-blue-900/20 border border-blue-500/30"
            : "bg-blue-50 border border-blue-200"
        }
      `}
      >
        <p className={`text-sm ${isDark ? "text-blue-300" : "text-blue-700"}`}>
          <strong>Important Notice:</strong>
          After submitting your booking, we will contact you within 30 minutes
          to confirm the appointment details. Please contact us promptly if you
          need to make any changes.
        </p>
      </div>

      <div className="pt-6 flex space-x-4">
        <button
          className={`
            flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200
            ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }
          `}
          onClick={() => setStep(2)}
        >
          Previous
        </button>
        <button
          className="flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
