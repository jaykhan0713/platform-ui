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
    suffix: " ms",
    minWidth: "202px",
    label: "P99 final response",
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
    <main className="pt-[100px] md:pt-[140px] pb-[100px] max-w-[1100px] mx-auto px-4 md:px-12">
      <Nav />
      <div className="inline-flex items-center gap-2 bg-[#7F77DD]/[0.12] border-[0.5px] border-[#7F77DD]/30 rounded-full px-[14px] py-[6px] text-[12px] font-medium text-[#AFA9EC] tracking-[0.5px] uppercase mb-8">
        <div className="w-2 h-2 rounded-full bg-[#7F77DD] animate-pulse" />
        Production-grade · Day 1 ready
      </div>
      <h1
        className="font-display font-extrabold leading-[1.05] tracking-[-2px] text-[#E8E6E0] mb-7 max-w-[800px]"
        style={{ fontSize: "clamp(32px, 8vw, 72px)" }}
      >
        Distributed systems
        <br />
        that <em className="not-italic text-[#7F77DD]">just work</em>
        <br />
        at scale.
      </h1>
      <p
        className="leading-[1.5] md:leading-[1.7] text-[#E8E6E0]/55 max-w-[560px] mb-8 md:mb-12"
        style={{ fontSize: "clamp(11px, 3.8vw, 18px)" }}
      >
        A plug-and-play backend platform built for 0→1 startups. Scalable, secure, observable,
        resilient infrastructure. Exercised under real load.
      </p>
      <div className="flex items-center flex-wrap gap-x-8 gap-y-6 md:gap-12 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={stat.name} {...stat} />
        ))}
      </div>
      <p className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#E8E6E0]/30 mb-6">
        What&#39;s included
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6 rounded-xl overflow-hidden mb-24">
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
          icon="🔐"
          title="Security"
          description="Route53 custom domain at Gateway. TLS termination at both GW and ALB. Services on VPC private subnets with VPCE. Scoped Security groups. Least-privilege IAM."
        />
        <FeatureCard
          icon="🛡️"
          title="Resiliency"
          description="Resilience4j Circuitbreakers, Bulkheads, Timeouts, Backpressure."
        />
        <FeatureCard
          icon="🔭"
          title="Observability"
          description="OpenTelemtry, X-Ray, Cloudwatch, Prometheus, Grafana. Every request traced end to end. Standardized logs and graphs."
        />
        <FeatureCard
          icon="🪪"
          title="Auth"
          description="Cognito User Pool with OAuth2 flow. API Gateway routes wired with authorizers, rate limiting per route."
        />
        <FeatureCard
          icon="🚀"
          title="CICD"
          description="Automatic no-hassle setup. CodePipelines generated for services, DTO publishing. S3, ECR, CodeArtiact, CDK deploy wired. Github actions with Jacoco + SonarCloud gates. "
        />
        <FeatureCard
          icon="✦"
          title="Full-stack"
          description="NextJS deployed on vercel. Login using AWS Amplify. Cgnito + OAuth2 OIDC + secure HttpOnly tokens. Demonstrates Plug-and-play business usecase."
        />
        <FeatureCard
          icon="📊"
          title="Load tests end-to-end"
          description="K6 synthetic traffic load testing starting at Gateway w/ Auth. 200+ RPS. P99 < 30ms sustained traffic at edge. 65% of 0.5 vCPU utilization. 3 containers (app, adot, envoy), 1 task per service."
        />
      </div>
      <p className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#E8E6E0]/30 mb-6">
        Explore the source
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
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
          description="Jay Khan · Former Software Engineer III at Expedia Group, Flights team · 7+ years · Backend Distributed Systems · Cloud Infra · Full-Stack"
          link="https://www.linkedin.com/in/jay-khan-458b3a132/"
        />
        <SourceCard
          title="Platform UI"
          icon="⚛️"
          description="ReactJS · NextJS · Vercel"
          link="https://github.com/jaykhan0713/platform-ui"
        />
      </div>
      <footer className="border-t border-white/[0.06] py-8 px-4 md:px-12 max-w-[1100px] mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <span className="text-[13px] text-[#E8E6E0]/30">
          Built by <span className="text-[#7F77DD]/80">Jay Khan</span>
        </span>
        <span className="text-[12px] text-[#E8E6E0]/20">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8E6E0]/40 hover:text-[#E8E6E0]/60 transition-colors"
          >
            Next.js
          </a>
        </span>
      </footer>
    </main>
  )
}
