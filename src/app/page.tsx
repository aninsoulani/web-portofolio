"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { ArrowRight, Mail } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "API Integrations" },
  { value: "97%", label: "Efficiency Gain" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-6">
              Anin Ammbya Soulani — Software Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
              Building software
              that solves
              real
              <span className="text-foreground-secondary"> problems.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground-secondary">
              Software Developer experienced in enterprise applications, API integrations, and workflow automation. Always curious to learn new things, currently helping build digital products at CIMB Niaga.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
              >
                View Projects
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-muted"
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.instagram.com/aninsoulani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://github.com/aninsoulani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aninsoulani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:a.soulani9@gmail.com"
                className="text-foreground-secondary transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <Image
              src="/foto-linkedIn.jpeg"
              alt="Foto Profil Saya, Anin"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <Section>
        <div className="border-t border-b border-border py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs tracking-wider text-foreground-secondary uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Brief About */}
      <Section className="py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Building software
              <br />
              for real-world operations.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-foreground-secondary">
              I build software that reduces manual work, connects systems, and helps teams operate more efficiently. Over the past few years, I've worked on enterprise systems in the banking industry, developing applications that automate workflows, connect external platforms, and improve operational efficiency.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground-secondary">
              Most recently, I helped engineer a customer verification platform that reduced turnaround time by 97% through API integrations and automated processes.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground-secondary">
              When I'm away from my keyboard, you'll probably find me out on a run, exploring the mountains, or on a tennis court. I enjoy activities that challenge me to improve over time, and they've taught me the value of consistency, curiosity, and long-term thinking. Which the qualities I bring into my work as an software developer.
            </p>
            <Link
              href="/experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
            >
              View Full Experience
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
