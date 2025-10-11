import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SiteHeader() {
  return (
    <header className="flex items-center border-b px-2 py-4">
      <SidebarTrigger className="ml-1"/>
      <Separator orientation="vertical" className="mx-2 w-[10px] data-[orientation=vertical]:h-4" />
      <h1 className="text-base">Financial Dashboard</h1>
      <div>
              
        
        {/*<Separator orientation="vertical" className=" data-[orientation=vertical]:h-4" />
        <ModeToggle/>  */}      
      </div>
    </header>

  )
}