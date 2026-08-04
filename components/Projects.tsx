import SectionLabel from "./SectionLabel";

const projects = [
  {
    n: "01",
    title: "File Integrity Checker",
    tag: "Cybersecurity · Python",
    desc: "A Python tool that detects unauthorized file modifications by generating and verifying SHA-256 hashes. Automated comparison, tamper detection, and a simple audit workflow.",
    stack: ["Python", "SHA-256", "Cryptography"],
  },
  {
    n: "02",
    title: "AR Learning Tool",
    tag: "Education · Augmented Reality",
    desc: "An AR application that visualizes complex academic concepts through interactive 3D models — designed to make abstract ideas physically explorable for school students.",
    stack: ["Unity 3D", "Vuforia", "Android SDK", "Blender"],
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <SectionLabel index="03" label="Other Work" />
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tightest">
              Smaller builds, same instinct.
            </h2>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <article key={p.title} className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-surface/50 transition px-4 -mx-4">
              <div className="md:col-span-1 font-mono text-xs text-muted">{p.n}</div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium">{p.title}</h3>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-accent">{p.tag}</div>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted leading-relaxed">{p.desc}</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-1.5 md:justify-end items-start">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] text-muted border border-line px-2 py-0.5">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}