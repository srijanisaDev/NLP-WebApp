export type Module = {
  slug: string;
  title: string;
  description: string;
  estimatedTime: string;
  tags: string[];
  colabUrl: string;
  whatYouLearn: string[];
  doc: {
    overview: string;
    whyItMatters: string;
    keyConceptsTitle: string;
    keyConcepts: { term: string; definition: string }[];
    libraryNote: string;
    externalDocs: { label: string; url: string }[];
  };
};

export const modules: Module[] = [
  {
    slug: "text-preprocessing",
    title: "Text Preprocessing",
    description: "Clean and normalize raw text before any NLP task begins.",
    estimatedTime: "15 min",
    tags: ["NLTK", "regex", "normalization"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/text_preprocessin...ipynb",
    whatYouLearn: [
      "Why raw text needs cleaning before analysis",
      "Lowercasing, punctuation removal, and stopword filtering",
      "Slang normalization using a custom slang.txt reference",
    ],
    doc: {
      overview:
        "Text preprocessing is the foundational step in any NLP pipeline. Raw text from real-world sources — tweets, reviews, transcripts — contains noise: inconsistent casing, punctuation, slang, and filler words. Preprocessing standardizes this input so downstream tasks (tokenization, vectorization, classification) work reliably.",
      whyItMatters:
        "Skipping preprocessing can degrade model performance significantly. For example, 'Running', 'running', and 'RUNNING' are the same word but treated as three different tokens without normalization. Slang like 'gonna' or 'u' can confuse models unless mapped to their standard forms.",
      keyConceptsTitle: "Core Preprocessing Steps",
      keyConcepts: [
        { term: "Lowercasing", definition: "Converts all characters to lowercase to remove case-based duplication." },
        { term: "Punctuation Removal", definition: "Strips non-alphanumeric characters using regex to reduce noise." },
        { term: "Stopword Removal", definition: "Removes high-frequency, low-information words like 'the', 'is', 'at' using NLTK's stopword corpus." },
        { term: "Slang Normalization", definition: "Maps informal terms to standard equivalents using a custom dictionary (slang.txt in this repo)." },
      ],
      libraryNote: "This module uses NLTK for stopword handling and Python's built-in `re` module for regex-based cleaning.",
      externalDocs: [
        { label: "NLTK Stopwords Docs", url: "https://www.nltk.org/book_1ed/ch03.html" },
        { label: "Complete Guide to NLP Preprocessing", url: "https://dev.to/themustaphatijani/the-complete-guide-to-nlp-text-preprocessing-tokenization-normalization-stemming-lemmatization-" },
      ],
    },
  },
  {
    slug: "tokenization",
    title: "Tokenization",
    description: "Break raw text into meaningful units — words, sentences, or subwords.",
    estimatedTime: "12 min",
    tags: ["NLTK", "word_tokenize", "sent_tokenize"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/Tokenization.ipynb",
    whatYouLearn: [
      "Difference between word and sentence tokenization",
      "How whitespace-based splitting fails on edge cases",
      "NLTK's word_tokenize vs simple split()",
    ],
    doc: {
      overview:
        "Tokenization is the process of segmenting text into individual units called tokens. A token can be a word, punctuation mark, or sentence. It is the first transformation applied after preprocessing and is required before any further NLP step.",
      whyItMatters:
        "Every NLP model operates on sequences of tokens, not raw strings. The quality of tokenization directly impacts all downstream tasks — poor tokenization means the model receives malformed input. For example, naive whitespace splitting fails on contractions like \"don't\" or hyphenated words like \"state-of-the-art\".",
      keyConceptsTitle: "Types of Tokenization",
      keyConcepts: [
        { term: "Word Tokenization", definition: "Splits text into individual words and punctuation marks." },
        { term: "Sentence Tokenization", definition: "Splits a paragraph into individual sentences using punctuation heuristics." },
        { term: "NLTK word_tokenize", definition: "Handles contractions and edge cases better than Python's split() method." },
        { term: "Subword Tokenization", definition: "Advanced method (BPE, WordPiece) used in transformers — not covered in this repo but worth knowing." },
      ],
      libraryNote: "This module uses NLTK's `word_tokenize` and `sent_tokenize` functions, which require the `punkt` corpus to be downloaded.",
      externalDocs: [
        { label: "NLTK Tokenization Book", url: "https://www.nltk.org/book_1ed/ch03.html" },
        { label: "Tokenization, Stemming & Lemmatization Explained", url: "https://becominghuman.ai/understanding-tokenization-stemming-and-lemmatization-in-nlp-ba7944bb92a0" },
      ],
    },
  },
  {
    slug: "stemming",
    title: "Stemming",
    description: "Reduce words to their root form by chopping off suffixes.",
    estimatedTime: "10 min",
    tags: ["NLTK", "PorterStemmer", "SnowballStemmer"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/stemming.ipynb",
    whatYouLearn: [
      "How stemming reduces vocabulary size",
      "Porter vs Snowball stemmer differences",
      "When stemming hurts more than it helps",
    ],
    doc: {
      overview:
        "Stemming is a rule-based text normalization technique that strips suffixes from words to reduce them to a common root (stem). For example, 'running', 'runs', and 'runner' all reduce to 'run'. It is fast and simple but often produces non-dictionary words.",
      whyItMatters:
        "Stemming reduces vocabulary size, which helps models generalize better on sparse data. However, it is aggressive — 'studies' may stem to 'studi', which is not a real word. For precision-critical tasks, lemmatization is preferred.",
      keyConceptsTitle: "Stemming Algorithms",
      keyConcepts: [
        { term: "Porter Stemmer", definition: "The most widely used English stemmer, applying a series of suffix-stripping rules in phases." },
        { term: "Snowball Stemmer", definition: "An improved version of Porter, also supporting multiple languages." },
        { term: "Lancaster Stemmer", definition: "More aggressive than Porter — faster but produces more truncated stems." },
        { term: "Over-stemming", definition: "When two different words are reduced to the same stem incorrectly, causing loss of meaning." },
      ],
      libraryNote: "This module uses NLTK's `PorterStemmer` and `SnowballStemmer` classes.",
      externalDocs: [
        { label: "Text Preprocessing with NLTK", url: "https://towardsdatascience.com/text-preprocessing-with-nltk-9de5de891658/" },
        { label: "Stemming vs Lemmatization Guide", url: "https://www.goml.io/blog/text-preprocessing-techniques-in-nlptokenization-lemmatization-and-stemming" },
      ],
    },
  },
  {
    slug: "lemmatization",
    title: "Lemmatization",
    description: "Reduce words to their valid dictionary base form using linguistic rules.",
    estimatedTime: "12 min",
    tags: ["NLTK", "spaCy", "WordNetLemmatizer"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/lemmatization.ipynb",
    whatYouLearn: [
      "Difference between stemming and lemmatization",
      "How WordNet is used for linguistically valid lemmas",
      "When to use lemmatization over stemming",
    ],
    doc: {
      overview:
        "Lemmatization reduces words to their base or dictionary form (lemma) using vocabulary and morphological analysis. Unlike stemming, lemmatization always returns a valid word — 'better' → 'good', 'ran' → 'run'. It is slower than stemming but more accurate.",
      whyItMatters:
        "Lemmatization is the preferred normalization technique when semantic accuracy matters. For tasks like sentiment analysis or question answering, returning linguistically valid lemmas ensures the model retains correct meaning.",
      keyConceptsTitle: "Key Concepts",
      keyConcepts: [
        { term: "Lemma", definition: "The canonical, dictionary form of a word (e.g., 'run' is the lemma of 'running', 'ran', 'runs')." },
        { term: "WordNet", definition: "A large lexical database of English, used by NLTK's WordNetLemmatizer to look up base forms." },
        { term: "POS-aware Lemmatization", definition: "Lemmatization is more accurate when the part-of-speech is provided — 'meeting' as a noun vs verb has different lemmas." },
        { term: "Stemming vs Lemmatization", definition: "Stemming is faster and rule-based; lemmatization is slower but linguistically valid." },
      ],
      libraryNote: "This module uses NLTK's `WordNetLemmatizer`, which requires the `wordnet` and `averaged_perceptron_tagger` corpora.",
      externalDocs: [
        { label: "Understanding Tokenization, Stemming, and Lemmatization", url: "https://becominghuman.ai/understanding-tokenization-stemming-and-lemmatization-in-nlp-ba7944bb92a0" },
        { label: "NLTK Comprehensive Guide", url: "https://codefinity.com/blog/A-Comprehensive-Guide-to-Text-Preprocessing-with-NLTK" },
      ],
    },
  },
  {
    slug: "pos-tagging",
    title: "POS Tagging",
    description: "Assign grammatical roles to each token — noun, verb, adjective, and more.",
    estimatedTime: "15 min",
    tags: ["NLTK", "spaCy", "Penn Treebank"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/POS_Tagging.ipynb",
    whatYouLearn: [
      "What POS tags are and why they matter",
      "Penn Treebank tagset used by NLTK",
      "How POS tagging improves lemmatization and parsing",
    ],
    doc: {
      overview:
        "Part-of-Speech (POS) tagging assigns a grammatical label to each token in a sentence — noun (NN), verb (VB), adjective (JJ), etc. It is a core NLP task that feeds into dependency parsing, named entity recognition, and more accurate lemmatization.",
      whyItMatters:
        "POS tags provide context that pure bag-of-words models miss. Knowing that 'book' is a noun vs a verb fundamentally changes its meaning and how a model should handle it. POS tagging is especially critical for information extraction tasks.",
      keyConceptsTitle: "POS Tag Categories",
      keyConcepts: [
        { term: "NN / NNS", definition: "Noun, singular or plural (e.g., 'dog', 'dogs')." },
        { term: "VB / VBG / VBD", definition: "Verb base form, gerund, past tense (e.g., 'run', 'running', 'ran')." },
        { term: "JJ", definition: "Adjective (e.g., 'quick', 'tall')." },
        { term: "Penn Treebank Tagset", definition: "The standard 36-tag POS annotation scheme used by NLTK's pos_tag function." },
      ],
      libraryNote: "This module uses NLTK's `pos_tag` function and optionally spaCy's pipeline for comparison.",
      externalDocs: [
        { label: "POS Tagging with spaCy", url: "https://codesignal.com/learn/courses/building-an-nlp-pipeline-with-spacy-for-token-classification/lessons/understanding-and-implementing-pos-tagging-with-spacy" },
        { label: "NLTK POS Documentation", url: "https://www.nltk.org/book_1ed/ch03.html" },
      ],
    },
  },
  {
    slug: "feature-extraction",
    title: "Feature Extraction",
    description: "Convert text into numerical representations using BoW and TF-IDF.",
    estimatedTime: "18 min",
    tags: ["scikit-learn", "TF-IDF", "BoW", "CountVectorizer"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/feature_extraction...ipynb",
    whatYouLearn: [
      "Bag of Words (BoW) model and its limitations",
      "How TF-IDF addresses BoW's frequency bias",
      "Building a document-term matrix with scikit-learn",
    ],
    doc: {
      overview:
        "Feature extraction transforms text into numerical vectors that machine learning models can process. The two classical approaches are Bag of Words (BoW), which counts word frequencies, and TF-IDF, which weights words by how unique they are across documents.",
      whyItMatters:
        "ML models cannot work with raw strings — feature extraction is the bridge between text and math. Understanding sparse vector representations (BoW/TF-IDF) builds the intuition needed to appreciate why dense embeddings like Word2Vec are more powerful.",
      keyConceptsTitle: "Vectorization Methods",
      keyConcepts: [
        { term: "Bag of Words (BoW)", definition: "Represents text as a vector of word counts, ignoring order and grammar." },
        { term: "TF-IDF", definition: "Term Frequency–Inverse Document Frequency — downweights common words and upweights rare, informative ones." },
        { term: "Document-Term Matrix", definition: "A matrix where rows are documents and columns are vocabulary words, cells contain TF-IDF scores." },
        { term: "Sparsity", definition: "BoW/TF-IDF vectors are mostly zeros since no single document contains all vocabulary words." },
      ],
      libraryNote: "This module uses scikit-learn's `CountVectorizer` and `TfidfVectorizer`.",
      externalDocs: [
        { label: "scikit-learn TfidfVectorizer Docs", url: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html" },
        { label: "Complete NLP Preprocessing Guide", url: "https://dev.to/themustaphatijani/the-complete-guide-to-nlp-text-preprocessing-tokenization-normalization-stemming-lemmatization-" },
      ],
    },
  },
  {
    slug: "word2vec",
    title: "Word Vectorization (Word2Vec)",
    description: "Learn dense word embeddings that capture semantic meaning and relationships.",
    estimatedTime: "20 min",
    tags: ["gensim", "Word2Vec", "embeddings", "IMDB", "Friends"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/word_2_vec.ipynb",
    whatYouLearn: [
      "Why Word2Vec outperforms sparse BoW/TF-IDF vectors",
      "CBOW vs Skip-gram architectures",
      "Training Word2Vec on Friends transcript data",
      "Word similarity and analogy tasks with gensim",
    ],
    doc: {
      overview:
        "Word2Vec is a neural network-based model that learns dense vector representations (embeddings) for words. Unlike BoW, these 100–300 dimensional vectors capture semantic similarity — 'king' and 'queen' are close in vector space because they appear in similar contexts.",
      whyItMatters:
        "Word2Vec was a landmark breakthrough in NLP. Dense embeddings allow models to generalize across semantically similar words, dramatically improving performance on classification, clustering, and similarity tasks compared to sparse BoW vectors.",
      keyConceptsTitle: "Word2Vec Architecture",
      keyConcepts: [
        { term: "CBOW (Continuous Bag of Words)", definition: "Predicts a target word from its surrounding context words." },
        { term: "Skip-gram", definition: "Predicts surrounding context words given a target word — better for rare words." },
        { term: "Embedding Dimension", definition: "The size of each word's vector (typically 100–300). Higher = more expressive but slower." },
        { term: "Cosine Similarity", definition: "Used to measure how semantically close two word vectors are in the embedding space." },
      ],
      libraryNote: "This module uses gensim's `Word2Vec` class. The Friends transcript dataset from this repo is used as the training corpus.",
      externalDocs: [
        { label: "gensim Word2Vec Official Docs", url: "https://radimrehurek.com/gensim/models/word2vec.html" },
        { label: "Word2Vec for Text Classification", url: "https://www.youtube.com/watch?v=P47raNuzAW0" },
      ],
    },
  },
  {
    slug: "text-classification",
    title: "Text Classification",
    description: "Build an end-to-end pipeline to classify text using ML models on the IMDB dataset.",
    estimatedTime: "25 min",
    tags: ["scikit-learn", "IMDB", "Naive Bayes", "Logistic Regression", "pipeline"],
    colabUrl: "https://colab.research.google.com/github/srijanisaDev/NLP-from-scratch/blob/main/text_classification...ipynb",
    whatYouLearn: [
      "Building a full preprocessing → vectorization → classification pipeline",
      "Training Naive Bayes and Logistic Regression on IMDB reviews",
      "Evaluating with accuracy, precision, recall, and F1",
    ],
    doc: {
      overview:
        "Text classification is the task of assigning predefined categories to text. In this module, you build an end-to-end pipeline on the IMDB dataset: preprocess reviews, vectorize with TF-IDF, train a classifier, and evaluate performance — connecting every prior module together.",
      whyItMatters:
        "Classification is the most common applied NLP task — spam detection, sentiment analysis, topic labeling. This module demonstrates how all preprocessing steps compound: better preprocessing → better vectors → better classifier performance.",
      keyConceptsTitle: "Pipeline Components",
      keyConcepts: [
        { term: "Naive Bayes", definition: "A probabilistic classifier that assumes feature independence — fast and strong baseline for text." },
        { term: "Logistic Regression", definition: "A linear model that often outperforms Naive Bayes on TF-IDF features with enough data." },
        { term: "scikit-learn Pipeline", definition: "Chains vectorizer + classifier into one object for clean training and inference." },
        { term: "Evaluation Metrics", definition: "Accuracy, precision, recall, and F1-score — all critical for understanding classifier behavior beyond raw accuracy." },
      ],
      libraryNote: "This module uses scikit-learn's `Pipeline`, `TfidfVectorizer`, `MultinomialNB`, and `LogisticRegression` on the IMDB Dataset.csv from this repo.",
      externalDocs: [
        { label: "scikit-learn Text Classification Guide", url: "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html" },
        { label: "NLTK Classification Docs", url: "https://www.nltk.org/book_1ed/ch06.html" },
      ],
    },
  },
];
