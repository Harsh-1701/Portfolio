import SectionLabel from "./SectionLabel";

const groups = [
  {
    label: "Programming & Software",
    items: [
      "Java",
      "C++",
      "C",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
  {
    label: "AI & Computer Vision",
    items: [
      "PyTorch",
      "Computer Vision",
      "EfficientNet-B0",
      "Grad-CAM",
      "OpenCV",
      "Streamlit",
    ],
  },
  {
    label: "Networks & Cybersecurity",
    items: [
      "Computer Networks",
      "Network Security",
      "Network Troubleshooting",
      "Telecom Fundamentals",
      "Cybersecurity",
    ],
  },
  {
    label: "ECE & Embedded Systems",
    items: [
      "Embedded Systems",
      "Digital Communication",
      "Analog Communication",
      "VLSI Fundamentals",
      "Verilog",
      "MATLAB",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "Arduino",
      "Proteus",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="04" label="Skills" />

          <p className="max-w-xs leading-relaxed text-muted">
            A practical mix of software development, AI, networking,
            cybersecurity, and electronics engineering.
          </p>
        </div>

        <div className="md:col-span-8 space-y-10">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {group.label}
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {group.items.map((item, index) => (
                  <span
                    key={item}
                    className="text-lg text-text"
                  >
                    {item}
                    {index < group.items.length - 1 && (
                      <span className="ml-5 text-line">·</span>
                    )}
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