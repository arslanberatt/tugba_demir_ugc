// src/components/PhotographySection.jsx
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// import örnekleri
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import phone6 from "../assets/phone6.png";
import phone7 from "../assets/phone7.png";
import phone8 from "../assets/phone8.png";
import phone9 from "../assets/phone9.png";
import phone10 from "../assets/phone10.png";

export default function PhotoSec({
  title = "GALERİ",
  ctaLabel = "My star projects",
  onCtaClick = () => {},
  images = [phone3, phone4, phone5, phone6, phone7, phone8, phone9, phone10],
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const srcOf = (x) => (typeof x === "string" ? x : x?.src);
  const altOf = (x, i) =>
    typeof x === "object" && x?.alt ? x.alt : `Photography ${i + 1}`;
  const captionOf = (x) => (typeof x === "object" ? x?.caption : undefined);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  // ESC / arrows ve body-scroll kilidi
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, close, prev, next]);

  return (
    <section className={`w-full text-black ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl bg-neutral-200 cursor-zoom-in"
              onClick={() => openAt(i)}
            >
              <div className="aspect-[4/5]">
                <img
                  src={srcOf(img)}
                  alt={altOf(img, i)}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {open && images[index] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <img
                src={srcOf(images[index])}
                alt={altOf(images[index], index)}
                className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
              />
            </div>

            {(captionOf(images[index]) || altOf(images[index], index)) && (
              <div className="mt-3 text-center text-sm text-neutral-200">
                {captionOf(images[index]) || altOf(images[index], index)}
              </div>
            )}

            <button
              onClick={close}
              aria-label="Kapat"
              className="absolute -top-10 right-0 md:top-2 md:right-2 rounded-full bg-white/10 hover:bg-white/20 p-2 transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigasyon */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Önceki"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 transition"
                >
                  <ChevronLeft className="w-7 h-7 text-white" />
                </button>
                <button
                  onClick={next}
                  aria-label="Sonraki"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 transition"
                >
                  <ChevronRight className="w-7 h-7 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
