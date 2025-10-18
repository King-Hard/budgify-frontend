"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  
  async function onboarding() {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 1000)

    return () => clearTimeout(timer);
  }

  return (
    <div className="">
      <div className="p-5 w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">
            Create Account
          </h1>
          <p className="text-base text-muted-foreground">
            Enter your information to get started
          </p>
        </div>

        <form className="mt-8">
          <div className="mt-4 flex items-center gap-4">
            <div className="w-full">
              <Label className="mb-2 text-base">First Name</Label>
              <Input
                type="text"
                placeholder="John Jersie"
                className="h-[44px] px-4"
              />
            </div>
            <div className="w-full">
              <Label className="mb-2 text-base">Last Name</Label>
              <Input
                type="text"
                placeholder="Santiago"
                className="h-[44px] px-4"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label className="mb-2 text-base">Email</Label>
            <Input
              type="email"
              placeholder="john@example.com"
              className="h-[44px] px-4"
            />
          </div>

          <div className="mt-4">
            <Label className="mb-2 text-base">Password</Label>
            <Input
              type="password"
              placeholder="Create a password"
              className="h-[44px] px-4"
            />
          </div>

          <div className="mt-4">
            <Label className="mb-2 text-base">Confrim password</Label>
            <Input
              type="password"
              placeholder="Confirm your password"
              className="h-[44px] px-4"
            />
          </div>

          <div className="mt-4 mb-4">
            <div className="flex items-center gap-1">
              <Checkbox defaultChecked className="mt-1"/>
              <p>I have read and agree to the</p>
              <div className="flex items-center gap-2">
                <span className="font-medium underline underline-offset-4 decoration-[1px]">Terms & Conditions</span>
                <div title={`By agreeing to these terms, you accept the \nrules and guidelines for using the Budgify.`}>
                  <Info size={14} className="mt-1" />
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={onboarding}
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 h-10 w-full text-sm font-medium text-primary-foreground transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Create account
          </Button>
        </form>
        
        <div className="flex items-center justify-center gap-1 mt-6">
          <h1 className="text-base text-foreground">Already have an account?</h1>
          <Link
            href="/login"
            className="text-primary hover:underline underline-offset-4 decoration-[1px] font-medium"
          >
            Sign in
          </Link> 
        </div>

      </div>
    </div>
  );
}