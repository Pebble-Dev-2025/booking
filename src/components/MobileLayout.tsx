"use client";

import { useEffect } from "react";
import { ConfigProvider as MobileConfigProvider } from "antd-mobile";
import { useTheme } from "@/hooks/useTheme";
import { mobileLightTheme, mobileDarkTheme } from "@/theme/mobile-theme";
import enUS from "antd-mobile/es/locales/en-US";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const { isDark, getBackgroundColor } = useTheme();

  // Apply mobile theme variables to document root
  useEffect(() => {
    const themeVars = isDark ? mobileDarkTheme : mobileLightTheme;
    const root = document.documentElement;

    // Apply all theme variables to root
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Cleanup function to remove variables when component unmounts
    return () => {
      Object.keys(themeVars).forEach(key => {
        root.style.removeProperty(key);
      });
    };
  }, [isDark]);

  return (
    <MobileConfigProvider locale={enUS}>
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          minHeight: "100vh",
          transition: "background-color 0.3s ease",
          color: "var(--adm-color-text)", // Ensure text color is applied
        }}
      >
        {children}
      </div>
    </MobileConfigProvider>
  );
}
