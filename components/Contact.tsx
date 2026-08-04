import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel index="09" label="Contact" />
        </div>
        <div className="md:col-span-8">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tightest leading-none">
            Let's <span className="font-serif italic text-accent">talk</span>.
          </h2>
          <p className="mt-6 text-muted max-w-lg text-lg">
            Currently open to software engineering internships and interesting
            collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:harsh.s1701@gmail.com"
              className="group border border-line p-6 hover:border-accent transition block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Email</div>
              <div className="mt-2 text-lg group-hover:text-accent transition">harsh.s1701@gmail.com</div>
            </a>
            <a
              href="tel:+919696110017"
              className="group border border-line p-6 hover:border-accent transition block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Phone</div>
              <div className="mt-2 text-lg group-hover:text-accent transition">+91 96961 10017</div>
            </a>
            <a
              href="https://linkedin.com/in/harshsingh1701"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-line p-6 hover:border-accent transition block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">LinkedIn ↗</div>
              <div className="mt-2 text-lg group-hover:text-accent transition">/in/harshsingh1701</div>
            </a>
            <a
              href="https://github.com/Harsh-1701"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-line p-6 hover:border-accent transition block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">GitHub ↗</div>
              <div className="mt-2 text-lg group-hover:text-accent transition">/Harsh-1701</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}