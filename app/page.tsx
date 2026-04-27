import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Flow } from "@/components/sections/Flow";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { MobileCTABar } from "@/components/sections/MobileCTABar";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solution } from "@/components/sections/Solution";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <PainPoints />
        <Solution />
        <Features />
        <WhyUs />
        <Industries />
        <Flow />
        <Testimonials />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
