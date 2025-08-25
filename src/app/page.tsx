'use client';

import ResponsiveLayout from '@/components/ResponsiveLayout';
import MobileHomePage from '@/components/pages/MobileHomePage';
import DesktopHomePage from '@/components/pages/DesktopHomePage';

export default function Home() {
  return (
    <ResponsiveLayout 
      mobileComponent={<MobileHomePage />}
      desktopComponent={<DesktopHomePage />}
    />
  );
}
