"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { Calendar } from "antd-mobile";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import React, { useState, useEffect } from "react";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

export default function StepTime() {
  const { data, updateData, setStep } = useBookingStore();
  const { isDark } = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const selectedTime = data.time;

  // Initialize with today's date if not already set
  useEffect(() => {
    if (!data.date) {
      const today = new Date();
      setSelectedDate(today);
      updateData({ date: today.toISOString() });
    } else {
      setSelectedDate(new Date(data.date));
    }
  }, [data.date, updateData]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2
          className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Choose Date & Time
        </h2>
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Please select your preferred appointment date and time
        </p>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <CiCalendarDate
            className={`w-5 h-5 mr-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          />
          <span
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Select Date
          </span>
        </div>
        <div
          className={`rounded-xl border overflow-hidden ${
            isDark ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-white"
          }`}
        >
          <Calendar
            selectionMode="single"
            value={selectedDate}
            onChange={val => {
              if (val) {
                setSelectedDate(val);
                updateData({ date: val.toISOString() });
              }
            }}
            min={new Date()}
            style={
              {
                "--adm-color-primary": "#007AFF",
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
                borderColor: isDark ? "#374151" : "#e5e7eb",
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <div className="flex items-center mb-4">
          <IoMdTime
            className={`w-5 h-5 mr-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          />
          <span
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Select Time
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map(time => (
            <button
              key={time}
              className={`
                py-3 px-2 rounded-lg font-semibold text-sm transition-all duration-200
                ${
                  selectedTime === time
                    ? "bg-[#007AFF] text-white shadow-lg"
                    : isDark
                      ? "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              `}
              onClick={() => updateData({ time })}
            >
              {time}
            </button>
          ))}
        </div>
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
          onClick={() => setStep(1)}
        >
          Previous
        </button>
      </div>
      <div className="left-0 px-10 fixed bottom-5 w-full">
        <button
          className={`
            w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform
            ${
              selectedTime && selectedDate
                ? "bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
          disabled={!selectedTime || !selectedDate}
          onClick={() => setStep(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
