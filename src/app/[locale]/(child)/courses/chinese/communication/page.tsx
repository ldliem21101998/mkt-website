"use client";
import { ContactForm } from "@/components/ContactForm";
import HexagonNumber from "@/components/HexagonNumber";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { Banner } from "../business/page";
import { Button } from "antd";

function OurUnique() {
  const messages = useMessages();
  const t = useTranslations();
  const uniqueData = (messages?.Courses?.chineseCourse?.communication?.unique
    ?.children || []) as {
    title: string;
  }[];

  return (
    <section className="relative w-full bg-linear-to-b from-[#A40000] to-red-50 py-[40px] lg:py-[80px] px-4">
      <div className="mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1246px]">
        <div
          className={`w-full flex flex-row justify-between items-center my-[10px]`}
        >
          <div className="flex flex-col gap-8">
            <div className="font-black text-white text-[36px]">
              {t("Courses.chineseCourse.communication.title")}
            </div>
            {/* <div className="font-medium text-[20px]">{t(desc)}</div> */}
            <div className="flex flex-col gap-6 px-[15px] py-0">
              {uniqueData.map((f, i) => (
                <div key={i} className="flex gap-[1rem] ">
                  <div className="shrink-0">
                    <Image
                      src={
                        "/assets/images/courses/chinese/communication/OurUnique/icons8-checkmark-40.png"
                      }
                      alt="idea-icon"
                      width={31}
                      height={32}
                    />
                  </div>
                  <h3 className="text-[16px] lg:text-[18px] font-medium ">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[540px] hidden sm:block">
            <Image
              src={
                "/assets/images/courses/chinese/communication/OurUnique/banner-section-rocket.png"
              }
              alt="banner-image"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidedChineseLearning({
  personSrc = "/assets/images/courses/chinese/communication/GuidedChinese/reason.png",
}) {
  const messages = useMessages();
  const featuresData = (messages?.Courses?.chineseCourse?.communication
    ?.features?.children || []) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="relative w-full bg-white">
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
    title: "LUYỆN NÓI TIẾNG TRUNG DU HỌC",
    desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS",
    img: "/assets/images/courses/english/communication/CoursesSection/image1.png",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "TIẾNG TRUNG THƯƠNG MẠI",
    desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế",
    img: "/assets/images/courses/english/communication/CoursesSection/image2.png",
    cta: "Phổ biến và tự nhiên",
  },
];

function CoursesSection() {
  return (
    <section className="w-full bg-linear-to-br from-[#A40000] to-red-50 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12">
          CÁC KHÓA HỌC CỦA ASPIRELY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:w-[60%] mx-auto">
          {items.map((c, i) => (
            <div
              key={i}
              className="relative bg-[#F7F7F5] rounded-2xl md:rounded-[28px] shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-[#A40000] text-lg sm:text-xl md:text-2xl font-extrabold text-center leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base md:text-lg leading-relaxed">
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
                <div className="mt-4 sm:mt-5 md:mt-6 flex items-center">
                  <Button
                    size="large"
                    className=" bg-[#A40000] !text-white hover:!bg-white hover:!text-[#A40000] hover:!border-[#A40000] mx-auto"
                  >
                    {c.cta}
                  </Button>
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
      <Banner
        title={"Courses.chineseCourse.communication.title"}
        desc={"Courses.chineseCourse.communication.desc"}
        imgSrc={
          "/assets/images/courses/chinese/communication/Banner/banner.webp"
        }
        bgSrc={"/assets/images/courses/chinese/communication/Banner/banner.jpg"}
        reverse={true}
      />
      <OurUnique />
      <GuidedChineseLearning />
      <CoursesSection />
      <ContactForm />
    </main>
  );
}
