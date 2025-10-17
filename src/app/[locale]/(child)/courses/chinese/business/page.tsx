import { ContactForm } from "@/components/ContactForm";
import { Button } from "antd";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

function WhatYouWillGetSection() {
  const t = useTranslations();
  const messages = useMessages();
  const targetData = (messages?.Courses?.chineseCourse?.business?.target
    ?.children || []) as {
    title: string;
  }[];

  const dataStyle = [
    {
      bgColor: "bg-[#faf0f0]",
      borderColor: "border-[#a40000]",
      image: {
        src: "/assets/images/courses/chinese/business/WhatYouWillGet/course-1.png",
        alt: "course-1",
        width: 385,
        height: 288,
      },
      title: targetData[0].title,
    },
    {
      bgColor: "bg-[rgba(240,_234,_249,_0.6)]",
      borderColor: "border-[#6929c4]",
      image: {
        src: "/assets/images/courses/chinese/business/WhatYouWillGet/course-3.png",
        alt: "course-3",
        width: 258,
        height: 349,
      },
      title: targetData[2].title,
    },
    {
      bgColor: "bg-[#fffaea]",
      borderColor: "border-[#ffcd32]",
      image: {
        src: "/assets/images/courses/chinese/business/WhatYouWillGet/course-2.png",
        alt: "course-2",
        width: 195,
        height: 304,
      },
      title: targetData[1].title,
    },
    {
      bgColor: "bg-[#f2faf4]",
      borderColor: "border-[#24a148]",
      image: {
        src: "/assets/images/courses/chinese/business/WhatYouWillGet/course-4.png",
        alt: "course-4",
        width: 348,
        height: 219,
      },
      title: targetData[3].title,
    },
  ];

  return (
    <section className="relative w-ful mx-auto max-w-[1248px] py-16 px-4">
      <h2 className="mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center  text-gray-900">
        {t("Courses.chineseCourse.business.target.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="flex flex-col gap-[30px] ">
          {dataStyle
            .filter((t, i) => i % 2 === 0)
            .map((t, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0
                    ? "flex-col"
                    : "flex-col md:flex-row-reverse flex-1"
                } border border-solid ${t.borderColor} ${
                  t.bgColor
                } rounded-2xl items-center justify-center`}
              >
                <p className="py-10 px-[30px]">{t.title}</p>
                <Image
                  src={t.image.src}
                  alt={t.image.alt}
                  width={t.image.width}
                  height={t.image.height}
                  className="mx-auto"
                />
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-[30px]">
          {dataStyle
            .filter((t, i) => i % 2 !== 0)
            .map((t, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 !== 0
                    ? "flex-col-reverse"
                    : "flex-col-reverse md:flex-row flex-1"
                } gap-4 border border-solid ${t.borderColor} ${
                  t.bgColor
                } rounded-2xl items-center justify-center`}
              >
                <Image
                  src={t.image.src}
                  alt={t.image.alt}
                  width={t.image.width}
                  height={t.image.height}
                  className="mx-auto"
                />
                <p className="py-10 px-[30px]">{t.title}</p>
              </div>
            ))}
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

export function Banner({
  title,
  desc,
  imgSrc,
  reverse = false,
  bgSrc = "",
}: {
  title: string;
  desc: string;
  imgSrc: string;
  bgSrc?: string;
  reverse?: boolean;
}) {
  const t = useTranslations();
  return (
    <section
      className={`relative w-full bg-white py-[40px] lg:py-[80px] px-4 `}
      style={
        bgSrc
          ? {
              backgroundImage: `url(${bgSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "center"
            }
          : {}
      }
    >
      <div className={`absolute w-full h-full top-0 left-0 ${bgSrc ? "opacity-20 bg-black" : ""}`}></div>
      <div className="mx-auto xl:max-w-[1000px]">
        <div
          className={`w-full flex gap-2 ${
            reverse ? "flex-row-reverse" : ""
          } justify-between items-center my-[10px]`}
        >
          <div className="flex flex-col gap-8 w-[490px] z-3">
            <div className={`font-black text-[36px] ${bgSrc ? "text-white" : ""}`}>{t(title)}</div>
            <div className="font-medium text-[20px]">{t(desc)}</div>
            <div className="flex gap-4">
              <Button className=" !bg-[#2596be] !text-white hover:!bg-white hover:!text-[#2596be] hover:!border-[#2596be]" size="large">
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
          <div
            className={`w-[540px] hidden sm:block ${bgSrc ? "opacity-0" : ""}`}
          >
            <Image
              src={imgSrc}
              alt="banner-image"
              width={649}
              height={450}
              className="mx-auto rounded-3xl"
            />
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
    img: string;
  }[];

  return (
    <section className="relative w-full bg-white py-[40px] lg:py-[80px] px-4">
      <div className="mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1246px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.method.title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {methodData.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center justify-center"
            >
              <div className="w-full md:w-[50%] lg:w-full">
                <Image
                  src={f.img}
                  alt="method-image"
                  width={214}
                  height={214}
                  className="mx-auto rounded-lg"
                />
              </div>
              <div
                className="text-center w-[90%]"
                dangerouslySetInnerHTML={{ __html: f.title }}
              />
              <Button className=" !bg-[#2596be] !text-white hover:!bg-white hover:!text-[#2596be] hover:!border-[#2596be]" size="large">
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
    <section className="relative w-full bg-white py-[40px] lg:py-[80px] px-4">
      <div className="mx-auto xl:max-w-[1000px]">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px]">
          {t("Courses.chineseCourse.business.reason.title")}
        </h2>
        <div className="w-full">
          {reasonData.map((f, i) => (
            <div
              key={i}
              className={`w-full flex flex-col gap-4 ${
                i % 2 !== 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              } justify-between items-center my-[10px]`}
            >
              <div className="flex flex-col gap-2 sm:w-[490px]">
                <div className="font-black text-[30px] text-[#A40000]">
                  {f.title}
                </div>
                <div className="font-medium text-[20px]">{f.desc}</div>
              </div>
              <Image
                src={f.img}
                alt="reason-image"
                width={300}
                height={300}
                className="mx-auto w-1/2 sm:w-[350px] h-auto object-cover rounded-lg"
              />
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
    <section className="relative w-full bg-linear-to-br from-[#A40000] to-red-50 py-[40px] lg:py-[80px] ">
      <div className="mx-auto xl:max-w-[1000px] px-4">
        <h2 className="text-[40px] text-center font-bold mb-[40px] lg:mb-[60px] text-white">
          {t("Courses.chineseCourse.business.takeaway.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {takeAwayData.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="shrink-0">
                <Image
                  src={
                    "/assets/images/courses/chinese/business/ForBusiness/idea-icon.png"
                  }
                  alt="idea-icon"
                  width={31}
                  height={32}
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
    <section className="relative w-full bg-white py-[40px] lg:py-[80px]">
      <div className="mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1246px]">
        <h2 className="text-[32px] md:text-[40px] text-center font-bold mb-2 lg:mb-8 text-[#A40000]">
          {t("Courses.chineseCourse.business.forCoporation.title")}
        </h2>
        <div className="flex-1 flex flex-col-reverse sm:flex-row justify-center items-center">
          <div>
            <p className="text-center text-2xl font-bold mb-6 text-[#A40000]">
              {t("Courses.chineseCourse.business.forCoporation.subtitle")}
            </p>
            <div className="flex flex-col gap-6 px-[15px] py-0">
              {forCoporationData.map((f, i) => (
                <div key={i} className="flex gap-[1rem] ">
                  <div className="shrink-0">
                    <Image
                      src={
                        "/assets/images/courses/chinese/business/ForBusiness/idea-icon.png"
                      }
                      alt="idea-icon"
                      width={31}
                      height={32}
                    />
                  </div>
                  <h3 className="text-[18px] lg:text-[24px] font-medium">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
            <p className="max-w-2xl px-4 mt-6">
              {t("Courses.chineseCourse.business.forCoporation.desc")}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end px-[15px] py-0">
            <Image
              src={personSrc}
              alt="Business English student"
              width={482}
              height={364}
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
      <Banner
        title={"Courses.chineseCourse.business.title"}
        desc={"Courses.chineseCourse.business.desc"}
        imgSrc={"/assets/images/courses/chinese/business/Banner/banner.jpg"}
      />
      <WhatYouWillGetSection />
      <MasterChineseBusiness />
      <HowWeTeach />
      <Achievements />
      <ForBusiness />
      <CoursesSection />
      <ContactForm />
    </main>
  );
}
