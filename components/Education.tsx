import SectionLabel from "./SectionLabel";

const education = [
  {
    institute: "Sir M. Visvesvaraya Institute of Technology",
    degree: "B.E. Electronics & Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA 8.35 / 10",
    description:
      "Focused on Computer Networks, Embedded Systems, Communication Engineering, Software Development, and Artificial Intelligence through academic coursework and personal projects.",
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
      "Built a strong academic foundation in Mathematics, Science and Computer Applications.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-line px-6 py-28"
    >
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel
            index="06"
            label="Education"
          />
        </div>

        <div className="md:col-span-8">

          {education.map((item) => (
            <div
              key={item.institute}
              className="border-b border-line py-10 last:border-none"
            >
              <div className="flex flex-col md:flex-row md:justify-between">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.institute}
                  </h3>

                  <p className="mt-2 text-accent">
                    {item.degree}
                  </p>
                </div>

                <div className="mt-3 text-left md:mt-0 md:text-right">
                  <p className="font-mono text-sm text-muted">
                    {item.period}
                  </p>

                  <p className="mt-1 font-medium">
                    {item.score}
                  </p>
                </div>

              </div>

              <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}