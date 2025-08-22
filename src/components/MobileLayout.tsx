'use client';

import { ConfigProvider as MobileConfigProvider } from 'antd-mobile';
import { useTheme } from '@/hooks/useTheme';
import { mobileLightTheme, mobileDarkTheme } from '@/theme/mobile-theme';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const { isDark, getBackgroundColor } = useTheme();

  // Apply mobile theme variables
  const themeVars = isDark ? mobileDarkTheme : mobileLightTheme;

  return (
    <MobileConfigProvider>
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
          ...themeVars, // Apply theme variables as CSS custom properties
        }}
      >
        {children}
      </div>
    </MobileConfigProvider>
  );
}