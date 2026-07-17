import { motion } from "framer-motion";

export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-800/30 inline-block mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
