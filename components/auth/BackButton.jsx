import Link from "next/link";
import React from "react";

export default function BackButton({ label, href, props }) {
  return (
    <div
      className="flex items-center justify-center w-full gap-x-2 "
      {...props}
    >
      <Link className="w-fit hover:underline no-underline text-sm" href={href}>
        {label}
      </Link>
    </div>
  );
}
