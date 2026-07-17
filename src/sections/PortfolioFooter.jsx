import { Heart, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
export default function PortfolioFooter() { return <footer><div className="shell footer-content"><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><div><a aria-label="GitHub" href={profile.social.github}><GithubIcon className="w-[18px] h-[18px]" /></a><a aria-label="LinkedIn" href={profile.social.linkedin}><LinkedinIcon className="w-[18px] h-[18px]" /></a><a aria-label="Email" href={`mailto:${profile.email}`}><Mail size={18} /></a></div><p>Made with React &amp; <Heart size={15} fill="currentColor" /></p></div></footer>; }
