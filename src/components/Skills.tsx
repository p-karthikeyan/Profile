"use client";

import { motion, type Variants } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    color: "from-cyan-500/20 to-cyan-400/5",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    skills: ["Ruby", "Java", "C#", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    icon: "⚙️",
    color: "from-purple-500/20 to-purple-400/5",
    border: "border-purple-500/30",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    glow: "shadow-purple-500/20",
    skills: ["Ruby on Rails", "React.js", "Next.js", "FastAPI", ".NET MVC"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "from-pink-500/20 to-pink-400/5",
    border: "border-pink-500/30",
    badge: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    glow: "shadow-pink-500/20",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Tools",
    icon: "☁️",
    color: "from-emerald-500/20 to-emerald-400/5",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    glow: "shadow-emerald-500/20",
    skills: ["AWS Lambda", "Cloudinary", "Git", "Stripe", "Salesforce", "Google Maps API"],
  },
  {
    title: "Architecture",
    icon: "🏗️",
    color: "from-orange-500/20 to-orange-400/5",
    border: "border-orange-500/30",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    glow: "shadow-orange-500/20",
    skills: ["Microservices", "REST APIs", "SSR", "Metadata-Driven", "MVC"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#111111] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
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

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)` }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} border ${category.border} p-6 group transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skill badges */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${category.badge} cursor-default transition-transform`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Decorative corner gradient */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl bg-current pointer-events-none group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Always learning · Currently exploring{" "}
            <span className="text-cyan-400 font-medium">AI integrations</span> &amp;{" "}
            <span className="text-purple-400 font-medium">cloud-native architecture</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
