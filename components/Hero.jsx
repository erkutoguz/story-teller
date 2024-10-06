import React from "react";
import Logo from "@/public/assets/HeroImage.webp";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span>Generate stories about everything</span>
          <span>with the power of </span>
          <span className="bg-base-content py-2 px-4 text-neutral relative">
            AI Model
          </span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Tell stories about whatever you want to your friends, your children,
          and your lover. Just one click and get your story!
        </p>
        <Link
          href="/sign-in"
          className="btn btn-primary w-56 text-white text-base tracking-wide"
        >
          Get Started
        </Link>
      </div>
      <div className="w-full">
        <Image
          src={Logo}
          alt="story-teller-hero-image"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
