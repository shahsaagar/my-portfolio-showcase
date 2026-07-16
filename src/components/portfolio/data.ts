export const profile = {
  name: "Sagar Shah",
  credentials: "MS, PMP",
  title: "Lead Technical Program Manager",
  tagline: "SAFe Agile Hybrid Delivery · Multi-Release Coordination",
  location: "Pune, India",
  email: "shahsagar0@gmail.com",
  phone: "+91-70307-45678",
  status: "I-140 Approved",
  linkedin: "#", // TODO: replace with your LinkedIn URL
  github: "https://github.com/shahsaagar",
  resumeUrl: "/Sagar_Shah_Resume.pdf",
  summary:
    "Lead Technical Program Manager with 19+ years of experience orchestrating complex, multi-team Agile and hybrid delivery programs in fast-paced, regulated environments. Proven ability to scale organizational revenue, optimize infrastructure efficiency, and govern multi-million-dollar initiatives by seamlessly aligning Product Management, enterprise engineering, and shared services teams. Advanced Jira practitioner with a deep portfolio of delivery certifications, specialized in data-driven earned value analysis and continuous process optimization.",
};

export const certifications = ["PMP", "PMI-ACP", "CSM", "SAFe Practitioner", "ITIL"];

export const achievements = [
  { value: "$15M", label: "Enterprise MCP program delivered", sub: "98% budget adherence" },
  { value: "20%", label: "Infrastructure cost reduction", sub: "AWS cloud modernization" },
  { value: "30%", label: "Platform performance improvement", sub: "Cross-functional delivery" },
  { value: "40%", label: "Batch processing acceleration", sub: "Distributed onshore/offshore" },
  { value: "$2M → $3.2M", label: "Top-line revenue scaled", sub: "Structured financial reporting" },
  { value: "50+", label: "Cross-functional team members", sub: "Governed across workstreams" },
];

export type Role = {
  company: string;
  title: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Persistent Systems Limited",
    title: "Sr. Program Manager",
    location: "Pune, India",
    period: "Dec 2021 – Present",
    bullets: [
      "Delivered a $15M enterprise Managed Care Platform (MCP) transformation program, achieving 98% budget adherence and modernizing legacy CareTech processes by coordinating integrated case management, referral, and billing capabilities across multiple Agile delivery workstreams.",
      "Governed the strategic integration of enterprise platforms with PeopleSoft Finance, driving cross-functional teams of 50+ members to improve financial data accuracy and reconciliation across P2P, O2C, and General Ledger streams.",
      "Optimized infrastructure efficiency and drove platform deployments, reducing infrastructure costs by 20% and improving platform performance by 30%, by directing cross-functional teams across Product, Engineering, and Business Operations during AWS cloud modernization workstreams.",
      "Streamlined operational and financial workflows, increasing engineering productivity by 15% and reducing production incidents by 20%, by orchestrating complex enterprise integrations with RMA, PeopleSoft, and DataMart systems while implementing data-driven Jira dashboards.",
      "Established executive governance frameworks, risk management protocols, and release-planning strategies with senior stakeholders — averting critical release delays and reducing programmatic risk.",
    ],
  },
  {
    company: "London School of Digital Business",
    title: "Chief Projects Officer",
    period: "May 2021 – Dec 2021",
    bullets: [
      "Scaled organizational revenue from $2M to $3.2M by executing structured financial reporting and coordinating concurrent program releases across multiple cross-functional teams.",
      "Drove data-driven executive decision-making, maintaining 100% visibility on program health, by developing comprehensive delivery dashboards and robust RAID logs.",
    ],
  },
  {
    company: "AtoS-Syntel Inc.",
    title: "Senior Project / Delivery Manager — Ameriprise Auto & Home Insurance / AmFam",
    period: "July 2013 – May 2021",
    bullets: [
      "Restored client delivery performance to an 'A' rating, significantly reducing delivery bottlenecks, by facilitating Agile release trains, backlog prioritization, and rigorous cross-team dependency management.",
      "Managed multiple enterprise software initiatives and large-scale AWS cloud migrations, implementing automated DevOps pipelines, CI/CD deployment processes, and cross-functional engineering coordination.",
      "Accelerated system efficiency, improving batch processing performance by 40%, by executing data-driven workflow analysis and earned value tracking across distributed onshore/offshore teams.",
      "Maintained strict programmatic alignment with executive timelines via Jira and Adobe Workfront, managing WBS, Gantt charts, and burndown charts throughout execution.",
    ],
  },
  {
    company: "Larsen & Toubro Infotech Ltd.",
    title: "Project Manager — Business Insurance, Travelers, US",
    period: "Feb 2010 – July 2013",
    bullets: [
      "Ensured seamless ICD-10 implementation, meeting strict regulatory release timelines, by acting as Product Owner, driving backlog refinement, and tracking velocity metrics.",
      "Led execution across multiple concurrent workstreams and insurance platform modernization programs, developing comprehensive WBS, RAID logs, and smooth legacy system transition onboarding.",
    ],
  },
  {
    company: "Macro Technologies",
    title: "Business Analyst — Regence BCBS, OR",
    period: "Oct 2008 – Feb 2010",
    bullets: [
      "Facilitated healthcare regulatory compliance and platform upgrades, successfully guiding HIPAA 5010 and Facets platform readiness while supporting Salesforce sales optimization initiatives.",
    ],
  },
  {
    company: "Siemens Healthcare",
    title: "Business Analyst",
    location: "Illinois, US",
    period: "Jul 2008 – Oct 2008",
    bullets: [
      "Accelerated deployment of the Syngo Imaging platform by translating ambiguous stakeholder needs into rigorous functional specifications and operational requirements.",
    ],
  },
  {
    company: "University of Central Florida",
    title: "Business Analyst",
    location: "Florida, US",
    period: "Aug 2006 – Jul 2008",
    bullets: [
      "Engineered clear system workflows for the Seminole County Work Management System by executing structured JAD sessions and establishing SharePoint document management protocols.",
    ],
  },
  {
    company: "Shah N. G. Company",
    title: "Co-owner",
    location: "India",
    period: "July 2005 – May 2006",
    bullets: [
      "Standardized localized operations and staffing models, designing a five-year strategic growth blueprint and launching a functional distribution center to secure business scaling.",
    ],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Methodologies",
    items: ["Agile", "SAFe", "Scrum", "Kanban", "Hybrid", "SDLC", "DevOps"],
  },
  {
    title: "Program Management",
    items: [
      "Multi-Release Coordination",
      "Cross-Team Dependency Management",
      "Risk Mitigation",
      "PMO Governance",
      "Executive Status Reporting",
    ],
  },
  {
    title: "PM & Agile Tools",
    items: [
      "Jira (Advanced)",
      "MS Project",
      "Azure DevOps",
      "Confluence",
      "Smartsheet",
      "Adobe Workfront",
      "Rally",
      "ServiceNow",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS EC2",
      "EKS",
      "Fargate",
      "Lambda",
      "RDS",
      "VPC",
      "IAM",
      "SNS/SQS",
      "DynamoDB",
      "CloudFormation",
    ],
  },
  {
    title: "Platforms & Tech",
    items: [".NET", ".NET Core", "Web API", "MVC", "SQL", "Oracle"],
  },
  {
    title: "Reporting & Analytics",
    items: ["Power BI", "MS Excel", "Delivery Dashboards", "Trend Analysis", "Predictability Metrics"],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      "Generative AI",
      "Agentic AI",
      "LLM Orchestration",
      "RAG",
      "Predictive Modeling",
      "Google AI Leadership",
    ],
  },
  {
    title: "Finance & Operations",
    items: ["Budget Management", "Cost Control", "Shared Services", "P2P", "O2C", "General Ledger", "Fixed Assets"],
  },
  {
    title: "Compliance",
    items: ["HIPAA", "SOC 2", "CCPA", "PCI", "SIEM", "Guardium"],
  },
];

export const education = [
  {
    school: "University of Central Florida",
    location: "Orlando, FL",
    degree: "MS Industrial Engineering",
    track: "Engineering Management Track",
  },
  {
    school: "Government College of Engineering",
    location: "Pune, India",
    degree: "BS Electrical Engineering",
    track: "",
  },
];
