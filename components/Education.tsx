import SectionLabel from "./SectionLabel";

const jobs = [
  {
    company: "Bharti Airtel",
    role: "Network Intern",
    period: "Apr 2026 — Jun 2026",
    location: "Bengaluru, IN",
    points: [
      "Monitored and analyzed telecom network performance across live infrastructure.",
      "Assisted with connectivity troubleshooting and exposure to NOC-style operations.",
      "Gained ground-level understanding of how reliability is engineered at telecom scale.",
    ],
  },
  {
    company: "Trinity Gaming",
    role: "Recruitment & Screening Intern",
    period: "Sep 2023 — Sep 2024",
    location: "Bengaluru, IN",
    points: [
      "Identified and shortlisted gaming talent across India.",
      "Acted as HR and community liaison during onboarding of new entrants.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel index="05" label="Experience" />
        </div>
        <div className="md:col-span-8 space-y-16">
          {jobs.map((j) => (
            <div key={j.company} className="grid md:grid-cols-6 gap-4">
              <div className="md:col-span-2 font-mono text-xs text-muted">
                <div>{j.period}</div>
                <div className="mt-1">{j.location}</div>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium">{j.company}</h3>
                <div className="text-accent font-mono text-xs uppercase tracking-widest mt-1">{j.role}</div>
                <ul className="mt-5 space-y-3">
                  {j.points.map((p) => (
                    <li key={p} className="text-muted leading-relaxed flex gap-3">
                      <span className="text-accent mt-2">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}