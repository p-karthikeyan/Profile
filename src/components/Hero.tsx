"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const typewriterTexts = [
  "Full Stack Developer",
  "Ruby on Rails Expert",
  "React.js Developer",
  "Problem Solver",
];

function useTypewriter(texts: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = texts[textIndex];
    if (!deleting) {
      if (charIndex < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, speed / 2);
      } else {
        setDeleting(false);
        setTextIndex((t) => (t + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typeText = useTypewriter(typewriterTexts);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24 pb-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Karthik P
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10 flex items-center justify-center lg:justify-start gap-1"
          >
            <span className="text-cyan-400">&gt;</span>{" "}
            <span>{typeText}</span>
            <span className="w-0.5 h-7 bg-cyan-400 animate-blink ml-1" />
          </motion.div>

          {/* Bio excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Full Stack Developer with <span className="text-cyan-400 font-semibold">2+ years</span> of experience
            building scalable web apps, microservices, and enterprise integrations across{" "}
            <span className="text-purple-400 font-semibold">Rails, Java, .NET, React</span>, and{" "}
            <span className="text-pink-400 font-semibold">Next.js</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:border-cyan-400/50 hover:bg-white/5 transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/p-karthikeyan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 group-hover:text-gray-100 transition-colors"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://www.linkedin.com/in/karthi-keyan-sde/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 transition-colors"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", bounce: 0.3 }}
          className="relative flex-shrink-0"
        >
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            <div className="w-full h-full rounded-full border-2 border-transparent"
              style={{
                background: "linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4) border-box",
              }}
            />
          </div>

          {/* Ping ring */}
          <div className="absolute -inset-4 rounded-full border border-cyan-400/30 animate-ping-slow" />

          {/* Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-xl animate-glow" />

          {/* Photo container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#0a0a0a] ring-2 ring-cyan-400/40 shadow-2xl shadow-cyan-500/20">
            <Image
              src="/karthik-hero.png"
              alt="Karthik P - Full Stack Developer"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>

          {/* Floating badge - Location */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-white/10 shadow-xl text-sm font-medium text-gray-300"
          >
            <span>📍</span>
            Chennai, India
          </motion.div>

          {/* Floating badge - Experience */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -top-4 -right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 shadow-xl text-sm font-semibold text-cyan-300"
          >
            2+ Years Exp
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-700 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
