"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center gap-6 p-6">
        <p className="font-medium md:text-xl md:font-semibold">
          Something went wrong
        </p>

        <p className="text-red-500">{error?.message}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="" onClick={reset}>
            Refresh
          </button>
          <Link href="/" className="">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
