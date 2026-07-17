import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle, Award } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";


const PROJECTS_DATA = [
  {
    title: "AetherAI",
    subtitle: "AI-Native Analytics Dashboard",
    description: "An agentic data intelligence app that parses unstructured reports, executes real-time semantic queries, and generates visual charts automatically.",
    tech: ["React", "FastAPI", "Python", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://demo.aetherai.dev",
    gitUrl: "https://github.com",
    challenge: "Optimizing token consumption and API latency when processing datasets with millions of rows.",
    learned: "Designed a localized embedding database using FastAPI to summarize metadata profiles before agent dispatching.",
    themeColor: "from-purple-500/20 to-pink-500/20 hover:border-purple-500/40",
    visual: (
      <div className="absolute inset-0 bg-slate-950 flex flex-col p-4 justify-between select-none">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <span className="text-[10px] font-mono text-purple-400">AETHER_MODEL // LIVE</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="space-y-2 my-auto">
          <div className="h-2 w-2/3 bg-slate-800 rounded animate-pulse" />
          <div className="h-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/10 rounded border border-purple-500/20 flex items-center justify-between px-3">
            <span className="text-[10px] font-mono text-slate-400">Processing tensors...</span>
            <span className="text-[10px] font-mono text-pink-400">92%</span>
          </div>
          <div className="h-2 w-1/2 bg-slate-800 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-purple-950/40 border border-purple-500/30 rounded text-[8px] font-mono text-center text-purple-300">GPU</div>
          <div className="h-4 w-16 bg-cyan-950/40 border border-cyan-500/30 rounded text-[8px] font-mono text-center text-cyan-300">FastAPI</div>
        </div>
      </div>
    )
  },
  {
    title: "NovaPay",
    subtitle: "Glassmorphic Web3 Gateway",
    description: "Next-gen cryptocurrency dashboard featuring interactive wallet connections, real-time gas tracking, and instant tokens swapping pipelines.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    liveUrl: "https://demo.novapay.dev",
    gitUrl: "https://github.com",
    challenge: "Handling network latency and block validation feedback without disrupting frontend rendering performance.",
    learned: "Implemented multi-threaded state caching via React contexts and built automatic transactional retry managers.",
    themeColor: "from-cyan-500/20 to-blue-500/20 hover:border-cyan-500/40",
    visual: (
      <div className="absolute inset-0 bg-slate-950 flex flex-col p-4 justify-between select-none">
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-0.5">
            <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center text-[9px] font-bold text-cyan-400">N</div>
          </div>
          <span className="text-[9px] font-mono text-slate-500">GAS: 22 Gwei</span>
        </div>
        <div className="my-auto space-y-1">
          <p className="text-[10px] font-mono text-slate-400">Portfolio Value</p>
          <h3 className="text-xl font-bold font-display text-white">$14,204.89</h3>
          <p className="text-[9px] font-mono text-emerald-400">+4.8% (24h)</p>
        </div>
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-cyan-400 rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Synapse Workspace",
    subtitle: "Collaborative Real-time Workspace",
    description: "A centralized team wiki and document editor utilizing operational transformation nodes to enable multi-cursor sync and offline changes.",
    tech: ["React", "Firebase", "Git", "Docker", "Tailwind CSS"],
    liveUrl: "https://demo.synapse.dev",
    gitUrl: "https://github.com",
    challenge: "Resolving overlapping cursor updates during high-concurrency offline merges.",
    learned: "Designed custom diffing trees and fallback checkpoints inside Firestore bindings, optimizing update intervals.",
    themeColor: "from-pink-500/20 to-purple-500/20 hover:border-pink-500/40",
    visual: (
      <div className="absolute inset-0 bg-slate-950 flex flex-col p-4 justify-between select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="space-y-2 my-auto">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-3 bg-purple-400 animate-pulse" />
            <p className="text-[11px] font-mono text-slate-300">Writing project objectives...</p>
          </div>
          <div className="flex items-center gap-1.5 pl-4">
            <div className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-[7px] text-white">JD</div>
            <span className="text-[9px] text-slate-500">John joined document</span>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-2 flex justify-between text-[9px] text-slate-600 font-mono">
          <span>Synced: 1s ago</span>
          <span>3 Editors</span>
        </div>
      </div>
    )
  }
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-panel rounded-2xl overflow-hidden border border-white/5 bg-slate-900/10 hover:shadow-2xl transition-all duration-300 ${project.themeColor} flex flex-col h-full`}
    >
      {/* Visual Canvas Block */}
      <div className="relative h-48 md:h-56 w-full border-b border-slate-800/80 overflow-hidden">
        {project.visual}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
        <div>
          {/* Subtitle & Title */}
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">{project.subtitle}</span>
            <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono font-medium text-slate-400 bg-slate-900/60 border border-slate-800 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons and Expandable Details */}
        <div className="space-y-4 pt-2">
          {/* External Links */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-cyan-400 transition-colors"
              >
                Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                Code <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            
            {/* Case Study Toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer select-none"
            >
              {expanded ? "Hide Details" : "Show Details"}
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Collapsible Challenges & Learnings */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-slate-800/80 pt-4 space-y-3"
              >
                {/* Challenge */}
                <div className="flex gap-2.5 items-start">
                  <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono tracking-wider font-semibold text-purple-400 uppercase">Challenge Faced</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
                  </div>
                </div>
                {/* Learned */}
                <div className="flex gap-2.5 items-start">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono tracking-wider font-semibold text-cyan-400 uppercase">What I Learned</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.learned}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Recent Deployments"
          title="Featured Projects"
          description="Take a look at detailed case studies including architectural decisions, major obstacles, and optimization outcomes."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
