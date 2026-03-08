import fs from "fs";
import path from "path";

export function getNotebookContent(slug: string): string {
  const filePath = path.join(process.cwd(), "content", "notebooks", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return "*Notebook content coming soon.*";
  }
  return fs.readFileSync(filePath, "utf-8");
}
