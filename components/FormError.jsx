import { TriangleAlert } from "lucide-react";
import React from "react";

export default function FormError({ message }) {
  if (!message) return null;
  return (
    <div className="bg-red-200 p-3 rounded-md flex items-center gap-x-2 text-sm text-error">
      <TriangleAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
