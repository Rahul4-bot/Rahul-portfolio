import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";
import { openResume, resumeUrl } from "../utils/resume";

const idFor = (label) => label.toLowerCase();

export default function SiteHeader({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%" });
    navigation.forEach((item) => { const section = document.getElementById(idFor(item)); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return <header className="site-header"><div className="shell nav-shell">
    <a href="#home" className="brand" aria-label="Go to home">{profile.name}<span>.</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => <a key={item} className={active === idFor(item) ? "active" : ""} href={`#${idFor(item)}`}>{item}</a>)}
    </nav>
    <div className="nav-actions"><ThemeToggle theme={theme} onToggle={onToggleTheme} /><a className="resume-link" href={resumeUrl} onClick={openResume} target="_blank" rel="noreferrer">Resume / CV</a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button></div>
  </div>
  {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <a key={item} href={`#${idFor(item)}`} onClick={() => setOpen(false)}>{item}</a>)}</nav>}</header>;
}
