export const personal = {
  name: 'Kevin Timothy J',
  role: 'AI/ML Technical Lead',
  tagline: 'Architecting intelligent systems — from agentic frameworks to production GenAI at scale.',
  location: 'Chennai, India',
  email: 'kevintimothy201@gmail.com',
  phone: '+91 99441 77193',
  linkedin: 'https://www.linkedin.com/in/kevin-timothy/',
  education: {
    degree: 'Bachelor of Engineering — Computer Science',
    institution: "St. Joseph's Institute of Technology",
    year: '2020 – 2024',
    cgpa: '9.10',
  },
}

export const certifications = [
  {
    title: 'AWS Certified Generative AI Developer — Professional',
    issuer: 'Amazon Web Services Training and Certification',
    badge: 'https://www.credly.com/badges/737779c3-213d-4543-964c-7bc1bc721061',
    color: '#FF9900',
    issuerShort: 'AWS',
  },
  {
    title: 'AWS Partner: Forward Deployed Engineer (FDE) — Advanced',
    issuer: 'Amazon Web Services Training and Certification',
    badge: 'https://www.credly.com/badges/245f0fb1-7ad0-487c-8a7e-311a56965095',
    color: '#FF9900',
    issuerShort: 'AWS',
  },
  {
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services Training and Certification',
    badge: 'https://www.credly.com/badges/048af3d6-0ac9-4bb7-b494-5af2abb9b82f/email',
    color: '#FF9900',
    issuerShort: 'AWS',
  },
  {
    title: 'Databricks Certified Machine Learning Professional',
    issuer: 'Databricks',
    badge: 'https://credentials.databricks.com/a36a32f3-2acb-466a-8e8a-77693b26b5f6#acc.0HGbjmlU',
    color: '#FF3621',
    issuerShort: 'Databricks',
  },
  {
    title: 'Claude Certified Architect — Foundations',
    issuer: 'Anthropic',
    badge: 'https://www.credly.com/badges/3c2b9c9c-1efc-4ca8-b74f-a933447d2580',
    color: '#c96a2e',
    issuerShort: 'Anthropic',
  },
]

export const experience = [
  {
    title: 'AI/ML Technical Lead',
    company: 'Zeb',
    period: 'Jun 2025 – Present',
    current: true,
    description:
      'Lead cross-functional teams in architecting and delivering enterprise-grade AI/ML and GenAI solutions using cloud-native tools. Design intelligent systems that are scalable, efficient, and production-ready.',
  },
  {
    title: 'AI/ML Engineer',
    company: 'Zeb',
    period: 'Jun 2024 – Jun 2025',
    current: false,
    description:
      'Contributed to design, development, and deployment of AI/ML solutions. Worked extensively with Generative AI and MLOps tools in AWS and Azure. Built RAG pipelines, fine-tuned ML models, and developed FastAPI/React full-stack systems.',
  },
  {
    title: 'AI/ML Trainee Engineer',
    company: 'Zeb',
    period: 'Dec 2023 – Jun 2024',
    current: false,
    description:
      'Intensive, hands-on internship in Generative AI. Built Flask-based REST APIs, integrated UI with HTML/CSS/JS, deployed on AWS S3 and Lambda, and developed initial LLM use cases with OpenAI API and LangChain.',
  },
]

export const skills = {
  'AI & GenAI': ['Amazon Bedrock', 'Azure OpenAI', 'LangChain', 'LangGraph', 'Pydantic AI', 'Strands', 'RAG', 'LLM-as-Judge', 'MCP Tools', 'AWS Q for Business'],
  'Cloud & Infra': ['AWS', 'Azure', 'Docker', 'Kubernetes (K8s)', 'Databricks', 'AWS Lambda', 'Amazon SageMaker', 'EventBridge', 'SNS / SQS', 'ECS', 'EC2', 'Route53'],
  'Backend': ['Python', 'FastAPI', 'Flask', 'Pydantic', 'Go', 'JavaScript', 'TypeScript'],
  'Frontend': ['React', 'Reusable Components'],
  'Data & Messaging': ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'OpenSearch', 'Vector DBs'],
  'MLOps & Observability': ['TensorFlow', 'PyTorch', 'HuggingFace', 'Databricks', 'OpenTelemetry', 'Datadog', 'MLFlow', 'LaunchDarkly'],
}

export const projects = [
  {
    id: 1,
    name: 'Foundational Agent Architecture — Data SaaS',
    description:
      'Foundational agentic orchestration architecture built with Pydantic Graph as an engine for integrating multiple AI agents with MCP tools at massive scale using a DSL architecture. Includes an evaluation framework for detecting drift and inconsistencies with custom LLM-as-Judge evaluators in Datadog.',
    tags: ['Pydantic Graph', 'DSL Architecture', 'Multi-Agent', 'MCP Tools', 'Kafka', 'Redis', 'MongoDB', 'OpenTelemetry', 'LLM-as-Judge', 'LaunchDarkly'],
    type: 'Production',
    domain: 'Data SaaS',
    highlight: true,
  },
  {
    id: 2,
    name: 'AI Chatbot SaaS Platform',
    description:
      'Low-code/no-code SaaS application for creating and deploying AI chatbots on AWS and Azure. Spins up per-org infrastructure, deploys chatbots as Docker images on K8s (AKS/EKS), and connects to data sources like Jira, Salesforce, ServiceNow, and HubSpot via Kafka event streams.',
    tags: ['SaaS', 'Microservices', 'K8s', 'Docker', 'Kafka', 'Redis', 'React', 'Teams Bot', 'Slack Bot', 'PostgreSQL'],
    type: 'Production',
    domain: 'Enterprise SaaS',
    highlight: true,
  },
  {
    id: 3,
    name: 'Multi-Agent Analytics Framework — Transportation',
    description:
      'Multi-agent orchestration chatbot framework that routes between multiple Genie agents for different personas, treating each agent as a tool, built with LangGraph and LangChain, and deployed in Databricks Apps with Genie space optimization.',
    tags: ['LangGraph', 'LangChain', 'Databricks', 'Databricks Genie', 'FastAPI', 'Multi-Agent'],
    type: 'Production',
    domain: 'Transportation Analytics',
    highlight: true,
  },
  {
    id: 4,
    name: 'Athletic Jump Validation Service',
    description:
      'Production service that detects whether an athlete correctly jumped and landed using Bedrock multimodal LLM image processing and validation pipelines.',
    tags: ['Amazon Bedrock', 'Multimodal LLM', 'Image Processing'],
    type: 'Production',
    domain: 'Sports Tech',
    highlight: false,
  },
  {
    id: 5,
    name: 'Vendor Outage Notification System',
    description:
      'Cron-based system polling cloud vendor health APIs (AWS, Azure, Salesforce, Datadog) every 5 minutes. Detects outages and automatically fires Teams notifications and emails via AWS SNS.',
    tags: ['EventBridge', 'SNS', 'FastAPI', 'StatusPage API', 'Teams Notification'],
    type: 'Production',
    domain: 'DevOps / Monitoring',
    highlight: false,
  },
  {
    id: 6,
    name: 'AI Property Listing Chatbot — Real Estate',
    description:
      'AI chatbot for a real estate business that generates property descriptions, advises pricing, and locates nearby schools and hospitals — eliminating broker middlemen and automating listing using property images.',
    tags: ['Amazon Bedrock', 'AWS Lambda', 'NLP Chatbot', 'React'],
    type: 'POC',
    domain: 'Real Estate',
    highlight: false,
  },
  {
    id: 7,
    name: 'Enterprise Document Q&A — Teams Bot',
    description:
      'Teams chatbot powered by Azure OpenAI enabling sales teams to answer questions over uploaded PDFs, images, Excel, and Word documents with full document parsing.',
    tags: ['Teams Bot', 'Azure OpenAI', 'PyMuPDF', 'openpyxl', 'Python'],
    type: 'Production',
    domain: 'Enterprise Tooling',
    highlight: false,
  },
  {
    id: 8,
    name: 'AI Image Enhancement Pipeline — Photography',
    description:
      'S3 event-driven image enhancement pipeline for background removal and color correction. Involved training and fine-tuning ML models from HuggingFace (GAN-based Pix2Pix) and deploying via SageMaker.',
    tags: ['Amazon SageMaker', 'Amazon Bedrock', 'Pix2Pix', 'GAN', 'HuggingFace', 'S3 Event-Driven'],
    type: 'POC',
    domain: 'Photography',
    highlight: false,
  },
  {
    id: 9,
    name: 'Intelligent Document Processing Pipeline — Finance',
    description:
      'S3 event-driven IDP pipeline with SQS dead-letter queue for a finance business. Extracts OCR information from large loan PDFs using Bedrock LLM, eliminating manual data retrieval effort.',
    tags: ['IDP', 'OCR', 'Amazon Bedrock', 'SQS', 'DLQ', 'S3 Event-Driven'],
    type: 'POC',
    domain: 'Finance',
    highlight: false,
  },
  {
    id: 10,
    name: 'CAD 3D Design Chatbot — Interior Design',
    description:
      'AI chatbot that converts user closet requirements into a JSON structure for rendering a CAD 3D model in a Unity-based frontend. Uses Bedrock LLM with a Postgres vector KB of material specifications.',
    tags: ['Amazon Bedrock', 'Postgres Vector DB', 'JSON Schema', 'Unity Frontend', 'RAG'],
    type: 'POC',
    domain: 'Interior Design',
    highlight: false,
  },
  {
    id: 11,
    name: 'Fleet Incident Analytics Chatbot',
    description:
      'AI chatbot for a fleet management business to analyse daily, weekly, and monthly incident reports. CSV-based KB with RAG enables natural language queries like "which driver had the most speeding incidents last week."',
    tags: ['Amazon Bedrock', 'RAG', 'CSV KB', 'Fleet Analytics'],
    type: 'POC',
    domain: 'Fleet Management',
    highlight: false,
  },
  {
    id: 12,
    name: 'Permit Compliance Chatbot — Logistics',
    description:
      'AI chatbot for heavy vehicle permit compliance across US and Canadian states. Uses Bedrock Knowledge Base with OpenSearch managed cluster and Postgres vector DB for RAG over compliance documents.',
    tags: ['Amazon Bedrock', 'OpenSearch', 'Postgres Vector DB', 'RAG', 'Knowledge Base'],
    type: 'POC',
    domain: 'Logistics & Compliance',
    highlight: false,
  },
  {
    id: 13,
    name: 'Healthcare Provider AI Chatbot',
    description:
      'AI chatbot answering questions about healthcare providers from a structured Postgres SQL database, built with AWS Q for Business using an NLP-to-SQL architecture.',
    tags: ['AWS Q for Business', 'PostgreSQL', 'NLP-to-SQL', 'Amazon Bedrock'],
    type: 'POC',
    domain: 'Healthcare',
    highlight: false,
  },
  {
    id: 14,
    name: 'Agentic IDP System — Bedrock AgentCore',
    description:
      'Intelligent document processing agentic system built with the Strands agentic framework and MCP tools for extraction, parsing, and serialization, deployed on AWS Bedrock AgentCore.',
    tags: ['AWS Bedrock AgentCore', 'Strands Framework', 'IDP', 'FastMCP', 'MCP Tools'],
    type: 'Demo',
    domain: 'Document AI',
    highlight: false,
  },
]
