"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import HexagonNumber from "@/components/HexagonNumber";
import { ContactForm } from "@/components/ContactForm";

function ChineseCommunicationSection() {
  const t = useTranslations();
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] xl:min-h-[720px] flex items-center justify-start text-white bg-[#1D748C] lg:bg-transparent">
      <Image
        src="/assets/images/courses/english/communication/Banner.png"
        alt="English Communication Background"
        fill
        className="object-cover hidden lg:block"
        priority
      />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
        <div className="px-6 sm:px-8 md:px-10 pt-8 md:pt-10">
          <h1 className="font-extrabold uppercase inline-block leading-tight">
            <span className="text-3xl sm:text-4xl">
              {t("Courses.chineseCourse.communication.title")}
            </span>
            <br />
          </h1>
          <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl max-w-2xl">
            {t("Courses.chineseCourse.communication.desc")}
          </p>
        </div>
        <button className="mx-6 sm:mx-8 md:mx-10 text-white font-bold flex items-center gap-2 transition mb-8">
          <p className="bg-white lg:bg-[#1D748C] text-[#1D748C] lg:text-white text-2xl sm:text-3xl md:text-4xl py-3 px-10 sm:px-16 md:px-20 rounded-r-full">
            {t("Hero.joinNow")}
          </p>
          <ChevronRight className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white lg:bg-[#1D748C] text-[#1D748C] lg:text-white rounded-full" />
        </button>
      </div>
    </section>
  );
}

function OurUniqueSection({
  imageSrc = "/assets/images/courses/english/communication/WhyPracticeSpeakingSection/image.png",
}) {
  const messages = useMessages();
  const t = useTranslations("Courses");
  const uniqueData = (messages?.Courses?.chineseCourse?.communication?.unique
    ?.children || []) as {
    title: string;
  }[];

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900">
          {t("chineseCourse.communication.unique.title")}
        </h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow hidden lg:block">
            <Image
              src={imageSrc}
              alt="Target audience"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-2xl px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <ul className="space-y-6 sm:space-y-8 text-gray-900">
              {uniqueData.map((t, i) => (
                <li
                  key={i}
                  className="text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9"
                >
                  {t.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidedChineseLearning({
  personSrc = "/assets/images/courses/english/business/Section2/student-group.png",
}) {
  const messages = useMessages();
  const featuresData = (messages?.Courses?.chineseCourse?.communication
    ?.features?.children || []) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="relative w-full bg-[#efeff2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 lg:py-20">
        <div className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
          {featuresData[0].title}
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 items-center lg:mt-14 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 sm:space-y-8 lg:col-span-2">
            {featuresData.map((f, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center">
                <HexagonNumber number={i + 1} />
                <div className="flex justify-center flex-col sm:h-32 gap-2 sm:gap-1 bg-white pl-6 sm:pl-20 sm:-ml-16 py-10 pt-16 sm:py-3 border-b-4 sm:border-b-0 sm:border-r-[12px] border-solid border-[#A40000] rounded-2xl sm:rounded-none sm:rounded-r-full shadow-lg pr-6 -mt-12 sm:mt-0">
                  <p className="text-center sm:text-left text-lg font-extrabold text-[#A40000] uppercase">
                    {f.title}
                  </p>
                  <p className="text-sm leading-6  sm:leading-5 text-gray-800">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <Image
              src={personSrc}
              alt="Business English student"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type Course = { title: string; desc: string; img: string; cta: string };

const items: Course[] = [
  {
    title: "LUYỆN NÓI TIẾNG ANH IELTS",
    desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS",
    img: "/assets/images/courses/english/communication/CoursesSection/image1.png",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP",
    desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế",
    img: "/assets/images/courses/english/communication/CoursesSection/image2.png",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP",
    desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời",
    img: "/assets/images/courses/english/communication/CoursesSection/image3.png",
    cta: "Phổ biến và tự nhiên",
  },
];

function CoursesSection() {
  return (
    <section className="w-full bg-[#0A2E73] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12">
          CÁC KHÓA HỌC CỦA ASPIRELY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((c, i) => (
            <div
              key={i}
              className="relative bg-[#F7F7F5] rounded-2xl md:rounded-[28px] shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-[#0A2E73] text-lg sm:text-xl md:text-2xl font-extrabold text-center leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-center text-[#0A2E73] text-sm sm:text-base md:text-lg leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-4 hidden lg:block">
                  <div className="relative w-full h-56 md:h-60">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover rounded-xl mx-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 md:mt-6 flex">
                  <button className="w-full sm:w-auto sm:px-5 md:px-6 px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A2E73] text-white font-semibold shadow-md hover:bg-[#09306d] transition mx-auto">
                    {c.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ChineseCommunicationCoursePage() {
  return (
    <main className="w-full">
      <ChineseCommunicationSection />
      <OurUniqueSection />
      <GuidedChineseLearning />
      <CoursesSection />
      <ContactForm />
    </main>
  );
}
