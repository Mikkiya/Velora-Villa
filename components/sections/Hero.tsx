import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
          alt="Velora villa exterior at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content — pushed to bottom */}
      <div className="relative z-10 mt-auto">
        <Container>
          <div className="pb-16 lg:pb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Large serif villa name */}
            <h1 className="font-serif text-[clamp(4rem,14vw,13rem)] leading-none tracking-wide uppercase font-light text-white">
              {siteConfig.name}
            </h1>

            {/* Tagline + CTA — right side on desktop */}
            <div className="lg:max-w-xs flex flex-col gap-6 lg:pb-4">
              <div>
                <p className="font-serif text-lg lg:text-xl italic text-white/90 leading-snug uppercase tracking-wide">
                  {siteConfig.tagline}
                </p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {siteConfig.description}
                </p>
              </div>
              <Button href={siteConfig.bookingUrl} external variant="primary">
                Book Your Stay
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
