import { Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { achievements } from "../data/achievements";
export default function PortfolioAchievements() { return <section id="achievements" className="section muted-section"><div className="shell"><SectionTitle eyebrow="Milestone" title="Learning through high-impact collaboration." />{achievements.map((achievement) => <motion.article key={achievement.title} className="achievement-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div><p className="badge"><Award size={16} /> Achievement</p><h3>{achievement.title}</h3><p>{achievement.description}</p></div><img src={achievement.image} alt="Smart India Hackathon certificate placeholder" loading="lazy" /></motion.article>)}</div></section>; }
