import React from "react";
import CreateStoryForm from "./story/CreateStoryForm";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-4 ">
      <CreateStoryForm />
    </div>
  );
}
