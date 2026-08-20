import type { CSSProperties, ReactNode } from "react";

interface InteriorPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children: ReactNode;
}

export default function InteriorPage({
  eyebrow,
  title,
  intro,
  image = "/assets/about.jpg",
  children,
}: InteriorPageProps) {
  return (
    <>
      <section
        className="interior-hero"
        style={{ "--image": `url(${image})` } as CSSProperties}
      >
        <div className="container interior-hero-content">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      {children}
    </>
  );
}
