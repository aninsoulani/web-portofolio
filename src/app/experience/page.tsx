import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in enterprise software engineering, distributed systems, and high-throughput architecture.",
};

const experiences = [
  {
    period: "Oct 2024 — Present",
    role: "Software Developer - CIPTA IT DevOps",
    company: "PT Bank CIMB Niaga Tbk",
    logo: "/experiences-assets/logo cimb.png",
    description:
      "Engineered an internal customer verification platform integrated with 6 core banking systems. Automated SLIK checks, signature verification, and AML screening.",
    achievements: [
      "Reduced customer verification processing time from 30 minutes to 1 minute (~97% efficiency gain)",
      "Built an FTP automation system for cashback processing, improving operational efficiency by 90%",
      "Designed robust RESTful APIs and transactional email integrations bridging external vendors",
      "Delivered a cross-platform Travel Fair Management System (Web, Android, iOS)",
    ],
    stack: [
      "Mendix",
      "Java",
      "JavaScript",
      "REST APIs",
      "Agile/Scrum",
      "FTP",
    ],
  },
  {
    period: "Jan 2024 — Oct 2024",
    role: "Freelance Web Developer",
    company: "Ceri Development",
    logo: "/experiences-assets/Logo Ceridev.jpg",
    description:
      "Developed custom backend solutions and CRUD workflows. Collaborated within remote teams to translate client requirements into scalable PHP/Laravel applications.",
    achievements: [
      "Architected backend logic and database workflows for multiple client projects",
      "Managed production deployments and end-to-end testing cycles",
      "Collaborated remotely to define technical scope and project deliverables",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Git", "PostgreSQL"],
  },
  {
    period: "Aug 2023 — Dec 2023",
    role: "Software Developer Intern - BCA Young Innovators 3 (BYON)",
    company: "PT Bank Central Asia Tbk",
    logo: "/experiences-assets/Logo BCA.png",
    description:
      "Co-developed internal enterprise applications within the Digital Innovation Solution division. Focused on task management and financial reconciliation systems.",
    achievements: [
      "Architected integration with legacy financial systems for the 'I-PTC' application, reducing reconciliation errors",
      "Implemented a real-time email notification system for task management, enhancing team coordination",
      "Supported testing, debugging, and feature enhancement across 3 concurrent applications",
    ],
    stack: ["OutSystems", "Integration", "SIT & UAT", "Agile (Scrum)"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
          Professional Journey
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
          Experience
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground-secondary leading-relaxed">
          The experiences that helped me grow from a student developer into an enterprise software engineer.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 border-t border-border py-12 sm:py-16 last:border-b"
          >
            {/* Period */}
            <div>
              <p className="font-mono text-sm text-foreground-secondary tracking-wide">
                {exp.period}
              </p>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-5 mb-6">
                {exp.logo && (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded bg-surface/30 p-2 flex items-center justify-center border border-border/50">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {exp.role}
                  </h2>
                  <p className="mt-1 font-mono text-xs tracking-wider text-foreground-secondary uppercase">
                    {exp.company}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base text-foreground-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="mt-6 space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-secondary" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-wide px-3 py-1.5 border border-border text-foreground-secondary transition-colors hover:text-foreground hover:border-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
