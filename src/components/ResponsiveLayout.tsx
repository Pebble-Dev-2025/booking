'use client';

import { useState, useEffect } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { useDeviceContext } from './DeviceProvider';

interface ResponsiveLayoutProps {
  mobileComponent: React.ReactNode;
  desktopComponent: React.ReactNode;
  tabletComponent?: React.ReactNode;
}

export default function ResponsiveLayout({ 
  mobileComponent, 
  desktopComponent, 
  tabletComponent 
}: ResponsiveLayoutProps) {
  const initialDeviceInfo = useDeviceContext();
  const { isMobile, isTablet, isHydrated } = useDevice(initialDeviceInfo);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent flash by showing content after hydration
    setShowContent(true);
  }, []);

  // Show loading state to prevent flash
  if (!showContent) {
    return (
      <div 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          backgroundColor: initialDeviceInfo.shouldUseMobileUI ? '#000000' : '#F2F2F7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #007AFF',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show mobile component for mobile devices
  if (isMobile) {
    return <div style={{ opacity: isHydrated ? 1 : 0.8, transition: 'opacity 0.3s ease' }}>{mobileComponent}</div>;
  }

  // Show tablet component if provided, otherwise use desktop
  if (isTablet) {
    return <div style={{ opacity: isHydrated ? 1 : 0.8, transition: 'opacity 0.3s ease' }}>{tabletComponent || desktopComponent}</div>;
  }

  // Show desktop component for desktop devices
  return <div style={{ opacity: isHydrated ? 1 : 0.8, transition: 'opacity 0.3s ease' }}>{desktopComponent}</div>;
}