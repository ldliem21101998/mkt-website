import Image from "next/image";
import { useMessages } from "next-intl";

export default function HighlightsSection({
  onButtonClick,
}: {
  onButtonClick: (index: number) => void;
}) {
  const messages = useMessages();
  const items = messages.Highlights as {
    bg: string;
    overlay: string;
    icon: string;
    title: string;
    content: string;
    button: string;
  }[];

  return (
    <section className="w-full md:grid md:grid-cols-3 md:overflow-visible flex overflow-x-auto snap-x snap-mandatory">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative w-screen md:w-full flex-shrink-0 snap-center min-h-[300px] md:min-h-[400px] xl:min-h-[500px]"
          style={{
            backgroundImage: `url(${item.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`absolute inset-0 ${item.overlay}`} />
          <div className="relative h-full flex flex-col text-white p-6 gap-6">
            <div className="flex items-center justify-center gap-2 text-center">
              <div className="relative h-12 sm:h-14 xl:h-15 aspect-square">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-semibold">
                {item.title}
              </p>
            </div>

            <div className="flex-1 flex items-start justify-center">
              <div
                className="text-base sm:text-lg xl:text-xl leading-relaxed text-start max-w-[90ch]"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>

            <button
              className="mt-auto self-center inline-flex items-center h-11 px-6 rounded-lg border border-white cursor-pointer"
              onClick={() => onButtonClick(i)}
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}