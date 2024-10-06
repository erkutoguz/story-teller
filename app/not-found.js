import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/public/assets/not-found.jpg";

export default function NotFound() {
  return (
    <section className="relative bg-base-100 text-base-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
      <div className=" bg-white rounded-xl w-[500px] h-[500px]">
        <Image src={notFoundImage} alt="tree-of-life" />
      </div>
      <p className="text-lg md:text-xl font-semibold">
        This page doesn&apos;t exist
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn btn-outline">
          <Home />
          Home
        </Link>
      </div>
    </section>
  );
}
