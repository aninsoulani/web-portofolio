import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Academic",
  description:
    "Academic background, certifications, and continuous learning pursuits in software engineering and computer science.",
};

const education = [
  {
    period: "Aug 2020 — Jul 2024",
    degree: "Bachelor Degree in Informatics",
    institution: "Universitas Jenderal Soedirman",
    logo: "/academic-assets/Logo-UNSOED.png",
    description:
      "Graduated with High Honors (GPA: 3.84/4.00). Focused on software engineering, enterprise applications, and machine learning.",
    highlights: [
      {
        text: "Thesis: \"Penerapan Teknologi Low-code Programming dalam Pengembangan Aplikasi Pencatatan Transaksi Petty Cash Menggunakan Platform Outsystems\"",
      },
      {
        text: "Published Scientific Article in Jurnal Teknik Informatika (JUTIF), accredited SINTA 2",
        link: "https://doi.org/10.52436/1.jutif.2024.5.3.2303",
      },
    ],
  },
];

const organizations = [
  {
    period: "Dec 2018 — Dec 2019",
    role: "Fundraising Volunteer",
    organization: "Sore 9 Whale",
    logo: "/academic-assets/LOGO SMAN 4 DEPOK.png",
    description:
      "Led corporate sponsorship initiatives and event logistics for a major charity concert, collaborating with internal teams to drive successful execution.",
    highlights: [
      { text: "Secured over IDR 100M in corporate sponsorships through successful business pitches" },
      { text: "Coordinated event logistics for an 800-ticket sold-out event featuring prominent artists" },
    ],
  },
];

export default function AcademicPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
          Education & Growth
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
          Academic
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground-secondary leading-relaxed">
          The academic foundation, experiences, and continuous learning that support my work as a software developer.
        </p>
      </div>

      {/* Education */}
      <div className="mb-24">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-8">
          Education
        </p>
        {education.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 border-t border-border py-12"
          >
            <p className="font-mono text-sm text-foreground-secondary tracking-wide">
              {edu.period}
            </p>
            <div>
              <div className="flex items-center gap-5 mb-6">
                {edu.logo && (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded bg-surface/30 p-2 flex items-center justify-center border border-border/50">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {edu.degree}
                  </h2>
                  <p className="mt-1 font-mono text-xs tracking-wider text-foreground-secondary uppercase">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base text-foreground-secondary leading-relaxed">
                {edu.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {edu.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-secondary" />
                    {highlight.link ? (
                      <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
                      >
                        {highlight.text}
                      </a>
                    ) : (
                      <span>{highlight.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Organizational Experience */}
      <div className="mb-24">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-8">
          Organizational Experience
        </p>
        {organizations.map((org, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 border-t border-border py-12"
          >
            <p className="font-mono text-sm text-foreground-secondary tracking-wide">
              {org.period}
            </p>
            <div>
              <div className="flex items-center gap-5 mb-6">
                {org.logo && (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded bg-surface/30 p-2 flex items-center justify-center border border-border/50">
                    <Image
                      src={org.logo}
                      alt={`${org.organization} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {org.role}
                  </h2>
                  <p className="mt-1 font-mono text-xs tracking-wider text-foreground-secondary uppercase">
                    {org.organization}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base text-foreground-secondary leading-relaxed">
                {org.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {org.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-secondary" />
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
