export const SITE_TITLE = "Arvind Sagar";
export const SITE_DESCRIPTION =
  "Backend engineer focused on systems, performance, and infrastructure.";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const HIGHLIGHTS = [
  "Rust-first backend engineer",
  "Built and shipped ML-enabled SaaS at BugFlows",
  "Designed scalable backend and infrastructure systems",
  "Hands-on with distributed systems and performance optimization",
] as const;

export const FEATURED_PROJECTS = [
  {
    title: "OccluMap",
    label: "Freelance / Contractor",
    summary: "Backend and infrastructure for a dental imaging platform.",
    bullets: [
      "Rust backend with a separate Python inference service",
      "Serverless ML execution on RunPod with Cloudflare R2 and PostgreSQL",
      "Tauri desktop integration designed around architecture and infrastructure ownership",
    ],
  },
  {
    title: "BugFlows",
    label: "Startup / Co-founder",
    summary: "ML-powered bug triaging system for engineering teams.",
    bullets: [
      "Reduced resolution time by up to 70%",
      "Processed 100K+ defects with integrations across GitHub, Jira, and Bugzilla",
      "Owned system architecture, backend services, and execution across a small team",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "OccluMap",
    description: "Backend and infrastructure for a dental imaging platform.",
    stack: [
      "Rust",
      "Python",
      "PostgreSQL",
      "Cloudflare R2",
      "RunPod",
      "Railway",
      "Tauri",
    ],
    contributions: [
      "Designed the backend architecture and service boundaries",
      "Built the Rust API server and core data flow",
      "Integrated the ML pipeline with autoscaling serverless compute",
      "Managed storage design and inference handoff across services",
    ],
    depth: [
      "Separated the API layer from the inference layer so the product could scale ML workloads independently of standard request traffic.",
      "Balanced latency and cost by using serverless compute for inference-heavy paths instead of keeping expensive workers warm all the time.",
      "Designed the storage and data flow around large imaging assets, persistent metadata, and desktop-driven workflows.",
    ],
  },
  {
    title: "BugFlows",
    description: "ML-powered SaaS platform for automated bug triaging.",
    stack: ["Rust", "Axum", "Tokio", "Django", "PostgreSQL", "AWS", "GCP", "Docker"],
    contributions: [
      "Designed the system architecture and backend service layout",
      "Built backend services in Rust for performance-critical paths",
      "Implemented integrations with GitHub, Jira, and Bugzilla",
      "Led a team of 4 engineers while shipping the product",
    ],
    depth: [
      "Handled large defect datasets at 100K+ scale with a fast training and prediction loop.",
      "Focused on API reliability and predictable performance as integrations and dataset size increased.",
      "Built the system with enough flexibility to support both product delivery and ongoing model iteration.",
    ],
  },
  {
    title: "Internal Tools @ Cognizant",
    description: "High-performance internal tools and enterprise applications.",
    stack: ["C#", "WPF", "Access DB", "Enterprise APIs"],
    contributions: [
      "Improved API performance by 30 to 50% on production systems",
      "Built a WPF tool adopted by 15,000+ users",
      "Developed highly optimized Access database applications under real enterprise constraints",
    ],
    depth: [
      "Worked on performance optimization where large datasets and slow workflows had direct operational impact.",
      "Focused on practical efficiency gains rather than theoretical polish, improving responsiveness inside real production environments.",
      "Learned to work within enterprise constraints while still pushing for better system behavior and maintainability.",
    ],
  },
] as const;

export const SYSTEM_NOTES = [
  {
    title: "Building a Thread Pool in Rust",
    context:
      "A way to understand scheduling and ownership instead of treating concurrency as a black box.",
    problem:
      "High-level concurrency abstractions are useful, but they can hide how work is actually queued, executed, and shut down safely.",
    approach:
      "Implement a small thread pool from first principles, define the worker lifecycle, and reason about channels, backpressure, and shutdown paths.",
    tradeoffs:
      "A custom implementation teaches scheduling mechanics well, but it also exposes how easy it is to get error handling and teardown wrong.",
    takeaways:
      "The value is not the thread pool itself. The value is learning how execution models affect latency, contention, and ownership boundaries.",
  },
  {
    title: "Understanding Async Runtimes",
    context:
      "Most backend work depends on async execution, but many engineers never inspect how runtimes behave under load.",
    problem:
      "It is easy to use Tokio productively without understanding task scheduling, wakeups, fairness, or where overhead comes from.",
    approach:
      "Compare runtime behavior conceptually, inspect task flow, and map the cost of convenience abstractions to real execution behavior.",
    tradeoffs:
      "Managed runtimes accelerate delivery, but they can make performance bottlenecks harder to reason about when the system grows.",
    takeaways:
      "Understanding the runtime makes it easier to choose better boundaries, isolate blocking work, and design more predictable services.",
  },
  {
    title: "Designing Backend Systems for ML Workloads",
    context:
      "ML-backed products create a different set of infrastructure pressures than standard request-response APIs.",
    problem:
      "Inference is expensive, bursty, and often constrained by latency, model size, or GPU availability.",
    approach:
      "Separate API and inference concerns, treat the model-serving path as a specialized subsystem, and optimize around queuing, storage, and cost.",
    tradeoffs:
      "The cleanest architecture is not always the cheapest one, and the cheapest one is not always good enough for user-facing latency.",
    takeaways:
      "A good ML backend is mostly a systems design problem: cost control, workload isolation, and reliable movement of data through the pipeline.",
  },
] as const;

export const CURRENTLY_EXPLORING = [
  "Async runtimes and schedulers",
  "Memory allocation strategies",
  "High-performance backend systems",
] as const;
