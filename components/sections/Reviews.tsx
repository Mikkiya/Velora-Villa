import Container from "@/components/ui/Container";
import { reviews } from "@/lib/content";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3 h-3 fill-white/70"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-black py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-none uppercase font-light text-white tracking-wide">
            Guest Experiences
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-6 border border-white/10 p-8 lg:p-10"
            >
              {/* Opening quote */}
              <span className="font-serif text-6xl leading-none text-white/20 select-none font-light">
                &ldquo;
              </span>

              {/* Review text */}
              <p className="text-sm text-white/70 leading-relaxed -mt-8">
                {review.quote}
              </p>

              {/* Bottom: author + stars */}
              <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-white/10">
                <StarRow count={review.rating} />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-white font-sans font-medium">
                    {review.author}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5 tracking-wide">
                    {review.origin} &middot; via {review.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
