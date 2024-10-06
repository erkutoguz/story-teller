import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {process.env.APP_NAME}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {process.env.APP_DESCRIPTION}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - Erkut Oğuz
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center ">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link
                  href="/#pricing"
                  className="cursor-pointer hover:underline"
                >
                  Pricing
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="cursor-pointer hover:underline">
                  Term of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="cursor-pointer hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
