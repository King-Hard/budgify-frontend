"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  ChevronDown,
  ChevronUp,
  Cross,
  Gamepad2,
  GraduationCap,
  MinusCircle,
  ReceiptText,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react";
import { Button } from "../ui/button";

export default function AddExpense() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  const categories = [
    { value: "food", label: "Daily Meals", icon: <Utensils size={16} strokeWidth={2} /> },
    { value: "utility", label: "Bills & Utilities", icon: <ReceiptText size={16} strokeWidth={2} /> },
    { value: "healthcare", label: "Healthcare", icon: <Cross size={16} strokeWidth={2} /> },
    { value: "education", label: "Education", icon: <GraduationCap size={16} strokeWidth={2} /> },
    { value: "personal", label: "Personal Needs", icon: <User size={16} strokeWidth={2} /> },
    { value: "entertainment", label: "Entertainment", icon: <Gamepad2 size={16} strokeWidth={2} /> },
    { value: "grocery", label: "Groceries", icon: <ShoppingCart size={16} strokeWidth={2} /> },
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
          placeholder="What did you spend on?"
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
          <ul className="absolute z-10 mt-1 bg-accent w-[373.5px] border rounded-md shadow-md max-h-60 overflow-auto hide-scrollbar scroll-smooth">
            {categories.map((category) => (
              <li
                key={category.value}
                className="px-3 py-2 hover:text-red-500 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200"
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
        type="submit"
        className="w-full mt-4"
      >
        Add Expense
      </Button>
    </div>
  );
}