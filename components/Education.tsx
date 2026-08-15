import SectionLabel from "./SectionLabel";

const education = [
  {
    institute: "Sir M. Visvesvaraya Institute of Technology (VTU)",
    degree: "B.E. in Electronics & Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.35 / 10",
    description:
      "Focused on computer networks, embedded systems, communication engineering, software development, and artificial intelligence through academic and personal projects.",
  },
  {
    institute: "Jyoti Niketan School, Azamgarh",
    degree: "ISC (Class XII)",
    period: "2022",
    score: "90.25%",
    description:
      "Science stream with Physics, Chemistry, Mathematics and Computer Science.",
  },
  {
    institute: "Jyoti Niketan School, Azamgarh",
    degree: "ICSE (Class X)",
    period: "2020",
    score: "89.80%",
    description:
      "Built a strong academic foundation with emphasis on mathematics, science and computer applications.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-line px-6 py-32"
    >
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel
            index="06"
            label="Education"
          />
        </div>

        <div className="md:col-span-8 space-y-8">
          {education.map((item) => (
            <div
              key={item.institute + item.degree}
              className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.institute}
                  </h3>

                  <p className="mt-2 text-accent">
                    {item.degree}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-mono text-sm text-muted">
                    {item.period}
                  </p>

                  <p className="mt-1 font-semibold">
                    {item.score}
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}