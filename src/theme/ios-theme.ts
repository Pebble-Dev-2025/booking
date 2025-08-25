import type { ThemeConfig } from 'antd';

const iosTheme: ThemeConfig = {
  token: {
    // Primary colors inspired by iOS blue
    colorPrimary: '#007AFF', // iOS System Blue
    colorPrimaryHover: '#0056CC',
    colorPrimaryActive: '#004999',
    
    // Success colors inspired by iOS green
    colorSuccess: '#34C759', // iOS System Green
    colorSuccessHover: '#28B946',
    colorSuccessActive: '#1F9938',
    
    // Warning colors inspired by iOS orange
    colorWarning: '#FF9500', // iOS System Orange
    colorWarningHover: '#E6850E',
    colorWarningActive: '#CC7700',
    
    // Error colors inspired by iOS red
    colorError: '#FF3B30', // iOS System Red
    colorErrorHover: '#E6342A',
    colorErrorActive: '#CC2B22',
    
    // Info colors inspired by iOS teal
    colorInfo: '#5AC8FA', // iOS System Teal
    colorInfoHover: '#48B5E7',
    colorInfoActive: '#36A2D4',
    
    // Background colors
    colorBgContainer: '#FFFFFF',
    colorBgElevated: '#F2F2F7', // iOS background secondary
    colorBgLayout: '#F2F2F7',
    
    // Text colors
    colorText: '#1D1D1F', // iOS label primary
    colorTextSecondary: '#3C3C43', // iOS label secondary
    colorTextTertiary: '#8E8E93', // iOS label tertiary
    colorTextQuaternary: '#C7C7CC', // iOS label quaternary
    
    // Border and dividers
    colorBorder: '#E5E5EA', // iOS separator
    colorBorderSecondary: '#F2F2F7',
    
    // Typography
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
    fontSize: 17, // iOS default text size
    fontSizeHeading1: 34,
    fontSizeHeading2: 28,
    fontSizeHeading3: 22,
    fontSizeHeading4: 20,
    fontSizeHeading5: 17,
    
    // Border radius inspired by iOS
    borderRadius: 12, // iOS corner radius
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    borderRadiusXS: 6,
    
    // Shadows inspired by iOS depth
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    boxShadowSecondary: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
    boxShadowTertiary: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    
    // Control height inspired by iOS touch targets
    controlHeight: 44, // iOS standard touch target
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
      headerBg: 'transparent',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    Input: {
      borderRadius: 12,
      controlHeight: 44,
      fontSize: 17,
      paddingInline: 16,
    },
    Select: {
      borderRadius: 12,
      controlHeight: 44,
      fontSize: 17,
      optionSelectedBg: '#E3F2FF', // Light blue for selected items
    },
    Modal: {
      borderRadius: 16,
      headerBg: 'transparent',
    },
    Drawer: {
      borderRadius: 16,
    },
    Tabs: {
      horizontalMargin: '0 0 24px 0',
      cardBg: 'transparent',
    },
    Switch: {
      trackHeight: 31,
      trackMinWidth: 51,
      handleSize: 27,
    },
    Slider: {
      trackBg: '#E5E5EA',
      trackHoverBg: '#D1D1D6',
      handleColor: '#FFFFFF',
      handleSize: 28,
      railSize: 4,
    },
  },
};

export default iosTheme;