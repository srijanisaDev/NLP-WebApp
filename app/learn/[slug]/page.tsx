import { modules } from "@/lib/modules";
import { notFound } from "next/navigation";
import { getNotebookContent } from "@/lib/notebooks";
import ModuleClient from "./ModuleClient";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const idx = modules.findIndex((m) => m.slug === slug);
  if (idx === -1) notFound();

  const content = getNotebookContent(slug);
  return <ModuleClient slug={slug} notebookContent={content} />;
}
