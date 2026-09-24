"use client";

import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope, FaXTwitter, FaFacebook } from "react-icons/fa6";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const navItems = ["about", "experience", "projects"];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name / Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          <a href="/">Uche Godswill</a>
        </h1>

        {/* Title */}
        <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-800 sm:text-xl">
          Full-Stack Engineer
        </h2>

        {/* Tagline */}
        <p className="mt-4 max-w-xs text-[15px] leading-normal text-zinc-600">
          I build high-performance websites, web apps, and digital experiences
          from the ground up.
        </p>

        {/* Desktop Sticky Navigation */}
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max flex flex-col gap-1">
            {navItems.map((section) => {
              const isActive = activeSection === section;

              return (
                <li key={section}>
                  <a
                    className="group flex items-center py-3 select-none"
                    href={`#${section}`}
                  >
                    {/* Expanding Horizontal Indicator Line */}
                    <span
                      className={`mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-zinc-900"
                          : "w-8 bg-zinc-300 group-hover:w-16 group-hover:bg-zinc-900"
                      }`}
                    ></span>

                    {/* Nav Item Label */}
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-zinc-900"
                          : "text-zinc-400 group-hover:text-zinc-900"
                      }`}
                    >
                      {section}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links Footer */}
      <ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media links"
      >
        <li>
          <a
            href="https://github.com/Uche-arch"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/uche-godswill-0a9532424"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=61592462423861"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            title="Facebook"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-5 w-5" />
          </a>
        </li>
        
       
        <li>
          <a
            href="mailto:godswilluche291@gmail.com"
            className="block text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            title="Email"
          >
            <span className="sr-only">Email</span>
            <FaEnvelope className="h-5 w-5" />
          </a>
        </li>
         <li>
          <a
            href="https://x.com/Coder_Uche"
            className="block text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">X</span>
            <FaXTwitter className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </header>
  );
}