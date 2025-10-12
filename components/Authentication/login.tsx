"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  
  async function loading() {
    router.push("/loading");
  }

  return (
    <div className="">
      <div className="p-5 w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2 text-foreground">
            Welcome back!
          </h1>
          <p className="text-base text-muted-foreground">
            Log in to continue your account
          </p>
        </div>

        <form className="mt-8">
          <div className="mt-4">
            <Label className="mb-2 text-base text-foreground">Email</Label>
            <Input
              type="email"
              placeholder="name@example.com"
              className="h-[44px] px-4 border border-border"
            />
          </div>

          <div className="mt-4">
            <Label className="mb-2 text-base text-foreground">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-[44px] px-4 border border-border"
            />
          </div>

          <div className="font-medium cursor-pointer flex items-center justify-end mt-4 mb-4 text-primary hover:underline underline-offset-4 decoration-[1px]">
            Forgot password?
          </div>

          <Button
            onClick={(loading)}
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 h-10 w-full text-sm font-medium text-primary-foreground transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Log in
          </Button>
        </form>

        <div className="flex items-center justify-center gap-1 mt-6">
          <h1 className="">Don't have an account?</h1>
          <Link
            href="register"
            className="hover:underline underline-offset-4 decoration-[1px] font-medium"
          >
            Sign up 
          </Link> 
        </div>

        <div className="flex items-center justify-center gap-1 mt-6">
          <p className="font-normal">Need help?</p>
          <span className="cursor-pointer font-medium hover:underline underline-offset-4 decoration-[1px]">
            Contact us
          </span>
          
        </div>
      </div>
    </div>
  );
}
