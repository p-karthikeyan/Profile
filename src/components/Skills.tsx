"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    bg: "#F7DF1E",
    textColor: "#000",
    logo: (
      <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10">
        <rect width="32" height="32" fill="#F7DF1E" rx="4" />
        <text x="4" y="26" fontSize="20" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "Python",
    bg: "#3776AB",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <path d="M15.9 3C10.3 3 10.7 5.4 10.7 5.4V8h5.4v1H7.2S3 8.5 3 14.2c0 5.7 3.7 5.5 3.7 5.5H9v-2.7S8.9 13 12 13h7.8s3-.05 3-2.9V6c0-2.8-2.9-3-2.9-3zm-3.3 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .5-1 1-1z" fill="#FFD43B"/>
        <path d="M16.1 29c5.6 0 5.2-2.4 5.2-2.4V24h-5.4v-1h8.9s4.2.5 4.2-5.2c0-5.7-3.7-5.5-3.7-5.5H23v2.7s.1 4-3 4h-7.8s-3 .05-3 2.9V26c0 2.8 2.9 3 2.9 3zm3.3-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1z" fill="#3776AB"/>
      </svg>
    ),
  },
  {
    name: "Ruby",
    bg: "#CC342D",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <polygon points="16,3 29,10 29,22 16,29 3,22 3,10" fill="#CC342D" stroke="#a02020" strokeWidth="1"/>
        <text x="9" y="22" fontSize="16" fontWeight="bold" fill="white" fontFamily="serif">Rb</text>
      </svg>
    ),
  },
  {
    name: "Java",
    bg: "#007396",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#007396"/>
        <text x="4" y="22" fontSize="13" fontWeight="bold" fill="white" fontFamily="sans-serif">JAVA</text>
      </svg>
    ),
  },
  {
    name: "C#",
    bg: "#239120",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#239120"/>
        <text x="4" y="23" fontSize="18" fontWeight="bold" fill="white" fontFamily="sans-serif">C#</text>
      </svg>
    ),
  },
  {
    name: "SQL",
    bg: "#336791",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#336791"/>
        <text x="3" y="23" fontSize="15" fontWeight="bold" fill="white" fontFamily="monospace">SQL</text>
      </svg>
    ),
  },
  {
    name: "React.js",
    bg: "#20232a",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#20232a"/>
        <ellipse cx="16" cy="16" rx="4" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/>
        <circle cx="16" cy="16" r="2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    bg: "#000000",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#000"/>
        <text x="5" y="24" fontSize="22" fontWeight="900" fill="white" fontFamily="sans-serif">N</text>
        <text x="18" y="24" fontSize="11" fontWeight="bold" fill="#888" fontFamily="sans-serif">ext</text>
      </svg>
    ),
  },
  {
    name: "Ruby on Rails",
    bg: "#CC0000",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#CC0000"/>
        <text x="6" y="23" fontSize="20" fontWeight="900" fill="white" fontFamily="sans-serif">Rr</text>
      </svg>
    ),
  },
  {
    name: "FastAPI",
    bg: "#009688",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#009688"/>
        <polygon points="16,4 20,14 30,14 22,20 25,30 16,24 7,30 10,20 2,14 12,14" fill="#fff" opacity="0.9"/>
      </svg>
    ),
  },
  {
    name: ".NET MVC",
    bg: "#512BD4",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#512BD4"/>
        <text x="3" y="20" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">.NET</text>
        <text x="3" y="30" fontSize="9" fontWeight="bold" fill="#c9b8f8" fontFamily="sans-serif">MVC</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    bg: "#13aa52",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#13aa52"/>
        <path d="M16 4 C16 4 10 12 10 18 C10 21.3 12.7 24 16 24 C19.3 24 22 21.3 22 18 C22 12 16 4 16 4Z" fill="white"/>
        <rect x="15" y="22" width="2" height="6" fill="white"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    bg: "#336791",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#336791"/>
        <ellipse cx="16" cy="10" rx="8" ry="5" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="8" y="10" width="2" height="12" fill="white"/>
        <rect x="22" y="10" width="2" height="8" fill="white"/>
        <path d="M8 22 Q16 27 22 18" fill="none" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    bg: "#00618A",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#00618A"/>
        <text x="2" y="20" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">MySQL</text>
        <path d="M4 24 Q16 20 28 24" fill="none" stroke="#F29111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "AWS Lambda",
    bg: "#FF9900",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#232F3E"/>
        <path d="M8 24 L13 8 L16 16 L19 8 L24 24" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Git",
    bg: "#F05032",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#F05032"/>
        <circle cx="22" cy="10" r="3" fill="white"/>
        <circle cx="10" cy="16" r="3" fill="white"/>
        <circle cx="22" cy="22" r="3" fill="white"/>
        <line x1="22" y1="13" x2="22" y2="19" stroke="white" strokeWidth="2"/>
        <line x1="13" y1="16" x2="19" y2="13" stroke="white" strokeWidth="2"/>
        <line x1="13" y1="16" x2="19" y2="19" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    bg: "#635BFF",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#635BFF"/>
        <text x="6" y="23" fontSize="20" fontWeight="900" fill="white" fontFamily="sans-serif">S</text>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    bg: "#00A1E0",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#00A1E0"/>
        <path d="M16 8 C13 8 11 10 11 12 C9 12 7 14 7 16 C7 18.2 8.8 20 11 20 L21 20 C23.2 20 25 18.2 25 16 C25 14 23 12 21 12 C21 10 19 8 16 8Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Cloudinary",
    bg: "#3448C5",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#3448C5"/>
        <path d="M8 20 C6 20 4 18 4 16 C4 14 6 12 8 12 C8 9 10.7 7 14 7 C17 7 19.4 9.1 19.8 12 C22 12 24 14 24 16 C24 18 22 20 20 20Z" fill="white" opacity="0.9"/>
        <path d="M13 20 L13 26 L19 26 L19 20" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Google Maps",
    bg: "#4285F4",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#4285F4"/>
        <path d="M16 5 C12.1 5 9 8.1 9 12 C9 17.5 16 27 16 27 C16 27 23 17.5 23 12 C23 8.1 19.9 5 16 5Z" fill="white"/>
        <circle cx="16" cy="12" r="3" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    name: "Microservices",
    bg: "#6366f1",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#6366f1"/>
        <circle cx="9" cy="9" r="3" fill="white" opacity="0.9"/>
        <circle cx="23" cy="9" r="3" fill="white" opacity="0.9"/>
        <circle cx="9" cy="23" r="3" fill="white" opacity="0.9"/>
        <circle cx="23" cy="23" r="3" fill="white" opacity="0.9"/>
        <circle cx="16" cy="16" r="3" fill="white"/>
        <line x1="12" y1="9" x2="20" y2="9" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <line x1="9" y1="12" x2="9" y2="20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <line x1="12" y1="16" x2="20" y2="16" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <line x1="16" y1="12" x2="16" y2="20" stroke="white" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "REST APIs",
    bg: "#e11d48",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#e11d48"/>
        <text x="2" y="16" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">REST</text>
        <text x="2" y="26" fontSize="9" fontWeight="bold" fill="#fda4af" fontFamily="monospace">API</text>
      </svg>
    ),
  },
  {
    name: "SSR",
    bg: "#0f172a",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
        <rect x="4" y="8" width="24" height="4" rx="2" fill="#38bdf8" opacity="0.8"/>
        <rect x="4" y="15" width="16" height="3" rx="1.5" fill="#64748b"/>
        <rect x="4" y="21" width="20" height="3" rx="1.5" fill="#64748b"/>
      </svg>
    ),
  },
  {
    name: "MVC",
    bg: "#7c3aed",
    logo: (
      <svg viewBox="0 0 32 32" className="w-10 h-10">
        <rect width="32" height="32" rx="6" fill="#7c3aed"/>
        <text x="3" y="23" fontSize="16" fontWeight="900" fill="white" fontFamily="sans-serif">MVC</text>
      </svg>
    ),
  },
];

// Split into 2 rows evenly
const half = Math.ceil(skills.length / 2);
const row1 = skills.slice(0, half);
const row2 = skills.slice(half);

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-shrink-0 w-32 h-28 rounded-2xl bg-[#1a1a1a] border border-white/8 flex flex-col items-center justify-center gap-2.5 cursor-default group hover:border-white/20 hover:bg-[#222] transition-colors duration-200 shadow-lg"
    >
      <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
        {skill.logo}
      </div>
      <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors text-center px-2 leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

function ScrollRow({ items, reverse }: { items: typeof skills; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-4 w-max py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Scrolling rows — 50% width, centered */}
      <div className="w-1/2 mx-auto space-y-4">
        <ScrollRow items={row1} />
        <ScrollRow items={row2} reverse />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          Always learning · Currently exploring{" "}
          <span className="text-cyan-400 font-medium">AI integrations</span> &amp;{" "}
          <span className="text-purple-400 font-medium">cloud-native architecture</span>
        </motion.p>
      </div>
    </section>
  );
}
