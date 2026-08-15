import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-line px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="01" label="About" />
        </div>

        <div className="md:col-span-8 max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            I'm <span className="text-text">Harsh Singh</span>, a final-year
            Electronics & Communication Engineering student at Sir M.
            Visvesvaraya Institute of Technology, Bengaluru, with a{" "}
            <span className="font-mono text-base text-accent">
              8.4 CGPA
            </span>.
          </p>

          <p className="text-muted">
            My engineering background started with signals, circuits,
            communication systems and networks. Over time, that interest
            expanded into software, where I've been building full-stack
            applications, AI-powered systems and tools that solve practical
            problems.
          </p>

          <p className="text-muted">
            I enjoy working across different layers of technology, from
            computer networks and cybersecurity to computer vision and
            application development. Most of my learning happens by building,
            breaking, debugging and rebuilding things until they work properly.
          </p>

          <p className="text-muted">
            Outside the technical side, I'm involved with{" "}
            <span className="text-text">Quillz</span>, my college's quiz club,
            and have represented SMVIT in national-level quizzes and debates.
            I also enjoy writing, sketching and exploring ideas beyond
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
}