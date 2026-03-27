import React from "react";
import { StatCard } from "@/components/landing/StatCard";
import { FeatureCard } from "@/components/landing/FeatureCard";

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
        <div className="grid grid-cols-3 gap-px bg-white/6 rounded-xl overflow-hidden mb-24">
          <FeatureCard icon="🏗" title="AWS CDK Typescript" description="Portable, standardized, seamless IaC. API GW -> VPC Link -> VPC. ELB -> CICD." />
          <FeatureCard icon="⚡" title="Spring Boot 4 Microservices" description="Java 25, Project loom virtual threads. Hexagonal Port Layering, DDD. Backpressure handling." />
          <FeatureCard icon="🛡️" title="Resiliency" description="Resilience4j Circuitbreakers, Bulkheads, Timeouts, Backpressure handling with ease." />
          <FeatureCard icon="🔭" title="Full observability stack" description="OpenTelemtry, X-Ray, Cloudwatch, Prometheus, Grafana. Every request traced end to end. Standardized logs and graphs." />
          <FeatureCard icon="🔐" title="Auth out of the box" description="Cognito User Pool with OAuth2 flow. API Gateway routes wired with authorizers, rate limiting per route" />
          <FeatureCard icon="📊" title="Real load test data end-to-end" description="K6 synthetic traffic load testing end-to-end. 200+ RPS, 65% of 0.5 vCPU, shared between 3 containers (app, adot, envoy) per single AZ deployed task at the edge service (concurrent calls to downstreams and their DBs). Squeezing performance from the cheapest resources." />
        </div>
      </main>
  )
}
