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
    { value: "allowance", label: "Allowance", icon: Wallet },
    { value: "salary", label: "Salary", icon: Briefcase },
    { value: "freelance", label: "Freelance", icon: Laptop },
    { value: "business", label: "Business", icon: Handshake },
    { value: "investment", label: "Investment", icon: SquaresExclude },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <div className="">
      {/* Title */}
      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Title</Label>
        <Input type="text" placeholder="Describe your income source" />
      </div>

      {/* Amount */}
      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Amount (₱)</Label>
        <Input type="number" placeholder="0.00" />
      </div>

      {/* Category Selector */}
      <div className="mb-3 relative">
        <Label className="font-normal mb-2 text-base text-foreground">Source</Label>
        <Button
          variant="outline"
          onClick={() => setOpen(!open)}
          className="w-full border rounded-md p-2.5 px-3 text-left flex justify-between items-center cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            {selectedCategory ? (
              <>
                <selectedCategory.icon size={16} className="text-green-500" />
                <span className="text-green-500">{selectedCategory.label}</span>
              </>
            ) : (
              <span>Select income source</span>
            )}
          </div>
          <span className="text-gray-300">
            {open ? <ChevronUp /> : <ChevronDown />}
          </span>
        </Button>

        {open && (
          <ul className="absolute z-10 mt-1 bg-accent w-full border rounded-md shadow-md max-h-60 overflow-auto hide-scrollbar scroll-smooth">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory?.value === category.value;

              return (
                <li
                  key={category.value}
                  className={`px-3 py-2 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200
                    ${isSelected ? "text-green-500 font-medium" : "text-foreground hover:font-medium"}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  <Icon
                    size={16}
                    className={`transition-colors duration-200 ${
                      isSelected ? "text-green-500" : "text-muted-foreground"
                    }`}
                  />
                  {category.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4" onClick={Add}>
        Add Income
      </Button>
    </div>
  );
}
