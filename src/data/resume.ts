export const personalInfo = {
  name: "Akshat Gaur",
  title: "Software Engineer",
  location: "Bangalore, India",
  email: "gaurakshat1008@gmail.com",
  phone: "+91 8451877878",
  github: "https://github.com/GaurAkshat1008",
  linkedin: "https://www.linkedin.com/in/akshat-gaur-2b1973217/",
  tagline: "Building scalable distributed systems & real-time data pipelines",
  bio: "Software Engineer with 2 years of experience building high-throughput microservices, event-driven data pipelines, and scalable backend systems. Passionate about distributed architecture, system design, and writing clean, performant code.",
};

export const experience = [
  {
    company: "SupplyNote",
    role: "Software Engineer",
    period: "Aug 2024 – Present",
    description: "Supply Chain Solution for F&B Businesses",
    highlights: [
      "Architected a real-time event-driven data pipeline using Kafka and Python to stream operational data from MongoDB into ClickHouse, enabling analytics workloads.",
      "Reduced report generation time from 90 min to under 10 min (~90% improvement) over 10M+ records through optimized columnar storage queries.",
      "Designed a scalable Python microservice processing 10,000 POS transactions per minute, offloading billing traffic from the monolith.",
      "Implemented Redis-based distributed locking for idempotent bill processing, eliminating 100% of duplicate transaction corruption.",
      "Built async ingestion pipeline using Python worker processes to normalize and transfer POS data into core services.",
      "Led end-to-end integration of purchasing module with Hyperpure ordering API for B2B procurement workflows.",
    ],
  },
  {
    company: "UniStack",
    role: "Software Engineer",
    period: "Nov 2023 – Aug 2024",
    description: "Plug n Play ONDC Infrastructure for Brands and Enterprises",
    highlights: [
      "Developed the BuyerApp backend and protocol adapter for ONDC open commerce protocol integration.",
      "Improved catalogue ingestion reliability with RabbitMQ async task queues processing data from 1000+ sellers.",
      "Contributed to open commerce integration layer enabling decentralized marketplace interactions.",
      "Designed and developed a ticketing system protocol and web interface for issue tracking across ecosystem participants.",
      "Built a Node.js connector integrating seller apps with logistics buyer services for dynamic pricing and shipment tracking.",
    ],
  },
];

export const projects = [
  {
    title: "Risk Decisioning Platform",
    tech: ["Go", "gRPC", "Kafka", "Redis", "PostgreSQL", "OpenTelemetry", "Keycloak"],
    description:
      "Multi-tenant real-time risk decisioning platform using Go microservices, gRPC communication, and Kafka event streaming.",
    highlights: [
      "Implemented Identity Access Service with OIDC/JWT validation, RBAC authorization, and tenant isolation.",
      "Integrated OpenTelemetry distributed tracing, Prometheus metrics, and Kafka-based auth event publishing.",
    ],
    github: "https://github.com/GaurAkshat1008/risk-platform",
    status: "Ongoing",
  },
];

export const skills = {
  Languages: ["C++", "Go", "TypeScript", "Python", "SQL"],
  "Frameworks & Libraries": ["Node.js", "React.js", "Next.js", "Express.js"],
  "Databases & Caching": ["PostgreSQL", "MongoDB", "ClickHouse", "Redis", "ElasticSearch"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "OpenTelemetry", "Prometheus", "Jaeger"],
  "Security & Auth": ["OAuth2", "OIDC", "JWT", "RBAC", "Keycloak"],
  "Architectural Design": [
    "Microservices",
    "Multi-tenant Systems",
    "LLD",
    "API Design",
    "Distributed Tracing",
  ],
  "Developer Tools": ["Git", "Kafka", "RabbitMQ", "Protocol Buffers", "Postman"],
};

export const education = {
  institution: "Indian Institute of Information Technology, Surat",
  degree: "Bachelor of Technology in Information Technology",
  cgpa: "8.84",
  year: "2024",
  location: "Gujarat, India",
};
