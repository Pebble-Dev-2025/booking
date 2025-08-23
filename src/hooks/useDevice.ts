'use client';

import { useState, useEffect } from 'react';
import { detectDeviceFromBrowser, type DeviceInfo } from '@/utils/deviceDetection';

export const useDevice = (initialDeviceInfo?: DeviceInfo) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    // Use initial SSR device info if provided, otherwise use safe defaults
    return initialDeviceInfo || {
      deviceType: 'desktop',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      shouldUseMobileUI: false,
    };
  });

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Update device info after hydration
    const updateDeviceInfo = () => {
      const newDeviceInfo = detectDeviceFromBrowser();
      setDeviceInfo(newDeviceInfo);
    };

    updateDeviceInfo();
    setIsHydrated(true);

    // Listen for resize events
    const handleResize = () => {
      updateDeviceInfo();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...deviceInfo,
    isHydrated,
  };
};