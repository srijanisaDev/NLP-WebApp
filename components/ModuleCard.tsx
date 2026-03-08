"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Module } from "@/lib/modules";

interface Props {
  module: Module;
  index: number;
  completed: boolean;
}

export default function ModuleCard({ module, index, completed }: Props) {
  return (
    <Link href={`/learn/${module.slug}`}
      className="group flex items-start gap-4 p-5 border border-border rounded-lg hover:border-primary/50 hover:bg-accent/30 transition-all">
      <div className="flex-shrink-0 mt-0.5">
        {completed
          ? <CheckCircle2 className="w-5 h-5 text-green-500" />
          : <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />}
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
          <h3 className="font-semibold group-hover:text-primary transition-colors">{module.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{module.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {module.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
          <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
            <Clock className="w-3 h-3" />{module.estimatedTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
