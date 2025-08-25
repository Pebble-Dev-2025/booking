"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { Stepper } from "antd-mobile";

export default function StepUserInfo() {
  const { data, updateData, setStep } = useBookingStore();
  const { isDark } = useTheme();

  // Required fields validation
  const isValid = data.firstName && data.lastName && data.tel;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2
          className={`text-2xl font-semibold mb-2 ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
        >
          Personal Information
        </h2>
        <p
          className={`text-sm ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
        >
          Please fill in your details to continue
        </p>
      </div>

      {/* iOS-style Form Fields */}
      <div className="space-y-6">
        {/* Name Section */}
        <div className="space-y-4">
          {/* First Name */}
          <div>
            <div className="flex items-center mb-3">
              {/* <UserIcon className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`} /> */}
              <FiUser
                className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
              />
              <label
                className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
              >
                First Name *
              </label>
            </div>
            <input
              type="text"
              className={`
                w-full px-4 py-4 rounded-2xl border transition-all duration-200
                ${
                  isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                focus:outline-none text-base
              `}
              placeholder="Enter your first name"
              value={data.firstName || ""}
              onChange={e => updateData({ firstName: e.target.value })}
            />
          </div>

          {/* Last Name */}
          <div>
            <div className="flex items-center mb-3">
              <FiUser
                className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
              />
              <label
                className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
              >
                Last Name *
              </label>
            </div>
            <input
              type="text"
              className={`
                w-full px-4 py-4 rounded-2xl border transition-all duration-200
                ${
                  isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                focus:outline-none text-base
              `}
              placeholder="Enter your last name"
              value={data.lastName || ""}
              onChange={e => updateData({ lastName: e.target.value })}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          {/* Phone Number */}
          <div>
            <div className="flex items-center mb-3">
              <LuPhone
                className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
              />
              <label
                className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
              >
                Phone Number *
              </label>
            </div>
            <input
              type="tel"
              className={`
                w-full px-4 py-4 rounded-2xl border transition-all duration-200
                ${
                  isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                focus:outline-none text-base
              `}
              placeholder="Enter your phone number"
              value={data.tel || ""}
              onChange={e => updateData({ tel: e.target.value })}
            />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center mb-3">
              <MdOutlineEmail
                className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
              />
              <label
                className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
              >
                Email Address
              </label>
            </div>
            <input
              type="email"
              className={`
                w-full px-4 py-4 rounded-2xl border transition-all duration-200
                ${
                  isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                focus:outline-none text-base
              `}
              placeholder="Enter your email address"
              value={data.email || ""}
              onChange={e => updateData({ email: e.target.value })}
            />
          </div>

          {/* Number of people selected */}
          <div>
            <div className="flex items-center mb-3">
              <MdOutlineEmail
                className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
              />
              <label
                className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
              >
                Number of people selected
              </label>
            </div>
            <Stepper min={1} max={10} defaultValue={1} />
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <div className="flex items-center mb-3">
            <FaRegCommentDots
              className={`w-5 h-5 mr-2 ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
            />
            <label
              className={`text-sm font-medium ${isDark ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}
            >
              Additional Comments
            </label>
          </div>
          <textarea
            rows={4}
            className={`
              w-full px-4 py-4 rounded-2xl border transition-all duration-200 resize-none
              ${
                isDark
                  ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                  : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
              }
              focus:outline-none text-base
            `}
            placeholder="Any special requests or comments..."
            value={data.comments || ""}
            onChange={e => updateData({ comments: e.target.value })}
          />
        </div>
      </div>

      {/* Required Fields Notice */}
      <div
        className={`text-xs text-center ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
      >
        * Required fields
      </div>

      {/* iOS-style Continue Button */}
      <div className="pt-4">
        <button
          className={`
            w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-200 transform
            ${
              isValid
                ? `${
                    isDark
                      ? "bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
                      : "bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
                  }`
                : `${
                    isDark
                      ? "bg-[#2C2C2E] text-[#8E8E93] cursor-not-allowed"
                      : "bg-[#F2F2F7] text-[#8E8E93] cursor-not-allowed"
                  }`
            }
          `}
          disabled={!isValid}
          onClick={() => setStep(1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
