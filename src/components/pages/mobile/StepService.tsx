"use client";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import { FaCheck } from "react-icons/fa";

const categories = [
  {
    id: "hair-care",
    name: "Hair Care",
    services: [
      { id: "haircut", name: "Haircut", price: "$25", duration: "30 min" },
      {
        id: "shampoo",
        name: "Shampoo & Blow Dry",
        price: "$15",
        duration: "15 min",
      },
      {
        id: "deep-cleansing",
        name: "Deep Cleansing Treatment",
        price: "$35",
        duration: "45 min",
      },
    ],
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    services: [
      {
        id: "styling",
        name: "Professional Styling",
        price: "$40",
        duration: "45 min",
      },
      {
        id: "updo",
        name: "Updo & Formal Styling",
        price: "$60",
        duration: "60 min",
      },
      { id: "curls", name: "Curls & Waves", price: "$45", duration: "50 min" },
    ],
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    services: [
      {
        id: "full-coloring",
        name: "Full Hair Coloring",
        price: "$120",
        duration: "120 min",
      },
      {
        id: "highlights",
        name: "Highlights",
        price: "$90",
        duration: "90 min",
      },
      {
        id: "touch-up",
        name: "Root Touch-up",
        price: "$70",
        duration: "60 min",
      },
    ],
  },
];

export default function StepService() {
  const { data, updateData, setStep } = useBookingStore();
  const { isDark } = useTheme();

  const selectedService = data.service;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2
          className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Choose Service
        </h2>
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Please select the service you need
        </p>
      </div>

      <div className="space-y-6">
        {categories.map(category => (
          <div key={category.id} className="space-y-3">
            <h3
              className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {category.name}
            </h3>
            <div className="space-y-3">
              {category.services.map(service => (
                <div
                  key={service.id}
                  className={`
                    relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    ${
                      selectedService === service.id
                        ? "border-[#007AFF] bg-blue-50 dark:bg-blue-900/20"
                        : isDark
                          ? "border-gray-600 bg-gray-800 hover:border-gray-500"
                          : "border-gray-200 bg-white hover:border-gray-300"
                    }
                  `}
                  onClick={() => updateData({ service: service.id })}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4
                        className={`font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {service.name}
                      </h4>
                      <p
                        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        Duration: {service.duration}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`font-bold text-lg ${selectedService === service.id ? "text-[#007AFF]" : isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {service.price}
                      </span>
                      <div
                        className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200
                        ${
                          selectedService === service.id
                            ? "border-[#007AFF] bg-[#007AFF]"
                            : isDark
                              ? "border-gray-600"
                              : "border-gray-300"
                        }
                      `}
                      >
                        {selectedService === service.id && (
                          <FaCheck className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          onClick={() => setStep(0)}
        >
          Previous
        </button>
      </div>
      <div className="left-0 px-10 fixed bottom-5 w-full">
        <button
          className={`
            w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform
            ${
              selectedService
                ? isDark
                  ? "bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
                  : "bg-[#007AFF] hover:bg-[#0051D5] text-white shadow-lg hover:scale-105 active:scale-95"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
          disabled={!selectedService}
          onClick={() => setStep(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
