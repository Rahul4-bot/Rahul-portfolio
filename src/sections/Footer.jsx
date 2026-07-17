import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/60 px-6 py-12 backdrop-blur-md">
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="font-display text-xl font-bold text-white">{profile.shortName}<span className="text-cyan-400">.</span>dev</h3>
          <p className="font-mono text-xs text-slate-500">AI &amp; FULL STACK DEVELOPER</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate-400">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-cyan-400">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          {[{ href: profile.github, icon: GithubIcon, label: "GitHub" }, { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" }, { href: `mailto:${profile.email}`, icon: Mail, label: "Email" }].map((social) => {
            const Icon = social.icon;
            return <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"><Icon className="h-4 w-4" /></a>;
          })}
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"><ArrowUp className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-900 pt-8 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with React</p>
      </div>
    </footer>
  );
}
