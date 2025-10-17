"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Handshake,
  Laptop,
  PlusCircle,
  SquaresExclude,
  Wallet,
} from "lucide-react";
import toast from "react-hot-toast";

export default function AddIncome() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);
  function Add() {
    toast.success("Income added successfully!");
  }

  const categories = [
    { value: "allowance", label: "Allowance", icon: <Wallet size={16} strokeWidth={2} /> },
    { value: "salary", label: "Salary", icon: <Briefcase size={16} strokeWidth={2} /> },
    { value: "freelance", label: "Freelance", icon: <Laptop size={16} strokeWidth={2} /> },
    { value: "business", label: "Business", icon: <Handshake size={16} strokeWidth={2} /> },
    { value: "investment", label: "Investment", icon: <SquaresExclude size={16} strokeWidth={2} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <div className="">
      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Title</Label>
        <Input
          type="text"
          placeholder="Describe your income source"
        />
      </div>

      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Amount (₱)</Label>
        <Input
          type="number"
          placeholder="0.00"
        />
      </div>

      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Source</Label>
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
              <span className="">Select income source</span>
            )}
          </div>
          <span className="text-gray-300">{open ? <ChevronUp/> : <ChevronDown />}</span>
        </Button>

        {open && (
          <ul className="absolute z-10 mt-1 bg-accent w-[373.5px] border rounded-md shadow-md max-h-60 overflow-auto hide-scrollbar scroll-smooth">
            {categories.map((category) => (
              <li
                key={category.value}
                className="px-3 py-2 hover:text-green-500 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200"
                onClick={() => handleCategorySelect(category)}
              >
                {category.icon}
                {category.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button 
        className="w-full mt-4"
        onClick={(Add)}
      >
        Add Income
      </Button>
    </div>
  );
}