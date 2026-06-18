import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
          alt="Tangalle coastline at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans mb-6">
          {siteConfig.location}
        </p>
        <h2 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-none uppercase font-light text-white tracking-wide">
          Experience
          <br />
          <em>Velora</em>
        </h2>
        <p className="mt-8 text-sm text-white/60 max-w-md mx-auto leading-relaxed">
          Reserve your private sanctuary on the southern coast of Sri Lanka.
          Limited availability — moments of true rest are rare.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={siteConfig.bookingUrl} external variant="primary">
            Book Your Stay
          </Button>
          <Button href={`mailto:${siteConfig.email}`} variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
