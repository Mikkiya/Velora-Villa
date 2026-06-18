import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="bg-black">
      {/* Block A: 50/50 split — Oasis highlight */}
      <div className="flex flex-col lg:flex-row">
        {/* Text panel */}
        <div className="flex-1 flex flex-col justify-center px-8 py-20 lg:px-20 lg:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans mb-6">
            Outdoor Living
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-none uppercase font-light text-white tracking-wide">
            Oasis of
            <br />
            <em>Relaxation</em>
          </h2>
          <p className="mt-8 text-sm text-white/60 leading-relaxed max-w-md">
            The private infinity pool is harmoniously integrated into the
            villa&apos;s architecture, creating a genuine space for calm and
            connection with the surrounding nature. A place designed to fully
            embrace moments of rest and serenity on the Tangalle coast.
          </p>
          <div className="mt-10">
            <Button href="#reviews" variant="outline">
              Discover
            </Button>
          </div>
        </div>

        {/* Photo panel */}
        <div className="relative flex-1 min-h-[420px] lg:min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
            alt="Velora private infinity pool"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Block B: Full-bleed background with frosted feature cards */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1920&q=80"
            alt="Velora interior living space"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative z-10 py-20 lg:py-28">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-white/60 leading-relaxed">
                We believe a home is more than a physical space — it is an
                environment that shapes a way of living, one imbued with
                harmony, comfort, and inner balance.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Our mission is to create places where architecture, light, and
                nature come together to offer a serene and harmonious life.
              </p>
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 flex flex-col gap-4"
              >
                <h3 className="font-serif text-lg italic uppercase tracking-wide text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
