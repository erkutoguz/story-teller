"use client";

import config from "@/config";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LucideGoal } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function CheckoutButton({ paymentLink }) {
  const router = useRouter();
  //user session'dan user email al yoksa email logine'e yönlendir
  const user = useCurrentUser();

  const handleCheckout = () => {
    if (!user) {
      return router.push("/sign-in");
    }
    router.push(`${paymentLink}?prefilled_email=${user.email}`);
  };

  return (
    <button
      onClick={handleCheckout}
      className="btn bg-[hsl(43,100%,55%)] hover:bg-[hsl(43,100%,60%)] text-neutral group btn-wide plausible-event-name=Checkout"
    >
      <LucideGoal /> Get {config.appName}
    </button>
  );
}
