import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { Trophy, Code2, GitMerge, Award } from "lucide-react";

const ACHIEVEMENTS_DATA = [
  {
    title: "1st Place Winner",
    event: "Global AI Hackathon 2024",
    description: "Built an autonomous agent cluster that generates fully-typed database API schemas from plain text specifications.",
    icon: Trophy,
    colorClass: "text-amber-400 bg-amber-950/20 border-amber-800/30",
    glowClass: "group-hover:shadow-amber-500/20"
  },
  {
    title: "Top 1% Ranker",
    event: "Competitive Coding",
    description: "Solved 450+ data structures and algorithm challenges on LeetCode/Codeforces with a peak contest rating of 2210.",
    icon: Code2,
    colorClass: "text-purple-400 bg-purple-950/20 border-purple-800/30",
    glowClass: "group-hover:shadow-purple-500/20"
  },
  {
    title: "Active Contributor",
    event: "Open Source Ecosystem",
    description: "Merged 15+ pull requests fixing rendering logic and styling adapters in Framer Motion and Next.js repositories.",
    icon: GitMerge,
    colorClass: "text-cyan-400 bg-cyan-950/20 border-cyan-800/30",
    glowClass: "group-hover:shadow-cyan-500/20"
  },
  {
    title: "Outstanding Developer",
    event: "Prism Tech Awards 2023",
    description: "Awarded MVP among 120 software engineers for delivering micro-frontend migration 2 months ahead of schedule.",
    icon: Award,
    colorClass: "text-pink-400 bg-pink-950/20 border-pink-800/30",
    glowClass: "group-hover:shadow-pink-500/20"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Milestones"
          title="Achievements & Honors"
          description="A summary of coding competitions, hackathons, and open source contributions."
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const IconComponent = ach.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between h-full hover:border-slate-700/50 hover:shadow-2xl transition-all duration-300 group ${ach.glowClass}`}
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ach.colorClass} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-slate-500">
                      {ach.event}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Cyber style corner decorations */}
                <div className="border-t border-slate-900/60 pt-4 mt-6 flex justify-between text-[9px] font-mono text-slate-600">
                  <span>STATUS: VERIFIED</span>
                  <span>ID: ACH-{idx + 104}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
