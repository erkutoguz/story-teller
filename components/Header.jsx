import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import { doLogout } from "@/actions/sign-out";
import { currentUser } from "@/libs/auth";

export default async function Header() {
  const user = await currentUser();

  return (
    <header className="max-w-7xl flex items-center mx-auto py-2 px-4 ">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="story-teller-logo"
          width={70}
          className="rounded-xl"
        />
      </Link>
      <div className="w-full justify-center flex items-center gap-4 md:gap-12 opacity-90">
        {user && <Link href="/dashboard">Dashboard</Link>}
        {user && <Link href="/story">Stories</Link>}
        <Link href={"/about"}>About Me</Link>
      </div>

      {!user && (
        <Link
          href="/sign-in"
          className="w-36 btn btn-accent font-normal tracking-wide"
        >
          Sign In
        </Link>
      )}
      {user && (
        <div className="">
          <form
            action={async () => {
              "use server";
              await doLogout();
            }}
          >
            <button
              type="submit"
              className="btn btn-primary text-white group w-36"
            >
              Sign Out
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
