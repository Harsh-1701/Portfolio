import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel index="01" label="About" />
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
          <p>
            I'm in my final year of Electronics & Communication Engineering at
            Sir M. Visvesvaraya Institute of Technology, Bengaluru, currently at{" "}
            <span className="text-accent font-mono text-base">8.4 CGPA</span>.
          </p>
          <p className="text-muted">
            My degree is about how information moves through signals, circuits,
            networks. Building software felt like a natural extension of that: another
            way information moves between people. So I started shipping products on my
            own, learning the parts nobody teaches you in class like deployment,
            authentication, real-time systems, debugging things that only break in production.
          </p>
          <p className="text-muted">
            Alongside software, I've interned at{" "}
            <span className="text-text">Bharti Airtel</span> on telecom network operations,
            lead my college's Quiz Club <span className="text-text">Quillz</span>, and
            represent SMVIT at national quizzes and debates — from IIT Kharagpur to BITS Goa.
          </p>
        </div>
      </div>
    </section>
  );
}