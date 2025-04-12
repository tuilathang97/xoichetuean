"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background.webp"
          alt="Mâm cúng Tuệ An hình nền"
          fill
          priority
          className="object-cover brightness-100 saturate-110"
        />
        {/* Lighter overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* Cartoon-style container without white background */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute -top-8 left-10 text-6xl text-blue-800 opacity-80 transform rotate-12">★</div>
        <div className="absolute -bottom-8 right-10 text-6xl text-pink-800 opacity-80 transform -rotate-12">★</div>
        <div
          className="p-10 md:p-16 text-center rounded-[2rem]"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl md:text-6xl drop-shadow-md">
              Mâm cúng Tuệ An
            </h1>
            <p className="text-xl text-indigo-950 font-medium md:text-2xl drop-shadow-sm">
              Đầy đủ lễ vật - đa dạng món ăn - đúng phong tục
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-indigo-800 text-white hover:bg-indigo-700 rounded-full px-8 py-6 font-bold text-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-indigo-600"
                asChild
              >
                <Link href="/booking">ĐẶT NGAY - GIẢM 10%</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
