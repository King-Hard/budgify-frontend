"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ArrowLeftRight, Bell, CircleQuestionMark, CircleUser, EllipsisVertical, LayoutDashboard, LogOut, Settings, Target, TrendingDown, TrendingUp, Wallet, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AppSidebar({isBudgetMode, onToggleBudgetMode}) {
  const [account, setAccount] = useState(false);
  const router = useRouter();

  async function login() {
    router.push("/login");
  }
  async function budgetMode() {
    onToggleBudgetMode?.();
  }
  
  return (
    <Sidebar className="">
      <SidebarHeader className="py-4 px-4 border-b border-accent">
        <div className="flex items-center gap-2">
          <Wallet size={20}/>
          <h1 className="text-lg font-medium">Budgify</h1>
        </div>
      </SidebarHeader>

      <SidebarContent className="">
        <h1 className="mt-4 text-[12px] text-primary px-4">NAVIGATION</h1>
        <SidebarGroup className="gap-1 ">
          <div className="hover:bg-accent p-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/dashboard"
              className="flex items-center gap-2 cursor-default"
            >
              <LayoutDashboard strokeWidth={1.5} size={18}/> 
              <p className="">Dashboard</p>
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/transaction"
              className="flex items-center gap-2 cursor-default"
            >
              <ArrowLeftRight strokeWidth={1.5} size={18}/> 
              <p className="">Transaction</p>
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/bill-reminder"
              className="flex items-center gap-2 cursor-default"
            >
              <Bell strokeWidth={1.5} size={18}/> 
              <p className="">Bill Reminder</p>
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/goal-tracker"
              className="flex items-center gap-2 cursor-default"
            >
              <Target strokeWidth={1.5} size={18}/> 
              <p className="text-[16px]">Goal Tracker</p>
            </Link>
          </div>
        </SidebarGroup>

        <div className="mt-4">
          <h1 className="mb-2 text-[12px] text-primary px-4">QUICK STATS</h1>
          <SidebarGroup className="gap-2">
            <div className="py-2 px-4 rounded-lg border">
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-muted-foreground text-sm">Income</h1>
                <TrendingUp strokeWidth={1.5} size={18} className="text-green-300"/>
              </div>
              <p className="font-medium text-xl">₱57,100</p>
            </div>

            <div className="py-2 px-4 rounded-lg border">
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-muted-foreground">Expenses</h1>
                <TrendingDown strokeWidth={1.5} size={18} className="text-red-300"/>
              </div>
              <p className="font-medium text-xl">₱29,200</p>
            </div>
          </SidebarGroup>
        </div>

        <SidebarGroup className="mt-19">
          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <div 
              className="flex items-center gap-2 cursor-default"
            >
              <Settings strokeWidth={1.5} size={18} className="mt-0.5"/> 
              <p className="">Settings</p>
            </div>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <div 
              className="flex items-center gap-2 cursor-default"
            >
              <CircleQuestionMark strokeWidth={1.5} size={18}/> 
              <p className="">Get Help</p>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter onClick={() => setAccount(!account)}>
        <div className={`rounded-lg p-2 transition-colors cursor-pointer ${account ? "bg-accent" : "hover:bg-accent"}`}>
          <div className="flex items-center gap-2">
            <Button size="icon" className="h-8 w-8 rounded-md" />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col leading-tight">
                <h1 className="text-[14px] font-medium leading-none mb-0.5">kuya pogi</h1>
                <p className="text-[13px] text-muted-foreground">m@example.com</p>
              </div>
              <EllipsisVertical strokeWidth={2} size={18}/>
            </div>
          </div>
        </div>
      </SidebarFooter>

      {account ? (
        <div 
          onClick={(e) => {if (e.target === e.currentTarget) setAccount(false)}}
          className="fixed top-65 right-99 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
        >
          <div className="border bg-accent w-[240px] rounded-lg">
            <div className="rounded-lg rounded-b-none px-2 py-3 border-b mb-2">
              <div className="flex items-center gap-2">
                <Button size="icon" className="h-8 w-8 rounded-md" />
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col leading-tight">
                    <h1 className="text-[14px] font-medium leading-none mb-0.5">kuya pogi</h1>
                    <p className="text-[13px] text-muted-foreground">m@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-1 px-1.5 border-b mb-2">
              <div
                onClick={budgetMode}
                className={`relative px-2.5 py-1.5 rounded-lg mb-1 cursor-pointer transition-colors ${
                  isBudgetMode
                    ? "bg-[#05c46b]/20 text-[#05c46b]"
                    : "bg-input text-foreground"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[14px]">Budget mode</p>

                  <div className="relative w-[42px] h-[22px]">
                    <div
                      className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                        isBudgetMode ? "bg-[#05c46b]" : "bg-muted"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] bg-white rounded-full shadow-md transition-transform duration-300 ${
                        isBudgetMode ? "translate-x-[20px]" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-input px-2.5 py-1.5 rounded-lg mb-2">
                <div className="flex items-center gap-2 cursor-default">
                  <CircleUser strokeWidth={1.5} size={16} className="mt-0.5"/> 
                  <p className="text-[14px]">Account</p>
                </div>
              </div>
            </div>

            <div className="mb-2 px-1.5">
              <div className="hover:bg-input px-2.5 py-1.5 rounded-lg">
                <div className="flex items-center gap-2 cursor-default">
                  <LogOut strokeWidth={1.5} size={16}/> 
                  <p 
                    onClick={(login)}
                    className="text-[14px]"
                  >
                    Log out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : (
        <>
        </>
      )}
    </Sidebar>
  );
}

