import { motion } from "framer-motion";
export default function SectionTitle({ eyebrow, title, copy }) {
  return <motion.div className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p>{eyebrow}</p><h2>{title}</h2>{copy && <span>{copy}</span>}</motion.div>;
}
