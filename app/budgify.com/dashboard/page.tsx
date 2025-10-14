import ChangeBudget from "@/components/DashboardComponets/change-budget";
import { EditIcon, PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Income</h1>
            <TrendingUp size={16} strokeWidth={2}/>
          </div>

          <p className="text-2xl font-medium">₱107,100</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Expenses</h1>
            <TrendingDown size={16} strokeWidth={2}/>
          </div>

          <p className="text-2xl font-medium">89,400</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Savings</h1>
            <PiggyBank size={16} strokeWidth={2}/>
          </div>

          <p className="text-2xl font-medium">₱17,700</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Budget Left</h1>
            <Wallet size={16} strokeWidth={2}/>
          </div>

          <p className="text-2xl font-medium">₱110,600</p>
        </div>
      </div>

      <div className="mt-5 p-5 border rounded-lg bg-card">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-lg">Monthly Budget Progress</h1>
            <ChangeBudget/>
          </div>
          <p className="text-muted-foreground">You've spent ₱89,400 of your ₱200,000 budget</p>
        </div>

        <div className=" bg-accent h-3 rounded-full mt-5 mb-5">
          <div className="h-3 rounded-full bg-green-500 w-1/2"></div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground font-medium">₱89,400</p>
          <div className="bg-accent rounded-sm px-2">
            <h1 className="text-green-300">45% used</h1>
          </div>
          <p className="text-muted-foreground font-medium">₱200,000</p>
        </div>
      </div>

      <div className="border bg-card rounded-lg p-5 mt-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg">Transaction History</h1>
            <p className="text-muted-foreground">Stay updated on your financial activity this month</p>
          </div>
          <div className="flex items-center">
            <div className="border px-3 py-1 text-center rounded-l-lg hover:bg-input transition-colors duration-200 cursor-default">
              Last 3 months
            </div>
            <div className="hidden sm:inline border px-3 py-1 text-center hover:bg-input transition-colors duration-200 cursor-default">
              Last 30 days
            </div>
            <div className="hidden sm:inline border px-3 py-1 text-center rounded-r-lg bg-input">
              Last 7 days
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}