export default function About() {
  return (
    <section
      id="about"
      className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-950 lg:hidden">
          About
        </h2>
      </div>

      {/* Bio Copy matched to Brittany Chiang's typography scale */}
      <div className="space-y-4 text-sm font-normal leading-relaxed text-zinc-600">
        <p>
          Hi there! I'm Uche, and I like building things that work as good as
          they look. I'm a full-stack engineer who cares about performance,
          modularity, and accessibility in equal measure. I want interfaces and applications
          that are fast, easy to extend, and usable by everyone, not just the
          details that show up in a demo.
        </p>

        <p>
          Currently, I'm a Frontend Engineer at{" "}
          <a
            href="https://gopius.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-900 hover:text-zinc-950 focus-visible:text-zinc-950"
          >
            Gopius E-Learning Services
          </a>
          , where I lead frontend development on our Learning Management System.
          I'm responsible for building out the core product experience, from
          course delivery to the everyday features that make an LMS actually
          usable, working closely with the team to keep the codebase modular
          and the UI consistent as the product grows.
        </p>

        <p>
          Previously, I worked as a Junior Frontend Developer at{" "}
          <a
            href="https://www.yourstudypath.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-900 hover:text-zinc-950 focus-visible:text-zinc-950"
          >
            YourStudyPath (YSP)
          </a>
          , where I got my start building real products for real users. Outside
          of client and product work, I built a full real estate listing
          platform from the ground up, handling everything from property
          listings and search/filtering to a clean, responsive UI. That project,
          along with client work built end-to-end, has shaped how I think about
          building products that hold up under real use.
        </p>

        <p>
          When I'm not at the keyboard, you'll usually find me doing
          calisthenics, chasing whatever random hobby has caught my attention
          that week, or just enjoying the quiet after a good deploy.
        </p>
      </div>
    </section>
  );
}