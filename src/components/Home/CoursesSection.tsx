"use client";

import { useEffect, useState } from "react";
import { Carousel } from "antd";
import type { Course } from "@/types/course";
import { useTranslations, useMessages } from "next-intl";

const Card = ({ item }: { item: Course }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg relative bg-white snap-center">
    <div
      className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[550px] group"
      style={{
        backgroundImage: `linear-gradient(${item.filterCode}80, ${item.filterCode}80), url(${item.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-4 right-4 sm:left-6 sm:right-6 top-1/3 lg:top-auto lg:bottom-20 z-10">
        <div className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none lg:transform lg:transition-transform lg:group-hover:-translate-y-2">
          {item.id}
        </div>
        <div className="text-white/95 text-sm sm:text-base lg:overflow-hidden lg:max-h-0 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-45 lg:group-hover:opacity-100">
          <p
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </div>
      </div>

      <div className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-6 z-10 h-[60px] sm:h-[68px] md:h-[76px] flex flex-col justify-end">
        <div className="h-[3px] w-20 sm:w-24 md:w-40 bg-white/95 mb-2" />
        <h3
          className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow truncate"
          title={item.title}
        >
          {item.title}
        </h3>
      </div>
    </div>
  </div>
);

export default function CoursesSection({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const t = useTranslations("Courses");
  const messages = useMessages();
  const data: Course[] = messages.Courses.courses;

  useEffect(() => {
    const handle = () => setIsDesktop(window.innerWidth >= 1280);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(/assets/images/CoursesSection/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center py-2 text-[#9F0A0B]">
          {t.rich("title", { span: (chunks) => <span className="text-[#05386D]">{chunks}</span> })}
        </h2>
        <p className="text-center text-neutral-700 text-sm sm:text-base md:text-2xl font-semibold">
          {t("subtitle")}
        </p>

        {isDesktop ? (
          <div className="pt-6">
            <Carousel slidesToShow={3} infinite autoplay autoplaySpeed={3000} speed={800} centerMode centerPadding="0px">
              {data.map((item) => (
                <div key={item.title} className="px-2 md:px-3">
                  <Card item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-1 pt-6 pb-10 snap-x snap-mandatory">
            {data.map((item) => (
              <div key={item.title} className="flex-shrink-0 w-[78vw] xxs:w-[82vw] sm:w-[360px]">
                <Card item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}