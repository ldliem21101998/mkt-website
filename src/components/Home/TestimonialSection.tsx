"use client";

import Image from "next/image";
import { useMessages } from "next-intl";
import { Carousel } from "antd";
import { Star } from "lucide-react";

import type { Testimonial } from "@/types/testimonial";

export default function TestimonialSection() {
  const messages = useMessages();
  const items = messages.Testimonial.items as Testimonial[];

  return (
    <section className="relative w-full h-[650px] max-w-6xl flex justify-center items-center">
      <div className="absolute h-[200px] aspect-[3/2] top-10 right-0 max-xl:hidden">
        <Image
          src="/assets/images/TestimonialSection/Logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-full max-h-150 flex justify-center items-center">
        <div className="relative w-full md:w-[80%] h-full flex justify-center items-center">
          <div className="md:absolute md:left-[-5%] w-[80%] space-y-5 z-10">
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#9F0A0B] font-semibold">
              Cảm nhận học viên
            </h1>
            <div className="relative w-full aspect-video">
              <Image
                src="/assets/images/TestimonialSection/Chatbox.svg"
                alt="Chatbox"
                fill
                className="object-contain max-md:hidden max-h-150"
              />

              <Carousel
                className="absolute w-full md:w-[92%] max-md:bg-[#DFB597] max-md:rounded-2xl"
                autoplay
                dots={false}
              >
                {items.map((item: Testimonial, i: number) => (
                  <div key={i} className="w-full h-full flex flex-col justify-between space-y-5 p-5">
                    <div className="flex justify-between items-center">
                      <div className="w-full flex max-sm:flex-col max-sm:justify-center items-center gap-10">
                        <div className="relative w-15 h-15 xl:w-20 xl:h-20 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-full aspect-square object-cover"
                          />
                        </div>
                        <div className="flex space-x-2">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star key={idx} className="w-8 h-8 xl:w-10 xl:h-10 fill-current text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-start whitespace-pre-line">
                      <p className="italic text-md lg:text-lg text-gray-800">“{item.content}”</p>
                      <p className="mt-4 text-2xl xl:text-4xl font-bold text-[#9F0A0B]">
                        {item.name}, {item.age}, {item.location} <br />
                        <span className="text-base lg:text-xl text-gray-600">{item.class}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="absolute right-[-12%] w-[50%]">
            <div className="relative w-full aspect-[3/4] max-md:hidden">
              <Image
                src="/assets/images/TestimonialSection/Phone.svg"
                alt="Phone"
                fill
                className="object-contain max-h-150 self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}