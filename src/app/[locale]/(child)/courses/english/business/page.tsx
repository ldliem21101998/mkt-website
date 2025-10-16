import React from "react";
import Image from "next/image";
import { ChevronLeft, Globe2, BriefcaseBusiness, Rocket } from "lucide-react";

function EnglishBusinessSection() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] xl:min-h-[720px] flex items-center justify-end bg-[#4B0082] lg:bg-transparent">
      <Image src="/assets/images/courses/english/business/Banner.png" alt="English Business Background" fill className="object-cover hidden lg:block" priority />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
        <div className="px-6 sm:px-8 md:px-10 space-y-3 sm:space-y-4 md:space-y-5 pt-8 md:pt-10">
          <h1 className="font-extrabold uppercase inline-block leading-tight">
            <span className="text-3xl sm:text-4xl">LUYỆN NÓI</span>
            <br />
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[#4B0082]">THƯƠNG MẠI</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl">Tiếng Anh của bạn<br />Sự nghiệp của bạn<br />Vươn cao</p>
        </div>
        <button className="w-full font-bold flex items-center justify-end gap-2 transition px-6 sm:px-8 md:px-10 mb-8">
          <ChevronLeft className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white lg:bg-[#4B0082] text-white rounded-full" />
          <p className="bg-white lg:bg-[#4B0082] text-white text-2xl sm:text-3xl md:text-4xl py-3 px-10 sm:px-16 md:px-20 rounded-l-full">THAM GIA NGAY</p>
        </button>
      </div>
    </section>
  );
}

function Section2({ personSrc = "/assets/images/courses/english/business/Section2/Person.png" }) {
  const features = [
    { icon: <Globe2 className="h-7 w-7 sm:h-8 sm:w-8 text-black" />, title: "Mở Ra Cơ Hội Toàn Cầu", desc: "Hãy đưa tiếng Anh của bạn từ lớp học đến phòng họp. Khóa học Business English trang bị cho bạn kỹ năng giao tiếp tự tin trong các cuộc họp, thuyết trình, đàm phán và email công việc." },
    { icon: <BriefcaseBusiness className="h-7 w-7 sm:h-8 sm:w-8 text-black" />, title: "Tiếng Anh Lưu Loát – Sự Nghiệp Vững Vàng", desc: "Học cùng giáo viên bản ngữ giàu kinh nghiệm, am hiểu thách thức của môi trường kinh doanh quốc tế. Nâng cao vốn từ vựng, cách diễn đạt và chiến lược giao tiếp để bạn thành công trong công việc toàn cầu." },
    { icon: <Rocket className="h-7 w-7 sm:h-8 sm:w-8 text-black" />, title: "Tiếng Anh Chuyên Nghiệp Dành Cho Người Chuyên Nghiệp", desc: "Dù bạn đang hướng đến một sự thăng tiến, chuẩn bị cho dự án quốc tế hay xây dựng mối quan hệ khách hàng bền vững, khóa học Business English sẽ giúp bạn đạt mục tiêu nhanh hơn." }
  ];

  return (
    <section className="relative w-full bg-[#efeff2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 lg:py-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center text-[#4B0082] font-bold">Khóa Học Tiếng Anh Kinh Doanh</h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 items-center lg:mt-14 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 sm:space-y-8 lg:col-span-2">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <div className="shrink-0">{f.icon}</div>
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-gray-900">{f.title}</p>
                  <p className="mt-2 text-sm sm:text-[17px] leading-7 text-gray-800">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <Image src={personSrc} alt="Business English student" width={520} height={640} className="w-full max-w-[520px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection({ imageSrc = "/assets/images/courses/english/business/TargetAudienceSection/image.png" }) {
  const items = [
    "Các chuyên gia mong muốn thăng tiến và phát triển sự nghiệp",
    "Doanh nhân đang mở rộng ra thị trường quốc tế",
    "Sinh viên chuẩn bị cho những cơ hội toàn cầu",
    "Các đội ngũ doanh nghiệp muốn nâng cao kỹ năng giao tiếp nơi làm việc"
  ];

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900">Đối tượng khóa học</h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow hidden lg:block">
            <Image src={imageSrc} alt="Target audience" fill className="object-cover" />
          </div>
          <div className="rounded-2xl px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <ul className="space-y-6 sm:space-y-8 text-gray-900">
              {items.map((t, i) => (
                <li key={i} className="text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection({
  imageSrc = "/assets/images/courses/english/business/AchievementsSection/image.png",
}) {
  const W = 600, H = 300;
  const pct = (v: number, total: number) => `${(v / total) * 100}%`;

  const anchors = [
    { ax: 5, ay: 200, side: "bottom", title: "Từ vựng thực tiễn", desc: "Làm chủ ngôn ngữ kinh doanh quốc tế" },
    { ax: 150, ay: 140, side: "top",    title: "Hiểu biết văn hóa", desc: "Xây dựng mối quan hệ bền vững xuyên văn hóa" },
    { ax: 380, ay: 150, side: "bottom", title: "Giao tiếp tự tin",  desc: "Nói rõ ràng và tự nhiên trong mọi tình huống kinh doanh" },
    { ax: 450, ay: 90, side: "top",    title: "Phát triển sự nghiệp", desc: "Nổi bật trong phỏng vấn, cuộc họp và các dự án toàn cầu" },
  ];

  const minGapX = 0;
  const gapTop = 70;
  const gapBottom = 90;
  const dotOffset = 10;

  let lastBX = -Infinity;
  const points = anchors.map((a) => {
    let bx = a.ax;
    if (bx - lastBX < minGapX) bx = lastBX + minGapX;
    lastBX = bx;
    const by = a.side === "top" ? a.ay - gapTop : a.ay + gapBottom;
    const dcy = a.side === "top" ? by - dotOffset : by + dotOffset;
    return { ...a, bx, by, dcy };
  });

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700">
          Những gì bạn sẽ đạt được
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
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto">
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
                  [0,200],
                  [50,160],
                  [100,190],
                  [160,140],
                  [220,170],
                  [290,120],
                  [360,150],
                  [570,40],
                ].map(p=>p.join(",")).join(" ")}
              />

              {points.map((p, i) => (
                <g key={i}>
                  <line x1={p.ax} y1={p.ay} x2={p.bx} y2={p.by} stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 4" />
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
                  transform: p.side === "top" ? "translate(-50%, -100%)" : "translate(-50%, 0)",
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

function HowYouWillLearnSection({ leftPerson = "/assets/images/courses/english/business/HowYouWillLearnSection/image1.png", rightPerson = "/assets/images/courses/english/business/HowYouWillLearnSection/image2.png" }) {
  const items = [
    "Các buổi học trực tuyến cùng giáo viên bản ngữ giàu kinh nghiệm",
    "Đóng vai tương tác dựa trên các tình huống kinh doanh thực tế",
    "Học trực tuyến linh hoạt, phù hợp với lịch trình của bạn"
  ];

  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">Cách bạn sẽ học</h2>
        <p className="mt-2 sm:mt-3 text-center text-base sm:text-lg md:text-xl text-blue-900/80">Chúng tôi kết hợp giảng dạy chuyên môn với thực hành thực tế để đảm bảo tiến bộ của bạn:</p>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 items-end gap-6 lg:mt-14 lg:grid-cols-4">
          <div className="hidden lg:flex justify-start lg:col-span-1">
            <div className="relative h-[360px] w-full"><Image src={leftPerson} alt="left person" fill className="object-contain" /></div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {items.map((t, i) => (
                <div key={i} className="rounded-2xl border border-gray-300 bg-white/80 px-5 sm:px-6 py-5 sm:py-6 text-center text-lg sm:text-xl md:text-2xl text-gray-900 shadow-sm">{t}</div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-end lg:col-span-1">
            <div className="relative h-[360px] w-full"><Image src={rightPerson} alt="right person" fill className="object-contain" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessCorporateContactSection({ imageSrc = "/assets/images/courses/english/business/BusinessCorporateContactSection/image.png" }) {
  return (
    <section className="w-full bg-[#efeff2] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">Tiếng Anh Kinh Doanh<br />Cho Doanh Nghiệp</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-blue-900/90">Tiếng Anh vững vàng, kinh doanh vững mạnh. Chương trình Tiếng Anh Kinh Doanh cho Doanh Nghiệp giúp đội ngũ của bạn tự tin giao tiếp trong các cuộc họp, thuyết trình và đàm phán. Khóa học được thiết kế riêng theo ngành nghề và mục tiêu, để nhân viên học đúng ngôn ngữ mang lại hiệu quả cho doanh nghiệp.</p>
        </div>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="relative w-full hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image src={imageSrc} alt="Team meeting" width={860} height={620} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 left-10 h-6 w-[88%] bg-black/10 rounded"></div>
            <div className="absolute -bottom-10 left-16 h-6 w-[80%] bg-black/20 rounded"></div>
          </div>
          <div className="rounded-[24px] md:rounded-[28px] bg-[#0E2A5F] p-6 sm:p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Liên hệ ngay</h3>
            <form className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              <div><input type="text" placeholder="Họ và tên" className="w-full rounded-xl bg-white/95 px-4 sm:px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" /></div>
              <div><input type="text" placeholder="Công ty" className="w-full rounded-xl bg-white/95 px-4 sm:px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" /></div>
              <div><input type="email" placeholder="Email" className="w-full rounded-xl bg-white/95 px-4 sm:px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" /></div>
              <div><input type="tel" placeholder="Số điện thoại" className="w-full rounded-xl bg-white/95 px-4 sm:px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" /></div>
              <div><textarea rows={4} placeholder="Nội dung tin nhắn" className="w-full rounded-xl bg-white/95 px-4 sm:px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" /></div>
              <div className="pt-1 sm:pt-2"><button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#2AA8C7] px-6 sm:px-8 py-3 text-base sm:text-lg font-bold text-white hover:opacity-95 active:opacity-90">Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type Course = { title: string; desc: string; img: string; cta: string };

const items: Course[] = [
  { title: "LUYỆN NÓI TIẾNG ANH IELTS", desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS", img: "/assets/images/courses/english/business/CoursesSection/image1.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP", desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế", img: "/assets/images/courses/english/business/CoursesSection/image2.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP", desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời", img: "/assets/images/courses/english/business/CoursesSection/image3.png", cta: "Phổ biến và tự nhiên" }
];

function CoursesSection() {
  return (
    <section className="w-full bg-[#0A2E73] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12">CÁC KHÓA HỌC CỦA ASPIRELY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((c, i) => (
            <div key={i} className="relative bg-[#F7F7F5] rounded-2xl md:rounded-[28px] shadow-lg overflow-hidden flex flex-col">
              <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-[#0A2E73] text-lg sm:text-xl md:text-2xl font-extrabold text-center leading-tight">{c.title}</h3>
                <p className="mt-3 sm:mt-4 text-center text-[#0A2E73] text-sm sm:text-base md:text-lg leading-relaxed">{c.desc}</p>
                <div className="mt-4 hidden lg:block"><div className="relative w-full h-56 md:h-60"><Image src={c.img} alt={c.title} fill className="object-cover rounded-xl mx-auto" priority /></div></div>
                <div className="mt-4 sm:mt-5 md:mt-6 flex"><button className="w-full sm:w-auto sm:px-5 md:px-6 px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A2E73] text-white font-semibold shadow-md hover:bg-[#09306d] transition mx-auto">{c.cta}</button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EnglishBusinessCoursePage() {
  return (
    <main className="w-full">
      <EnglishBusinessSection />
      <Section2 />
      <TargetAudienceSection />
      <AchievementsSection />
      <HowYouWillLearnSection />
      <BusinessCorporateContactSection />
      <CoursesSection />
    </main>
  );
}
