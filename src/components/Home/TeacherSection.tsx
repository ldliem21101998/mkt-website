"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useMessages } from "next-intl";
import { Carousel } from "antd";

import TutorCard from "@/components/TutorCard";
import type { Tutor } from "@/types/tutor";

export default function TeacherSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) {
  const router = useRouter();
  const t = useTranslations("Teacher");
  const messages = useMessages();
  const tutorsData = messages.Teacher.teachers;

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef} id="tutors" className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#9F0A0B] mb-6">
        {t("title")}
      </h2>

      {isDesktop ? (
          <Carousel
            slidesToShow={3}
            infinite
            autoplay
            autoplaySpeed={3000}
            speed={1000}
          >
            {tutorsData.map((t: Tutor) => (
              <TutorCard key={t.id} {...t} />
            ))}
          </Carousel>
      ) : (
        <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-1 pt-6 pb-10">
          {tutorsData.map((tutor: Tutor) => {
            return (
              <div
                key={tutor.id}
                onClick={() => router.push(`/tutors/${tutor.id}`)}
                className="flex-shrink-0 w-[250px] sm:w-[270px] transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="relative w-[250px] sm:w-[270px] aspect-square">
                    <Image
                      src={tutor.image}
                      alt={`Tutor ${tutor.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center border-t border-gray-200 px-4 py-3 text-xl text-black">
                    <p className="font-semibold mb-2">{tutor.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
