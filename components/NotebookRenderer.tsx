"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function NotebookRenderer({ content }: { content: string }) {
  return (
    <div className="notebook-content prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({ className, children, ...props }) {
            const isInline = !className;
            return isInline ? (
              <code
                className="bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={`${className} text-sm`} {...props}>
                {children}
              </code>
            );
          },
          pre({ children, ...props }) {
            return (
              <pre
                className="bg-zinc-950 border border-border rounded-lg p-4 overflow-x-auto text-sm my-4"
                {...props}
              >
                {children}
              </pre>
            );
          },
          img({ src, alt }) {
            return (
              <img
                src={src}
                alt={alt ?? "notebook output"}
                className="rounded-lg border border-border my-4 max-w-full"
              />
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse text-sm">{children}</table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="border border-border px-3 py-2 bg-secondary text-left font-semibold text-xs uppercase tracking-wider">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="border border-border px-3 py-2 text-muted-foreground">
                {children}
              </td>
            );
          },
          h1({ children }) {
            return <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>;
          },
          h2({ children }) {
            return <h2 className="text-xl font-semibold mt-6 mb-3">{children}</h2>;
          },
          h3({ children }) {
            return <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>;
          },
          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-primary/40 pl-4 text-muted-foreground italic my-4">
                {children}
              </blockquote>
            );
          },
        }}
      />
    </div>
  );
}
