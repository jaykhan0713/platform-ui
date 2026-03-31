# platform-ui

Frontend for the jay.platform portfolio project. Deployed at [jay-platform.com](https://jay-platform.com).

This repo serves to showcase frontend development, and and demonstrate the business plug-and-play of the end-to-end business use-case
plug-and-play distributed systems.

Backend infrastructure and services live in separate repos:
- [platform-aws-cdk](https://github.com/jaykhan0713/platform-aws-cdk) — CDK TypeScript, ECS Fargate, RDS, Cognito, Service Connect
- [platform-service](https://github.com/jaykhan0713/platform-service) — Spring Boot 4 base template, Java 25, virtual threads, hexagonal architecture

## Stack

- Next.js 16 / React 19
- Tailwind CSS v4
- TypeScript
- AWS Amplify (auth)
- Deployed to Vercel

## Structure
```
src/
  app/          # App Router pages (landing, demo, login)
  components/
    landing/    # Nav, FeatureCard, StatCard, SourceCard
    auth/       # Auth-gated components
  config/       # Environment and API config
```

## Running locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Auth

The `/demo` route is protected via Cognito OIDC. The landing page is fully public. Auth is handled through AWS Amplify's `signIn()` — no hosted UI redirect.