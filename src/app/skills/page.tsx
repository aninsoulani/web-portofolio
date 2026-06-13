import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and engineering competencies across enterprise architecture, backend systems, frontend development, and cloud infrastructure.",
};

const skillCategories = [
  {
    title: "Backend & Systems",
    mono: "01",
    skills: [
      "Laravel / PHP",
      "Node.js",
      "JavaScript / TypeScript",
      "Java",
      "REST API Development",
      "System Integration",
    ],
  },
  {
    title: "Enterprise Systems",
    mono: "02",
    skills: [
      "Mendix Low-Code",
      "OutSystems Platform",
      "FTP Integrations",
      "Core Banking Systems",
      "Legacy System Integration",
      "Email Services",
    ],
  },
  {
    title: "Frontend Engineering",
    mono: "03",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "SCSS",
    ],
  },
  {
    title: "Cloud & DevOps",
    mono: "04",
    skills: [
      "Git & Version Control",
      "CI/CD Pipelines",
      "Docker Fundamentals",
      "Kubernetes Fundamentals",
      "Production Deployments",
      "Environment Setup",
    ],
  },
  {
    title: "Engineering Practices",
    mono: "05",
    skills: [
      "Agile / Scrum",
      "UAT Testing",
      "Black Box Testing",
      "Debugging",
      "Code Review",
      "Continuous Improvement",
    ],
  },
  {
    title: "Professional Skills",
    mono: "06",
    skills: [
      "Technical Problem Solving",
      "Stakeholder Communication",
      "Requirements Analysis",
      "Cross-Functional Collaboration",
      "Business Process Understanding",
      "Solution Design",
    ],
  },
  {
    title: "Currently Exploring",
    mono: "07",
    skills: [
      "Golang",
      "Rust",
      "AI-Assisted Development",
      "Vibe Coding",
      "Modern Web Architecture",
      "LLM Workflows",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
          Technical Expertise
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
          Skills & Competencies
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground-secondary leading-relaxed">
          A snapshot of the technologies and engineering skills I use across web development, system integration, and enterprise applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skillCategories.map((category) => {
          const isExploring = category.title === "Currently Exploring";
          return (
            <div
              key={category.title}
              className={`p-8 sm:p-10 group relative transition-colors ${isExploring
                  ? "bg-surface/50 hover:bg-surface md:col-span-2 lg:col-span-3 overflow-hidden"
                  : "bg-background"
                }`}
            >
              <div className="relative flex items-baseline justify-between mb-6">
                <h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-3">
                  {category.title}
                  {isExploring && (
                    <span className="flex h-2 w-2 relative" title="Actively Learning">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  )}
                </h2>
                <span className={`font-mono text-xs ${isExploring ? "text-foreground" : "text-muted-foreground"}`}>
                  {category.mono}
                </span>
              </div>
              <ul className={`relative ${isExploring ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8" : "space-y-3"}`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`text-sm leading-relaxed pl-3 transition-colors duration-200 border-l-2 ${isExploring
                        ? "text-foreground border-foreground/20 hover:border-foreground"
                        : "text-foreground-secondary border-transparent hover:border-foreground hover:text-foreground"
                      }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
