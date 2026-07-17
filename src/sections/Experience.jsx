import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { Briefcase, Calendar } from "lucide-react";

const TIMELINE_DATA = [
  {
    role: "Senior Full Stack Architect",
    company: "Quantum AI Labs",
    duration: "2024 - PRESENT",
    points: [
      "Led development of reactive AI interfaces connecting WebSocket agents directly to React clients.",
      "Managed a cross-functional squad of 4 developers launching cloud monitoring dashboards.",
      "Pioneered local-first offline document storage saving 1.2M queries per day."
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    role: "Software Engineer II",
    company: "Prism Technologies",
    duration: "2022 - 2024",
    points: [
      "Architected clean, module-based micro-frontends serving over 150k monthly active clients.",
      "Collaborated on reducing initial chunk loading speed by 40% using code splitting & dynamic imports.",
      "Integrated secure payment gateways processing $2.5M in transactional volume."
    ],
    gradient: "from-pink-500 to-cyan-500"
  },
  {
    role: "Junior Web Developer",
    company: "Spark Software Solutions",
    duration: "2020 - 2022",
    points: [
      "Built and maintained core backend APIs using Express, Node.js, and MongoDB clusters.",
      "Automated testing pipelines utilizing Github Actions reducing merge errors by 30%.",
      "Assisted UX designers in deploying responsive design grids using Tailwind CSS."
    ],
    gradient: "from-cyan-500 to-blue-500"
  }
];

function TimelineCard({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full mb-12 md:mb-16 ${
      isEven ? "md:flex-row-reverse" : ""
    }`}>
      {/* Node Bullet point */}
      <div className="absolute left-4 md:left-1/2 top-4 w-8 h-8 rounded-full bg-[#030712] border-2 border-slate-700 flex items-center justify-center -translate-x-1/2 z-10">
        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${item.gradient} animate-pulse`} />
      </div>

      {/* Empty block for spacing on opposite side */}
      <div className="hidden md:block w-[45%]" />

      {/* Visual Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
        className="w-full md:w-[45%] pl-10 md:pl-0"
      >
        <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-slate-700 hover:shadow-xl transition-all duration-300">
          
          {/* Accent corner line */}
          <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.gradient}`} />
          
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
              {item.role}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-semibold text-slate-400 bg-slate-900 border border-slate-800/80 px-2.5 py-1 rounded-full">
              <Calendar className="w-3 h-3 text-cyan-400" />
              {item.duration}
            </span>
          </div>

          <p className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-400" />
            {item.company}
          </p>

          <ul className="space-y-2.5 text-slate-400 text-xs md:text-sm leading-relaxed list-none pl-0">
            {item.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Career Path"
          title="Experience Timeline"
          description="My professional development, software engineering history, and leading tech roles."
        />

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto pt-6">
          
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />
          
          {/* Timeline Nodes */}
          <div className="relative">
            {TIMELINE_DATA.map((item, idx) => (
              <TimelineCard key={idx} item={item} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
