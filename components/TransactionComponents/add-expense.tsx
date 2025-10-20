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
  ReceiptText,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export default function AddExpense() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  function Add() {
    toast.success("Expense added successfully!");
  }

  // ✅ same color palette as the pie chart
  const categories = [
    { value: "food", label: "Daily Meals", icon: Utensils, color: "text-red-400" },
    { value: "utility", label: "Bills & Utilities", icon: ReceiptText, color: "text-yellow-400" },
    { value: "healthcare", label: "Healthcare", icon: Cross, color: "text-pink-400" },
    { value: "education", label: "Education", icon: GraduationCap, color: "text-blue-400" },
    { value: "personal", label: "Personal Needs", icon: User, color: "text-purple-400" },
    { value: "entertainment", label: "Entertainment", icon: Gamepad2, color: "text-green-400" },
    { value: "grocery", label: "Groceries", icon: ShoppingCart, color: "text-orange-400" },
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
        <Input type="text" placeholder="What did you spend on?" />
      </div>

      {/* Amount */}
      <div className="mb-3">
        <Label className="font-normal mb-2 text-base text-foreground">Amount (₱)</Label>
        <Input type="number" placeholder="0.00" />
      </div>

      {/* Category Selector */}
      <div className="mb-3 relative">
        <Label className="font-normal mb-2 text-base text-foreground">Category</Label>
        <Button
          variant="outline"
          onClick={() => setOpen(!open)}
          className="w-full border rounded-md p-2.5 px-3 text-left flex justify-between items-center cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            {selectedCategory ? (
              <>
                <selectedCategory.icon
                  size={16}
                  className={selectedCategory.color}
                />
                <span className={selectedCategory.color}>{selectedCategory.label}</span>
              </>
            ) : (
              <span>Select a category</span>
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
                    ${isSelected ? `${category.color} font-medium` : "text-foreground hover:font-medium"}
                    hover:${category.color}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  <Icon
                    size={16}
                    className={`transition-colors duration-200 ${
                      isSelected ? category.color : "text-muted-foreground group-hover:text-foreground"
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
        Add Expense
      </Button>
    </div>
  );
}
