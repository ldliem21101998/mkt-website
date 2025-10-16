import Image from "next/image";
import FancyButton from "../FancyButton";
import { useTranslations } from "next-intl";

export default function WorkshopPromoSection() {
  const t = useTranslations("WorkshopPromo");

  return (
    <div className="relative w-full min-h-[60svh] lg:min-h-[600px] flex flex-col justify-center lg:justify-start items-center lg:items-end gap-5 px-4 sm:px-6 md:px-10 py-14 md:py-16">
      <Image
        src="/assets/images/WorkshopPromoSection/MobileBanner.svg"
        alt="Workshop Banner"
        fill
        priority
        className="object-contain lg:hidden"
      />
      <Image
        src="/assets/images/WorkshopPromoSection/DesktopBanner.png"
        alt="Workshop Banner"
        fill
        priority
        className="object-cover hidden lg:block"
      />

      <div className="relative z-10 flex flex-col items-end w-full gap-5">
        <h1 className="w-full lg:w-2/3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-right text-[#9F0A0B]">
          {t.rich("title", {
            span: (chunks) => <span className="text-[#0D356B]">{chunks}</span>,
            br: () => <br />,
          })}
        </h1>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mt-5 gap-5">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-light">{t("subtitle")}</p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold">{t("point1")}</p>
        </div>

        <div className="w-full lg:w-[47%] flex flex-col justify-center items-center gap-3 md:gap-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            {t.rich("point2", {
              span: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
          <FancyButton className="bg-[#9F0A0B] text-white lg:text-xl mt-4 lg:mt-5 py-3 px-6 rounded-full">
            {t("button")}
          </FancyButton>
        </div>
      </div>
    </div>
  );
}