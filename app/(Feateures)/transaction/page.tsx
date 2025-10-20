"use client";

import AddExpense from "@/components/TransactionComponents/add-expense";
import AddIncome from "@/components/TransactionComponents/add-income";
import { Cross, Gamepad2, GraduationCap, MinusCircle, PlusCircle, ReceiptText, ShoppingCart, User, Utensils } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

export default function Transaction() {
  const [transaction, setTransaction] = useState(true);

  const expenseData = [
    { name: "Daily Meals", value: 250, color: "#f87171", icon: <Utensils size={14} /> },          // red-400
    { name: "Bills & Utilities", value: 3000, color: "#facc15", icon: <ReceiptText size={14} /> }, // yellow-400
    { name: "Healthcare", value: 2000, color: "#f472b6", icon: <Cross size={14} /> },              // pink-400
    { name: "Education", value: 2000, color: "#60a5fa", icon: <GraduationCap size={14} /> },       // blue-400
    { name: "Personal Needs", value: 900, color: "#a78bfa", icon: <User size={14} /> },           // purple-400
    { name: "Entertainment", value: 700, color: "#4ade80", icon: <Gamepad2 size={14} /> },        // green-400
    { name: "Groceries", value: 2500, color: "#fb923c", icon: <ShoppingCart size={14} /> },       // orange-400
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
      <div className="border p-5 bg-card rounded-lg">
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

      <div className="border bg-card p-5 rounded-lg">
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
                  <div className="h-2 rounded-full bg-red-500 w-[15%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱12,000 left of ₱15,000</h1>       
                  <p className="text-red-500 text-[12px]">15% used</p>
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
                  <div className="h-2 rounded-full bg-green-500 w-[5%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="text-[12px] text-muted-foreground">₱48,000 left of ₱50,000</h1>       
                  <p className="text-green-500 text-[12px]">5% used</p>
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

      <div className="border bg-card p-5 rounded-lg">
        <div className="mb-2.5">
          <h1 className="text-lg">Spending Breakdown</h1>
          <p className="text-muted-foreground">View your expenses in a visual, color-coded chart.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {expenseData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex items-center gap-1">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}