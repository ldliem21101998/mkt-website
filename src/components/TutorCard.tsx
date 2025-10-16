"use client"
import Image from "next/image";

import type { Tutor } from "@/types/tutor";

export default function TutorCard({
  id,
  name,
  image = "/tutor.jpg",
}: Tutor) {
  return (
    <div
      onClick={() => {
        window.open(
          "https://app.aspirely.edu.vn/login",
          "_blank"
        )
      }}
      className="transition-transform duration-300 hover:scale-105 cursor-pointer p-4"
    >
      <div className="bg-white border border-gray-300 rounded-xl">
        <div className="relative aspect-square rounded-xl">
          <Image
            src={image}
            alt={`Tutor ${id}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={80}
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="text-center border-t border-gray-200 px-4 py-3 text-black">
          <p className="text-xl font-semibold mb-2">{name}</p>
        </div>
      </div>
    </div>
  );
}