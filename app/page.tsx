import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/lib/modules";
import { ArrowRight, BookOpen, Database, Layers } from "lucide-react";

const pipeline = [
  "Preprocessing",
  "Tokenization",
  "Stemming",
  "Lemmatization",
  "POS Tagging",
  "Feature Extraction",
  "Word2Vec",
  "Classification",
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-16 pb-8 space-y-6">
        <Badge variant="outline" className="text-xs">
          ML/DL background required
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          NLP from Scratch
          <span className="text-muted-foreground block text-3xl font-normal mt-2">
            A hands-on learning path through core NLP concepts
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          {modules.length} notebooks. 3 real datasets. One linear path from raw
          text to a working classifier. All code is yours to run — no fluff, no
          black boxes.
        </p>
        <div className="flex gap-3">
          <Button size="lg">
            <Link href="/learn" className="flex items-center">
              Start Learning <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link
              href="https://github.com/srijanisaDev/NLP-from-scratch"
              target="_blank"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Pipeline Roadmap */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
          The NLP Pipeline
        </h2>
        <div className="flex flex-wrap gap-2 items-center">
          {pipeline.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, label: "Modules", value: `${modules.length} Notebooks` },
          { icon: Database, label: "Datasets", value: "IMDB · Friends · GOT" },
          { icon: Layers, label: "Libraries", value: "NLTK · spaCy · gensim · sklearn" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="border border-border rounded-lg p-5 space-y-2 hover:border-primary/50 transition-colors"
          >
            <Icon className="w-5 h-5 text-muted-foreground" />
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {label}
            </p>
            <p className="font-semibold">{value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
