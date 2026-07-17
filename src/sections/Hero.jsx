import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-full w-fit shadow-lg shadow-black/20"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-slate-400"
            >
              Hi there, I'm
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] tracking-tight"
            >
              <span className="text-white">Rahul </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Pareek
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-4xl font-display font-bold text-slate-300"
            >
              AI & Full Stack Developer
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-xl"
          >
            I engineer production-grade web applications and integrate intelligent models. Designing glassmorphic aesthetics, building reactive frontends, and scaling modern backend systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="relative group px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              aria-label="Open or download Rahul Pareek's resume"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium text-slate-200 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            {[
              { href: profile.github, icon: GithubIcon, label: "GitHub" },
              { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" }
            ].map((social, i) => {
              const IconComp = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-950 transition-all duration-300 hover:scale-105"
                >
                  <IconComp className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

        </div>

        {/* Right: Premium Dynamic Visual Animation */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
          >
            
            {/* Animated Glow Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
            
            {/* Outer Orbit Line */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[100%] h-[100%] rounded-full border border-dashed border-slate-800/80 flex items-center justify-center"
            >
              {/* Outer Orbit Dot */}
              <div className="absolute top-0 right-[25%] w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] animate-ping" />
              <div className="absolute top-0 right-[25%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            </motion.div>

            {/* Inner Orbit Line */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute w-[80%] h-[80%] rounded-full border border-slate-800/50"
            >
              {/* Inner Orbit Dot */}
              <div className="absolute bottom-0 left-[20%] w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
            </motion.div>

            {/* Premium Glass Cyber Center */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-[60%] h-[60%] rounded-2xl glass-panel p-6 flex flex-col justify-center items-center shadow-[0_0_50px_rgba(168,85,247,0.15)] group overflow-hidden"
            >
              
              {/* Internal abstract visual layout */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20 mb-4 relative z-10 animate-float">
                <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div className="text-center z-10 space-y-1">
                <p className="text-xs font-mono text-cyan-400 tracking-wider font-semibold uppercase">SYSTEM STACK</p>
                <h4 className="text-white text-sm font-semibold">REACT & AI MODELS</h4>
                <p className="text-[10px] font-mono text-slate-500">v4.3.3 / ACTIVE</p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-700" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-700" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-700" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-700" />
            </motion.div>

            {/* Glowing Extra Nodes */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 px-3 py-1 text-[10px] font-mono bg-[#0b132b]/80 border border-purple-500/30 rounded-md text-purple-300 shadow-md backdrop-blur-md shadow-purple-950/20"
            >
              NeuralNet: Ready
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-4 px-3 py-1 text-[10px] font-mono bg-[#0b132b]/80 border border-cyan-500/30 rounded-md text-cyan-300 shadow-md backdrop-blur-md shadow-cyan-950/20"
            >
              Latency: 12ms
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
