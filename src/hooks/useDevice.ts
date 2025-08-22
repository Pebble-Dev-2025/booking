'use client';

import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const width = window.innerWidth;
      
      // Check for mobile devices
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Determine device type based on screen width and user agent
      let type: DeviceType = 'desktop';
      
      if (isMobileDevice || width <= 768) {
        if (width <= 480) {
          type = 'mobile';
        } else if (width <= 1024) {
          type = 'tablet';
        }
      }
      
      // Special handling for iPad (which reports as desktop in some cases)
      if (/ipad/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        type = 'tablet';
      }
      
      setDeviceType(type);
      setIsMobile(type === 'mobile');
      setIsTablet(type === 'tablet');
      setIsDesktop(type === 'desktop');
    };

    // Initial check
    checkDevice();

    // Listen for resize events
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper function to check if we should use mobile UI
  const shouldUseMobileUI = () => {
    return isMobile || (isTablet && window.innerWidth <= 768);
  };

  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    shouldUseMobileUI,
  };
};