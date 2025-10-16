"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import ModeToggleRow from "./icon-toggle";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer hover:bg-input px-2.5 py-1.5 rounded-lg mb-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <ModeToggleRow theme={theme} />
      <p className="text-[14px] select-none">Mode toggle</p>
    </div>
  );
}