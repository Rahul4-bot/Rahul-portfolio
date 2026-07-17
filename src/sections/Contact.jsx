import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { Mail, MapPin, Briefcase, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Get in Touch"
          title="Start a Conversation"
          description="Have an interesting project or role? Drop a message, and I will get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left: Contact Info Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pr-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out for consulting work, full-time engineering inquiries, or open-source collaborations.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="p-2.5 bg-cyan-950/40 rounded-lg text-cyan-400 border border-cyan-800/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</p>
                  <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors">{profile.email}</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="p-2.5 bg-purple-950/40 rounded-lg text-purple-400 border border-purple-800/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Current Location</p>
                  <p className="text-sm font-semibold text-slate-200">{profile.location}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="p-2.5 bg-pink-950/40 rounded-lg text-pink-400 border border-pink-800/30 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Availability</p>
                  <p className="text-sm font-semibold text-slate-200">Available for Contract / Roles</p>
                </div>
              </div>
            </div>

            {/* Micro details */}
            <div className="text-[11px] font-mono text-slate-600">
              <p>SECURE SEC//TENSOR ROUTER ACTIVE</p>
              <p>TIME: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[350px] space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <div className="space-y-2 max-w-xs">
                    <h4 className="text-xl font-bold font-display text-white">Message Transmitted!</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Your email client has opened with your message ready to send. I will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-[#070b19]/60 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        placeholder="John Doe"
                        disabled={status === "sending"}
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-[#070b19]/60 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        disabled={status === "sending"}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-[#070b19]/60 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      placeholder="Collaboration opportunity..."
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Message Content *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#070b19]/60 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                      placeholder="Hi Rahul, I would love to discuss..."
                      disabled={status === "sending"}
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-xs text-rose-400 bg-rose-950/20 border border-rose-900/30 p-3 rounded-lg"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full group py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 text-white font-medium rounded-xl flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
