import React from "react"
import { StatCard, StatCardProps } from "@/components/landing/StatCard"
import { FeatureCard } from "@/components/landing/FeatureCard"

const stats: StatCardProps[] = [
  { name: "vCPU", start: 4, end: 0.5, suffix: " vCPU", label: "single task, 3 containers" },
  { name: "RPS", start: 10, end: 200, suffix: " RPS", label: "sustained load, scalable" },
  {
    name: "P99",
    start: 200,
    end: 40,
    prefix: "p99 < ",
    suffix: " ms",
    minWidth: "202px",
    label: "final response times",
  },
  {
    name: "TimeToDeploy",
    start: 24,
    end: 1,
    prefix: "Hour ",
    label: "production-baseline",
    hideDivider: true,
  },
]

export default function Home() {
  return (
    <main className="pt-[140px] pb-[100px] max-w-[1100px] mx-auto px-12">
      <div className="inline-flex items-center gap-2 bg-[#7F77DD]/[0.12] border-[0.5px] border-[#7F77DD]/30 rounded-full px-[14px] py-[6px] text-[12px] font-medium text-[#AFA9EC] tracking-[0.5px] uppercase mb-8">
        <div className="w-[6px] h-[6px] rounded-full bg-[#7F77DD] animate-pulse" />
        Production-grade · Day 1 ready
      </div>
      <h1 className="font-display font-extrabold text-[clamp(42px,6vw,72px)] leading-[1.05] tracking-[-2px] text-[#E8E6E0] mb-7 max-w-[800px]">
        Distributed systems
        <br />
        that <em className="not-italic text-[#7F77DD]">just work</em>
        <br />
        at any scale.
      </h1>
      <p className="text-[18px] font-light leading-[1.7] text-[#E8E6E0]/55 max-w-[560px] mb-12">
        Concept: A plug-and-play backend platform built for 0→1 startups. Scaleable, observable,
        resilient infrastructure — exercised under real load, not just diagrammed.
      </p>
      <div className="flex items-center gap-12 flex-wrap mb-24">
        {stats.map((stat, index) => (
          <StatCard key={stat.name} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/6 rounded-xl overflow-hidden mb-24">
        <FeatureCard
          icon="🏗"
          title="AWS CDK Typescript"
          description="Portable, standardized, seamless IaC. API GW -> VPC Link -> VPC. ELB -> CICD."
        />
        <FeatureCard
          icon="⚡"
          title="Spring Boot 4 Microservices"
          description="Java 25, Project loom virtual threads. Hexagonal Port Layering, DDD. Backpressure handling."
        />
        <FeatureCard
          icon="🛡️"
          title="Resiliency"
          description="Resilience4j Circuitbreakers, Bulkheads, Timeouts, Backpressure."
        />
        <FeatureCard
          icon="🔭"
          title="Full observability stack"
          description="OpenTelemtry, X-Ray, Cloudwatch, Prometheus, Grafana. Every request traced end to end. Standardized logs and graphs."
        />
        <FeatureCard
          icon="🔐"
          title="Auth out of the box"
          description="Cognito User Pool with OAuth2 flow. API Gateway routes wired with authorizers, rate limiting per route"
        />
        <FeatureCard
          icon="📊"
          title="Real load test data end-to-end"
          description="K6 synthetic traffic load testing end-to-end. 200+ RPS | P99 < 40ms 65% | 0.5 vCPU, 3 containers per single task."
        />
      </div>
    </main>
  )
}
