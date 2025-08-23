"use client";
import { NavBar } from "antd-mobile";
import { useRouter } from "next/navigation";

export default function TopNavBar() {
  const router = useRouter();

  return <NavBar onBack={() => router.back()}></NavBar>;
}
