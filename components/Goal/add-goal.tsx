"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Landmark, Plus, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Handshake,
  House,
  Laptop,
  Plane,
  PlusCircle,
  ShieldAlert,
} from "lucide-react";
import toast from "react-hot-toast";

export default function AddGoal() {
  const [addGoal, setAddGoal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  function Add() {
    toast.success("Goal added successfully!");
  }

  const categories = [
    { value: "technology", label: "Technology", icon: <Laptop size={16} /> },
    { value: "travel", label: "Travel", icon: <Plane size={16} /> },
    { value: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { value: "emergency", label: "Emergency Fund", icon: <ShieldAlert size={16} /> },
    { value: "business", label: "Business", icon: <Handshake size={16} /> },
    { value: "home", label: "Real State", icon: <Landmark size={16} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="outline"
        onClick={() => setAddGoal(!addGoal)}
        className={`border-transparent hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all ${addGoal ? "border-input ring-2 ring-ring ring-offset-1" : ""}`}
      >
        <Plus size={16} strokeWidth={3}/>
        Add Goal
      </Button>

      {addGoal ? (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setAddGoal(false);
          }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
        >
          <div className="bg-accent p-5 border rounded-lg w-[50%]">
            <div className="mb-4 flex justify-between">
              <div className="">
                <h1 className="text-lg">Add New Goal</h1>
                <p className="text-muted-foreground">Set a new savings target to work towards</p>
              </div>
              <Button 
                size="icon"
                variant="outline"
                onClick={() => setAddGoal(false)}
              >
                <X strokeWidth={3}/>
              </Button>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="">
                <Label className="font-normal mb-2 text-base text-foreground">Goal Name</Label>
                <Input
                  type="text"
                  placeholder="Electric Bill"
                />
              </div>

              <div className="">
                <Label className="font-normal mb-2 text-base text-foreground">Target Amount (₱)</Label>
                <Input
                  type="number"
                  placeholder="0.00"
                />
              </div>

              <div className="">
              <Label className="font-normal mb-2 text-base text-foreground">Category</Label>
                <Button
                  variant="outline"
                  onClick={() => setOpen(!open)}
                  className="w-full border rounded-md p-2.5 px-3 text-left flex justify-between items-center cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    {selectedCategory ? (
                      <>
                        {selectedCategory.icon}
                        {selectedCategory.label}
                      </>
                    ) : (
                      <span className="">Select a category</span>
                    )}
                  </div>
                  <span className="text-gray-300">{open ? <ChevronUp/> : <ChevronDown />}</span>
                </Button>

                {open && (
                  <ul className="absolute z-10 mt-1 bg-accent w-[357.5px] border rounded-md shadow-md max-h-60 overflow-auto hide-scrollbar scroll-smooth">
                    {categories.map((category) => (
                      <li
                        key={category.value}
                        className="px-3 py-2 hover:text-orange-500 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category.icon}
                        {category.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="">
                <Label className="font-normal mb-2 text-base text-foreground">Target Date</Label>
                <Input
                  type="date"
                  placeholder="0.00"
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full mt-6"
              onClick={(Add)}
            >
              Add Goal
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}