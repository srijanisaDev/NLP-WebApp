const PROGRESS_KEY = "nlp_progress";

export function getProgress(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(PROGRESS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function markComplete(slug: string): void {
  const current = getProgress();
  if (!current.includes(slug)) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...current, slug]));
  }
}

export function markIncomplete(slug: string): void {
  const current = getProgress();
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(current.filter((s) => s !== slug)));
}

export function isComplete(slug: string): boolean {
  return getProgress().includes(slug);
}
