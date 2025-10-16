import Image from "next/image"
import { useTranslations } from "next-intl"

export default function DidYouKnowSection() {
  const t = useTranslations("DidYouKnow");

  return (
    <section className="w-screen max-w-7xl px-5 py-10 space-y-10">
        <div className="w-full h-10 md:h-15 flex justify-center items-center space-x-4">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#0D356B]">{t("title")}</p>
            <div className="relative h-full aspect-square">
                <Image
                    src="/assets/images/DidYouKnowSection/FAQ.png" 
                    alt="Icon" 
                    fill
                    className="object-contain"
                />
            </div>
        </div>

        <div className="grid lg:grid-cols-2 space-x-10">
            <div className="relative bg-[#9F0A0B] rounded-4xl">
                <div className="relative rounded-4xl w-[calc(100%-20px)] h-[calc(100%-20px)]">
                    <Image
                        src="/assets/images/DidYouKnowSection/Picture1.png"
                        alt="Picture 1"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover rounded-4xl"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5">
                <div className="p-4 border-2 border-[#0D356B] rounded-xl flex items-center">
                    <p>{t("point1")}</p>
                </div>

                <div className="relative bg-[#9F0A0B] rounded-4xl">
                    <div className="relative rounded-4xl w-[calc(100%-20px)] h-[calc(100%-20px)] min-h-60">
                        <Image
                            src="/assets/images/DidYouKnowSection/Picture2.png"
                            alt="Picture 1"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover rounded-4xl"
                        />
                    </div>
                </div>

                <div className="relative bg-[#9F0A0B] rounded-4xl">
                    <div className="relative rounded-4xl w-[calc(100%-20px)] h-[calc(100%-20px)] min-h-60 ml-auto">
                        <Image
                            src="/assets/images/DidYouKnowSection/Picture3.png"
                            alt="Picture 1"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover rounded-4xl"
                        />
                    </div>
                </div>

                <div className="p-4 border-2 border-[#0D356B] rounded-xl flex items-center">
                    <p>
                        {t.rich("point2", {
                          span: (chunks) => <span className="font-bold">{chunks}</span>
                        })}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}