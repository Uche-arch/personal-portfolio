// "use client";
// import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa6";

// interface HeaderProps {
//   activeSection: string;
// }

// export default function Header({ activeSection }: HeaderProps) {
//   return (
//     <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
//       <div>
//         <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
//           <a href="/">Uche Godswill</a>
//         </h1>
//         <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-800 sm:text-xl">
//           Full-Stack Engineer
//         </h2>
//         <p className="mt-4 max-w-xs leading-normal text-sm text-zinc-500">
//           I build high-performance websites, web apps, and digital experiences from the ground up.
//         </p>

//         {/* Sticky Sidebar Navigation */}
//         <nav className="nav hidden lg:block mt-16">
//           <ul className="w-max flex flex-col gap-2">
//             {["about", "experience", "projects"].map((section) => (
//               <li key={section}>
//                 <a className="group flex items-center py-3 select-none" href={`#${section}`}>
//                   <span
//                     className={`mr-4 h-px transition-all duration-300 will-change-[width] ${
//                       activeSection === section
//                         ? "w-16 bg-zinc-950"
//                         : "w-8 bg-zinc-300 group-hover:w-16 group-hover:bg-zinc-950"
//                     }`}
//                   ></span>
//                   <span
//                     className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 will-change-transform origin-left ${
//                       activeSection === section
//                         ? "text-zinc-950 scale-110"
//                         : "text-zinc-400 group-hover:text-zinc-950 scale-100"
//                     }`}
//                   >
//                     {section}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Social Icons Footer */}
//       <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media links">
//         <li>
//           <a href="https://github.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="GitHub">
//             <span className="sr-only">GitHub</span>
//             <FaGithub className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="LinkedIn">
//             <span className="sr-only">LinkedIn</span>
//             <FaLinkedinIn className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="https://youtube.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="YouTube">
//             <span className="sr-only">YouTube</span>
//             <FaYoutube className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="mailto:your.email@example.com" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="Email">
//             <span className="sr-only">Email</span>
//             <FaEnvelope className="h-5 w-5" />
//           </a>
//         </li>
//       </ul>
//     </header>
//   );
// }

// "use client";
// import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa6";

// interface HeaderProps {
//   activeSection: string;
// }

// export default function Header({ activeSection }: HeaderProps) {
//   return (
//     <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
//       <div>
//         <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
//           <a href="/">Uche Godswill</a>
//         </h1>
//         <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-800 sm:text-xl">
//           Full-Stack Engineer
//         </h2>
        
//         {/* ENHANCED TYPOGRAPHY: Increased font size (text-base), line-height (leading-relaxed), readability width (max-w-md), and high-contrast color (text-zinc-600) */}
//         <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600">
//           I build high-performance websites, web apps, and digital experiences from the ground up.
//         </p>

//         {/* Sticky Sidebar Navigation */}
//         <nav className="nav hidden lg:block mt-16">
//           <ul className="w-max flex flex-col gap-2">
//             {["about", "experience", "projects"].map((section) => (
//               <li key={section}>
//                 <a className="group flex items-center py-3 select-none" href={`#${section}`}>
//                   <span
//                     className={`mr-4 h-px transition-all duration-300 will-change-[width] ${
//                       activeSection === section
//                         ? "w-16 bg-zinc-950"
//                         : "w-8 bg-zinc-300 group-hover:w-16 group-hover:bg-zinc-950"
//                     }`}
//                   ></span>
//                   {/* Kept at uppercase text-xs for structural navigation, but added tracking-widest for classic sidebar balance */}
//                   <span
//                     className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 will-change-transform origin-left ${
//                       activeSection === section
//                         ? "text-zinc-950 scale-110"
//                         : "text-zinc-400 group-hover:text-zinc-950 scale-100"
//                     }`}
//                   >
//                     {section}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Social Icons Footer */}
//       <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media links">
//         <li>
//           <a href="https://github.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="GitHub">
//             <span className="sr-only">GitHub</span>
//             <FaGithub className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="LinkedIn">
//             <span className="sr-only">LinkedIn</span>
//             <FaLinkedinIn className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="https://youtube.com" target="_blank" rel="noreferrer" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="YouTube">
//             <span className="sr-only">YouTube</span>
//             <FaYoutube className="h-5 w-5" />
//           </a>
//         </li>
//         <li>
//           <a href="mailto:your.email@example.com" className="block text-zinc-400 hover:text-zinc-900 transition-colors duration-200" title="Email">
//             <span className="sr-only">Email</span>
//             <FaEnvelope className="h-5 w-5" />
//           </a>
//         </li>
//       </ul>
//     </header>
//   );
// }

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
        <p className="mt-4 max-w-xs text-sm leading-normal text-zinc-600">
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
            href="www.linkedin.com/in/uche-godswill-0a9532424"
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
          >
            <span className="sr-only">X</span>
            <FaXTwitter className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </header>
  );
}