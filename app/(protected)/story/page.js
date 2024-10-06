import StoryList from "@/components/story/StoryList";
import React from "react";

export default function StoryPage() {
  return (
    <div className="max-w-7xl mx-auto mt-6 rounded-xl flex flex-col items-center justify-center gap-4 lg:gap-6 px-8 py-8 lg:py-12 bg-slate-100">
      <div>
        <p className="font-bold text-neutral text-xl">Your Stories</p>
      </div>
      <div className="divider divider-neutral"></div>
      <div>
        <StoryList />
      </div>
    </div>
  );
}
