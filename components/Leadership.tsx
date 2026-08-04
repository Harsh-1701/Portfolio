import SectionLabel from "./SectionLabel";

const items = [
  {
    title: "President — Quillz, SMVIT Quiz Club",
    period: "Oct 2025 — Present",
    desc: "Leading operations, event design, and team coordination. Organized LAUNCHPAD '25, which drew approximately 270 registrations.",
  },
  {
    title: "National Finalist — IIT Kharagpur Engineers' Day Quiz",
    period: "National level",
    desc: "Reached the finals of one of the most competitive engineering-quiz circuits in India.",
  },
  {
    title: "Debate Panelist — BITS Goa National Tournament",
    period: "National level",
    desc: "Represented SMVIT on a debate panel at a national-level tournament hosted by BITS Goa.",
  },
  {
    title: "Intra-college & Zonal Quiz Wins",
    period: "Multiple",
    desc: "Secured multiple victories in intra-college quizzes and represented the college at university zonal rounds.",
  },
];

export default function Leadership() {
  return (
    <section className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel index="07" label="Leadership & Signals" />
        </div>
        <div className="md:col-span-8 space-y-8">
          {items.map((it) => (
            <div key={it.title} className="border-l border-line pl-6 hover:border-accent transition">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted">{it.period}</div>
              <h3 className="text-xl font-medium mt-1">{it.title}</h3>
              <p className="text-muted mt-2 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}