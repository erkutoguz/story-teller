"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_SIGN_IN_REDIRECT } from "@/routes";

export default function Social() {
  const onSubmit = async (provider) => {
    await signIn(provider, {
      redirectTo: DEFAULT_SIGN_IN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-center w-full gap-x-2 ">
      <button
        onClick={() => {
          onSubmit("google");
        }}
        className="size-8 w-40 flex justify-center rounded-lg items-center bg-white gap-2 py-2 px-6 hover:bg-slate-100 duration-200 opacity-90"
      >
        <FcGoogle className="w-5 h-5" />
      </button>
    </div>
  );
}
