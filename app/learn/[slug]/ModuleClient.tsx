"use client";
import { modules } from "@/lib/modules";
import { useEffect, useState } from "react";
import { isComplete, markComplete, markIncomplete } from "@/lib/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ColabBadge from "@/components/ColabBadge";
import NotebookRenderer from "@/components/NotebookRenderer";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export default function ModuleClient({
  slug,
  notebookContent,
}: {
  slug: string;
  notebookContent: string;
}) {
  const idx = modules.findIndex((m) => m.slug === slug);
  const mod = modules[idx];
  const prev = modules[idx - 1] ?? null;
  const next = modules[idx + 1] ?? null;
  const [done, setDone] = useState(false);
  const [activeTab, setActiveTab] = useState<"docs" | "notebook">("docs");

  useEffect(() => {
    setDone(isComplete(slug));
  }, [slug]);

  const toggle = () => {
    if (done) { markIncomplete(slug); setDone(false); }
    else { markComplete(slug); setDone(true); }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/learn" className="hover:text-foreground transition-colors">
            Learning Path
          </Link>
          <span>/</span>
          <span>{mod.title}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {mod.tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
          <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
            <Clock className="w-3 h-3" />
            {mod.estimatedTime}
          </span>
        </div>
        <h1 className="text-4xl font-bold">{mod.title}</h1>
        <p className="text-lg text-muted-foreground">{mod.description}</p>
        <ColabBadge url={mod.colabUrl} />
      </div>

      <Separator />

      {/* Tabs */}
      <div className="flex gap-1 border border-border rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab("docs")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeTab === "docs"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          📖 Docs
        </button>
        <button
          onClick={() => setActiveTab("notebook")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeTab === "notebook"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          🧪 Notebook
        </button>
      </div>

      {/* Docs Tab */}
      {activeTab === "docs" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{mod.doc.overview}</p>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 space-y-1">
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              💡 Why It Matters
            </p>
            <p className="text-sm text-muted-foreground">{mod.doc.whyItMatters}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">{mod.doc.keyConceptsTitle}</h2>
            <div className="space-y-3">
              {mod.doc.keyConcepts.map((kc) => (
                <div key={kc.term} className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-sm">{kc.term}</p>
                  <p className="text-sm text-muted-foreground mt-1">{kc.definition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-1">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              🛠 Library Note
            </p>
            <p className="text-sm text-muted-foreground">{mod.doc.libraryNote}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">External Documentation</h2>
            <div className="space-y-2">
              {mod.doc.externalDocs.map((d) => (
                <Link
                  key={d.url}
                  href={d.url}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">What You'll Learn</h2>
            <ul className="space-y-2">
              {mod.whatYouLearn.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Notebook Tab */}
      {activeTab === "notebook" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span>Rendered from Jupyter Notebook</span>
            </div>
            <ColabBadge url={mod.colabUrl} />
          </div>
          <NotebookRenderer content={notebookContent} />
        </div>
      )}

      <Separator />

      {/* Mark Complete + Navigation */}
      <div className="space-y-6">
        <Button
          onClick={toggle}
          variant={done ? "secondary" : "default"}
          className="w-full sm:w-auto"
          size="lg"
        >
          <CheckCircle2 className="mr-2 w-4 h-4" />
          {done ? "Mark as Incomplete" : "Mark as Complete"}
        </Button>

        <div className="flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/learn/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/learn/${next.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              {next.title} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
