import { StatCard } from "@/components/landing/StatCard";
import React from "react";

const stats = [
  { value: "0.5", label: "vCPU across 3 containers per task" },
  { value: "200 RPS", label: "edge service" },
  { value: "p99 < 40ms", label: "response time on edge service"},
  { value: "Hour 1", label: "product-aimed baseline ready"}
]

export default function Home() {
  return (
      <main>
        <div className="flex items-center gap-12 flex-wrap mb-24">
          {stats.map((stat, index) => (
              <React.Fragment key={stat.value}>
                <StatCard value={stat.value} label={stat.label} />
                {index < stats.length - 1 && (
                    <div className="w-px self-stretch bg-white/10" />
                )}
              </React.Fragment>
          ))}
        </div>
      </main>
  )
}
