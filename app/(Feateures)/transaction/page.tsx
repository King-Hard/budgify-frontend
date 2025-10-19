"use client";

import AddExpense from "@/components/TransactionComponents/add-expense";
import AddIncome from "@/components/TransactionComponents/add-income";
import { Cross, Gamepad2, GraduationCap, MinusCircle, PlusCircle, ReceiptText, ShoppingCart, User, Utensils } from "lucide-react";
import { useState } from "react";

export default function Transaction() {
  const [transaction, setTransaction] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-5 items-start">
      <div className="border p-5 bg-card rounded-lg max-w-[415px] w-full">
        <div className="">
          <h1 className="text-lg">New Transaction</h1>
          <p className="text-muted-foreground">Track where your money goes</p>
        </div>

        <div className="border flex justify-around p-1.5 f gap-2 rounded-sm mb-4 mt-4">
          <button
            className={
              transaction
                ? `flex items-center justify-center gap-2 p-1 border border-red-500 rounded-sm w-1/2 cursor-pointer transition-all duration-200`
                : "flex items-center justify-center gap-2 p-1 rounded-sm w-1/2 cursor-pointer"
            }
            type="button"
            onClick={() => setTransaction(true)}
          >
            <MinusCircle className="text-red-500" size={16} strokeWidth={2}/>
            <h1 className="text-sm">Expense</h1>
          </button>
          <button
            className={
              !transaction
                ? `flex items-center justify-center gap-2 p-1 border border-green-500 rounded-sm w-1/2 cursor-pointer transition-all duration-200`
                : "flex items-center justify-center gap-2 p-1  rounded-sm w-1/2 cursor-pointer"
            }
            type="button"
            onClick={() => setTransaction(false)}
          >
            <PlusCircle className="text-green-500" size={16} strokeWidth={2}/>
            <h1 className="text-sm">Income</h1>
          </button>
        </div>

        {transaction ? (
          <AddExpense/>
        ) : (
          <AddIncome/>
        )}
      </div>

      <div className="border bg-card p-5 rounded-lg max-w-[415px] w-full">
        <div className="mb-2.5">
          <h1 className="text-lg">Spending Limits</h1>
          <p className="text-muted-foreground">Track your remaining budget per category.</p>
        </div>

        <div className="gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <Utensils className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Daily Meals</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-red-500 w-[85%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱50 left of ₱300</h1>       
                  <p className="text-red-500 text-[12px]">85% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <ReceiptText className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Bill & Utilities</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-red-500 w-[55%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱8,000 left of ₱15,000</h1>       
                  <p className="text-red-500 text-[12px]">55% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <Cross className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Healthcare</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-green-500 w-[0%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱50,000 left of ₱50,000</h1>       
                  <p className="text-green-500 text-[12px]">0% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <GraduationCap className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Education</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-green-500 w-[20%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱8,000 left of ₱10,000</h1>       
                  <p className="text-green-500 text-[12px]">20% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <User className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Personal Needs</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-green-500 w-[45%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱1,100 left of ₱2,000</h1>       
                  <p className="text-green-500 text-[12px]">45% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 border rounded-md mb-1">
              <Gamepad2 className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Entertainment</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-red-500 w-[70%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱300 left of ₱1,000</h1>       
                  <p className="text-red-500 text-[12px]">70% used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 border rounded-md mb-1">
              <ShoppingCart className="" size={20} strokeWidth={2}/>
            </div>
            <div className="w-full">
              <h1>Groceries</h1>
              <div className="">
                <div className="bg-accent h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-green-500 w-[50%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱2,500 left of ₱5,000</h1>       
                  <p className="text-green-500 text-[12px]">50% used</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="">

      </div>
    </div>
  );
}