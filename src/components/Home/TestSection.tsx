"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TestSection() {
  const t = useTranslations("Test");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !agree1 || !agree2) {
      setError("Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.");
      return;
    }
    setError("");
    await fetch("/api/set-test-cookie");
    window.location.href = "/test";
  };

  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] overflow-hidden">
      <Image
        src="/assets/images/TestSection/MobileBanner.svg"
        alt="Main background"
        fill
        priority
        className="object-cover lg:hidden"
      />
      <Image
        src="/assets/images/TestSection/DesktopBanner.svg"
        alt="Main background"
        fill
        priority
        className="object-cover hidden lg:block"
      />

      <div className="absolute inset-0 lg:w-1/2 lg:left-[8%] flex flex-col items-center lg:items-start justify-center text-white z-10 p-5 space-y-5">
        <div className="relative w-[320px] h-[150px] sm:w-[360px] sm:h-[108px] md:w-[420px] md:h-[120px] lg:w-[450px] lg:h-[140px] xl:w-[600px] xl:h-[160px]">
          <Image src="/brush.svg" alt="Brush Background" fill />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
              {t("subtitle")}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          {t.rich("title", { br: () => <br /> })}
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-white/90 placeholder-white/80 focus:outline-none py-2 text-base sm:text-lg"
            placeholder={t("email")}
          />
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-transparent border-b border-white/90 placeholder-white/80 focus:outline-none py-2 text-base sm:text-lg"
            placeholder={t("phone")}
          />

          <div className="space-y-3 text-sm sm:text-base">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={agree1}
                onChange={(e) => setAgree1(e.target.checked)}
              />
              {t("agreement1")}
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={agree2}
                onChange={(e) => setAgree2(e.target.checked)}
              />
              {t("agreement2")}
            </label>
          </div>

          {error && <p className="text-red-300 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-fit bg-[#9F0A0B] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-lg sm:text-xl font-semibold text-white"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
}