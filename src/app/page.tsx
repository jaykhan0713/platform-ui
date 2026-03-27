import React from "react"
import { StatCard, StatCardProps } from "@/components/landing/StatCard"
import { FeatureCard } from "@/components/landing/FeatureCard"

const stats: StatCardProps[] = [
  { name: "vCPU", start: 4, end: 0.5, suffix: " vCPU", label: "vCPU across 3 containers" },
  { name: "RPS", start: 10, end: 200, suffix: "+ RPS", label: "sustained load, scalable" },
  {
    name: "P99",
    start: 200,
    end: 40,
    prefix: "p99 < ",
    suffix: "ms",
    label: "async response time",
  },
  { name: "TimeToDeploy", start: 24, end: 1, prefix: "Hour ", label: "production-ready baseline" },
]

export default function Home() {
  return (
    <main className="pt-[140px] pb-[100px] max-w-[1100px] mx-auto px-12">
      <div className="flex items-center gap-12 flex-wrap mb-24">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.name}>
            <StatCard {...stat} />
            {index < stats.length - 1 && <div className="w-px self-stretch bg-white/10" />}
          </React.Fragment>
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
