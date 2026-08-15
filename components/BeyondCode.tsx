import SectionLabel from "./SectionLabel";

const interests = [
  {
    title: "Creative Writing & Poetry",
    description:
      "I enjoy writing poetry and reflective pieces. It has helped me become a better communicator and storyteller, both in writing and presentations.",
  },
  {
    title: "Public Speaking & Debating",
    description:
      "Participated in debate competitions and represented my college at national-level events, strengthening critical thinking and structured communication.",
  },
  {
    title: "Quiz Competitions",
    description:
      "An active quiz enthusiast with achievements in national and college-level competitions. I enjoy learning across technology, science, business, and current affairs.",
  },
  {
    title: "Sketching",
    description:
      "Sketching is my creative outlet. It helps me observe details, think visually, and maintain balance alongside technical work.",
  },
  {
    title: "Learning New Technologies",
    description:
      "Outside academics, I enjoy exploring AI, cybersecurity, computer vision, full-stack development, and emerging technologies through personal projects.",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="border-t border-line px-6 py-32"
    >
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel
            index="08"
            label="Beyond Code"
          />
        </div>

        <div className="md:col-span-8">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            More than just engineering.
          </h2>

          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Technology is a big part of my life, but not the only one. I enjoy
            activities that improve creativity, communication, and continuous
            learning.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {interests.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}