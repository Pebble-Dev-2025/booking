import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "../components/ThemeProvider";
import { DeviceProvider } from "../components/DeviceProvider";
import { detectDeviceFromUserAgent } from "../utils/deviceDetection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Booking",
  description: "Pebbble online booking system",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get user agent from headers for SSR device detection
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const deviceInfo = detectDeviceFromUserAgent(userAgent);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <DeviceProvider deviceInfo={deviceInfo}>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </DeviceProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
