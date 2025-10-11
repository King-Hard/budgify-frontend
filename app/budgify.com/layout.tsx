import SiteHeader from "@/components/Budgify/budgify-header";
import { AppSidebar } from "@/components/Budgify/budgify-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BudgifyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar/>
          <div className="flex flex-col w-full">
            <SiteHeader/>
            <main className="flex-1 p-5 overflow-y-auto">
              {children}
            </main>
          </div>
      </SidebarProvider>
    </div>
  );
}
