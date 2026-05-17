"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "2+", label: "Years Exp", color: "text-cyan-400" },
  { value: "10+", label: "Projects Worked", color: "text-purple-400" },
  { value: "10+", label: "Technologies", color: "text-emerald-400" },
];

const textVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[560px]"
          >
            {/* Decorative gradient blob behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/15 ring-1 ring-cyan-400/20"
            >
              <Image
                src="/karthik-about.jpg"
                alt="Karthik working"
                fill
                className="object-cover object-top"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-[#111]/90 border border-white/10 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-sm"
            >
              📍 Chennai, India
            </motion.div>
          </motion.div>

          {/* Right: Bio + stats */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-cyan-400 font-semibold">Full Stack Software Developer</span>{" "}
              based in{" "}
              <span className="text-purple-400 font-semibold">Chennai, India</span>,
              with 2+ years of professional experience crafting web applications that scale.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey spans across{" "}
              <span className="text-cyan-300 font-medium">Ruby on Rails</span>,{" "}
              <span className="text-purple-300 font-medium">Java microservices</span>,{" "}
              <span className="text-pink-300 font-medium">.NET MVC</span>, and modern JavaScript
              frameworks like{" "}
              <span className="text-emerald-300 font-medium">React.js</span> and{" "}
              <span className="text-cyan-300 font-medium">Next.js</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in{" "}
              <span className="text-pink-300 font-medium">payment gateways</span>,{" "}
              <span className="text-purple-300 font-medium">third-party integrations</span>,{" "}
              <span className="text-cyan-300 font-medium">data visualization</span>, and
              metadata-driven architectures. I&apos;ve led a team of 3 developers and mentored
              interns, balancing technical depth with collaborative leadership.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, I build{" "}
              <span className="text-emerald-300 font-medium">side projects</span> — like{" "}
              <span className="text-cyan-300 font-semibold">FlipScripts</span> and{" "}
              <span className="text-purple-300 font-semibold">TalkViz</span> — that solve real problems.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-white font-medium transition-all"
            >
              <span>Get in touch</span>
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
