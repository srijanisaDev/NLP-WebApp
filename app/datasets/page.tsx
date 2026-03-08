import { Badge } from "@/components/ui/badge";
import { Database } from "lucide-react";

const datasets = [
  {
    name: "IMDB Dataset",
    file: "IMDB Dataset.csv",
    description: "50,000 movie reviews labeled as positive or negative sentiment. Used in the Feature Extraction and Text Classification modules.",
    usedIn: ["Feature Extraction", "Text Classification"],
    size: "~66 MB",
    source: "https://ai.stanford.edu/~amaas/data/sentiment/",
  },
  {
    name: "Friends Transcript",
    file: "Friends_Transcript...",
    description: "Raw episode transcripts from the TV show Friends. Used to train Word2Vec embeddings on conversational, informal English.",
    usedIn: ["Word Vectorization (Word2Vec)"],
    size: "Variable",
    source: "Custom collected",
  },
  {
    name: "Game of Thrones Scripts",
    file: "data_GOT/",
    description: "Character dialogue and scene descriptions from Game of Thrones. Used for NLP experimentation on fantasy/formal prose.",
    usedIn: ["Word Vectorization (Word2Vec)"],
    size: "Variable",
    source: "Custom collected",
  },
];

export default function DatasetsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Datasets</h1>
        <p className="text-muted-foreground">Three datasets used across the NLP learning path — each chosen for a specific purpose.</p>
      </div>
      <div className="space-y-5">
        {datasets.map((d) => (
          <div key={d.name} className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div className="space-y-1">
                <h2 className="font-semibold text-lg">{d.name}</h2>
                <code className="text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground">{d.file}</code>
              </div>
              <span className="ml-auto text-xs text-muted-foreground">{d.size}</span>
            </div>
            <p className="text-sm text-muted-foreground">{d.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground">Used in:</span>
              {d.usedIn.map((m) => <Badge key={m} variant="outline" className="text-xs">{m}</Badge>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
