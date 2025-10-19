import AddBill from "@/components/BillComponents/add-bill";
import { Banknote, CircleCheck, CircleCheckBig, Clock, Droplet, House, Laptop, PiggyBank, Plus, ReceiptText, TrendingDown, TrendingUp, TriangleAlert, Tv, Wallet, Wifi, Zap } from "lucide-react";

export default function BillReminder() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Paid</h1>
            <CircleCheckBig size={16} strokeWidth={2} className="text-green-500"/>
          </div>

          <p className="text-2xl font-medium">2</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Overdue</h1>
            <TriangleAlert size={16} strokeWidth={2} className="text-yellow-500"/>
          </div>

          <p className="text-2xl font-medium">2</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Upcoming Bills</h1>
            <Clock size={16} strokeWidth={2} className="text-orange-500"/>
          </div>

          <p className="text-2xl font-medium">₱4,000</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Bills</h1>
            <ReceiptText size={16} strokeWidth={2} className="text-violet-500"/>
          </div>

          <p className="text-2xl font-medium">6</p>
        </div>
      </div>

      <div className="border p-5 mt-5 rounded-lg bg-card">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg">Your Bills Overview</h1>
            <p className="text-muted-foreground">Manage all your upcoming and paid bills in one place</p>
          </div>
          
          <AddBill/>
        </div>

        <div>
          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <Zap className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Electric Bill</h1>
                <p className="text-sm text-muted-foreground">Due: 8/2/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱2,500</h1>
              <p className="text-[14px] text-orange-500">3 days left</p> 
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <Wifi className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Internet Bill</h1>
                <p className="text-sm text-muted-foreground">Due: 7/29/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱1,500</h1>
              <p className="text-[14px] text-orange-500">8 days left</p>
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <Banknote className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Loan Payment</h1>
                <p className="text-sm text-muted-foreground">Due: 7/16/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱5,000</h1>
                <h1 className="text-[14px] text-yellow-500">2 days overdue</h1>
                
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <House className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>House Rent</h1>
                <p className="text-sm text-muted-foreground">Due: 7/2/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱3,000</h1>
              <p className="text-[14px] text-green-500">Paid this month</p>  
            </div>
          </div>

          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <Tv className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Netflix</h1>
                <p className="text-sm text-muted-foreground">Due: 6/24/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱300</h1>
              <p className="text-[14px] text-green-500">Paid this month</p>
            </div>
          </div>
          
          <div className="p-4 rounded-lg mt-3 border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-violet-500 rounded-md">
                <Droplet className="text-violet-500" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Water Bill</h1>
                <p className="text-sm text-muted-foreground">Due: 5/11/2025</p>
              </div>
            </div>
            <div>
              <h1 className="text-right font-medium">₱2,000</h1>
              <p className="text-[14px] text-yellow-500">6 days overdue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}