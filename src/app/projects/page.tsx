import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering projects showcasing enterprise architecture, distributed systems, and modern web development.",
};

const projects = [
  {
    number: "01",
    title: "Sales Management System",
    description:
      "Architected a scalable sales management system replicating core modules of Paper.id ERP. Processed over 200 concurrent sales transactions during beta testing and reduced manual documentation workflows by 60%.",
    stack: ["PHP", "MySQL", "PDF Generation", "Data Export"],
    link: "#",
    image: "/projects-assets/loginSIP.png",
  },
  {
    number: "02",
    title: "NFC-Based Smart Door Lock",
    description:
      "Designed and built an NFC-enabled smart door lock system using an ESP32 microcontroller. Implemented secure authentication logic, developed firmware in C++, and optimized the codebase for real-time response and low power consumption.",
    stack: ["C++", "Embedded Systems", "NodeMCU", "Hardware Integration"],
    link: "#",
    image: "/projects-assets/NFC.jfif",
  },
  {
    number: "03",
    title: "E-Cashier Cross-Platform App",
    description:
      "Developed a mobile-based cashier application to assist restaurants and businesses in managing daily operations. Built using a modern cross-platform framework for a seamless, responsive point-of-sale experience.",
    stack: ["Ionic Framework", "Angular", "HTML", "Mobile Applications"],
    link: "https://github.com/aninsoulani/project-ionic",
    image: "/projects-assets/ionic.png",
  },
  {
    number: "04",
    title: "Javanese Script CNN Classifier",
    description:
      "Designed and trained a Convolutional Neural Network capable of detecting and classifying traditional Javanese script from images. Achieved an impressive accuracy score of 96.29% with a low loss value through extensive model tuning.",
    stack: ["Artificial Neural Networks", "CNN", "Machine Learning"],
    link: "https://github.com/aninsoulani/project-jst",
    image: "/projects-assets/aksara jawa.jpg",
  },
  {
    number: "05",
    title: "University Data Management App",
    description:
      "Engineered an academic web application to manage faculty and student records according to strict specifications. Successfully deployed the final project, achieving high performance and an A grade (4.00 GPA).",
    stack: ["PHP", "Software Development", "Web Development"],
    link: "https://github.com/aninsoulani/pendataan-dosen-mahasiswa",
    image: "/projects-assets/data.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
          Selected Work
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground-secondary leading-relaxed">
          Projects that showcase my experience in building business applications, integrating systems, and solving real-world problems through software.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {projects.map((project) => (
          <Link
            key={project.number}
            href={project.link}
            target={project.link !== "#" ? "_blank" : undefined}
            rel={project.link !== "#" ? "noopener noreferrer" : undefined}
            className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_240px_auto] gap-6 lg:gap-12 lg:items-center border-t border-border py-12 sm:py-16 last:border-b px-6 -mx-6 transition-colors hover:bg-surface"
          >
            {/* Number */}
            <p className="font-mono text-sm text-muted-foreground">
              {project.number}
            </p>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-foreground">
                  {project.title}
                </h2>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </div>
              <p className="mt-4 max-w-2xl text-sm text-foreground-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-wide px-3 py-1.5 border border-border text-foreground-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Media/Image Rendering */}
            <div className="hidden lg:block relative aspect-video w-full overflow-hidden bg-background border border-border transition-colors duration-300 group-hover:border-foreground-secondary">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="font-mono text-xs tracking-widest uppercase">Media</span>
                </div>
              )}
            </div>

            {/* Arrow (Desktop) */}
            <div className="hidden lg:flex items-center">
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground transition-all duration-300 group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
