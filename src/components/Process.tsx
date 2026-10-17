import { ProcessSteps } from "./motion/ProcessSteps";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { title: "İletişim", text: "İhtiyacınızı ve yapınızın konumunu paylaşın." },
  { title: "Keşif", text: "Yapının durumu ve uygulama alanı değerlendirilsin." },
  { title: "Teklif", text: "Malzeme seçenekleri, iş kapsamı ve fiyat netleştirilsin." },
  { title: "Uygulama", text: "Kararlaştırılan plan doğrultusunda çalışma başlasın." },
];

export function Process() {
  return (
    <section id="surec" aria-labelledby="surec-baslik">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="surec-baslik"
            eyebrow="Uygulama süreci"
            title="İlk aramadan uygulamaya, adım adım."
            className="lg:col-span-7"
          />
          <Reveal
            as="p"
            delay={0.1}
            className="max-w-md text-lg leading-relaxed text-muted lg:col-span-5 lg:justify-self-end"
          >
            Aşağıdaki adımlar size yol göstermesi için hazırlanmış önerilen bir süreçtir; ayrıntılar yapınıza
            göre birlikte belirlenir.
          </Reveal>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
