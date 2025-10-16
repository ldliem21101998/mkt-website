import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section
      className="w-full md:h-[400px] flex flex-col md:flex-row items-center justify-between py-5 gap-5"
      style={{
        backgroundImage:
          "linear-gradient(#05386D80, #05386D80), url(/assets/images/CTASection/Banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 text-white space-y-4">
        <p className="text-xl md:text-4xl text-center font-semibold">
          {t("title")}
        </p>
        <div className="w-full h-1 bg-white" />
        <p className="mt-6 md:mt-10 px-4 md:px-10 text-start text-base md:text-xl">
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <button className="text-white md:text-2xl font-semibold px-8 md:px-10 py-3 border-2 rounded-xl">
          {t("button")}
        </button>
      </div>
    </section>
  );
}