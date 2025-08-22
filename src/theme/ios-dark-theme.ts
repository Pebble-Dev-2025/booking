import type { ThemeConfig } from "antd";

const iosDarkTheme: ThemeConfig = {
  token: {
    // Primary colors for dark mode
    colorPrimary: "#0A84FF", // iOS Dark Mode System Blue
    colorPrimaryHover: "#409CFF",
    colorPrimaryActive: "#0056CC",

    // Success colors
    colorSuccess: "#30D158", // iOS Dark Mode System Green
    colorSuccessHover: "#32D95A",
    colorSuccessActive: "#28CD48",

    // Warning colors
    colorWarning: "#FF9F0A", // iOS Dark Mode System Orange
    colorWarningHover: "#FFB340",
    colorWarningActive: "#FF8C00",

    // Error colors
    colorError: "#FF453A", // iOS Dark Mode System Red
    colorErrorHover: "#FF6961",
    colorErrorActive: "#FF2D20",

    // Info colors
    colorInfo: "#64D2FF", // iOS Dark Mode System Teal
    colorInfoHover: "#7DDBFF",
    colorInfoActive: "#4BC7FF",

    // Background colors for dark mode
    colorBgContainer: "#1C1C1E", // iOS Dark secondary background
    colorBgElevated: "#2C2C2E", // iOS Dark tertiary background
    colorBgLayout: "#292929", // iOS Dark primary background
    colorBgSpotlight: "#28282A",

    // Text colors for dark mode
    colorText: "#FFFFFF", // iOS Dark label primary
    colorTextSecondary: "#EBEBF5", // iOS Dark label secondary (60% opacity)
    colorTextTertiary: "#EBEBF5", // iOS Dark label tertiary (30% opacity)
    colorTextQuaternary: "#EBEBF5", // iOS Dark label quaternary (18% opacity)

    // Border and dividers for dark mode
    colorBorder: "#38383A", // iOS Dark separator
    colorBorderSecondary: "#2C2C2E",

    // Fill colors for dark mode
    colorFillTertiary: "#767680", // iOS Dark fill tertiary
    colorFillSecondary: "#787880", // iOS Dark fill secondary
    colorFill: "#787880", // iOS Dark fill

    // Typography
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
    fontSize: 17,
    fontSizeHeading1: 34,
    fontSizeHeading2: 28,
    fontSizeHeading3: 22,
    fontSizeHeading4: 20,
    fontSizeHeading5: 17,

    // Border radius
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    borderRadiusXS: 6,

    // Shadows for dark mode
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
    boxShadowSecondary:
      "0 4px 6px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15)",
    boxShadowTertiary:
      "0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2)",

    // Control height
    controlHeight: 44,
    controlHeightSM: 36,
    controlHeightLG: 52,
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 44,
      fontWeight: 600,
      fontSize: 17,
    },
    Card: {
      borderRadius: 16,
      headerBg: "transparent",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
    },
    Input: {
      borderRadius: 12,
      controlHeight: 44,
      fontSize: 17,
      paddingInline: 16,
      colorBgContainer: "#1C1C1E",
      colorText: "#FFFFFF",
      colorTextPlaceholder: "#8E8E93",
    },
    Select: {
      borderRadius: 12,
      controlHeight: 44,
      fontSize: 17,
      optionSelectedBg: "#1E3A5F", // Dark blue for selected items
      colorBgContainer: "#1C1C1E",
      colorText: "#FFFFFF",
    },
    Modal: {
      borderRadius: 16,
      headerBg: "transparent",
      contentBg: "#1C1C1E",
    },
    Drawer: {
      borderRadius: 16,
      colorBgElevated: "#1C1C1E",
    },
    Tabs: {
      horizontalMargin: "0 0 24px 0",
      cardBg: "transparent",
    },
    Switch: {
      trackHeight: 31,
      trackMinWidth: 51,
      handleSize: 27,
      colorPrimary: "#0A84FF",
    },
    Slider: {
      trackBg: "#38383A",
      trackHoverBg: "#48484A",
      handleColor: "#FFFFFF",
      handleSize: 28,
      railSize: 4,
    },
    Alert: {
      borderRadius: 12,
    },
  },
  algorithm: undefined, // We'll handle dark mode manually
};

export default iosDarkTheme;
