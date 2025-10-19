"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function AddFunds() {
    const [funds, setFunds] = useState(false);
    function Add() {
      toast.success("Funds added successfully!");
    }

  return (
    <div>
      <Button 
        onClick={() =>setFunds(true)}
        className="w-full mt-4"
      >
        Add Funds
      </Button>

      {funds ? (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setFunds(false);
            }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
          >
            <div className="bg-gradient-to-br from-muted to-background p-6 rounded-lg border">
              <div className="mb-4">
                <h1 className="text-lg ">Add Funds</h1>
                <p className="text-muted-foreground text-sm text-center">Keep adding funds and reach your goals faster</p>
              </div>

              <div className="mb-4">
                <Label className="font-normal mb-2 text-base text-foreground">Amount (₱)</Label>
                <Input
                  type="number"
                  placeholder="0.00"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() =>setFunds(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={(Add)}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
    </div>
  )
}