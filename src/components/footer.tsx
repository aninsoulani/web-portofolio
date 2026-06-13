export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs tracking-wider text-foreground-secondary">
          &copy; {currentYear} &thinsp; &mdash; Engineered with precision
        </p>
        <p className="font-mono text-xs tracking-wider text-muted-foreground">
          Built with Next.js &middot; TypeScript &middot; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
