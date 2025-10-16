"use client"

import { useMessages, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FlagComponent, GB, TW } from "country-flag-icons/react/3x2";

import type { Tutor } from "@/types/tutor";

const flagMap: Record<string, FlagComponent> = {
  GB,
  TW,
};

export default function TutorsPage() {
  const t = useTranslations("tutors")
  const messages = useMessages()
  const router = useRouter()
  const tutors = messages.tutors.list

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        {t("title.part1")} <span className="text-[#9F0A0B]">{t("title.part2")}</span> {t("title.part3")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor: Tutor) => {
          const countryCode = tutor.countryCode?.toUpperCase()
          const Flag = flagMap[countryCode || ""];

          return (
            <div
              key={tutor.id}
              onClick={() => router.push(`/tutors/${tutor.id}`)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative w-full h-[320px]">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center border-t border-gray-100 px-4 py-3 text-sm text-black">
                  <p className="font-semibold mb-2">{tutor.name}</p>
                  <ul className="space-y-1 mb-3">
                    <li className="flex justify-center items-center gap-2">
                      {Flag && <Flag className="w-[18px] h-[12px]" />}
                      <span>{tutor.accent}</span>
                    </li>
                    <li>{tutor.experience}</li>
                    <li>{tutor.language}</li>
                  </ul>
                  <button
                    className="bg-[#9F0A0B] text-white px-4 py-1.5 text-sm rounded-full font-semibold hover:opacity-90 transition"
                    onClick={(e) => {
                      e.stopPropagation()
                      router.push("/register")
                    }}
                  >
                    {t("cta")}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
