export const resumeData = {
  basics: {
    name: "Abhishek Singh",
    initials: "AS",
    title: "DevOps Engineer",
    subtitle: "SRE · Platform Engineer · Cloud Infrastructure",
    tagline: "I build infrastructure that doesn't ask for attention — it just works.",
    summary:
      "Nearly 3 years at Lloyds Banking Group designing secure CI/CD systems, automating cloud infrastructure, and owning Kubernetes deployments that kept a production banking platform reliable at scale. I write Python and Bash to automate everything automatable, approach every architecture decision with security baked in from the start, and thrive in high-standard engineering environments where ownership is taken seriously.",
    location: "Hyderabad, India",
    email: "itsabhishek1531@gmail.com",
    phone: "+91 7075791531",
    links: {
      linkedin: "www.linkedin.com/in/abhishek-singh-2b96961a0",
      github: "https://github.com/abhi002shek",
      githubProject: "https://github.com/abhi002shek/3-tier-devsecops-project, https://github.com/abhi002shek/Health-tracker.git",
    },
  },

  topImpact: [
    {
      icon: "shield",
      label: "Security Audit",
      value: "Zero findings",
      context: "Banking-sector security review at Lloyds",
    },
    {
      icon: "zap",
      label: "Deployment Incidents",
      value: "Reduced",
      context: "Via Python deployment verification scripts",
    },
    {
      icon: "infinity",
      label: "Manual Steps",
      value: "Eliminated",
      context: "Commit to production — zero manual handoffs",
    },
  ],

  experience: [
    {
      company: "Lloyds Banking Group",
      role: "DevOps Engineer / Operations Analyst",
      vendor: "Blue Arrow – Vendor | Internal Platform Team",
      location: "Edinburgh, UK",
      dates: "March 2022 – January 2025",
      duration: "2 yrs 10 mos",
      bullets: [
        "Designed and built CI/CD pipelines that automated code integration, testing, containerisation, and deployment across AWS environments — from commit to production with zero manual steps.",
        "Wrote Python-based automation scripts to perform deployment validations, health checks, configuration verification, and environment consistency checks.",
        "Reduced manual deployment steps by automating infrastructure provisioning using Terraform and Ansible.",
        "Containerised applications using Docker and deployed services on Kubernetes (EKS) with rolling update strategies.",
        "Improved deployment reliability by integrating automated test stages and environment validation scripts.",
        "Applied IAM least-privilege principles to secure deployment pipelines and restrict unauthorised access.",
        "Troubleshot pipeline failures, container crashes, and infrastructure misconfigurations independently.",
        "Contributed actively to architecture discussions related to scaling and pipeline optimisation.",
        "Worked closely with developers to standardise branching models and optimise build performance.",
        "Participated in on-call rotations supporting 24x7 production systems.",
        "Authored post-incident reports and blameless RCAs that drove permanent corrective actions.",
        "Built monitoring dashboards using Prometheus and Grafana; tuned alerts to eliminate noise.",
        "Administered Linux (Ubuntu/RHEL) environments daily — scripting, log analysis, network troubleshooting.",
        "Operated across multi-environment setups (Dev, QA, UAT, Production) with environment parity as a first-class concern.",
        "Drove cloud cost optimisation through EC2 right-sizing and EKS node group tuning.",
      ],
      highlights: [
        { label: "CI/CD", detail: "Jenkins + GitHub Actions" },
        { label: "Cloud", detail: "AWS — 10+ services" },
        { label: "Orchestration", detail: "Kubernetes EKS" },
        { label: "IaC", detail: "Terraform + Ansible" },
        { label: "Security", detail: "Passed banking audit" },
        { label: "On-call", detail: "24x7 production" },
      ],
    },
  ],

  achievements: [
    {
      title: "Zero Audit Findings",
      description: "Passed a banking-sector security audit without a single finding — IAM role segregation, secrets management, and automated security gates baked into every pipeline.",
      type: "security",
      icon: "shield-check",
    },
    {
      title: "Deployment Incident Rate — Reduced",
      description: "Built Python-based deployment verification scripts that automatically caught environment drift and misconfiguration after every release. Teams found problems before users did.",
      type: "reliability",
      icon: "trending-down",
    },
    {
      title: "Zero Manual Steps: Commit to Production",
      description: "Designed end-to-end CI/CD pipelines on Jenkins and GitHub Actions. From code commit to production EKS deployment — fully automated, no human handoffs between stages.",
      type: "automation",
      icon: "zap",
    },
    {
      title: "Terraform Module Library",
      description: "Built a reusable Terraform module library that standardised AWS infrastructure provisioning across all environments — eliminated ad-hoc config as a source of incidents and cut new-environment setup time dramatically.",
      type: "infrastructure",
      icon: "layers",
    },
    {
      title: "Monitoring Noise — Eliminated",
      description: "Tuned Prometheus and Grafana alerting pipelines until every alert was tied to a real service degradation. Reduced on-call noise and shortened mean time to resolution for common failure patterns.",
      type: "reliability",
      icon: "bell-off",
    },
    {
      title: "Knowledge Base That Scales Teams",
      description: "Authored incident runbooks and post-mortems detailed enough that junior engineers resolved similar issues independently — repeat escalation volume reduced over time.",
      type: "leadership",
      icon: "book-open",
    },
  ],

  projects: [
    {
      title: "3-Tier Cloud-Native DevSecOps Platform",
      subtitle: "Production-grade, end-to-end cloud platform built from scratch",
      link: "https://github.com/abhi002shek/3-tier-devsecops-project",
      stack: [
        "AWS", "Terraform", "Kubernetes", "Docker", "Helm",
        "Jenkins", "GitHub Actions", "Prometheus", "Grafana",
        "Python FastAPI", "React", "ELK Stack",
      ],
      bullets: [
        "Architected complete AWS infrastructure with Terraform — VPC, EC2, EKS, RDS, S3, IAM, CloudFront, ELB, Lambda, SNS/SQS — zero ClickOps, everything as code.",
        "Built a full CI/CD pipeline using Jenkins and GitHub Actions — Docker image builds, ECR push, Helm chart deployment to EKS, automated health verification, and rollback on failure.",
        "Deployed a 3-tier containerised microservices architecture on Kubernetes with rolling updates, HPA auto-scaling, liveness/readiness probes, and Helm-managed releases.",
        "Implemented full observability stack: Prometheus metrics, Grafana dashboards with SLI/SLO tracking, Alertmanager, CloudWatch, and ELK/OpenSearch for log aggregation.",
        "Built a Python FastAPI backend and React front-end deployed as containerised microservices through the CI/CD pipeline.",
        "Applied DevSecOps throughout: IAM scoped permissions, Kubernetes RBAC, secrets isolation, and automated security scanning in the pipeline.",
        "Wrote full documentation suite: runbooks, SOPs, architecture docs, and troubleshooting playbooks.",
      ],
    },
  ],

  skills: [
    {
      category: "Cloud Platforms",
      items: [
        "AWS — EC2, EKS, ECS, ECR, RDS, S3, VPC, IAM, ALB/ELB, CloudFront, API Gateway, Lambda, SNS, SQS, CloudWatch, Secrets Manager, Route 53, OpenSearch",
        "Azure — core services and cloud operations concepts",
        "GCP — familiarity with core compute, storage, and networking",
      ],
    },
    {
      category: "CI/CD & GitOps",
      items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "GitOps principles"],
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform (module authoring, remote state, workspaces)", "Ansible", "CloudFormation"],
    },
    {
      category: "Containers & Orchestration",
      items: ["Docker (multi-stage builds, docker-compose)", "Kubernetes / EKS (production)", "Helm chart authoring", "RBAC & network policies"],
    },
    {
      category: "Observability",
      items: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "ELK / OpenSearch / Kibana", "Datadog / New Relic (concepts)", "OpenTelemetry"],
    },
    {
      category: "Scripting & Programming",
      items: ["Python (automation, FastAPI, validators, health checks)", "Bash / Shell", "PowerShell (basics)"],
    },
    {
      category: "Linux & Networking",
      items: ["Ubuntu, RHEL — system administration", "TCP/IP, DNS, HTTP/HTTPS", "Nginx reverse proxy", "VPC design, security groups, NACLs", "Linux packaging — apt/deb, yum/rpm"],
    },
    {
      category: "SRE Practices",
      items: ["SLI / SLO / Error budget definition", "Blameless RCA & post-mortems", "On-call incident response", "MTTD / MTTR reduction", "Toil elimination & automation", "Runbook authoring"],
    },
    {
      category: "Security",
      items: ["IAM least-privilege", "Kubernetes RBAC", "Secrets management", "Automated security gates in CI", "DevSecOps practices", "Compliance-aware architecture"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch / OpenSearch"],
    },
    {
      category: "Process & Collaboration",
      items: ["Agile / Scrum", "Jira", "Git branching strategy", "Code review", "Technical documentation"],
    },
    {
      category: "Languages",
      items: ["English — professional fluency", "Hindi — fluent"],
    },
  ],

  education: [
    {
      degree: "MBA — Finance & Leadership Practice",
      institution: "Edinburgh Napier University",
      location: "United Kingdom",
      dates: "2020 – 2022",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      status: "In progress — exam scheduled",
      icon: "aws",
    },
    {
      name: "Scrum with JIRA for Software Development",
      status: "Certified",
      icon: "jira",
    },
  ],

  targetRoles: [
    "DevOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Platform Engineer",
    "Cloud Infrastructure Engineer",
    "DevSecOps Engineer",
    "Production Operations Analyst",
  ],

  availability: {
    status: "Available immediately",
    location: "Hyderabad (primary)",
    openTo: ["Bangalore", "Noida", "Remote / Hybrid"],
  },
};
