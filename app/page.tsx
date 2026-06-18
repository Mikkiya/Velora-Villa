import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ImageGallery from "@/components/sections/ImageGallery";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageGallery />
        <Features />
        <Reviews />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
