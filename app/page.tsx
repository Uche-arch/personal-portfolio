"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-zinc-600 bg-white selection:bg-zinc-900 selection:text-white">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Pass down tracking state for navbar highlighters */}
        <Header activeSection={activeSection} />

        <main id="content" className="pt-12 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}