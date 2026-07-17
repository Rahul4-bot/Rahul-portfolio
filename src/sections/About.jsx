import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { BookOpen, Target } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="About Me"
          title="My Story & Vision"
          description="A brief look into my coding journey, current focuses, and what drives my passion for development."
        />

        {/* Story Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Story Panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            {/* Background gradient hint */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                Designing Code, Building Experiences.
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                My passion for programming started at the intersection of logical problem solving and creative interface design. From my initial steps building static web components, I quickly branched out to scalable web backend development and integrating AI-driven APIs.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                I believe that code isn’t just about making things function—it is about creating high-fidelity digital systems that feel intuitive, elegant, and highly performant. Whether building automated Python microservices or responsive React apps, my approach is centered around modern user experience and robust architecture.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div>
                <p className="text-2xl md:text-3xl font-bold font-display text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">4+</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold font-display text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">20+</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Completed Projects</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold font-display text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">12k+</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Commits Made</p>
              </div>
            </div>
          </motion.div>

          {/* Cards Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* What I am learning */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-6 md:p-8 flex items-start gap-5 relative overflow-hidden group transition-all duration-300 hover:border-cyan-500/30"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
              
              <div className="p-3 bg-cyan-950/40 rounded-xl border border-cyan-800/30 text-cyan-400 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                  Currently Learning
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep diving into LangChain/LlamaIndex agents, Rust microservices for performance-critical APIs, and advanced layout design systems.
                </p>
              </div>
            </motion.div>

            {/* Career Goals */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-6 md:p-8 flex items-start gap-5 relative overflow-hidden group transition-all duration-300 hover:border-purple-500/30"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />
              
              <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30 text-purple-400 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold font-display text-white group-hover:text-purple-400 transition-colors">
                  Career Goals
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building intelligent SaaS solutions, contributing heavily to open-source developer tooling, and driving AI integration across full-stack ecosystems.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
