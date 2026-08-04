import SectionLabel from "./SectionLabel";

const groups = [
  {
    label: "Software",
    items: ["Next.js", "Node.js", "Tailwind CSS", "Supabase", "MongoDB", "Java", "C++", "Python"],
  },
  {
    label: "Systems & Networks",
    items: ["Computer Networks", "Network Security", "Network Troubleshooting", "Telecom Fundamentals", "Cybersecurity"],
  },
  {
    label: "Engineering Foundation",
    items: ["Digital & Analog Communication", "Embedded Systems", "VLSI Fundamentals", "Verilog", "MATLAB"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "Linux", "Vercel", "Proteus", "Arduino IDE", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel index="04" label="Toolkit" />
          <p className="text-muted max-w-xs">
            Grouped by domain, not ranked by fictional percentages.
          </p>
        </div>
        <div className="md:col-span-8 space-y-10">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
                {g.items.map((i, idx) => (
                  <span key={i} className="flex items-center gap-6">
                    {i}
                    {idx < g.items.length - 1 && <span className="text-line">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}