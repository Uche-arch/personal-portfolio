import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Inter font variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uche Godswill | Full-Stack Software Engineer",
  description:
    "Portfolio of Uche Godswill, a Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Tailwind CSS, and scalable web applications.",
  keywords: [
    "Uche Godswill",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Specialist",
    "Tailwind CSS",
    "Node.js",
    "Web Application Developer",
  ],
  authors: [{ name: "Uche Godswill" }],
  creator: "Uche Godswill",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uchegodswill.vercel.app", 
    title: "Uche Godswill | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer crafting high-performance web applications, interactive tools, and modern UI systems with Next.js, React, and TypeScript.",
    siteName: "Uche Godswill Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uche Godswill | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer crafting high-performance web applications with Next.js, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Correct location for Google Site Verification in Next.js App Router
  verification: {
    google: "YJKdRlnLHVoH0UlgiZ4_XNLuekD84PSUQ1FXv8zp8lA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}