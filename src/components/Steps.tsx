"use client";

import { useTheme } from "@/hooks/useTheme";
import { useBookingStore } from "@/lib/store/booking";
import { FaCheck } from "react-icons/fa";

export interface ISteps {
  count?: number;
  currentIndex?: number;
}

export default function Steps(props: ISteps) {
  const { count = 4, currentIndex } = props;
  const { step } = useBookingStore();
  const { isDark } = useTheme();

  const currentStep = currentIndex ?? step;

  return (
    <div className="w-full px-6 py-6">
      {/* 步骤指示器 */}
      <div className="flex items-center justify-between relative">
        {/* iOS风格连接线 */}
        <div
          className="absolute top-4 left-0 h-1 rounded-full transition-all duration-700 ease-out"
          style={{
            width: `calc(${(currentStep / (count - 1)) * 100}% - 8px)`,
            backgroundColor: isDark ? "#007AFF" : "#007AFF", // iOS System Blue
            zIndex: 1,
            marginLeft: "16px",
            marginRight: "16px",
          }}
        />
        <div
          className="absolute top-4 left-0 h-1 rounded-full w-full"
          style={{
            backgroundColor: isDark ? "#3A3A3C" : "#D1D1D6", // iOS quaternary/tertiary fill
            zIndex: 0,
            margin: "0 16px",
            width: "calc(100% - 32px)",
          }}
        />

        {Array.from({ length: count }).map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative z-10"
              style={{ flex: "1" }}
            >
              {/* iOS风格圆圈指示器 */}
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center 
                  transition-all duration-400 ease-out transform backdrop-blur-sm
                  ${isCurrent ? "scale-125 shadow-lg" : "scale-100"}
                  ${
                    isCompleted
                      ? `${
                          isDark
                            ? "bg-[#007AFF] shadow-[0_2px_8px_rgba(0,122,255,0.3)]"
                            : "bg-[#007AFF] shadow-[0_2px_12px_rgba(0,122,255,0.4)]"
                        }`
                      : ""
                  }
                  ${
                    isCurrent
                      ? `${
                          isDark
                            ? "bg-[#007AFF] shadow-[0_4px_20px_rgba(0,122,255,0.5)] ring-3 ring-[rgba(0,122,255,0.3)]"
                            : "bg-[#007AFF] shadow-[0_4px_24px_rgba(0,122,255,0.6)] ring-3 ring-[rgba(0,122,255,0.2)]"
                        }`
                      : ""
                  }
                  ${
                    isUpcoming
                      ? `${
                          isDark
                            ? "bg-[#2C2C2E] border border-[#3A3A3C]"
                            : "bg-[#F2F2F7] border border-[#D1D1D6]"
                        }`
                      : ""
                  }
                `}
              >
                {isCompleted && !isCurrent ? (
                  <FaCheck className="w-4 h-4 text-white" />
                ) : (
                  <span
                    className={`
                      text-xs font-semibold
                      ${
                        isCompleted || isCurrent
                          ? "text-white"
                          : isDark
                            ? "text-[#8E8E93]"
                            : "text-[#8E8E93]"
                      }
                    `}
                  >
                    {index + 1}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
