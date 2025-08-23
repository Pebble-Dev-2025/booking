import { UAParser } from 'ua-parser-js';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceInfo {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  shouldUseMobileUI: boolean;
}

// Server-side device detection using User-Agent
export function detectDeviceFromUserAgent(userAgent: string): DeviceInfo {
  const parser = new UAParser(userAgent);
  const device = parser.getDevice();
  
  let deviceType: DeviceType = 'desktop';
  
  // Check device type from UA parser
  if (device.type === 'mobile') {
    deviceType = 'mobile';
  } else if (device.type === 'tablet') {
    deviceType = 'tablet';
  } else {
    // Additional checks for devices that might not be properly detected
    const ua = userAgent.toLowerCase();
    if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
      deviceType = 'mobile';
    } else if (/ipad|android.*tablet|kindle|silk/i.test(ua)) {
      deviceType = 'tablet';
    }
  }
  
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop';
  const shouldUseMobileUI = isMobile; // Could include tablet based on requirements
  
  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    shouldUseMobileUI,
  };
}

// Client-side device detection using screen size and User-Agent
export function detectDeviceFromBrowser(): DeviceInfo {
  if (typeof window === 'undefined') {
    // Fallback for SSR
    return {
      deviceType: 'desktop',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      shouldUseMobileUI: false,
    };
  }
  
  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;
  
  let deviceType: DeviceType = 'desktop';
  
  // Check for mobile devices
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
  // Determine device type based on screen width and user agent
  if (isMobileUA || width <= 768) {
    if (width <= 480) {
      deviceType = 'mobile';
    } else if (width <= 1024) {
      deviceType = 'tablet';
    }
  }
  
  // Special handling for iPad (which reports as desktop in some cases)
  if (/ipad/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    deviceType = 'tablet';
  }
  
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop';
  const shouldUseMobileUI = isMobile || (isTablet && width <= 768);
  
  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    shouldUseMobileUI,
  };
}