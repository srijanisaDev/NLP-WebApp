"use client";
import { modules } from "@/lib/modules";
import { getProgress } from "@/lib/progress";
import ModuleCard from "@/components/ModuleCard";
import { useEffect, useState } from "react";

export default function LearnPage() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => { setCompleted(getProgress()); }, []);

  const pct = Math.round((completed.length / modules.length) * 100);

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Learning Path</h1>
        <p className="text-muted-foreground">Work through all 8 modules in order for the best experience.</p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{completed.length} / {modules.length} completed</span>
          <span className="font-semibold">{pct}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-3">
        {modules.map((mod, i) => (
          <ModuleCard key={mod.slug} module={mod} index={i} completed={completed.includes(mod.slug)} />
        ))}
      </div>
    </div>
  );
}
