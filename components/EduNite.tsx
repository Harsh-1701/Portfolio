"use client";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const features = [
  { label: "Authentication", note: "Session-based, secure" },
  { label: "Real-time messaging", note: "WhatsApp-style UX" },
  { label: "Dashboards", note: "Role-aware views" },
  { label: "Analytics", note: "Engagement tracking" },
  { label: "AI resume feedback", note: "LLM-powered review" },
];

export default function EduNite() {
  return (
    <section id="edunite" className="relative px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <SectionLabel index="02" label="Featured / Build" />
          </div>
          <div className="md:col-span-8">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              [ Flagship Project ]
            </div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tightest leading-none">
              EduNite
            </h2>
            <p className="mt-6 text-xl text-muted max-w-2xl">
              An alumni-student mentorship platform. Independently designed,
              built, tested, and deployed.
            </p>
          </div>
        </div>

        <div id="work" className="border border-line">
          <div className="grid md:grid-cols-2">
            {/* Left — narrative */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-line">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                THE PROBLEM
              </div>
              <p className="text-lg leading-relaxed mb-10">
                Finding the right alumni for genuine career guidance shouldn't
                depend on already knowing the right people. Most students never
                get that first useful conversation.
              </p>

              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                THE BUILD
              </div>
              <p className="text-muted leading-relaxed mb-10">
                I built EduNite as a structured space where students and verified
                alumni can actually talk, with mentorship flows, real-time chat,
                and tools that help students prepare for those conversations.
              </p>

              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                THE HARD PART
              </div>
              <p className="text-muted leading-relaxed">
                The dashboards were fine. The real challenge was making messaging
                behave the way people <em className="text-text not-italic">expect</em>{" "}
                messaging to behave, i.e., instant delivery, correct ordering, sensible
                state after reconnects. Getting real-time to feel invisible taught
                me more about system design than any single course did.
              </p>
            </div>

            {/* Right — spec sheet */}
            <div className="p-10 md:p-14 bg-surface">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                LIVE FUNCTIONALITY
              </div>
              <ul className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-baseline justify-between border-b border-line pb-3"
                  >
                    <span className="text-text">{f.label}</span>
                    <span className="font-mono text-[11px] text-muted">{f.note}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">
                STACK
              </div>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Next.js", "Node.js", "Supabase", "Tailwind CSS", "Vercel"].map((t) => (
                  <span key={t} className="font-mono text-[11px] border border-line px-2 py-1 text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                TESTED WITH
              </div>
              <p className="text-sm text-muted mb-10">
                3 external testers + iterative bug fixes and UX refinement.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://edunite-ruddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-text transition"
                >
                  Live Demo ↗
                </a>
                <a
                  href="https://github.com/Harsh-1701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
                >
                  GitHub ↗
                </a>
              </div>

              <p className="mt-8 text-[11px] font-mono text-muted leading-relaxed">
                Note: Mentor-recommendation logic and broader alumni onboarding
                are in active development, not yet live at production scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}