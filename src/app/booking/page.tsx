"use client";

import ResponsiveLayout from "@/components/ResponsiveLayout";
import { useBookingStore } from "@/lib/store/booking";
import { useTheme } from "@/hooks/useTheme";
import StepUserInfo from "@/components/pages/mobile/StepUserInfo";
import StepService from "@/components/pages/mobile/StepService";
import StepTime from "@/components/pages/mobile/StepTime";
import StepConfirm from "@/components/pages/mobile/StepConfirm";
import TopNavBar from "@/components/TopNavBar";
import Steps from "@/components/Steps";
import { useEffect } from "react";

function DesktopBookingPage() {
  const { step } = useBookingStore();
  const { getBackgroundColor } = useTheme();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Steps />
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mt-6">
          {step === 0 && <StepUserInfo />}
          {step === 1 && <StepService />}
          {step === 2 && <StepTime />}
          {step === 3 && <StepConfirm />}
        </div>
      </div>
    </div>
  );
}

function MobileBookingPage() {
  const { step } = useBookingStore();
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  return (
    <div className="pb-10">
      {/* iOS风格粘性Steps */}
      <div
        className="sticky top-2 z-10 mx-4 mt-2 rounded-3xl"
        style={{
          backgroundColor: isDark
            ? "rgba(28, 28, 30, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${isDark ? "rgba(58, 58, 60, 0.3)" : "rgba(209, 209, 214, 0.3)"}`,
          boxShadow: isDark
            ? "0 4px 16px rgba(0, 0, 0, 0.3)"
            : "0 4px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Steps />
      </div>

      {/* Content area with iOS spacing */}
      <div className="px-4 pt-4">
        <div
          className="rounded-3xl p-6 mx-auto max-w-lg"
          style={{
            backgroundColor: isDark ? "#1C1C1E" : "#FFFFFF",
            border: `1px solid ${isDark ? "#38383A" : "#E5E5EA"}`,
            boxShadow: isDark
              ? "0 8px 32px rgba(0, 0, 0, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.06)",
          }}
        >
          {step === 0 && <StepUserInfo />}
          {step === 1 && <StepService />}
          {step === 2 && <StepTime />}
          {step === 3 && <StepConfirm />}
        </div>
      </div>
    </div>
  );
}

export default function Booking() {
  return (
    <div>
      <TopNavBar />
      <ResponsiveLayout
        mobileComponent={<MobileBookingPage />}
        desktopComponent={<DesktopBookingPage />}
      />
    </div>
  );
}
