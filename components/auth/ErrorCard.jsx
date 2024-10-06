import { TriangleAlert } from "lucide-react";
import React from "react";
import CardWrapper from "./CardWrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Something went wrong!"
      backButtonHref="/sign-in"
      backButtonLabel="Back to sign in"
    >
      <div className="flex justify-center items-center text-error">
        <TriangleAlert className="h-8 w-8" />
      </div>
    </CardWrapper>
  );
}
