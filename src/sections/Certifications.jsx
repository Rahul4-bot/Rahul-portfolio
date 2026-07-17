import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { ShieldCheck, ExternalLink, Calendar } from "lucide-react";

const CERTIFICATIONS_DATA = [
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Dec 2025",
    id: "GCP-948271",
    verifyUrl: "https://google.com",
    gradient: "from-blue-500 to-indigo-500",
    badgeLetter: "G"
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    id: "AWS-SA-38291",
    verifyUrl: "https://amazon.com",
    gradient: "from-amber-500 to-orange-500",
    badgeLetter: "A"
  },
  {
    title: "TensorFlow Developer",
    issuer: "DeepLearning.AI",
    date: "Mar 2024",
    id: "DL-TF-59281",
    verifyUrl: "https://deeplearning.ai",
    gradient: "from-orange-500 to-red-500",
    badgeLetter: "T"
  },
  {
    title: "Meta Front-End Architect",
    issuer: "Meta Professional",
    date: "Nov 2023",
    id: "META-FE-20193",
    verifyUrl: "https://meta.com",
    gradient: "from-sky-500 to-blue-600",
    badgeLetter: "M"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Accreditation"
          title="Certifications"
          description="Official credentials certifying expertise in cloud infrastructure, deep learning, and advanced frontend engineering."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl p-6 border border-white/5 relative flex flex-col justify-between h-full hover:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Glowing Badge Outline */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.gradient} p-0.5 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center font-bold text-white text-base">
                    {cert.badgeLetter}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold">{cert.issuer}</p>
                </div>
              </div>

              {/* ID & Verification */}
              <div className="border-t border-slate-800/80 pt-4 mt-6 flex justify-between items-center text-[11px] font-mono text-slate-500">
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {cert.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    ID: {cert.id}
                  </span>
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Verify Credential"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
