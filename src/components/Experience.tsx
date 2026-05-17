"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Skillrank",
    period: "2022 – Present",
    location: "Remote",
    color: "from-cyan-500 to-blue-600",
    dotColor: "bg-cyan-400",
    glowColor: "shadow-cyan-500/40",
    borderColor: "border-cyan-500/20",
    highlights: [
      "Developed and maintained scalable SSR applications using Ruby on Rails with MVC architecture",
      "Integrated Stripe, Google Maps APIs, and Salesforce Connected Apps for enterprise-grade solutions",
      "Built .NET MVC web applications with React.js frontends, improving user experience significantly",
      "Implemented Java microservice architecture with metadata-driven JSON configuration systems",
      "Engineered secure payment workflows using Stripe, Authorize.Net, and Elavon payment gateways",
      "Developed Python FastAPI services and AWS Lambda functions for serverless backend processing",
      "Led a team of 3 developers and mentored interns, driving code reviews and best practices",
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const bulletVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const bulletItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  const ref = useRef(null);

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/4 top-0 w-64 h-full bg-gradient-to-b from-transparent via-cyan-600/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-5.5 top-6 flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full ${exp.dotColor} shadow-lg ${exp.glowColor} ring-4 ring-[#0a0a0a] z-10`} />
                <div className={`absolute w-9 h-9 rounded-full ${exp.dotColor} opacity-20 animate-ping-slow`} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                className={`rounded-2xl bg-[#111111] border ${exp.borderColor} overflow-hidden shadow-xl transition-all duration-300`}
              >
                {/* Card header gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color}`} />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <motion.ul
                    variants={bulletVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {exp.highlights.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={bulletItem}
                        className="flex items-start gap-3 text-gray-400 leading-relaxed"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                        <span className="text-sm md:text-base">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Timeline end marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative pl-16 md:pl-20"
          >
            <div className="absolute left-3 md:left-5 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm italic py-2">Journey continues...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
