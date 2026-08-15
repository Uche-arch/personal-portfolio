import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Frontend Engineer",
    company: "Gopius E-Learning Services",
    link: "https://gopius.com/",
    description:
      "Lead frontend development on Gopius' Learning Management System, building the core product experience from course delivery to everyday user-facing features. Focus on writing modular, accessible, and performant UI code while collaborating closely with the product team to keep the interface consistent as the platform scales.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Developer",
    company: "YourStudyPath (YSP)",
    link: "https://www.yourstudypath.com/",
    description:
      "Built and maintained frontend features for YSP's product, working with the team to ship user-facing functionality and get hands-on experience with real-world frontend development practices.",
    tech: ["JavaScript", "React.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky Section Header for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-950 lg:hidden">
          Experience
        </h2>
      </div>

      <div className="group/list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative mb-12 grid gap-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 -mx-4 p-4 rounded-lg lg:hover:bg-zinc-50/80 lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:hover:drop-shadow-sm"
          >
            {/* Timeline / Date Column */}
            <header
              className="z-10 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:col-span-2 pt-1"
              aria-label={exp.period}
            >
              {exp.period}
            </header>

            {/* Content Column */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-semibold leading-snug text-zinc-950">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline font-medium text-zinc-900 hover:text-zinc-950 focus-visible:text-zinc-950 text-base group/link"
                >
                  <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:block"></span>
                  <span>
                    {exp.role} · {exp.company}
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600 font-normal">
                {exp.description}
              </p>

              <ul
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label="Technologies used"
              >
                {exp.tech.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center rounded-full bg-zinc-100/90 px-3 py-1 text-xs font-medium leading-5 text-zinc-800"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Brittany Chiang Style Resume Anchor Link */}
      <div className="mt-12">
        <a
          href="/uche_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center font-semibold text-zinc-900 hover:text-zinc-950 group text-sm"
        >
          <span>View Full Résumé</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}