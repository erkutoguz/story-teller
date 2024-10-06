import React from "react";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto mt-6 rounded-xl flex flex-col items-center justify-center gap-4 lg:gap-6 px-8 py-8 lg:py-12 bg-slate-100">
      <div>
        <p className="font-bold text-neutral text-xl">Create Story</p>
      </div>
      <div className="divider divider-neutral"></div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
