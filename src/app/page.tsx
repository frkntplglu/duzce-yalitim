import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Process } from "@/components/Process";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyInsulation } from "@/components/WhyInsulation";

export default function Home() {
  return (
    <>
      <Header />
      <main id="icerik">
        <Hero />
        <Services />
        <WhyInsulation />
        <Process />
        <ProjectGallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
      <WhatsAppButton />
    </>
  );
}
