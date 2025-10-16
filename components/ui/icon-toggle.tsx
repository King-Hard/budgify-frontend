import { MoonIcon, SunIcon } from "lucide-react";

export default function ModeToggleRow({ theme }: { theme?: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
}
