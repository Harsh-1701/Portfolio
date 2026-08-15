import SectionLabel from "./SectionLabel";

const jobs = [
  {
    company: "Bharti Airtel",
    role: "Network Intern",
    period: "Mar 2026 – Apr 2026",
    location: "Bengaluru, India",
    points: [
      "Worked with MPLS, Fiber Optic Networks and NOC operations.",
      "Learned IP Addressing, Routing & Switching fundamentals and network troubleshooting.",
      "Used Advanced MS Excel for reporting and operational analysis.",
    ],
  },
  {
    company: "Skolar",
    role: "Cybersecurity Intern",
    period: "Dec 2023 – Mar 2024",
    location: "Remote",
    points: [
      "Worked with Linux, Wireshark, Nmap and basic Ethical Hacking.",
      "Learned Network Security, Information Security and Vulnerability Assessment.",
      "Explored Cryptography and Web Application Security fundamentals.",
    ],
  },
  {
    company: "Trinity Gaming",
    role: "Talent Acquisition Intern",
    period: "Sep 2023 – Aug 2024",
    location: "Remote",
    points: [
      "Screened candidates and coordinated recruitment activities.",
      "Worked with community engagement and interview scheduling.",
      "Collaborated using Google Sheets and Excel.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="05" label="Experience" />
        </div>

        <div className="md:col-span-8">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="border-b border-line py-10 last:border-none"
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {job.company}
                  </h3>

                  <p className="mt-1 text-accent">
                    {job.role}
                  </p>
                </div>

                <div className="mt-3 text-left text-sm text-muted md:mt-0 md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-relaxed text-muted"
                  >
                    <span className="text-accent">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}