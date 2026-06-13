import type { Metadata } from "next";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for collaboration opportunities, technical consulting, or just to say hello.",
};

const contactLinks = [
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: "@aninsoulani",
    href: "https://www.instagram.com/aninsoulani/",
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: "a.soulani9@gmail.com",
    href: "mailto:a.soulani9@gmail.com",
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "github.com/aninsoulani",
    href: "https://github.com/aninsoulani",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/aninsoulani",
    href: "https://www.linkedin.com/in/aninsoulani",
  },
  {
    icon: "location" as const,
    label: "Location",
    value: "Depok, West Java, Indonesia",
    href: "https://maps.app.goo.gl/4aPKibrYU62uzKZV7",
  },
];

function ContactIcon({ type, size = 18 }: { type: string; size?: number }) {
  switch (type) {
    case "instagram":
      return <InstagramIcon size={size} />;
    case "mail":
      return <Mail size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "location":
      return <MapPin size={size} />;
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground-secondary mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Let&apos;s connect
            <br />
            or build something great.
          </h1>
          <p className="mt-8 max-w-md text-base text-foreground-secondary leading-relaxed">
            Whether it&apos;s a new opportunity, a technical discussion, or an interesting project, feel free to reach out.
          </p>
        </div>

        {/* Right — Contact Links */}
        <div className="flex flex-col justify-center">
          <div className="border-t border-border">
            {contactLinks.map((link) => {
              const content = (
                <div className="flex items-center gap-6 border-b border-border py-6 group transition-colors hover:bg-surface px-4 -mx-4">
                  <span className="text-foreground-secondary shrink-0">
                    <ContactIcon type={link.icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground font-medium">
                      {link.value}
                    </p>
                  </div>
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}
          </div>

          {/* Availability Status */}
          <div className="mt-10 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <p className="font-mono text-xs tracking-wider text-foreground-secondary">
              Available for new opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
