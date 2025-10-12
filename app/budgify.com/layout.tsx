"use client";

import SiteHeader from "@/components/Budgify/budgify-header";
import { AppSidebar } from "@/components/Budgify/budgify-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function BudgifyLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [isBudgetMode, setIsBudgetMode] = useState(false);
  
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar
          isBudgetMode={isBudgetMode}
          onToggleBudgetMode={() => setIsBudgetMode(!isBudgetMode)}
        />
          <div className="flex flex-col w-full">
            <SiteHeader isBudgetMode={isBudgetMode}/>
            <main className="flex-1 p-5 overflow-y-auto">
              {children}
            </main>
          </div>
      </SidebarProvider>
    </div>
  );
}
