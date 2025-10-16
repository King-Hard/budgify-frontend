import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SiteHeader({isBudgetMode}) {
  return (
    <header className="flex items-center justify-between border-b px-2 py-4 ">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="ml-3"/>
        <h1 className="text-base">
          {isBudgetMode ? "Budget Mode" : "Online Mode"}
        </h1>   
      </div>
    </header>
  );
}

{/*<Separator orientation="vertical" className="mx-2 w-[10px] data-[orientation=vertical]:h-4" />*/}
