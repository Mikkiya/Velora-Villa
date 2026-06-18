import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { galleryImages } from "@/lib/content";

export default function ImageGallery() {
  const [left, center, right] = galleryImages;

  return (
    <section id="gallery" className="bg-black py-0">
      {/* Section label */}
      <Container>
        <p className="pt-16 lg:pt-24 text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
          The Villa
        </p>
      </Container>

      {/* Three-image strip */}
      <div className="mt-8 relative flex items-end gap-2 lg:gap-3 px-0 overflow-hidden">
        {/* Left image — shorter */}
        <div className="relative hidden sm:block sm:w-[22%] shrink-0 h-[420px] lg:h-[580px]">
          <Image
            src={left.src}
            alt={left.alt}
            fill
            className="object-cover"
            sizes="22vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Center image — tallest, with overlaid headline */}
        <div className="relative flex-1 sm:w-[56%] h-[480px] sm:h-[520px] lg:h-[680px]">
          <Image
            src={center.src}
            alt={center.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 56vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Overlaid headline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
            <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-none uppercase font-light text-white tracking-wide">
              Private Luxury
              <br />
              Villa
            </h2>
          </div>

          {/* Description + CTA at bottom of center image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              Bathed in natural light, with wide terraces and living spaces
              designed for absolute comfort on the Tangalle coast.
            </p>
            <Button href="#features" variant="outline" className="shrink-0">
              Discover
            </Button>
          </div>
        </div>

        {/* Right image — shorter */}
        <div className="relative hidden sm:block sm:w-[22%] shrink-0 h-[420px] lg:h-[580px]">
          <Image
            src={right.src}
            alt={right.alt}
            fill
            className="object-cover"
            sizes="22vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}
