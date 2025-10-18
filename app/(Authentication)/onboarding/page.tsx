"use client";

import { Landmark, Clock, User, Shield, MoveHorizontal, Wallet, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function OnBoarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [age, setAge] = useState("");

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      router.push("/loading");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-muted to-background">
      <div className="max-w-md w-full bg-card border rounded-2xl shadow-lg p-6 text-center">
        
        {/* Step 1: User Info */}
        {step === 1 && (
          <>
            <div className="flex justify-center mb-1">
              <div className="p-2 rounded-full bg-accent">
                <Shield className="text-primary" size={22} />
              </div>
            </div>
            <h1 className="text-xl font-semibold mb-4">Ad Preferences</h1>
            <p className="text-muted-foreground text-sm mb-6">
              We personalize your experience based on your age and role.
            </p>

            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Button
                variant={userType === "student" ? "default" : "outline"}
                onClick={() => setUserType("student")}
              >
                Student
              </Button>
              <Button
                variant={userType === "worker" ? "default" : "outline"}
                onClick={() => setUserType("worker")}
              >
                Worker
              </Button>
            </div>

            {/* Age Input */}
            <Input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mb-6"
            />

            {/* Age Message */}
            {age && (
              <p className="text-xs text-muted-foreground mb-4">
                {Number(age) < 18
                  ? "Ads disabled for underage users."
                  : "Ads will be personalized for your age group."}
              </p>
            )}

            <Button
              onClick={handleNext}
              className="w-full"
              disabled={!userType || !age}
            >
              Next
            </Button>
          </>
        )}

        {/* Step 2: Bank Linking */}
        {step === 2 && (
          <>
            <div className="flex justify-center items-center gap-2 mb-1">
              <div className="p-2 rounded-full bg-accent">
                <Landmark className="text-primary" size={22} />
              </div>

              <ArrowRightLeft className="text-muted-foreground" size={20} strokeWidth={2}/>

              <div className="p-2 rounded-full bg-accent">
                <Wallet className="text-primary" size={22} />
              </div>
            </div>

            <h1 className="text-xl font-semibold mb-4">Bank Account Linking</h1>
            <p className="text-muted-foreground text-sm mb-6">
              Coming soon! You’ll soon be able to securely connect your bank for seamless tracking.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
              <Clock size={14} />
              <p className="text-xs">Feature in development</p>
            </div>
            <Button onClick={handleNext} className="w-full">
              Continue to Dashboard
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
