import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CefrSection() {
  const t = useTranslations("Cefr");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
      <div className="grid max-md:hidden md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture1.png"
            alt="Picture 1"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture2.png"
            alt="Picture 2"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture3.png"
            alt="Picture 3"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture4.png"
            alt="Picture 4"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture5.png"
            alt="Picture 5"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture6.png"
            alt="Picture 6"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture7.png"
            alt="Picture 7"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/CefrSection/Picture8.png"
            alt="Picture 8"
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            className="object-cover rounded-4xl"
          />
        </div>
      </div>

      <div className="w-full space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-[#0D356B] font-semibold">
          {t("title")}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center">
          {t("subtitle")}
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[18/9]">
          <Image
            src="/assets/images/CefrSection/CefrLevel.png"
            alt="CEFR Levels"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}