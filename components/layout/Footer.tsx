import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12">
      <Container>
        <div className="rounded-3xl border border-white/10 p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="flex flex-col gap-5">
              <span className="font-serif text-xl tracking-[0.25em] uppercase font-light">
                {siteConfig.name}
              </span>
              <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
                Enjoy comfort, intimacy, and unforgettable experiences at every
                stay in Tangalle.
              </p>
            </div>

            {/* About */}
            <div className="flex flex-col gap-5">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-sans">
                About Us
              </h4>
              <ul className="flex flex-col gap-3">
                {siteConfig.footer.about.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking */}
            <div className="flex flex-col gap-5">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-sans">
                Book With Us
              </h4>
              <ul className="flex flex-col gap-3">
                {siteConfig.footer.booking.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-5">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-sans">
                Stay in Touch
              </h4>
              <ul className="flex flex-col gap-3">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <li key={platform}>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 capitalize"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-white/30 tracking-wide">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-white/30 tracking-wide">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
