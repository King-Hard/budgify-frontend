import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ArrowLeftRight, Bell, LayoutDashboard, Target, Wallet } from "lucide-react"

export function AppSidebar() {
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
              Dashboard
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/transaction"
              className="flex items-center gap-2 cursor-default"
            >
              <ArrowLeftRight strokeWidth={1.5} size={18}/> 
              Transaction
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/bill-reminder"
              className="flex items-center gap-2 cursor-default"
            >
              <Bell strokeWidth={1.5} size={18}/> 
              Bill Reminder
            </Link>
          </div>

          <div className="hover:bg-accent px-2.5 py-1.5 rounded-lg">
            <Link 
              href="/budgify.com/goal-tracker"
              className="flex items-center gap-2 cursor-default"
            >
              <Target strokeWidth={1.5} size={18}/> 
              Goal Tracker
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent className="mb-35">
        <h1 className="text-[12px] text-primary px-4">QUICK STATS</h1>
        <SidebarGroup>
          hahaha
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        hahaha
      </SidebarFooter>
    </Sidebar>
  )
}