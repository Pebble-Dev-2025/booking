"use client";

import { useState, useEffect } from "react";
import type { ThemeConfig } from "antd";
import iosTheme from "../theme/ios-theme";
import iosDarkTheme from "../theme/ios-dark-theme";

export type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);

  // Get system preference
  const getSystemTheme = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  // Update theme
  useEffect(() => {
    const updateTheme = () => {
      let shouldBeDark = false;

      if (theme === "dark") {
        shouldBeDark = true;
      } else if (theme === "light") {
        shouldBeDark = false;
      } else {
        // system
        shouldBeDark = getSystemTheme();
      }

      setIsDark(shouldBeDark);

      // Update document class and background
      if (typeof document !== "undefined") {
        if (shouldBeDark) {
          document.documentElement.classList.add("dark");
          document.documentElement.style.backgroundColor = "#000000";
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.backgroundColor = "#F2F2F7";
        }
      }
    };

    updateTheme();

    // Listen for system theme changes
    if (typeof window !== "undefined" && theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme]);

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved && ["light", "dark", "system"].includes(saved)) {
        setTheme(saved);
      }
    }
  }, []);

  // Save theme to localStorage
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  // Get current antd theme config
  const getAntdTheme = (): ThemeConfig => {
    return isDark ? iosDarkTheme : iosTheme;
  };

  // Get background color
  const getBackgroundColor = () => {
    return isDark ? "#292929" : "#F2F2F7";
  };

  return {
    theme,
    isDark,
    changeTheme,
    getAntdTheme,
    getBackgroundColor,
  };
};
