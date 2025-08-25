'use client';

import { createContext, useContext } from 'react';
import { type DeviceInfo } from '@/utils/deviceDetection';

const DeviceContext = createContext<DeviceInfo | null>(null);

interface DeviceProviderProps {
  children: React.ReactNode;
  deviceInfo: DeviceInfo;
}

export function DeviceProvider({ children, deviceInfo }: DeviceProviderProps) {
  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDeviceContext must be used within a DeviceProvider');
  }
  return context;
}