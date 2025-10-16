import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { MessageSquare, Briefcase, BookOpen, Globe } from "lucide-react";
import { UserRoundPlus, Gauge, CalendarDays, Users, CheckCircle2 } from "lucide-react";

function EnglishCommunicationSection() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] xl:min-h-[720px] flex items-center justify-start text-white bg-[#1D748C] lg:bg-transparent">
      <Image src="/assets/images/courses/english/communication/Banner.png" alt="English Communication Background" fill className="object-cover hidden lg:block" priority />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
        <div className="px-6 sm:px-8 md:px-10 pt-8 md:pt-10">
          <h1 className="font-extrabold uppercase inline-block leading-tight">
            <span className="text-3xl sm:text-4xl">LUYỆN NÓI</span>
            <br />
            <span className="text-6xl sm:text-7xl md:text-8xl">GIAO TIẾP</span>
          </h1>
          <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl max-w-2xl">
            Luyện hội thoại thực tế với giáo viên bản ngữ, cho đời sống, công việc và cơ hội quốc tế
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-[#1D748C] p-4 sm:p-5 max-w-md text-base sm:text-lg md:text-2xl">
            <h4 className="font-bold text-[#1D748C] flex items-center gap-2">
              <span>•</span> Tính năng nổi bật
            </h4>
            <ul className="mt-3 space-y-2 text-[#1D748C]">
              <li className="flex items-center gap-2"><span className="text-[#1D748C]">✓</span> Nói tiếng Anh tự tin</li>
              <li className="flex items-center gap-2"><span className="text-[#1D748C]">✓</span> Từ vựng thực tế</li>
              <li className="flex items-center gap-2"><span className="text-[#1D748C]">✓</span> Giáo viên giỏi</li>
              <li className="flex items-center gap-2"><span className="text-[#1D748C]">✓</span> Học linh hoạt</li>
            </ul>
          </div>
        </div>
        <button className="mx-6 sm:mx-8 md:mx-10 text-white font-bold flex items-center gap-2 transition mb-8">
          <p className="bg-white lg:bg-[#1D748C] text-[#1D748C] lg:text-white text-2xl sm:text-3xl md:text-4xl py-3 px-10 sm:px-16 md:px-20 rounded-r-full">THAM GIA NGAY</p>
          <ChevronRight className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white lg:bg-[#1D748C] text-[#1D748C] lg:text-white rounded-full" />
        </button>
      </div>
    </section>
  );
}

function WhyPracticeSpeakingSection({ imageSrc = "/assets/images/courses/english/communication/WhyPracticeSpeakingSection/image.png" }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-14 lg:py-20">
        <h2 className="text-3xl text-center leading-tight font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">Tại sao chỉ luyện nói?</h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 sm:space-y-8 text-gray-900">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold">Khó Tự Luyện Nhất</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">Người mới cần hướng dẫn để bắt đầu, người nâng cao cần chỉnh sửa để tự nhiên hơn. Sách và ứng dụng không thể thay thế giao tiếp thực tế.</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold">Xây Dựng Sự Tự Tin Thực Sự</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">Từ chào hỏi đến họp hành, luyện nói giúp bạn dùng tiếng Anh một cách tự nhiên trong đời sống hằng ngày.</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold">Tiến Bộ Nhanh Hơn Với Giáo Viên Bản Ngữ</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">Ở mọi trình độ, giáo viên bản ngữ giúp bạn cải thiện phát âm, từ vựng và độ trôi chảy.</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold">Tiếng Anh Thực Tiễn Cho Cuộc Sống Và Công Việc</h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">Aspirely giúp bạn giao tiếp tự tin trong những tình huống thực tế — từ du lịch, trò chuyện hằng ngày đến phỏng vấn, họp và thuyết trình.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -right-10 h-72 w-72 rounded-lg bg-cyan-700 opacity-30 blur-[1px] hidden lg:block"></div>
            <div className="absolute -bottom-2 -right-4 h-72 w-72 rounded-lg bg-cyan-600 opacity-40 hidden lg:block"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 hidden lg:block">
              <div className="relative w-full aspect-[5/6]">
                <Image src={imageSrc} alt="online speaking practice" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouWillGetSection() {
  const items = [
    { icon: <MessageSquare className="h-8 w-8 text-white" />, title: "Luyện nói trong đời sống, du lịch, trò chuyện" },
    { icon: <Briefcase className="h-8 w-8 text-white" />, title: "Giao tiếp trong họp, thuyết trình, phỏng vấn" },
    { icon: <BookOpen className="h-8 w-8 text-white" />, title: "Học từ và cụm từ hữu ích" },
    { icon: <Globe className="h-8 w-8 text-white" />, title: "Giao tiếp thoải mái ở mọi nơi" }
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full hidden lg:block">
        <Image src="/assets/images/courses/english/communication/WhatYouWillGetSection/Banner.png" alt="What you will get background" fill priority className="object-cover -z-10" />
      </div>
      <div className="relative bg-[#eef6f9] lg:bg-transparent py-12 sm:py-14 lg:py-0">
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 gap-8 lg:gap-0">
          <div className="w-full lg:w-1/3 flex items-end justify-center order-2 lg:order-none">
            <div className="hidden lg:block">
              <Image src="/assets/images/courses/english/communication/WhatYouWillGetSection/Person.png" alt="Person pointing" width={400} height={500} className="object-contain" />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left text-gray-900">Bạn sẽ nhận được gì?</h2>
            <div className="mt-8 sm:mt-10 rounded-2xl bg-white shadow-md ring-1 ring-gray-200 p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-blue-900 shadow-md">{item.icon}</div>
                    <div className="mt-2 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-5 sm:h-10 sm:w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="0" x2="12" y2="18" strokeDasharray="4,4" stroke="currentColor" />
                        <polyline points="6,18 12,24 18,18" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-gray-700 leading-snug">{item.title}</p>
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

function AnywhereSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#0A2E73] leading-tight">Tự tin nói tiếng Anh<br className="hidden md:block" /> bất cứ lúc nào, bất cứ ở đâu</h2>
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/communication/AnywhereSection/image1.png" alt="Học trực tuyến 1" fill className="object-cover rounded-2xl" priority /></div>
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/communication/AnywhereSection/image2.png" alt="Học trực tuyến 2" fill className="object-cover rounded-2xl" priority /></div>
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/communication/AnywhereSection/image3.png" alt="Học trực tuyến 3" fill className="object-cover rounded-2xl" priority /></div>
        </div>
      </div>
    </section>
  );
}

type Props = {
  title: string
  text: string
  number: string
  accent?: string
  panelBg?: string
  icon?: React.ReactNode
  iconColor?: string
}

function StepCard({
  title,
  text,
  number,
  accent = "#230E6A",
  panelBg = "#cfeef0",
  icon,
  iconColor = "#ffffff",
}: Props) {
  return (
    <div className="relative w-56 aspect-square">
      <div className="relative h-full w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <rect x="16" y="18" width="65" height="65" rx="10" ry="10" fill={panelBg} />
          <g stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M26 10 H50" />
            <circle cx="56" cy="10" r="1" fill={accent} />
            <circle cx="64" cy="10" r="1" fill={accent} />
            <circle cx="72" cy="10" r="1" fill={accent} />
            <path d="M26 10 A16 16 0 0 0 10 26" />
            <path d="M10 26 V90" />
            <path d="M10 90 H74" />
            <path d="M74 90 A16 16 0 0 0 86 74" />
            <path d="M86 74 V26" />
            <path d="M86 26 H98" />
            <path d="M98 26 L94 22" />
            <path d="M98 26 L94 30" />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col px-12 py-12">
          <p className="text-lg sm:text-xl font-extrabold text-gray-900">{title}</p>
          <p className="mt-2 text-sm sm:text-base leading-6 text-gray-800">{text}</p>
        </div>

        <div className="absolute -top-5 -right-5 z-10">
          <div
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center shadow-xl"
            style={{ backgroundColor: iconColor, border: "8px solid white" }}
          >
            {icon ?? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill={iconColor}>
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
              </svg>
            )}
          </div>
        </div>

        <div className="absolute -bottom-6 left-8 z-10">
          <div className="relative w-12 h-16 sm:w-14 sm:h-20">
            <svg viewBox="0 0 64 80" className="w-full h-full">
              <path d="M6 6 H58 V74 L32 64 6 74 Z" fill="#ffffff" />
              <path d="M14 14 H50 V66 L32 56 14 66 Z" fill={iconColor} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-sm sm:text-base leading-none">
              {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function HowItWorks1Section() {
  const steps = [
    { title: "Bước 1", text: "Đăng ký", panelBg: "#C6E3E5", iconColor: "#17939E", icon: <UserRoundPlus className="h-7 w-7 sm:h-9 sm:w-9 text-white" />, number: "01" },
    { title: "Bước 2", text: "Kiểm tra trình độ", panelBg: "#D7D4E9", iconColor: "#6849D3", icon: <Gauge className="h-7 w-7 sm:h-9 sm:w-9 text-white" />, number: "02" },
    { title: "Bước 3", text: "Tham gia lớp luyện nói", panelBg: "#E7D4B6", iconColor: "#E0AB23", icon: <CalendarDays className="h-7 w-7 sm:h-9 sm:w-9 text-white" />, number: "03" },
    { title: "Bước 4", text: "Luyện trong tình huống thực tế", panelBg: "#BEDEB9", iconColor: "#139C25", icon: <Users className="h-7 w-7 sm:h-9 sm:w-9 text-white" />, number: "04" },
    { title: "Bước 5", text: "Xây dựng sự tự tin và trôi chảy", panelBg: "#EEC6C6", iconColor: "#E04423", icon: <CheckCircle2 className="h-7 w-7 sm:h-9 sm:w-9 text-white" />, number: "05" }
  ]

  return (
    <section className="w-full bg-[#f5f6f4] py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-3 items-start">
          <div className="lg:pr-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center lg:text-start leading-tight text-blue-900">
              Aspirely hoạt động như thế nào?
            </h2>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:gap-8 sm:grid-cols-2 justify-items-center">
            <StepCard {...steps[0]} />
            <StepCard {...steps[1]} />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <StepCard {...steps[2]} />
          <StepCard {...steps[3]} />
          <StepCard {...steps[4]} />
        </div>
      </div>
    </section>
  )
}

function HowItWorks2Section() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E73] leading-tight mb-6 sm:mb-8">Aspirely Hoạt Động <br /> Như Thế Nào?</h2>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[#0A2E73]">
            <li>Đăng ký dễ dàng</li>
            <li>Tham gia workshop luyện nói miễn phí</li>
            <li>Học cùng giáo viên bản ngữ</li>
            <li>Thấy rõ tiến bộ</li>
          </ul>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#0A2E73] text-white font-bold text-base sm:text-lg shadow-md hover:bg-[#09306d] transition">Đăng ký</button>
        </div>
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hidden lg:block">
          <Image src="/assets/images/courses/english/communication/HowItWorks2Section/image.png" alt="Học viên Aspirely" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}

type Course = { title: string; desc: string; img: string; cta: string };

const items: Course[] = [
  { title: "LUYỆN NÓI TIẾNG ANH IELTS", desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS", img: "/assets/images/courses/english/communication/CoursesSection/image1.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP", desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế", img: "/assets/images/courses/english/communication/CoursesSection/image2.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP", desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời", img: "/assets/images/courses/english/communication/CoursesSection/image3.png", cta: "Phổ biến và tự nhiên" }
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
                <div className="mt-4 hidden lg:block">
                  <div className="relative w-full h-56 md:h-60"><Image src={c.img} alt={c.title} fill className="object-cover rounded-xl mx-auto" priority /></div>
                </div>
                <div className="mt-4 sm:mt-5 md:mt-6 flex"><button className="w-full sm:w-auto sm:px-5 md:px-6 px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A2E73] text-white font-semibold shadow-md hover:bg-[#09306d] transition mx-auto">{c.cta}</button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EnglishCommunicationCoursePage() {
  return (
    <main className="w-full">
      <EnglishCommunicationSection />
      <WhyPracticeSpeakingSection />
      <WhatYouWillGetSection />
      <AnywhereSection />
      <HowItWorks1Section />
      <HowItWorks2Section />
      <CoursesSection />
    </main>
  );
}
