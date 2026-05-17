"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    name: "FlipScripts",
    tagline: "Online Book Writing & Publishing Platform",
    description:
      "A full-featured platform for writers to craft, format, and publish books online. Features immersive writing workflows, cloud media handling, collaborative editing, and a seamless publishing pipeline.",
    url: "https://flipscripts.in",
    banner: "/flipscripts-banner.png",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    glowColor: "rgba(6,182,212,0.3)",
    borderGlow: "group-hover:border-cyan-400/50",
    techBadge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    ctaGradient: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/20",
    icon: "📚",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Node.js"],
    highlights: [
      "Immersive, distraction-free writing environment",
      "Cloud media handling via Cloudinary",
      "Live publishing with custom domain support",
    ],
  },
  {
    name: "TalkViz",
    tagline: "AI-Powered Data Visualization Platform",
    description:
      "An intelligent platform that lets users query databases in plain English and instantly visualizes the results as interactive charts and graphs. Built with AI at its core, enabling non-technical users to explore data effortlessly.",
    url: "https://talkviz.in",
    banner: "/talkviz-banner.png",
    gradient: "from-purple-500 via-violet-500 to-pink-600",
    glowColor: "rgba(139,92,246,0.3)",
    borderGlow: "group-hover:border-purple-400/50",
    techBadge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    ctaGradient: "from-purple-500 to-pink-600",
    shadowColor: "shadow-purple-500/20",
    icon: "📊",
    tech: ["Python", "React.js", "MongoDB", "FastAPI"],
    highlights: [
      "Natural-language database querying with AI",
      "Real-time interactive graph generation",
      "Built with a team of 3 developers",
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Projects() {
  const ref = useRef(null);

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 bg-[#111111] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, boxShadow: `0 30px 60px -15px ${project.glowColor}` }}
              className={`group relative overflow-hidden rounded-2xl bg-[#0d0d0d] border border-white/8 ${project.borderGlow} transition-all duration-400 flex flex-col`}
              style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              {/* Banner image */}
              <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={project.banner}
                  alt={`${project.name} banner`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="600px"
                />
                {/* Bottom fade into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                {/* External link button */}
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 text-white transition-colors"
                  aria-label={`Visit ${project.name}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-white mb-1">{project.name}</h3>
                <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{project.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${project.techBadge}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${project.ctaGradient} text-white font-semibold text-sm shadow-lg ${project.shadowColor} hover:shadow-xl transition-all`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          More projects on{" "}
          <a
            href="https://github.com/p-karthikeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
          >
            GitHub
          </a>
        </motion.p>
      </div>
    </section>
  );
}
