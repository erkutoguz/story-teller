import { Check } from "lucide-react";
import React from "react";

export default function FormSuccess({ message }) {
  if (!message) return null;
  return (
    <div className="bg-green-200 p-3 rounded-md flex items-center gap-x-2 text-sm text-success">
      <Check className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
