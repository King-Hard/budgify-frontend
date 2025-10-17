import ChangeBudget from "@/components/DashboardComponets/change-budget";
import { Cross, EditIcon, Handshake, Laptop, PiggyBank, ReceiptText, SquaresExclude, TrendingDown, TrendingUp, Utensils, Wallet } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Income</h1>
            <TrendingUp size={16} strokeWidth={2} className="text-green-500"/>
          </div>

          <p className="text-2xl font-medium">₱40,000</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Expenses</h1>
            <TrendingDown size={16} strokeWidth={2} className="text-red-500"/>
          </div>

          <p className="text-2xl font-medium">₱13,350</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Savings</h1>
            <PiggyBank size={16} strokeWidth={2} className="text-violet-500"/>
          </div>

          <p className="text-2xl font-medium">₱26,650</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Budget Left</h1>
            <Wallet size={16} strokeWidth={2} className="text-blue-500"/>
          </div>

          <p className="text-2xl font-medium">₱46,650</p>
        </div>
      </div>  

      <div className="mt-5 p-5 border rounded-lg bg-card">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-lg">Monthly Budget Progress</h1>
            <ChangeBudget/>
          </div>
          <p className="text-muted-foreground">You've spent ₱13,350 of your ₱60,000 budget</p>
        </div>

        <div className=" bg-accent h-3 rounded-full mt-3 mb-2">
          <div className="h-3 rounded-full bg-green-500 w-[22.25%]"></div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground font-medium">₱13,350</p>
          <div className="bg-accent rounded-sm px-2">
            <h1 className="text-green-500 mb-0.5">22.25% used</h1>
          </div>
          <p className="text-muted-foreground font-medium">₱60,000</p>
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
        
        <div className="mt-4">
          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-red-500 rounded-md">
                <Cross className="text-red-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Maintanance</h1>
                <p className="text-sm text-muted-foreground">1 month ago</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium">-₱40,000</h1> 
              <p className="text-[14px] text-right text-red-500">healthcare</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-green-500 rounded-md">
                <Laptop className="text-green-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Capstone</h1>
                <p className="text-sm text-muted-foreground">2 months ago</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium">+₱5,000</h1>       
              <p className="text-[14px] text-right text-green-500">freelance</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-red-500 rounded-md">
                <ReceiptText className="text-red-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Electric Bill</h1>
                <p className="text-sm text-muted-foreground">1 month ago</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium">-₱1,000</h1>       
              <p className="text-[14px] text-right text-red-500">utility</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-green-500 rounded-md">
                <SquaresExclude className="text-green-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>ROI</h1>
                <p className="text-sm text-muted-foreground">1 month ago</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium">+₱20,000</h1>
              <p className="text-[14px] text-right text-green-500">investment</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-green-500 rounded-md">
                <Handshake className="text-green-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Selling Rice</h1>
                <p className="text-sm text-muted-foreground">1 month ago</p>
              </div>
            </div>
            <div>
              <h1 className=" font-medium">+₱10,000</h1>    
              <p className="text-[14px] text-right text-green-500">business</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-red-500 rounded-md">
                <Utensils className="text-red-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Groceries</h1>
                <p className="text-sm text-muted-foreground">1 month ago</p>
              </div>
            </div>
            <div>
              <h1 className="font-medium">-₱5,000</h1> 
              <p className="text-[14px] text-right text-red-500">grocery</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}