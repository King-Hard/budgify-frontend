"use client";

import { Wallet } from "lucide-react"
import { useEffect } from "react"

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/budgify/dashboard"
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className="flex items-center justify-center"
      style={{ minHeight: "calc(100dvh - 20px)" }}
    >
      <div className="">
        <div className="flex items-center gap-2">
          <Wallet size={40} className="mt-2"/>
          <p className="text-5xl font-medium">BUDGIFY</p>
        </div>

        <div className="text-center mt-4 text-lg font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
}