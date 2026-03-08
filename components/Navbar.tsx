import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur z-50">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        NLP<span className="text-primary">.</span>scratch
      </Link>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link href="/learn" className="hover:text-foreground transition-colors">Learn</Link>
        <Link href="/datasets" className="hover:text-foreground transition-colors">Datasets</Link>
        <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
        <Link href="/references" className="hover:text-foreground transition-colors">References</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
