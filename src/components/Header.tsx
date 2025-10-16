"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const messages = useMessages();
  const t = useTranslations("header");
  const courseData = (messages?.header.coursesMenu || []) as {
    key: string;
    title: string;
    items: { key: string; label: string }[];
  }[];

  const router = useRouter();
  const pathname = usePathname();
  const isHome = /^\/(vi|en|zh-CN|zh-TW)?\/?$/.test(pathname);

  const locales = [
    { label: "Tiếng Việt", code: "vi" },
    { label: "English", code: "en" },
    { label: "中文(简体)", code: "zh-CN" },
    { label: "中文(繁體)", code: "zh-TW" },
  ];

  const currentLocale = locales.find((l) => pathname.startsWith(`/${l.code}`)) || locales[0];

  const handleLangChange = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(vi|en|zh-CN|zh-TW)/, "");
    router.push(`/${code}${pathWithoutLocale}`);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const handleProgramClick = (course: { key: string; title: string; items: { key: string; label: string }[] }, program: { key: string; label: string }) => {
    router.push(`/courses/${course.key}/${program.key}`);
    setCourseOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-screen min-h-20 fixed top-0 left-0 z-50 px-5 py-2 flex justify-between font-semibold transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-black/80 backdrop-blur-md text-white shadow-xl"
            : "bg-transparent text-white"
          : "bg-black text-white shadow-md"
      }`}
    >
      <div className="w-full xl:w-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo-white.svg" alt="logo" width={120} height={36} priority />
        </Link>
        <button className="xl:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } xl:flex absolute xl:static top-full left-0 w-full bg-black/80 xl:bg-transparent flex-col xl:flex-row justify-end items-start xl:items-center space-y-2 xl:space-y-0 xl:space-x-5 px-10 py-3 z-50`}
      >
        <Link
          href="/#tutors"
          className="p-2"
          onClick={() => setMenuOpen(false)}
        >
          {t("teachers")}
        </Link>

        <div className="relative w-full xl:w-auto">
          <button
            onClick={() => setCourseOpen(!courseOpen)}
            className="flex items-center justify-between w-full xl:w-auto px-3 py-1"
          >
            {t("courses")} <ChevronDown size={20} />
          </button>
          {courseOpen && (
            <div className="w-full xl:w-64 bg-black text-white xl:absolute top-full left-0 z-50 shadow-xl p-3 space-y-3 rounded-xl">
              {courseData.map((course, index) => (
                <div key={index}>
                  <p className="font-bold mb-3 text-xl">{course.title}</p>
                  <ul className="space-y-1">
                    {course.items.map((program, idx) => (
                      <li key={idx} className="cursor-pointer" onClick={() => handleProgramClick(course, program)}>{program.label}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Link href="/recruitment" className="p-2" onClick={() => setMenuOpen(false)}>
          {t("recruit")}
        </Link>

        <div className="relative w-full xl:w-auto">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center justify-between w-full xl:w-auto px-3 py-1"
          >
            {currentLocale.label} <ChevronDown size={20} />
          </button>
          {langOpen && (
            <ul className="w-full xl:w-40 bg-black text-white xl:absolute top-full left-0 z-50 shadow-xl rounded-xl">
              {locales.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className="px-4 py-2 hover:bg-black/50 cursor-pointer"
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href="https://app.aspirely.edu.vn/login"
          className="border-2 px-4 py-1.5 rounded-full"
          onClick={() => setMenuOpen(false)}
        >
          {t("login")}
        </Link>
      </nav>
    </header>
  );
}