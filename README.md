# NLP from Scratch — Interactive Learning Platform

An interactive web application built to showcase and teach core **Natural Language Processing (NLP)** concepts through a structured, hands-on learning path.

Built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui** — deployed on **Vercel**.

🔗 **Live Site:** [your-deployed-url.vercel.app](https://your-deployed-url.vercel.app)  
📓 **Original Notebook Repo:** [github.com/srijanisaDev/NLP-from-scratch](https://github.com/srijanisaDev/NLP-from-scratch)

---

## What This Is

This webapp turns a documented NLP learning repository into an interactive, read-and-learn experience. Each module corresponds to a real Jupyter notebook — with concept documentation, key terms, and the actual rendered notebook output embedded directly in the browser.

---

## Features

- 📖 **8 structured NLP modules** — from text preprocessing to text classification
- 🧪 **Rendered Jupyter notebooks** — real code cells and outputs displayed in-browser
- 🌗 **Dark / Light mode** — toggle with persistent preference
- ✅ **Progress tracker** — mark modules complete, tracked via localStorage
- 🔗 **Run in Colab** — one-click link to run any notebook in Google Colab
- 📚 **Docs page** — curated external documentation for every library used
- 🗂 **Datasets page** — context and details for all 3 datasets used
- 📎 **References page** — all external links aggregated in one place

---

## Learning Path

| # | Module | Key Libraries |
|---|--------|--------------|
| 1 | Text Preprocessing | NLTK, regex |
| 2 | Tokenization | NLTK |
| 3 | Stemming | NLTK |
| 4 | Lemmatization | NLTK, spaCy |
| 5 | POS Tagging | NLTK, spaCy |
| 6 | Feature Extraction | scikit-learn |
| 7 | Word Vectorization (Word2Vec) | gensim |
| 8 | Text Classification | scikit-learn |

---

## Datasets Used

| Dataset | Used In |
|---------|---------|
| IMDB Dataset (`IMDB Dataset.csv`) | Feature Extraction, Text Classification |
| Friends Transcript | Word2Vec |
| Game of Thrones Scripts (`data_GOT/`) | Word2Vec |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Dark/Light Mode | next-themes |
| Markdown Rendering | react-markdown, remark-gfm, rehype-highlight |
| Code Highlighting | highlight.js |
| Notebook Conversion | nbconvert (pre-build script) |
| Deployment | Vercel |

---

## Project Structure

