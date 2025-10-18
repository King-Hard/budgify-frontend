"use client";

import SiteHeader from "@/components/Budgify/budgify-header";
import { AppSidebar } from "@/components/Budgify/budgify-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function BudgifyLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [isBudgetMode, setIsBudgetMode] = useState(false);
  
  return (

    <SidebarProvider>
      <AppSidebar
        isBudgetMode={isBudgetMode}
        onToggleBudgetMode={() => setIsBudgetMode(!isBudgetMode)}
      />
        <div className="relative flex flex-col w-full h-screen overflow-hidden">
          <header className="fixed top-0 z-50 w-full">
            <SiteHeader isBudgetMode={isBudgetMode}/>
          </header>
          <main className="flex-1 p-5 pr-4 overflow-y-auto scroll-smooth mt-[62px] hide-scrollbar ">
            {children}
          </main>
        </div>
    </SidebarProvider>
  );
}
