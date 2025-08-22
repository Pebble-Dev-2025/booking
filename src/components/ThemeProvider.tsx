"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "@/hooks/useTheme";
import { useDevice } from "@/hooks/useDevice";
import MobileLayout from "./MobileLayout";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { getAntdTheme, getBackgroundColor } = useTheme();
  const { shouldUseMobileUI } = useDevice();

  // Use mobile layout for mobile devices
  if (shouldUseMobileUI()) {
    return <MobileLayout>{children}</MobileLayout>;
  }

  // Use desktop layout for desktop devices
  return (
    <ConfigProvider theme={getAntdTheme()}>
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          minHeight: "100vh",
          transition: "background-color 0.3s ease",
        }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
}
