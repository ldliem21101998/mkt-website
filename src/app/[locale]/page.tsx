"use client";

import { useRef } from "react";

import HeroSection from "@/components/Home/HeroSection";
import DidYouKnowSection from "@/components/Home/DidYouKnowSection";
import HighlightsSection from "@/components/Home/HighlightsSection";
import WorkshopPromoSection from "@/components/Home/WorkshopPromoSection";
import CoursesSection from "@/components/Home/CoursesSection";
import TeacherSection from "@/components/Home/TeacherSection";
import CefrSection from "@/components/Home/CefrSection";
import TestSection from "@/components/Home/TestSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CTASection from "@/components/Home/CTASection";

// import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";


export default function Home() {
  const teacherRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (index: number) => {
    const HEADER_OFFSET = 80;

    let ref = null;

    if (index === 1) {
      ref = coursesRef;
    } else if (index === 2) {
      ref = teacherRef;
    }

    if (ref?.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroSection />

      <DidYouKnowSection />

      <HighlightsSection onButtonClick={scrollToSection} />

      <WorkshopPromoSection />

      <CoursesSection sectionRef={coursesRef} />

      <CefrSection />

      <TeacherSection sectionRef={teacherRef} />

      <TestSection />

      <TestimonialSection />

      <CTASection />
    </div>
  );
}