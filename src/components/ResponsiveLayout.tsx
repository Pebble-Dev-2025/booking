'use client';

import { useDevice } from '@/hooks/useDevice';

interface ResponsiveLayoutProps {
  mobileComponent: React.ReactNode;
  desktopComponent: React.ReactNode;
  tabletComponent?: React.ReactNode; // Optional tablet-specific component
}

export default function ResponsiveLayout({ 
  mobileComponent, 
  desktopComponent, 
  tabletComponent 
}: ResponsiveLayoutProps) {
  const { isMobile, isTablet, isDesktop } = useDevice();

  // Show mobile component for mobile devices
  if (isMobile) {
    return <>{mobileComponent}</>;
  }

  // Show tablet component if provided, otherwise use desktop
  if (isTablet) {
    return <>{tabletComponent || desktopComponent}</>;
  }

  // Show desktop component for desktop devices
  if (isDesktop) {
    return <>{desktopComponent}</>;
  }

  // Fallback to desktop component
  return <>{desktopComponent}</>;
}