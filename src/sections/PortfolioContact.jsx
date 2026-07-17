import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

export default function PortfolioContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message) {
      setNotice("Please enter your name, a valid email, and a message.");
      return;
    }
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`;
    setNotice("Your email client is opening with the message prepared.");
  };

  return <section id="contact" className="section"><div className="shell"><SectionTitle eyebrow="Get in touch" title="Let's build something useful." copy="Have a role, project, or collaboration in mind? I would love to hear from you." /><div className="contact-grid"><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail /> {profile.email}</a><a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone /> {profile.phone}</a><a href={profile.social.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Contact me on WhatsApp</a><a href={profile.social.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a><a href={profile.social.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a></div><form onSubmit={submit} noValidate><label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label><label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>Message<textarea rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about your idea..." /></label>{notice && <p className="form-notice" role="status">{notice}</p>}<button className="button primary" type="submit">Send Message <Send size={17} /></button></form></div></div></section>;
}
