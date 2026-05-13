import type { CSSProperties } from "react";
import { SiteHeader } from "./components/SiteHeader";

const slides = [
  {
    image: "/slides/slide-1.jpg",
    label: "Construction planning table with blueprints",
  },
  {
    image: "/slides/slide-2.jpg",
    label: "Project site progress photo",
  },
  {
    image: "/slides/slide-3.jpg",
    label: "Completed engineering project",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/" />

      <section className="photo-slider" aria-label="Featured project photos">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className="slide"
            role="img"
            aria-label={slide.label}
            style={
              {
                "--slide-image": `url(${slide.image})`,
                "--slide-index": index,
              } as CSSProperties
            }
          />
        ))}
      </section>
    </main>
  );
}
