"use client";

import AddFunds from "@/components/GoalComponents/add-funds";
import AddGoal from "@/components/GoalComponents/add-goal";
import { Calendar, ChartNoAxesColumnIncreasing, CircleCheckBig, Goal, GraduationCap, HandCoins, Handshake, Hourglass, House, Landmark, Laptop, PiggyBank, Plane, ShieldAlert, Target, TrendingUp, Trophy } from "lucide-react";

export default function GoalTracker() {
  
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Saved</h1>
            <HandCoins size={16} strokeWidth={2} className="text-green-500"/>
          </div>

          <p className="text-2xl font-medium">₱1,280,000</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Completed Goals</h1>
            <Trophy size={16} strokeWidth={2} className="text-violet-500"/>
          </div>

          <p className="text-2xl font-medium">4</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Overall Progress</h1>
            <ChartNoAxesColumnIncreasing size={16} strokeWidth={2} className="text-yellow-500"/>
          </div>

          <p className="text-2xl font-medium">90%</p>
        </div>

        <div className="border bg-card p-5 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-muted-foreground">Total Goals</h1>
            <Target size={16} strokeWidth={2} className="text-orange-500"/>
          </div>

          <p className="text-2xl font-medium">6</p>
        </div>
      </div>

      <div className="border p-5 mt-5 rounded-lg bg-card">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg">Keep Saving</h1>
            <p className="text-muted-foreground">Every step brings you closer to your goals</p>
          </div>
          
          <AddGoal/>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <Laptop className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>New Laptop</h1>
                <p className="text-sm text-muted-foreground">Technology</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-green-500 border bg-accent font-medium px-2 rounded-sm">100%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-green-500 w-[100%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-green-500 font-medium">₱50,000</h1>
                <p className="text-muted-foreground">₱50,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <CircleCheckBig size={16} strokeWidth={2} className="text-green-500"/>
                <h1 className="">Completed</h1>
                <p className="text-sm text-muted-foreground">goal achieved</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="">Remaining</h1>
                <p className="text-sm text-muted-foreground">₱0</p>
              </div>
            </div>

            <AddFunds/>
          </div>

          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <Plane className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Vacation to Japan</h1>
                <p className="text-sm text-muted-foreground">Travel</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-green-500 border bg-accent font-medium px-2 rounded-sm">100%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-green-500 w-[100%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-green-500 font-medium">₱80,000</h1>
                <p className="text-muted-foreground">₱80,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <CircleCheckBig size={16} strokeWidth={2} className="text-green-500"/>
                <h1 className="">Completed</h1>
                <p className="text-sm text-muted-foreground">goal achieved</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="">Remaining</h1>
                <p className="text-sm text-muted-foreground">₱0</p>
              </div>
            </div>

            <AddFunds/>
          </div>

          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <GraduationCap className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Tuition for NU</h1>
                <p className="text-sm text-muted-foreground">Education</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-green-500 border bg-accent font-medium px-2 rounded-sm">25%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-green-500 w-[25%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-green-500 font-medium">₱50,000</h1>
                <p className="text-muted-foreground">₱200,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Calendar size={16} strokeWidth={2}/>
                <h1 className="text-muted-foreground">Days left</h1>
                <p className="text-sm">123</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="text-muted-foreground">Remaining</h1>
                <p className="text-sm">₱150,000</p>
              </div>
            </div>

            <AddFunds/>
          </div>

          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <ShieldAlert className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Backup Funds</h1>
                <p className="text-sm text-muted-foreground">Emergency</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-yellow-500 border bg-accent font-medium px-2 rounded-sm">80%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-yellow-500 w-[80%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-yellow-500 font-medium">₱40,000</h1>
                <p className="text-muted-foreground">₱50,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Calendar size={16} strokeWidth={2}/>
                <h1 className="">10 days ago</h1>
                <p className="text-sm text-yellow-500">overdue</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="">Remaining</h1>
                <p className="text-sm text-muted-foreground">₱10,000</p>
              </div>
            </div>

            <AddFunds/>
          </div>

          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <Handshake className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>Computer Shop</h1>
                <p className="text-sm text-muted-foreground">Business</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-yellow-500 border bg-accent font-medium px-2 rounded-sm">60%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-yellow-500 w-[60%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-yellow-500 font-medium">₱60,000</h1>
                <p className="text-muted-foreground">₱100,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Calendar size={16} strokeWidth={2}/>
                <h1 className="">22 days ago</h1>
                <p className="text-sm text-yellow-500">overdue</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="">Remaining</h1>
                <p className="text-sm text-muted-foreground">₱40,000</p>
              </div>
            </div>

            <AddFunds/>
          </div>

          <div className={`p-5 rounded border hover:border-input hover:ring-2 hover:ring-ring hover:ring-offset-1 transition-all`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 border rounded-md">
                <Landmark className="" size={20} strokeWidth={2}/>
              </div>
              <div>
                <h1>New House</h1>
                <p className="text-sm text-muted-foreground">Real state</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h1>Progress</h1>
                <p className="text-sm text-green-500 border bg-accent font-medium px-2 rounded-sm">100%</p>
              </div>
              <div className=" bg-accent h-2 rounded-full mt-2">
                <div className="h-2 rounded-full bg-green-500 w-[100%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-green-500 font-medium">₱1,000,000</h1>
                <p className="text-muted-foreground">₱1,000,000</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <CircleCheckBig size={16} strokeWidth={2} className="text-green-500"/>
                <h1 className="">Completed</h1>
                <p className="text-sm text-muted-foreground">goal achieved</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center border p-5 rounded">
                <Hourglass size={16} strokeWidth={2}/>
                <h1 className="">Remaining</h1>
                <p className="text-sm text-muted-foreground">₱0</p>
              </div>
            </div>

            <AddFunds/>
          </div>
        </div>
      </div>
    </div>
  );
}