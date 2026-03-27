import React from "react"
import { StatCard, StatCardProps } from "@/components/landing/StatCard"
import { FeatureCard } from "@/components/landing/FeatureCard"
import { Nav } from "@/components/landing/Nav"
import { SourceCard } from "@/components/landing/SourceCard"

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
      <Nav />
      <div className="inline-flex items-center gap-2 bg-[#7F77DD]/[0.12] border-[0.5px] border-[#7F77DD]/30 rounded-full px-[14px] py-[6px] text-[12px] font-medium text-[#AFA9EC] tracking-[0.5px] uppercase mb-8">
        <div className="w-2 h-2 rounded-full bg-[#7F77DD] animate-pulse" />
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
        <strong>Concept:</strong> A plug-and-play backend platform built for 0→1 startups. Scalable,
        secure, observable, resilient infrastructure. Exercised under real load, not just
        diagrammed.
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
      <p className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#E8E6E0]/30 mb-6">
        Explore the source
      </p>
      <div className="grid grid-cols-2 gap-4 mb-20">
        <SourceCard
          title="AWS CDK IaC Platform"
          icon="🏛"
          description="End-to-End portable AWS stack with boundaries. Gateway · Network · Runtime · Services · Data · Observability · CICD · Load Test"
          link="https://github.com/jaykhan0713/platform-aws-cdk/blob/main/README.md"
        />
        <SourceCard
          title="Platform Microservice Baseline"
          icon="🌱"
          description="Spring Boot 4 · Java 25 · Virtual Threads · Tomcat · Hexagonal · Reslience4j "
          link="https://github.com/jaykhan0713/platform-service/blob/main/README.md"
        />
        <SourceCard
          title="LinkedIn"
          icon="👤"
          description="Jay Khan · Former Software Engineer III at Expedia Group, Flights team · 6+ years · Backend Distributed Systems · Cloud Infra · Full-Stack"
          link="https://www.linkedin.com/in/jay-khan-458b3a132/"
        />
        <SourceCard
          title="Platform UI"
          icon="⚛️"
          description="ReactJS · NextJS · Vercel"
          link="https://github.com/jaykhan0713/platform-ui"
        />
      </div>
    </main>
  )
}
