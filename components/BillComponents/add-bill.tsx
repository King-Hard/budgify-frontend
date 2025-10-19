"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Banknote,
  ChevronDown,
  ChevronUp,
  Droplet,
  House,
  PlusCircle,
  School,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import toast from "react-hot-toast";

export default function AddBill() {
  const [addBill, setAddBill] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  function Add() {
    toast.success("Bill added successfully!");
  }

  const categories = [
    { value: "electricity", label: "Electricity ", icon: <Zap size={16} strokeWidth={2} /> },
    { value: "water", label: "Water ", icon: <Droplet size={16} strokeWidth={2} /> },
    { value: "internet", label: "Internet", icon: <Wifi size={16} strokeWidth={2} /> },
    { value: "rent", label: "Rent", icon: <House size={16} strokeWidth={2} /> },
    { value: "loan", label: "Loan Payment", icon: <Banknote size={16} strokeWidth={2} /> },
    { value: "tuition", label: "Tuition Fee", icon: <School size={16} strokeWidth={2} /> },
    { value: "subscription", label: "Subsciption", icon: <Tv size={16} strokeWidth={2} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="outline"
        onClick={() => setAddBill(!addBill)}
        className={`border-transparent hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all ${addBill ? "border-input ring-2 ring-ring ring-offset-1" : ""}`}
      >
        <Plus size={16} strokeWidth={3}/>
        Add Bill
      </Button>

      {addBill ? (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setAddBill(false);
          }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
        >
          <div className="bg-gradient-to-br from-muted to-background p-6 rounded-lg border w-[50%]">
            <div className="mb-4 flex justify-between">
              <div className="">
                <h1 className="text-lg">Add New Bill</h1>
                <p className="text-muted-foreground">Set up a reminder for your upcoming bill</p>
              </div>
              <Button 
                size="icon"
                variant="outline"
                onClick={() => setAddBill(false)}
              >
                <X strokeWidth={3}/>
              </Button>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="">
                <Label className="font-normal mb-2 text-base text-foreground">Bill Name</Label>
                <Input
                  type="text"
                  placeholder="Electric Bill"
                />
              </div>

              <div className="">
                <Label className="font-normal mb-2 text-base text-foreground">Amount (₱)</Label>
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
                        className="px-3 py-2 hover:text-violet-500 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200"
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
                <Label className="font-normal mb-2 text-base text-foreground">Due Date</Label>
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
              Add Bill
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}