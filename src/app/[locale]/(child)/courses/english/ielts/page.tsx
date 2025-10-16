import Image from "next/image";
import clsx from "clsx";
import { ChevronRight, Speech, Target, MessageSquare, BookOpen, KeyRound } from "lucide-react";

function IeltsSection() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] xl:min-h-[720px] flex items-center justify-start text-white bg-[#0A2E73] lg:bg-transparent">
      <Image src="/assets/images/courses/english/ielts/Banner.png" alt="IELTS Background" fill className="object-cover hidden lg:block" priority />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start">
        <div className="px-6 sm:px-8 md:px-10 py-8 md:py-10">
          <h1 className="font-extrabold uppercase relative inline-block leading-tight">
            <span className="text-3xl sm:text-4xl">LUYỆN NÓI</span>
            <br />
            <span className="text-6xl sm:text-7xl md:text-8xl">IELTS</span>
          </h1>
          <p className="mb-6 text-lg sm:text-xl md:text-2xl border-l-4 border-white/60 lg:border-[#0D356B] pl-4 mt-3 md:mt-4">
            Từ Band 4.0 đến 9.0 - Tự tin giao tiếp <br className="hidden sm:block" /> cùng giáo viên bản xứ
          </p>
          <ul className="space-y-2 sm:space-y-3 mb-6 md:mb-8 text-base sm:text-lg md:text-2xl">
            <li className="flex items-center gap-2"><span className="text-white">✓</span> Hoàn thiện phát âm</li>
            <li className="flex items-center gap-2"><span className="text-white">✓</span> Nâng cao kỹ năng phát âm</li>
            <li className="flex items-center gap-2"><span className="text-white">✓</span> Nói tiếng Anh tự nhiên hơn</li>
          </ul>
          <button className="text-white font-bold flex items-center gap-2 transition">
            <p className="bg-white lg:bg-[#0A2E73] text-[#0A2E73] lg:text-white text-2xl sm:text-3xl md:text-4xl py-3 px-10 sm:px-16 md:px-20 rounded-r-full">THAM GIA NGAY</p>
            <ChevronRight className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white lg:bg-[#0A2E73] text-[#0A2E73] lg:text-white rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SpeakingSection() {
  return (
    <section className="w-full bg-[#F7F7F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0A2E73]">Chinh phục IELTS Speaking</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0A2E73] mt-2">Tăng band điểm, tự tin giao tiếp</h3>
          <p className="mt-5 md:mt-6 text-base sm:text-lg text-gray-700">Bài thi Nói IELTS không chỉ là từ vựng, mà là cách bạn truyền tải ý tưởng rõ ràng, tự nhiên và đầy tự tin. Dù bạn đặt mục tiêu Band 6.0 hay 8.5, chúng tôi sẽ giúp bạn chinh phục cả 3 phần thi để tỏa sáng trong ngày thi</p>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-end">
          <div className="space-y-5 md:space-y-6">
            <div className="rounded-2xl border border-gray-300 shadow-sm p-5 md:p-6">
              <p className="text-base sm:text-lg text-gray-800"><span className="font-semibold">Phần 1 – Giới Thiệu &amp; Phỏng Vấn</span><br />Chúng tôi sẽ hướng dẫn bạn trả lời các câu hỏi đời thường một cách trôi chảy, tự nhiên và gây ấn tượng ngay từ đầu.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 shadow-sm p-5 md:p-6">
              <p className="text-base sm:text-lg text-gray-800"><span className="font-semibold">Phần 2 – Nói Liên Tục (Long Turn)</span><br />Bạn sẽ học cách sắp xếp ý tưởng, nói liên tục 2 phút không ngập ngừng và sử dụng vốn từ phong phú để ghi điểm cao.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 shadow-sm p-5 md:p-6">
              <p className="text-base sm:text-lg text-gray-800"><span className="font-semibold">Phần 3 – Thảo Luận</span><br />Chúng tôi sẽ huấn luyện bạn xử lý các câu hỏi phức tạp, bày tỏ quan điểm và lập luận rõ ràng, sâu sắc.</p>
            </div>
          </div>
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] hidden lg:block">
            <Image src="/assets/images/courses/ielts/student-speaking.png" alt="Học viên cầm chứng chỉ IELTS" fill className="object-contain object-bottom" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoIntroSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-6 sm:mt-8 mx-auto w-full max-w-5xl">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
            <video className="w-full h-full object-cover" controls muted playsInline>
              <source src="/assets/videos/ielts/placeholder.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function NativeTeacherSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E73] text-center mb-6 sm:mb-8 leading-tight">Học cùng giáo viên bản ngữ <br /> &amp; giàu kinh nghiệm</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[500px] hidden lg:block">
          <Image src="/assets/images/courses/english/ielts/NativeTeacherSection/image.png" alt="Học cùng giáo viên bản ngữ" fill className="object-cover rounded-xl" priority />
        </div>
        <div>
          <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-gray-800">
            <li className="flex items-center gap-3 sm:gap-4"><Speech className="w-6 h-6 sm:w-7 sm:h-7 text-black" /><span>Cách nói trôi chảy mà không ngập ngừng lâu</span></li>
            <li className="flex items-center gap-3 sm:gap-4"><Target className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" /><span>Cách cải thiện phát âm và giảm giọng địa phương</span></li>
            <li className="flex items-center gap-3 sm:gap-4"><MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" /><span>Dùng thành ngữ, cụm từ và diễn đạt như người bản xứ</span></li>
            <li className="flex items-center gap-3 sm:gap-4"><BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" /><span>Cách sắp xếp ý tưởng rõ ràng trong Phần 2 và 3</span></li>
            <li className="flex items-center gap-3 sm:gap-4"><KeyRound className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" /><span>Cách xử lý những câu hỏi khó một cách tự tin</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

type Item = { title: string; desc: string; className?: string };

const Card = ({ title, desc, className }: Item) => (
  <div className={clsx("relative h-full", className)}>
    <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-[#0A2E73] rounded-2xl"></div>
    <div className="relative h-full rounded-2xl border-2 border-[#0A2E73] bg-white p-5 md:p-7 lg:p-8 shadow-sm flex flex-col">
      <h4 className="text-[#0A2E73] font-semibold text-lg md:text-xl mb-2">{title}</h4>
      <p className="text-gray-700 leading-relaxed flex-1 text-base sm:text-lg">{desc}</p>
    </div>
  </div>
);

function WhySpeakingSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#0A2E73] leading-tight">Tại Sao Aspirely Chỉ Tập Trung<br className="hidden md:block" /> Vào Kỹ Năng Nói?</h2>
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col items-stretch"><Card title="Nói là kỹ năng khó tự cải thiện nhất" desc="Bạn có thể tự luyện đọc, nghe và viết bằng sách, ứng dụng hoặc tài liệu online." /></div>
          <div><Card title="Tiết kiệm thời gian và chi phí" desc="Thay vì trả tiền cho một khóa học tổng hợp đủ kỹ năng, Aspirely chỉ tập trung vào phần mà bạn không thể tự luyện hiệu quả — đó chính là kỹ năng Nói." /></div>
          <div className="flex flex-col items-stretch"><Card title="Nói tiến bộ nhanh nhất khi học với giáo viên bản ngữ" desc="Chỉ có giáo viên bản ngữ mới giúp bạn nói tự nhiên hơn, chỉnh phát âm ngay lập tức và rèn luyện sự trôi chảy." /></div>
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <Card title="Câu trả lời tự nhiên hiệu quả hơn học thuộc" desc="Học thuộc câu trả lời IELTS thường khiến bạn ngập ngừng và kém trôi chảy. Aspirely giúp bạn luyện cách trả lời tự nhiên và linh hoạt, để nói mượt mà và tự tin hơn." className="h-full" />
          <Card title="Xây dựng sự tự tin với giáo viên bản ngữ" desc="Nhiều thí sinh cảm thấy lo lắng khi trả lời câu hỏi IELTS trước giám khảo bản ngữ trong kỳ thi. Với Aspirely, việc luyện tập thường xuyên cùng giáo viên bản ngữ sẽ giúp bạn giảm căng thẳng trong phòng thi và giao tiếp thoải mái bằng tiếng Anh." className="h-full" />
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
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/ielts/AnywhereSection/image1.png" alt="Học trực tuyến 1" fill className="object-cover rounded-2xl" priority /></div>
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/ielts/AnywhereSection/image2.png" alt="Học trực tuyến 2" fill className="object-cover rounded-2xl" priority /></div>
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] hidden lg:block"><Image src="/assets/images/courses/english/ielts/AnywhereSection/image3.png" alt="Học trực tuyến 3" fill className="object-cover rounded-2xl" priority /></div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Nguyen T.", role: "Sinh viên Đại học", text: "Trước đây, tôi thường ngập ngừng và không tìm được từ để nói. Sau chỉ 2 tháng học, tôi đã có thể nói trôi chảy 2 phút liền mà không dừng lại. Điểm Nói IELTS của tôi đã tăng từ 5.5 lên 6.5.", rating: 5, avatar: "/assets/images/courses/ielts/students/nguyen-t.jpg", active: true },
  { name: "Linh P.", role: "Nhân viên văn phòng trẻ", text: "Tôi thường nói quá nhanh và phát âm chưa chuẩn. Giáo viên đã giúp tôi luyện cách nói chậm rãi hơn, dùng từ nối và phát âm rõ ràng. Trong buổi thi thử, giám khảo nhận xét rằng phát âm của tôi dễ hiểu hơn nhiều.", rating: 5, avatar: "/assets/images/courses/ielts/students/linh-p.jpg" },
  { name: "Anh K", role: "Học sinh cấp 3", text: "Được luyện tập với giáo viên bản ngữ hàng tuần giúp tôi tự tin hơn rất nhiều. Giờ đây tôi có thể diễn đạt ý tưởng một cách tự nhiên, không còn học thuộc câu trả lời nữa. Điểm Nói của tôi tăng từ 5.0 lên 6.5.", rating: 5, avatar: "/assets/images/courses/ielts/students/anh-k.jpg" },
  { name: "Minh H.", role: "Thí sinh IELTS", text: "Tôi từng rất lo lắng ở phần Thảo luận (Part 3). Giáo viên đã chỉ cho tôi cách phát triển câu trả lời dài và đưa ra quan điểm rõ ràng. Trong kỳ thi thật, tôi bình tĩnh hơn và đạt 7.5 Speaking.", rating: 5, avatar: "/assets/images/courses/ielts/students/minh-h.jpg" }
];

function TestimonialSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E73] leading-tight mb-6 sm:mb-8">Học viên thực sự,<br /> Thành công thực sự<br /> trong kỹ năng Nói</h2>
          <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-md hidden lg:block">
            <Image src="/assets/images/courses/ielts/students/ielts-success.jpg" alt="Học viên đạt IELTS" fill className="object-cover" priority />
            <div className="absolute bottom-0 left-0 bg-white/90 px-3 py-2 text-xs sm:text-sm font-medium">Nguyen T., IELTS 6.5</div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-h-[420px] md:max-h-[500px] overflow-y-auto pr-1 sm:pr-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`rounded-xl p-4 sm:p-5 shadow-sm border ${t.active ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`}>
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <div className="hidden lg:block"><Image src={t.avatar} alt={t.name} width={44} height={44} className="rounded-full object-cover" /></div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-red-500 text-base sm:text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
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
          <Image src="/assets/images/courses/english/ielts/HowItWorksSection/image.png" alt="Học viên Aspirely" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}

type Course = { title: string; desc: string; img: string; cta: string };

const items: Course[] = [
  { title: "LUYỆN NÓI TIẾNG ANH IELTS", desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS", img: "/assets/images/courses/english/ielts/CoursesSection/image1.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP", desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế", img: "/assets/images/courses/english/ielts/CoursesSection/image2.png", cta: "Phổ biến và tự nhiên" },
  { title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP", desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời", img: "/assets/images/courses/english/ielts/CoursesSection/image3.png", cta: "Phổ biến và tự nhiên" }
];

function CoursesSection() {
  return (
    <section className="w-full bg-[#0A2E73] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12">CÁC KHÓA HỌC CỦA ASPIRELY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((c, i) => (
            <div
              key={i}
              className="relative bg-[#F7F7F5] rounded-2xl md:rounded-[28px] shadow-lg overflow-hidden flex flex-col lg:h-[500px]"
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
                    <Image src={c.img} alt={c.title} fill className="object-cover rounded-xl mx-auto" priority />
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

export default function IeltsCoursePage() {
  return (
    <main className="w-full">
      <IeltsSection />
      <SpeakingSection />
      <VideoIntroSection />
      <NativeTeacherSection />
      <WhySpeakingSection />
      <AnywhereSection />
      <TestimonialSection />
      <HowItWorksSection />
      <CoursesSection />
    </main>
  );
}
