import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Flutter Learner"];
export default function PortfolioHero() {
  const [role, setRole] = useState(0);
  useEffect(() => { const timer = setInterval(() => setRole((value) => (value + 1) % roles.length), 2300); return () => clearInterval(timer); }, []);
  const code = 'const developer = {\n  focus: "Full Stack Web",\n  stack: ["React", "Node", "MongoDB"],\n  learning: "Flutter",\n  available: true\n};';
  return <section id="home" className="hero"><div className="shell hero-grid"><motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><p className="eyebrow">Hello, I’m {profile.name}</p><h1>I build web experiences that are <em>useful</em> and <em>reliable.</em></h1><p className="hero-copy">{profile.title} skilled in building responsive interfaces and practical backend systems with the modern JavaScript stack.</p><p className="typing" aria-live="polite"><span>Currently:</span> {roles[role]}</p><div className="hero-actions"><a className="button primary" href="#projects">View Projects <ArrowDown size={17} /></a><a className="button secondary" href="#contact">Contact Me</a></div><div className="social-row"><a aria-label="GitHub" href={profile.social.github} target="_blank" rel="noreferrer"><GithubIcon className="w-5 h-5" /></a><a aria-label="LinkedIn" href={profile.social.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="w-5 h-5" /></a><a aria-label="Email" href={`mailto:${profile.email}`}><Mail size={20} /></a></div></motion.div><motion.div className="hero-card" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .6 }}><div className="code-top"><i /><i /><i /><span>developer.js</span></div><pre><code>{code}</code></pre><div className="availability"><span /> Building, learning &amp; shipping</div></motion.div></div></section>;
}
