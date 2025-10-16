"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import {
//   FiCalendar,
//   FiClock,
//   FiUser,
//   FiGlobe,
//   FiDollarSign,
// } from "react-icons/fi";
import { useTranslations } from "next-intl";

type Workshop = {
  title: string;
  date: string;
  time: string;
  language: string;
  speaker: string;
  price: string;
  bannerUrl: string;
};

export default function WorkshopsPage() {
  const t = useTranslations("workshops");

  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    setWorkshops([
      {
        title: t("list.0.title"),
        date: t("list.0.date"),
        time: t("list.0.time"),
        language: t("list.0.language"),
        speaker: t("list.0.speaker"),
        price: t("list.0.price"),
        bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      },
      {
        title: t("list.1.title"),
        date: t("list.1.date"),
        time: t("list.1.time"),
        language: t("list.1.language"),
        speaker: t("list.1.speaker"),
        price: t("list.1.price"),
        bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      },
      {
        title: t("list.2.title"),
        date: t("list.2.date"),
        time: t("list.2.time"),
        language: t("list.2.language"),
        speaker: t("list.2.speaker"),
        price: t("list.2.price"),
        bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      },
    ]);
  }, [t]);

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {t("title")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((ws, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={ws.bannerUrl}
                  alt={ws.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-4">{ws.title}</h3>
                  {/* <div className="flex items-center text-sm gap-2 mb-2">
                    <FiCalendar /> <span>{ws.date}</span>
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <FiClock /> <span>{ws.time}</span>
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <FiGlobe /> <span>{ws.language}</span>
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <FiUser /> <span>{ws.speaker}</span>
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-4">
                    <FiDollarSign /> <span>{ws.price}</span>
                  </div> */}
                </div>

                <button className="bg-[#9F0A0B] text-white py-2 px-4 mt-auto rounded hover:opacity-90 transition">
                  {t("cta")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}