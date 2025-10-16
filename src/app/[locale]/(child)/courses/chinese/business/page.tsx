import React from "react";
import Image from "next/image";
import { ChevronLeft, Globe2, BriefcaseBusiness, Rocket } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { MessageSquare, Briefcase, BookOpen, Globe } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import {
  UserRoundPlus,
  Gauge,
  CalendarDays,
  Users,
  CheckCircle2,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import { Button } from "antd";

function ChineseBusinessSection() {
  const t = useTranslations();
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] xl:min-h-[720px] flex items-center justify-end bg-[#4B0082] lg:bg-transparent">
      <Image
        src="/assets/images/courses/english/business/Banner.png"
        alt="English Business Background"
        fill
        className="object-cover hidden lg:block"
        priority
      />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
        <div className="px-6 sm:px-8 md:px-10 space-y-3 sm:space-y-4 md:space-y-5 pt-8 md:pt-10">
          <h1 className="font-extrabold uppercase inline-block leading-tight">
            <span className="text-3xl sm:text-4xl text-white lg:text-black">
              {t("Courses.chineseCourse.business.title")}
            </span>
            <br />
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white lg:text-black">
            {t("Courses.chineseCourse.business.desc")}
          </p>
        </div>
        <button className="w-full font-bold flex items-center justify-end gap-2 transition px-6 sm:px-8 md:px-10 mb-8">
          <ChevronLeft className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white lg:bg-[#4B0082] text-black lg:text-white rounded-full" />
          <p className="bg-white lg:bg-[#4B0082] text-black lg:text-white text-2xl sm:text-3xl md:text-4xl py-3 px-10 sm:px-16 md:px-20 rounded-l-full">
            {t("Hero.joinNow")}
          </p>
        </button>
      </div>
    </section>
  );
}

function Section2({
  personSrc = "/assets/images/courses/english/business/Section2/Person.png",
}) {
  const t = useTranslations();
  const messages = useMessages();
  const reasonData = (messages?.Courses?.chineseCourse?.business?.reason
    ?.children || []) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="relative w-full bg-[#efeff2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 lg:py-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center text-[#4B0082] font-bold">
          {t("Courses.chineseCourse.business.title")}
        </h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 items-center lg:mt-14 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 sm:space-y-8 lg:col-span-2">
            {reasonData.map((f, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-gray-900">
                    {f.title}
                  </p>
                  <p className="mt-2 text-sm sm:text-[17px] leading-7 text-gray-800">
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
              width={520}
              height={640}
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouWillGetSection() {
  const iconComponents = {
    MessageSquare: <MessageSquare className="h-8 w-8 text-white" />,
    Briefcase: <Briefcase className="h-8 w-8 text-white" />,
    BookOpen: <BookOpen className="h-8 w-8 text-white" />,
    Globe: <Globe className="h-8 w-8 text-white" />,
  };
  const t = useTranslations();
  const messages = useMessages();
  const targetData = (messages?.Courses?.chineseCourse?.business?.target
    ?.children || []) as {
    title: string;
    icon: string;
  }[];

  return (
    <section className="relative w-full">
      <div className="relative w-full hidden lg:block">
        <Image
          src="/assets/images/courses/english/communication/WhatYouWillGetSection/Banner.png"
          alt="What you will get background"
          fill
          priority
          className="object-cover -z-10"
        />
      </div>
      <div className="relative bg-[#F7F7F5] lg:bg-transparent py-12 sm:py-14 lg:py-0">
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 gap-8 lg:gap-0">
          <div className="w-full lg:w-1/3 flex items-end justify-center order-2 lg:order-none">
            <div className="hidden lg:block">
              <Image
                src="/assets/images/courses/english/communication/WhatYouWillGetSection/Person.png"
                alt="Person pointing"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left text-gray-900">
              {t("Courses.chineseCourse.business.target.title")}
            </h2>
            <div className="mt-8 sm:mt-10 rounded-2xl bg-[#F7F7F5] shadow-md ring-1 ring-gray-200 p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {targetData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-blue-900 shadow-md">
                      {iconComponents[item.icon as keyof typeof iconComponents]}
                    </div>
                    <div className="mt-2 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-5 sm:h-10 sm:w-6 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line
                          x1="12"
                          y1="0"
                          x2="12"
                          y2="18"
                          strokeDasharray="4,4"
                          stroke="currentColor"
                        />
                        <polyline
                          points="6,18 12,24 18,18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-gray-700 leading-snug">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection({
  imageSrc = "/assets/images/courses/english/business/AchievementsSection/image.png",
}) {
  const messages = useMessages();
  const takeawayData = (messages?.Courses?.chineseCourse?.business?.takeaway
    ?.children || []) as {
    title: string;
    desc: string;
    ax: number;
    ay: number;
    side: string;
  }[];
  const W = 600,
    H = 300;
  const pct = (v: number, total: number) => `${(v / total) * 100}%`;

  const minGapX = 0;
  const gapTop = 70;
  const gapBottom = 90;
  const dotOffset = 10;

  let lastBX = -Infinity;
  const points = takeawayData.map((a) => {
    let bx = a.ax;
    if (bx - lastBX < minGapX) bx = lastBX + minGapX;
    lastBX = bx;
    const by = a.side === "top" ? a.ay - gapTop : a.ay + gapBottom;
    const dcy = a.side === "top" ? by - dotOffset : by + dotOffset;
    return { ...a, bx, by, dcy };
  });
  const t = useTranslations();

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700">
          {t("Courses.chineseCourse.business.takeaway.title")}
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div className="hidden xl:flex justify-center">
            <Image
              src={imageSrc}
              alt="Team working"
              width={480}
              height={380}
              className="object-contain"
            />
          </div>

          <div className="hidden xl:block relative w-full aspect-[2/1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${W} ${H}`}
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="3"
                  markerHeight="3"
                  orient="auto"
                >
                  <path d="M0 0 L10 5 L0 10 Z" fill="#5276A9" />
                </marker>
              </defs>

              <polyline
                fill="none"
                stroke="#5276A9"
                strokeWidth="20"
                strokeLinejoin="round"
                strokeLinecap="round"
                markerEnd="url(#arrow)"
                points={[
                  [0, 200],
                  [50, 160],
                  [100, 190],
                  [160, 140],
                  [220, 170],
                  [290, 120],
                  [360, 150],
                  [570, 40],
                ]
                  .map((p) => p.join(","))
                  .join(" ")}
              />

              {points.map((p, i) => (
                <g key={i}>
                  <line
                    x1={p.ax}
                    y1={p.ay}
                    x2={p.bx}
                    y2={p.by}
                    stroke="#1e3a8a"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx={p.bx} cy={p.dcy} r="4" fill="#1e3a8a" />
                </g>
              ))}
            </svg>

            {points.map((p, i) => (
              <div
                key={i}
                className="absolute min-w-[220px] max-w-[260px] bg-white border border-dashed border-blue-900 px-4 py-3 text-sm text-center shadow-md z-10"
                style={{
                  left: pct(p.bx, W),
                  top: pct(p.by, H),
                  transform:
                    p.side === "top"
                      ? "translate(-50%, -100%)"
                      : "translate(-50%, 0)",
                }}
              >
                <p className="font-bold text-blue-900">{p.title}</p>
                <p className="text-gray-700 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="xl:hidden mt-6 grid grid-cols-1 gap-4">
            {points.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-dashed border-blue-900 px-4 py-3 text-sm text-center shadow-md"
              >
                <p className="font-bold text-blue-900">{p.title}</p>
                <p className="text-gray-700 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowYouWillLearnSection({
  leftPerson = "/assets/images/courses/english/business/HowYouWillLearnSection/image1.png",
  rightPerson = "/assets/images/courses/english/business/HowYouWillLearnSection/image2.png",
}) {
  const t = useTranslations();
  const messages = useMessages();
  const methodData = (messages?.Courses?.chineseCourse?.business?.method
    ?.children || []) as {
    title: string;
  }[];

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
          {t("Courses.chineseCourse.business.method.title")}
        </h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 items-end gap-6 lg:mt-14 lg:grid-cols-4">
          <div className="hidden lg:flex justify-start lg:col-span-1">
            <div className="relative h-[360px] w-full">
              <Image
                src={leftPerson}
                alt="left person"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {methodData.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-300 bg-white/80 px-5 sm:px-6 py-5 sm:py-6 text-center text-lg sm:text-xl md:text-2xl text-gray-900 shadow-sm"
                  dangerouslySetInnerHTML={{ __html: t.title }}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-end lg:col-span-1">
            <div className="relative h-[360px] w-full">
              <Image
                src={rightPerson}
                alt="right person"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForBusinessSection() {
  const t = useTranslations();
  const messages = useMessages();
  const forCoporationData = (messages?.Courses?.chineseCourse?.business
    ?.forCoporation?.children || []) as {
    title: string;
  }[];
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="px-6 sm:px-8 md:px-10 pt-8 md:pt-10">
          <h1 className="font-extrabold uppercase inline-block leading-tight mb-3">
            <span className="text-3xl sm:text-4xl">
              {t("Courses.chineseCourse.business.forCoporation.title")}
            </span>
          </h1>
          <div className="bg-white rounded-lg shadow-sm border border-[#1D748C] p-4 sm:p-5 max-w-md text-base sm:text-lg md:text-2xl">
            <h4 className="font-bold text-[#1D748C] flex items-center gap-2">
              {t("Courses.chineseCourse.business.forCoporation.subtitle")}
            </h4>
            <ul className="mt-3 space-y-2 text-[#1D748C]">
              {forCoporationData.map((t, i) => (
                <li className="flex items-center gap-2">
                  <span className="text-[#1D748C]">✓</span> {t.title}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-sm sm:text-[17px] leading-7 text-gray-800">
            {t("Courses.chineseCourse.business.forCoporation.desc")}
          </p>
        </div>
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hidden lg:block">
          <Image
            src="/assets/images/courses/english/communication/HowItWorks2Section/image.png"
            alt="Học viên Aspirely"
            fill
            className="object-cover"
            priority
          />
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

export function Banner({
  title,
  desc,
  imgSrc,
}: {
  title: string;
  desc: string;
  imgSrc: string;
}) {
  const t = useTranslations();
  return (
    <section className="relative w-full bg-linear-to-r from-sky-200 to-[#edf7ff] py-[40px] lg:py-[80px] px-4">
      <div className="mx-auto xl:max-w-[1000px]">
        <div
          className={`w-full flex flex-row justify-between items-center my-[10px]`}
        >
          <div className="flex flex-col gap-8 w-[490px]">
            <div className="font-black text-[36px]">{t(title)}</div>
            <div className="font-medium text-[20px]">{t(desc)}</div>
            <div className="flex gap-4">
              <Button type="primary" size="large">
                {t("Hero.joinNow")}
              </Button>
              <Button
                size="large"
                className=" bg-[#A40000] !text-white hover:!bg-white hover:!text-[#A40000] hover:!border-[#A40000]"
              >
                {t("Hero.register")}
              </Button>
            </div>
          </div>
          <div className="w-[350px] hidden sm:block">
            <img src={imgSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeTeach() {
  const t = useTranslations();
  const messages = useMessages();
  const methodData = (messages?.Courses?.chineseCourse?.business?.method
    ?.children || []) as {
    title: string;
  }[];

  return (
    <section className="relative w-full bg-[#edf7ff] py-[40px] lg:py-[80px]">
      <div className="mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1246px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.forCoporation.title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {methodData.map((f, i) => (
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="w-full md:w-[50%] lg:w-full">
                <img
                  src={
                    "/assets/images/courses/chinese/business/MasterChineseBusiness/item3.png"
                  }
                  className="rounded-lg"
                />
              </div>
              <div
                className="text-center w-[90%]"
                dangerouslySetInnerHTML={{ __html: f.title }}
              />
              <Button type="primary" size="large">
                {t("Hero.joinNow")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MasterChineseBusiness() {
  const t = useTranslations();
  const messages = useMessages();
  const reasonData = (messages?.Courses?.chineseCourse?.business?.reason
    ?.children || []) as {
    title: string;
    desc: string;
    img: string;
  }[];

  return (
    <section className="relative w-full bg-white py-[40px] lg:py-[80px]">
      <div className="mx-auto xl:max-w-[1000px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.reason.title")}
        </h2>
        <div className="w-full">
          {reasonData.map((f, i) => (
            <div
              className={`w-full flex flex-row ${
                i % 2 !== 0 ? "flex-row-reverse" : ""
              } justify-between items-center my-[10px]`}
            >
              <div className="flex flex-col gap-2 w-[490px]">
                <div className="font-black text-[30px] text-[#A40000]">
                  {f.title}
                </div>
                <div className="font-medium text-[20px]">{f.desc}</div>
              </div>
              <div className="w-[350px]">
                <img src={f.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements({}) {
  const t = useTranslations();
  const messages = useMessages();
  const takeAwayData = (messages?.Courses?.chineseCourse?.business?.takeaway
    ?.children || []) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="relative w-full bg-linear-to-r from-sky-200 to-[#edf7ff] py-[40px] lg:py-[80px]">
      <div className="mx-auto xl:max-w-[1000px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.takeaway.title")}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {takeAwayData.map((f, i) => (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="shrink-0">
                <img
                  src={
                    "/assets/images/courses/chinese/business/ForBusiness/idea-icon.png"
                  }
                />
              </div>
              <p className="text-center w-[80%]">
                <span className="font-bold">{f.title}</span> {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForBusiness({
  personSrc = "/assets/images/courses/chinese/business/ForBusiness/featured-ielts-general.png",
}) {
  const t = useTranslations();
  const messages = useMessages();
  const forCoporationData = (messages?.Courses?.chineseCourse?.business
    ?.forCoporation?.children || []) as {
    title: string;
  }[];

  return (
    <section className="relative w-full bg-[#e5e7eb] py-[40px] lg:py-[80px]">
      <div className="mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1246px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.forCoporation.title")}
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-col gap-[24px] px-[15px] py-0">
            {forCoporationData.map((f, i) => (
              <div key={i} className="flex gap-[1rem] ">
                <div className="shrink-0">
                  <img
                    src={
                      "/assets/images/courses/chinese/business/ForBusiness/idea-icon.png"
                    }
                  />
                </div>
                <h3 className="text-[18px] lg:text-[24px] font-semibold">
                  {f.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end px-[15px] py-0">
            <Image
              src={personSrc}
              alt="Business English student"
              width={520}
              height={640}
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ChineseBusinessCoursePage() {
  return (
    <main className="w-full">
      <ChineseBusinessSection />
      <WhatYouWillGetSection />
      <HowYouWillLearnSection />

      <Banner
        title={"Courses.chineseCourse.business.title"}
        desc={"Courses.chineseCourse.business.desc"}
        imgSrc={
          "/assets/images/courses/chinese/business/MasterChineseBusiness/item3.png"
        }
      />
      <HowWeTeach />
      <MasterChineseBusiness />
      <Achievements />
      <ForBusiness />
      <CoursesSection />
      <ContactForm />
    </main>
  );
}
