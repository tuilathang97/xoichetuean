"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  heroRef?: React.RefObject<HTMLElement>
}

export default function HeroBanner({ heroRef }: HeroBannerProps) {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background.webp"
          alt="Mâm cúng Tuệ An hình nền"
          fill
          priority
          className="object-cover brightness-100 saturate-110 my-0"
        />
        {/* Lighter overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* Cartoon-style container without white background */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div
          className="p-10 md:p-16 md:pt-0 text-center rounded-[2rem]"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-[rgb(185,64,64)] sm:text-5xl md:text-6xl drop-shadow-md">
              Mâm cúng 
              <span className="mt-4">
                <span className=""> Tuệ</span> <span className="text">An</span>
              </span>
            </h1>
            {/* Image Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <Image
                src="/babies.png"
                alt="Mâm cúng Tuệ An"
                width={400}
                height={200}
                className="rounded-lg w-full"
              />
            </motion.div>
            {/* <p className="text-xl text-[#F16767] font-medium md:text-2xl drop-shadow-sm">
              Đầy đủ lễ vật - đa dạng món ăn - đúng phong tục
            </p> */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[rgb(185,64,64)] text-yellow-50 hover:bg-blue-500 rounded-full px-8 py-6 font-bold text-lg shadow-none border-0 transform transition-transform hover:scale-105 border-black h-16"
                asChild
              >
                <Link href="/booking" className="no-underline">ĐẶT NGAY - GIẢM 10%</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
