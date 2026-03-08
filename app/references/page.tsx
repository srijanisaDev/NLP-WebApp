import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { modules } from "@/lib/modules";

export default function ReferencesPage() {
  const allRefs = modules.flatMap((m) =>
    m.doc.externalDocs.map((d) => ({ ...d, module: m.title }))
  );

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">References</h1>
        <p className="text-muted-foreground">All external references aggregated from every module in one place.</p>
      </div>
      <div className="space-y-2">
        {allRefs.map((ref) => (
          <Link key={ref.url} href={ref.url} target="_blank"
            className="flex items-center justify-between gap-4 p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-accent/20 transition-all group">
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">{ref.label}</span>
            </div>
            <span className="text-xs text-muted-foreground flex-shrink-0">{ref.module}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
