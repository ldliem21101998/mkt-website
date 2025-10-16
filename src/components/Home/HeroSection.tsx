"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import FancyButton from "@/components/FancyButton";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[800px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.webp"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/8 z-[-1]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 whitespace-pre-line leading-tight">
          Speak to the world
        </h1>

        <Link href="/contact-us">
          <FancyButton className="text-base md:text-lg lg:text-xl md:px-6 md:py-1 lg:px-8 lg:py-2">{t("contact")}</FancyButton>
        </Link>
      </div>
    </div>
  );
}