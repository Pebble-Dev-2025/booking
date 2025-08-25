"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { Stepper } from "antd-mobile";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";

export default function StepUserInfo() {
  const { data, updateData, setStep } = useBookingStore();
  const { isDark } = useTheme();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    tel?: string;
    email?: string;
    comments?: string;
  }>({});

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!name) return "This field is required";
    if (!nameRegex.test(name)) return "Only letters, spaces, hyphens and apostrophes allowed";
    if (name.length > 50) return "Maximum 50 characters allowed";
    return "";
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const validatePhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    if (!phone) return "Phone number is required";
    if (cleaned.length !== 10) return "Phone number must be 10 digits";
    if (!cleaned.match(/^[2-9][0-8][0-9][2-9][0-9]{6}$/)) return "Invalid North American phone number format";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateComments = (comments: string) => {
    if (comments && comments.length > 500) return "Comments must be 500 characters or less";
    return "";
  };

  // Handle input changes with validation
  const handleFirstNameChange = (value: string) => {
    updateData({ firstName: value });
    const error = validateName(value);
    setErrors(prev => ({ ...prev, firstName: error }));
  };

  const handleLastNameChange = (value: string) => {
    updateData({ lastName: value });
    const error = validateName(value);
    setErrors(prev => ({ ...prev, lastName: error }));
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    updateData({ tel: formatted });
    const error = validatePhoneNumber(formatted);
    setErrors(prev => ({ ...prev, tel: error }));
  };

  const handleEmailChange = (value: string) => {
    updateData({ email: value });
    const error = validateEmail(value);
    setErrors(prev => ({ ...prev, email: error }));
  };

  const handleCommentsChange = (value: string) => {
    updateData({ comments: value });
    const error = validateComments(value);
    setErrors(prev => ({ ...prev, comments: error }));
  };

  // Required fields validation
  const isValid = data.firstName && 
                  data.lastName && 
                  data.tel && 
                  !errors.firstName && 
                  !errors.lastName && 
                  !errors.tel && 
                  !errors.email && 
                  !errors.comments;

  return (
    <div>
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
                  errors.firstName
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                ${isDark ? "bg-[#1C1C1E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#1D1D1F]"}
                focus:outline-none text-base
              `}
              placeholder="Enter your first name"
              value={data.firstName || ""}
              onChange={e => handleFirstNameChange(e.target.value)}
              maxLength={50}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
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
                  errors.lastName
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                ${isDark ? "bg-[#1C1C1E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#1D1D1F]"}
                focus:outline-none text-base
              `}
              placeholder="Enter your last name"
              value={data.lastName || ""}
              onChange={e => handleLastNameChange(e.target.value)}
              maxLength={50}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
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
                  errors.tel
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                ${isDark ? "bg-[#1C1C1E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#1D1D1F]"}
                focus:outline-none text-base
              `}
              placeholder="(555) 123-4567"
              value={data.tel || ""}
              onChange={e => handlePhoneChange(e.target.value)}
            />
            {errors.tel && (
              <p className="text-red-500 text-sm mt-1">{errors.tel}</p>
            )}
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
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : isDark
                    ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                    : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                }
                ${isDark ? "bg-[#1C1C1E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#1D1D1F]"}
                focus:outline-none text-base
              `}
              placeholder="example@email.com"
              value={data.email || ""}
              onChange={e => handleEmailChange(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Number of people selected */}
          <div>
            <div className="flex items-center mb-3">
              <IoIosPeople
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
                errors.comments
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : isDark
                  ? "bg-[#1C1C1E] border-[#38383A] text-[#FFFFFF] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
                  : "bg-[#FFFFFF] border-[#D1D1D6] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
              }
              ${isDark ? "bg-[#1C1C1E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#1D1D1F]"}
              focus:outline-none text-base
            `}
            placeholder="Any special requests or comments... (500 characters max)"
            value={data.comments || ""}
            onChange={e => handleCommentsChange(e.target.value)}
            maxLength={500}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.comments ? (
              <p className="text-red-500 text-sm">{errors.comments}</p>
            ) : (
              <div></div>
            )}
            <p className={`text-xs ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}>
              {(data.comments || "").length}/500
            </p>
          </div>
        </div>
      </div>

      {/* Required Fields Notice */}
      <div
        className={`text-xs text-center ${isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"}`}
      >
        * Required fields
      </div>

      {/* iOS-style Continue Button */}
      <div className="left-0 px-10 fixed bottom-5 w-full">
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
