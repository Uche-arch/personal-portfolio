import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string; // Image path or URL (e.g., "/projects/propnetix.png")
  imageAlt?: string;
}

const projects: Project[] = [
  {
    title: "QuickCart",
    description:
      "SaaS platform letting small business owners launch a digital storefront in minutes and receive orders straight to WhatsApp (no manual messaging required). Currently powering 15+ active stores with 400+ products listed.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Kinde (Auth)",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://quickcartv1.vercel.app/",
    image: "/projects/quickcart.png",
    imageAlt: "QuickCart e-commerce storefront preview",
  },
  {
    title: "PropNetix",
    description:
      "Real estate listing platform connecting landlords and agents with people searching for homes, shops, and vacant spaces. Built to replace word-of-mouth property hunting with simple, accessible search.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "shadcn/ui",
      "Cloudinary",
      "Kinde (Auth)",
    ],
    link: "https://propnetix.vercel.app/",
    image: "/projects/propnetix.png",
    imageAlt: "PropNetix real estate platform preview",
  },
  {
    title: "Phylax360",
    description:
      "Community crime-mapping app where citizens pin incident locations on an interactive map, giving security agencies real-time visibility to deploy resources where they're needed most.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "MongoDB"],
    link: "https://phylax360.vercel.app/",
    image: "/projects/phylax360.png",
    imageAlt: "Phylax360 crime hotspot mapping platform preview",
  },
  {
    title: "CampusConnect",
    description:
      "Random video chat app for university students, inspired by Omegle. Matches users for spontaneous conversations outside their usual circle, using WebRTC for peer-to-peer video and WebSockets for real-time matching.",
    tech: ["Next.js", "WebRTC", "Tailwind CSS", "WebSocket", "shadcn/ui"],
    link: "https://vide-chat-app.vercel.app/",
    image: "/projects/campusconnect.png",
    imageAlt: "CampusConnect web app preview",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-950 lg:hidden">
          Projects
        </h2>
      </div>

      <div className="group/list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative mb-12 grid gap-4 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 -mx-4 p-4 rounded-lg lg:hover:bg-zinc-50/80 lg:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:hover:drop-shadow-sm"
          >
            {/* Project Thumbnail Image Container */}
            <div className="bg -red z-10 sm:col-span-2 relative rounded border border-zinc-200/80 bg-zinc-100 transition sm:order-1 aspect-video sm:aspect-[4/3] flex items-center justify-center text-xs text-zinc-400 overflow-hidden font-medium group-hover:border-zinc-300">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <span>Preview</span>
              )}
            </div>

            {/* Project Details */}
            <div className="sm:col-span-6 sm:order-2">
              <h3 className="font-semibold leading-snug text-zinc-950">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline font-medium text-zinc-900 hover:text-zinc-950 focus-visible:text-zinc-950 text-base group/link"
                >
                  <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:block"></span>
                  <span>
                    {project.title}
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 font-normal">
                {project.description}
              </p>

              <ul
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label="Technologies used"
              >
                {project.tech.map((tech) => (
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

      {/* Archive Link */}
      <div className="mt-12">
        <a
          href="https://github.com/Uche-arch"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center font-semibold text-zinc-900 hover:text-zinc-950 group text-sm"
        >
          <span>View Full Project Archive</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}