import Link from "next/link";
import { ExternalLink } from "lucide-react";

const docSections = [
  {
    title: "NLP General",
    docs: [
      { label: "NLTK Book (Official)", url: "https://www.nltk.org/book_1ed/ch03.html", desc: "The canonical reference for text processing with Python and NLTK." },
      { label: "Complete NLP Preprocessing Guide", url: "https://dev.to/themustaphatijani/the-complete-guide-to-nlp-text-preprocessing-tokenization-normalization-stemming-lemmatization-", desc: "Covers tokenization, normalization, stemming, lemmatization end-to-end." },
      { label: "Understanding Tokenization, Stemming & Lemmatization", url: "https://becominghuman.ai/understanding-tokenization-stemming-and-lemmatization-in-nlp-ba7944bb92a0", desc: "Practical NLTK-based walkthrough with code." },
    ],
  },
  {
    title: "Library Documentation",
    docs: [
      { label: "NLTK Official Docs", url: "https://www.nltk.org/", desc: "Full API reference for NLTK — tokenizers, stemmers, taggers, corpora." },
      { label: "spaCy Official Docs", url: "https://spacy.io/usage", desc: "Production-ready NLP library — POS tagging, NER, dependency parsing." },
      { label: "gensim Word2Vec Docs", url: "https://radimrehurek.com/gensim/models/word2vec.html", desc: "Official gensim reference for training and using Word2Vec models." },
      { label: "scikit-learn Text Features", url: "https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction", desc: "CountVectorizer, TfidfVectorizer, and Hashing tricks." },
      { label: "scikit-learn Text Classification Tutorial", url: "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html", desc: "End-to-end classification pipeline tutorial from scikit-learn." },
    ],
  },
  {
    title: "POS Tagging",
    docs: [
      { label: "POS Tagging with spaCy", url: "https://codesignal.com/learn/courses/building-an-nlp-pipeline-with-spacy-for-token-classification/lessons/understanding-and-implementing-pos-tagging-with-spacy", desc: "Hands-on guide to POS tagging using spaCy pipelines." },
    ],
  },
  {
    title: "Word Embeddings",
    docs: [
      { label: "Word2Vec for Text Classification (Video)", url: "https://www.youtube.com/watch?v=P47raNuzAW0", desc: "Practical tutorial: use Word2Vec features for ML classification." },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-muted-foreground">Official docs, guides, and references for every library and topic covered in this learning path.</p>
      </div>
      <div className="space-y-8">
        {docSections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{section.title}</h2>
            <div className="space-y-2">
              {section.docs.map((doc) => (
                <Link key={doc.url} href={doc.url} target="_blank"
                  className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-accent/20 transition-all group">
                  <ExternalLink className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{doc.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{doc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
