"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "@/hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { getAntdTheme, getBackgroundColor } = useTheme();

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
