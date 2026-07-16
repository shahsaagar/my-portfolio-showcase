import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/portfolio/Nav";
import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Skills,
} from "../components/portfolio/Sections";
import { profile } from "../components/portfolio/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  url: profile.github,
  sameAs: [profile.github, profile.linkedin].filter((u) => u && u !== "#"),
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
