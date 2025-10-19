"use client";

import { EditIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export default function ChangeBudget() {
  const [edit, setEdit] = useState(false);
  function Add() {
    toast.success("Budget updated successfully!");
  }

  return (
    <div className="">
      <div
        onClick={() => setEdit(!edit)}
        className={`p-1 rounded bg-accent border-transparent hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all ${edit ? "border-input ring-2 ring-ring ring-offset-1" : ""}`}
      >
        <EditIcon size={16} strokeWidth={2} />
      </div>

      {edit ? (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setEdit(false);
          }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
        >
          <div className="bg-gradient-to-br from-muted to-background p-6 rounded-lg border">
            <div className="mb-4">
              <h1 className="text-lg">Recommended budget ₱20,000</h1>
              <p className="text-muted-foreground text-sm text-center">Stay within budget and let your savings grow</p>
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
                onClick={() =>setEdit(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={(Add)}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
