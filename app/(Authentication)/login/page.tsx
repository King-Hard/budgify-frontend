import SignIn from "@/components/Authentication/login"
import { Wallet } from "lucide-react";

export default function Login() {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 absolute inset-0 z-0 divide-x-2">
      <div className="hidden lg:inline min-h-screen w-full relative">
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "calc(100dvh - 20px)" }}
        >
          <div className="flex items-center gap-2">
            <Wallet size={42} className="mt-2" />
            <p className="text-5xl font-medium">BUDGIFY</p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100dvh - 20px)" }}
      >
        <SignIn />
      </div>
    </div>
  );
}
