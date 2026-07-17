import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { 
  Code, Terminal, Database
} from "lucide-react";

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", level: "Expert", colorClass: "text-cyan-400 bg-cyan-950/30 border-cyan-800/30" },
      { name: "Tailwind CSS", level: "Expert", colorClass: "text-sky-400 bg-sky-950/30 border-sky-800/30" },
      { name: "JavaScript", level: "Expert", colorClass: "text-yellow-400 bg-yellow-950/30 border-yellow-800/30" },
      { name: "TypeScript", level: "Advanced", colorClass: "text-blue-400 bg-blue-950/30 border-blue-800/30" },
      { name: "Flutter", level: "Intermediate", colorClass: "text-indigo-400 bg-indigo-950/30 border-indigo-800/30" },
    ]
  },
  {
    category: "Backend & Databases",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: "Expert", colorClass: "text-emerald-400 bg-emerald-950/30 border-emerald-800/30" },
      { name: "Express", level: "Expert", colorClass: "text-zinc-300 bg-zinc-900/30 border-zinc-800/30" },
      { name: "Python", level: "Advanced", colorClass: "text-yellow-500 bg-yellow-950/30 border-yellow-900/30" },
      { name: "FastAPI", level: "Advanced", colorClass: "text-teal-400 bg-teal-950/30 border-teal-800/30" },
      { name: "MongoDB", level: "Advanced", colorClass: "text-green-500 bg-green-950/30 border-green-900/30" },
      { name: "Firebase", level: "Advanced", colorClass: "text-amber-500 bg-amber-950/30 border-amber-900/30" },
    ]
  },
  {
    category: "DevOps & Core Tech",
    icon: Terminal,
    color: "from-pink-500 to-orange-500",
    skills: [
      { name: "AI / Machine Learning", level: "Advanced", colorClass: "text-purple-400 bg-purple-950/30 border-purple-800/30" },
      { name: "Docker", level: "Intermediate", colorClass: "text-sky-500 bg-sky-950/30 border-sky-900/30" },
      { name: "Git", level: "Expert", colorClass: "text-orange-500 bg-orange-950/30 border-orange-900/30" },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const skillItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="My Sandbox"
          title="Skills & Technologies"
          description="A specialized developer toolkit containing modern systems, design utilities, and machine learning structures."
        />

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS_DATA.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-panel rounded-2xl p-6 flex flex-col h-full border border-white/5 relative overflow-hidden group transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/40"
              >
                
                {/* Visual Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${cat.color} text-white shadow-md shadow-black/30`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`flex flex-col px-4 py-2.5 rounded-xl border transition-all duration-300 hover:shadow-lg cursor-default select-none ${skill.colorClass}`}
                    >
                      <span className="text-sm font-semibold">{skill.name}</span>
                      <span className="text-[10px] opacity-60 tracking-wider font-mono uppercase mt-0.5">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
