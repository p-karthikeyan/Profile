import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthik P | Full Stack Software Developer",
  description:
    "Full Stack Software Developer with 2+ years of experience building scalable web applications, microservices, and enterprise integrations across Ruby on Rails, Java, .NET, React, and Next.js ecosystems.",
  keywords: [
    "Karthik P",
    "Full Stack Developer",
    "Ruby on Rails",
    "React",
    "Next.js",
    "Software Engineer",
    "Chennai",
  ],
  authors: [{ name: "Karthik P" }],
  openGraph: {
    title: "Karthik P | Full Stack Software Developer",
    description:
      "Full Stack Software Developer specializing in Ruby on Rails, React, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
