import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Database, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const datasets = [
  {
    name: "IMDB Dataset",
    file: "IMDB_Dataset.xlsx",
    downloadPath: "/api/download?file=IMDB_Dataset.xlsx",
    description:
      "64,661 KB dataset of movie reviews labeled for sentiment analysis. Used in Feature Extraction and Text Classification modules.",
    usedIn: ["Feature Extraction", "Text Classification"],
    size: "~64 MB",
    format: "XLSX",
    rows: "50,000 rows",
    columns: "review (text), sentiment (positive/negative)",
    source: "Stanford AI Lab",
    sourceUrl: "https://ai.stanford.edu/~amaas/data/sentiment/",
    isFolder: false,
    available: true,
  },
  {
    name: "Friends Transcript",
    file: "Friends_Transcript.txt",
    downloadPath: "/api/download?file=Friends_Transcript.txt",
    description:
      "Raw episode transcripts from the TV show Friends (~4.7 MB). Used to train Word2Vec embeddings on conversational, informal English.",
    usedIn: ["Word Vectorization (Word2Vec)"],
    size: "~4.7 MB",
    format: "TXT",
    rows: "Multiple episodes",
    columns: "Raw dialogue text",
    source: "Custom collected",
    sourceUrl: null,
    isFolder: false,
    available: true,
  },
  {
    name: "Game of Thrones Scripts",
    file: "data_GOT.zip",
    downloadPath: "/api/download?file=data_GOT.zip",
    description:
      "Character dialogue and scene descriptions from Game of Thrones. Used for NLP experimentation on fantasy/formal prose. Download as ZIP.",
    usedIn: ["Word Vectorization (Word2Vec)"],
    size: "Variable",
    format: "ZIP",
    rows: "Multiple episodes",
    columns: "Character, Dialogue, Season, Episode",
    source: "Custom collected",
    sourceUrl: null,
    isFolder: true,
    available: true,
  },
  {
    name: "Quora Analysis",
    file: "quora_analysis.zip",
    downloadPath: "/api/download?file=quora_analysis.zip",
    description:
      "Quora question dataset used for text analysis and NLP experiments including duplicate question detection and classification. Download as ZIP.",
    usedIn: ["Feature Extraction", "Text Classification"],
    size: "Variable",
    format: "ZIP",
    rows: "Variable",
    columns: "Question text, labels",
    source: "Custom collected",
    sourceUrl: null,
    isFolder: true,
    available: true,
  },
  {
    name: "Slang Reference List",
    file: "slang.txt",
    downloadPath: "/api/download?file=slang.txt",
    description:
      "Custom slang normalization dictionary used in the Text Preprocessing module to map informal terms to their standard equivalents.",
    usedIn: ["Text Preprocessing"],
    size: "~2 KB",
    format: "TXT",
    rows: "Custom word mappings",
    columns: "slang → standard form",
    source: "Custom built",
    sourceUrl: null,
    isFolder: false,
    available: true,
  },
];

const formatColors: Record<string, string> = {
  XLSX: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  TXT: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  ZIP: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "CSV / TXT":
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

export default function DatasetsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Datasets</h1>
        <p className="text-muted-foreground">
          Real-world datasets used across the NLP learning path — each chosen
          for a specific purpose.
        </p>
      </div>

      <div className="space-y-5">
        {datasets.map((d) => (
          <div
            key={d.name}
            className="border border-border rounded-lg p-6 space-y-5 hover:border-primary/50 transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                {d.isFolder ? (
                  <FolderOpen className="w-5 h-5 text-muted-foreground mt-0.5" />
                ) : (
                  <Database className="w-5 h-5 text-muted-foreground mt-0.5" />
                )}
                <div className="space-y-1">
                  <h2 className="font-semibold text-lg">{d.name}</h2>
                  <code className="text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                    {d.file}
                  </code>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded border font-medium flex-shrink-0 ${
                  formatColors[d.format]
                }`}
              >
                {d.format}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground">{d.description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Size", value: d.size },
                { label: "Records", value: d.rows },
                { label: "Source", value: d.source },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/50 rounded-md p-3 space-y-1"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-sm font-medium">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Columns */}
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Columns / Structure
              </p>
              <p className="text-sm font-mono bg-secondary/50 px-3 py-2 rounded-md">
                {d.columns}
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-muted-foreground">Used in:</span>
                {d.usedIn.map((m) => (
                  <Badge key={m} variant="outline" className="text-xs">
                    {m}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {d.sourceUrl && (
                  <Button variant="outline" size="sm">
                    <Link href={d.sourceUrl} target="_blank">
                      View Source ↗
                    </Link>
                  </Button>
                )}
                {d.available && d.downloadPath && (
                  <a
                    href={d.downloadPath}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">
          📦 Note on Large Datasets
        </p>
        <p className="text-sm text-muted-foreground">
          The IMDB dataset is ~64MB — download may take a moment. Folder-based
          datasets (GOT, Quora) are packaged as ZIP files. You can also access
          everything from the{" "}
          <Link
            href="https://github.com/srijanisaDev/NLP-from-scratch"
            target="_blank"
            className="text-primary hover:underline"
          >
            original GitHub repo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
