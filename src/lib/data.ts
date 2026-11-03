// All portfolio data centralized here with dual-language support (pt/en)

export const personalInfo = {
  name: "Thiago Gomes",
  birthDate: "2004-01-27",
  role: {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer"
  },
  roleShort: {
    pt: "Dev Full-Stack",
    en: "Full-Stack Dev"
  },
  email: "thiagogomes1337@gmail.com",
  linkedin: "https://www.linkedin.com/in/thiago-gomes-fc/",
  github: "https://github.com/Thg1zZ",
  whatsapp: "https://wa.me/5521980635807", // To integrate your WhatsApp: Change this URL to https://wa.me/55 + your area code + your phone number
  whatsappDisplay: "+55 (21) 98063-5807", // Change this to your display phone number
  cvUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/ThiagoGomesCV-2026.pdf`,
  available: true,
  stats: [
    { value: "3+", label: { pt: "Anos de Exp.", en: "Years of Exp." } },
    { value: "20+", label: { pt: "Projetos", en: "Projects" } },
    { value: "10", label: { pt: "Linguagens", en: "Languages" } },
    { value: "7", label: { pt: "Certificações", en: "Certifications" } },
  ],
};

const advanced = { pt: "Avançado", en: "Advanced" };
const intermediate = { pt: "Intermediário", en: "Intermediate" };

export const skills = [
  { name: "TypeScript / JavaScript", level: advanced },
  { name: "Next.js / React", level: advanced },
  { name: "Node.js / APIs REST", level: advanced },
  { name: "Java / Spring Boot", level: advanced },
  { name: "C / C++", level: intermediate },
  { name: "PostgreSQL / SQL", level: intermediate },
  { name: "IA / LLM / RAG", level: intermediate },
];

export const techStack = [
  { group: { pt: "Linguagens", en: "Languages" }, items: ["TypeScript", "JavaScript", "Java", "C", "C++", "Python", "SQL", "Bash", "HTML5", "CSS3"] },
  { group: { pt: "Frontend", en: "Frontend" }, items: ["Next.js", "React", "Tailwind CSS"] },
  { group: { pt: "Backend & APIs", en: "Backend & APIs" }, items: ["Node.js", "Express", "Spring Boot", "Zod", "JDBC", "REST APIs", "Webhooks", "JWT", "WhatsApp Cloud API"] },
  { group: { pt: "Dados", en: "Data" }, items: ["PostgreSQL", "Prisma", "Drizzle", "pgvector", "Oracle DB", "Power BI", "Excel"] },
  { group: { pt: "IA", en: "AI" }, items: ["OpenAI", "Google Gemini", "Anthropic Claude", "RAG", "LLM APIs", "AI Agents"] },
  { group: { pt: "Infra & QA", en: "Infra & QA" }, items: ["Git", "GitHub", "GitLab", "Docker", "Linux VPS", "nginx", "PM2", "AWS S3 / SES", "Playwright", "TCP/IP"] },
];

export const spokenLanguages = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Básico", en: "Basic" } },
];

export const softSkills = [
  {
    title: { pt: "Resolução de Problemas", en: "Problem Solving" },
    description: {
      pt: "Capacidade analítica para identificar falhas e implementar melhorias eficazes.",
      en: "Analytical ability to identify failures and implement effective improvements."
    },
  },
  {
    title: { pt: "Colaboração e Proatividade", en: "Collaboration & Proactivity" },
    description: {
      pt: "Perfil dinâmico, com facilidade para trabalhar em equipes multidisciplinares.",
      en: "Dynamic profile, comfortable working in multidisciplinary teams."
    },
  },
  {
    title: { pt: "Comunicação Técnica", en: "Technical Communication" },
    description: {
      pt: "Documentação e redação de conteúdo técnico para públicos técnicos e não técnicos.",
      en: "Documentation and technical writing for technical and non-technical audiences."
    },
  },
];

export const education = [
  {
    date: { pt: "2023 — 2027", en: "2023 — 2027" },
    degree: { pt: "Bacharelado em Ciência da Computação", en: "B.S. in Computer Science" },
    institution: { pt: "Universidade Estácio de Sá", en: "Universidade Estácio de Sá" },
    description: {
      pt: "Previsão de conclusão: dezembro de 2027. Anteriormente: Universidade Veiga de Almeida (UVA) — Transferência Acadêmica.",
      en: "Expected graduation: December 2027. Previously enrolled at Universidade Veiga de Almeida (UVA) — Academic Transfer."
    },
    status: "current",
  },
  {
    date: { pt: "2026 — 15h", en: "2026 — 15h" },
    degree: {
      pt: "IBM Bob: IA de Nível Empresarial para Desenvolvedores e Tech Leaders",
      en: "IBM Bob: Enterprise-Grade AI for Developers and Tech Leaders"
    },
    institution: { pt: "DIO e IBM", en: "DIO & IBM" },
    description: {
      pt: "Uso de IA generativa de nível empresarial no ciclo de desenvolvimento de software, com foco em produtividade de desenvolvedores e liderança técnica.",
      en: "Enterprise-grade generative AI across the software development lifecycle, focused on developer productivity and technical leadership."
    },
    status: "done",
  },
  {
    date: { pt: "2026", en: "2026" },
    degree: { pt: "Programa em Prompting Responsável", en: "Responsible Prompting Program" },
    institution: { pt: "Santander, Microsoft e Founderz", en: "Santander, Microsoft & Founderz" },
    description: {
      pt: "Uso ético e responsável de IA generativa, com técnicas de prompting para resultados confiáveis e seguros.",
      en: "Ethical and responsible use of generative AI, with prompting techniques for reliable and safe results."
    },
    status: "done",
  },
  {
    date: { pt: "Concluído — 28h", en: "Completed — 28h" },
    degree: { pt: "Java Completo (POO + Projetos)", en: "Complete Java (OOP + Projects)" },
    institution: { pt: "Udemy", en: "Udemy" },
    description: {
      pt: "Programação orientada a objetos, coleções, generics, tratamento de exceções, JDBC e projetos práticos completos em Java.",
      en: "Object-oriented programming, collections, generics, exception handling, JDBC and full practical Java projects."
    },
    status: "done",
  },
  {
    date: { pt: "Em fase final", en: "Final stage" },
    degree: { pt: "Java Cloud Native", en: "Java Cloud Native" },
    institution: { pt: "Fundação Bradesco", en: "Fundação Bradesco" },
    description: {
      pt: "Desenvolvimento de aplicações Java para ambientes cloud, microsserviços, containers e boas práticas de arquitetura nativa em nuvem.",
      en: "Building Java applications for cloud environments, microservices, containers and cloud-native architecture best practices."
    },
    status: "progress",
  },
  {
    date: { pt: "Concluído", en: "Completed" },
    degree: { pt: "Power BI e Excel", en: "Power BI and Excel" },
    institution: { pt: "EmpowerData / Santander", en: "EmpowerData / Santander" },
    description: {
      pt: "Modelagem de dados, criação de dashboards interativos no Power BI, fórmulas avançadas e análise de dados com Excel.",
      en: "Data modeling, interactive dashboard creation in Power BI, advanced formulas and data analysis with Excel."
    },
    status: "done",
  },
  {
    date: { pt: "Concluído", en: "Completed" },
    degree: { pt: "Algoritmos e Lógica de Programação", en: "Algorithms and Programming Logic" },
    institution: { pt: "Udemy", en: "Udemy" },
    description: {
      pt: "Fundamentos de lógica computacional, estruturas de controle, funções, recursão e resolução de problemas com algoritmos eficientes.",
      en: "Fundamentals of computational logic, control structures, functions, recursion and problem-solving with efficient algorithms."
    },
    status: "done",
  },
  {
    date: { pt: "fev. 2026", en: "Feb 2026" },
    degree: { pt: "Santander Open Academy — Domine a IA com Gemini", en: "Santander Open Academy — Master AI with Gemini" },
    institution: { pt: "Santander", en: "Santander" },
    description: {
      pt: "Aplicações práticas de Inteligência Artificial com o modelo Gemini do Google, prompts avançados e integração em fluxos de trabalho.",
      en: "Practical applications of Artificial Intelligence using Google's Gemini model, advanced prompting and workflow integration."
    },
    status: "done",
  },
  {
    date: { pt: "out. 2025", en: "Oct 2025" },
    degree: { pt: "Imersão Dev — Agentes de IA", en: "Dev Immersion — AI Agents" },
    institution: { pt: "Google / Alura", en: "Google / Alura" },
    description: {
      pt: "Desenvolvimento de agentes inteligentes com IA generativa, integração com APIs do Google e construção de soluções orientadas a LLMs.",
      en: "Building intelligent agents with generative AI, integration with Google APIs and LLM-driven solution development."
    },
    status: "done",
  },
];

export const experience = [
  {
    date: { pt: "2026", en: "2026" },
    role: { pt: "Desenvolvedor Fullstack", en: "Full-Stack Developer" },
    company: { pt: "DMTN Sistemas — Tecnologia e Soluções", en: "DMTN Sistemas — Tecnologia e Soluções" },
    description: {
      pt: "Desenvolvimento de 10 projetos para clientes com Next.js, React, TypeScript, Node.js e PostgreSQL: sites institucionais, landing pages, e-commerce, ERP, bot de WhatsApp e assistente com IA.",
      en: "Built 10 client projects with Next.js, React, TypeScript, Node.js and PostgreSQL: corporate websites, landing pages, e-commerce, ERP, a WhatsApp bot and an AI assistant."
    },
    highlights: [
      {
        pt: "E-commerce com checkout em etapas, reserva de estoque validada no servidor, pagamento por cartão e PIX, webhook com validação de autenticidade e processamento idempotente, frete pela API dos Correios e painel administrativo.",
        en: "E-commerce with multi-step checkout, server-validated stock reservation, card and PIX payments, authenticated webhooks with idempotent processing, shipping via the Correios API and an admin panel."
      },
      {
        pt: "Bot de pedidos no WhatsApp com a API oficial da Meta: webhook com verificação de assinatura, limite de mensagens por número, extração de dados com IA e transcrição de áudio e vídeo.",
        en: "WhatsApp ordering bot on Meta's official API: signature-verified webhook, per-number message limits, AI data extraction and audio/video transcription."
      },
      {
        pt: "Assistente de IA com RAG (PostgreSQL + pgvector) que responde com base em documentos internos e gera arquivos PDF e DOCX.",
        en: "AI assistant with RAG (PostgreSQL + pgvector) that answers from internal documents and generates PDF and DOCX files."
      },
      {
        pt: "Migração de sites de WordPress/Elementor para Next.js, com foco em performance, SEO e acessibilidade.",
        en: "Migrated WordPress/Elementor sites to Next.js, focusing on performance, SEO and accessibility."
      },
      {
        pt: "QA de ERP em homologação (roteiros de teste, conexão bancária, importação de extrato OFX) e planejamento técnico de novos módulos (modelagem de dados, permissões e auditoria).",
        en: "ERP QA in staging (test scripts, bank connection, OFX statement import) and technical planning of new modules (data modeling, permissions and auditing)."
      },
      {
        pt: "Planilhas Excel e Google Sheets para controle e análise financeira, padronização de propostas comerciais e documentação técnica (README, planos de implementação e handoffs).",
        en: "Excel and Google Sheets for financial control and analysis, standardized sales proposals and technical documentation (READMEs, implementation plans and handoffs)."
      },
      {
        pt: "Autoria de 3 artigos técnicos no blog da empresa: emissão de NF-e em sistema próprio, integração entre site, e-commerce e tráfego pago, e automação de atendimento via WhatsApp.",
        en: "Wrote 3 technical articles for the company blog: NF-e issuance in an in-house system, integrating website, e-commerce and paid traffic, and WhatsApp customer service automation."
      },
    ],
    link: "https://dmtn.com.br/blog",
  },
  {
    date: { pt: "2024 — Atual", en: "2024 — Present" },
    role: { pt: "Técnico de TI e Desenvolvedor Fullstack", en: "IT Technician and Full-Stack Developer" },
    company: { pt: "Freelancer", en: "Freelance" },
    description: {
      pt: "Desenvolvimento de scripts para automação de tarefas, otimizando processos manuais e produtividade. Suporte técnico especializado (remoto e presencial), garantindo a continuidade operacional de sistemas críticos. Gestão de versionamento e colaboração técnica via Git/GitHub.",
      en: "Task automation scripts that streamline manual processes and productivity. Specialized technical support (remote and on-site), ensuring operational continuity of critical systems. Version control and technical collaboration via Git/GitHub."
    },
    highlights: null,
    link: null,
  },
  {
    date: { pt: "2024 — 2025", en: "2024 — 2025" },
    role: { pt: "Projetos Acadêmicos em Tecnologia da Informação", en: "Academic Projects in Information Technology" },
    company: { pt: "Universidade Veiga de Almeida", en: "Veiga de Almeida University" },
    description: {
      pt: "Desenvolvimento de projetos utilizando HTML, CSS, JavaScript e C, aplicando lógica de programação e estruturas de dados. Uso de Figma para prototipação e GitHub para versionamento de código.",
      en: "Project development using HTML, CSS, JavaScript, and C, applying programming logic and data structures. Figma for prototyping and GitHub for version control."
    },
    highlights: null,
    link: "https://github.com/Thg1zZ",
  },
  {
    date: { pt: "2024", en: "2024" },
    role: { pt: "Mesário — Eleições 2024", en: "Poll Worker — 2024 Elections" },
    company: { pt: "Justiça Eleitoral", en: "Electoral Justice" },
    description: {
      pt: "Atendimento e orientação ao público, registro de informações em sistema eletrônico e organização do fluxo de votação sob alta demanda.",
      en: "Customer service and guidance, electronic system data entry, and voting flow management under high demand."
    },
    highlights: null,
    link: null,
  },
  {
    date: { pt: "jun/2023 — jul/2023", en: "Jun 2023 — Jul 2023" },
    role: { pt: "Auxiliar Administrativo e Atendimento", en: "Administrative Assistant and Customer Service" },
    company: { pt: "Technopark Estacionamento LTDA", en: "Technopark Estacionamento LTDA" },
    description: {
      pt: "Atendimento presencial e telefônico ao cliente, registro de informações e emissão de notas fiscais em sistema, além de apoio a rotinas administrativas e controle de dados operacionais.",
      en: "In-person and telephone customer service, data entry and invoice issuance in the system, administrative routine support, and operational data control."
    },
    highlights: null,
    link: null,
  },
];

export const projects = [
  {
    num: "001",
    title: { pt: "RodaLivre — Aluguel de Automóveis", en: "RodaLivre — Car Rental Platform" },
    description: {
      pt: "Plataforma de alta performance para locação de veículos. Arquitetura estrita de camadas, segurança Defense in Depth, JWT stateless, RBAC, AES-256 e rate limiting com Redis. Frontend Vanilla JS com Chart.js.",
      en: "High-performance vehicle rental platform. Layered architecture, Defense in Depth security, stateless JWT, RBAC, AES-256, and Redis rate limiting. Vanilla JS frontend with Chart.js."
    },
    tags: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "Redis", "Docker", "Vanilla JS"],
    status: null,
    link: "https://github.com/Thg1zZ/SystemCar",
  },
  {
    num: "002",
    title: { pt: "TaskFlow — Gerenciador Colaborativo", en: "TaskFlow — Real-Time Task Collab" },
    description: {
      pt: "Plataforma colaborativa com comunicação em tempo real via Server-Sent Events (SSE). Autenticação via cookies HttpOnly, proteção contra IDOR, rate limiting, Next.js e Tailwind CSS. Deploy em produção Docker.",
      en: "Collaborative platform with real-time sync using Server-Sent Events (SSE). HttpOnly cookies authentication, IDOR protection, rate limiting, Next.js, and Tailwind CSS. Docker-ready production deployment."
    },
    tags: ["Spring Boot", "Java", "Next.js", "TypeScript", "Tailwind CSS", "SSE", "JWT", "Docker"],
    status: null,
    link: "https://task-manager-with-login.vercel.app/login",
  },
  {
    num: "003",
    title: { pt: "Bot de Busca para Discord", en: "Discord Search Bot" },
    description: {
      pt: "Aplicação em Python integrada à API do Discord que consome dados do DuckDuckGo e persiste consultas em Oracle, com respostas dinâmicas em tempo real.",
      en: "Python application integrated with Discord API, consuming DuckDuckGo API and persisting searches in Oracle, with real-time dynamic responses."
    },
    tags: ["Python", "Discord API", "Oracle DB", "DuckDuckGo API"],
    status: null,
    link: "https://github.com/Thg1zZ",
  },
  {
    num: "004",
    title: { pt: "Sudoku Java — Console & GUI Swing", en: "Sudoku Java — Console & Swing GUI" },
    description: {
      pt: "Desafio Bradesco Java Cloud Native. Jogo completo de Sudoku com geração de tabuleiros, validação de regras, sistema de dicas com penalidade de tempo e interface híbrida (Console e Swing).",
      en: "Bradesco Java Cloud Native challenge. Complete Sudoku game with board generation, rule validation, hint system with time penalty, and dual interface (Console and Swing)."
    },
    tags: ["Java", "POO", "Java Swing", "Estruturas de Dados"],
    status: null,
    link: "https://github.com/Thg1zZ/Game-Sudoku-Bradesco-Java-Cloud-",
  },
  {
    num: "005",
    title: { pt: "FocusBlock – Extensão Chrome", en: "FocusBlock – Chrome Extension" },
    description: {
      pt: "Extensão Manifest V3 para bloqueio programado de sites distrativos. Oferece controle por horário, estatísticas locais persistidas via chrome.storage e interface responsiva.",
      en: "Manifest V3 extension for scheduled blocking of distractive websites. Features timeline controls, local statistics persisted via chrome.storage, and responsive interface."
    },
    tags: ["JavaScript", "Chrome Extension", "Manifest V3", "HTML5/CSS3", "JSON"],
    status: null,
    link: "https://github.com/Thg1zZ/FocusBlock",
  },
  {
    num: "006",
    title: {
      pt: "Portal ENEN — Executiva Nacional dos Estudantes de Nutrição",
      en: "ENEN Portal — National Executive of Nutrition Students"
    },
    description: {
      pt: "Plataforma web integrada ao Sanity.io (Headless CMS) para gerenciamento dinâmico de notícias, eventos e documentos. Desenvolvida com HTML5 semântico, CSS3 modular (Custom Properties) e JavaScript (ES2022+), com regras rígidas de segurança contra XSS, Content Security Policy (CSP), tratamento robusto de erros via Fetch API e padrão Clean Code.",
      en: "Web platform integrated with Sanity.io (Headless CMS) for dynamic news, events, and document management. Built with semantic HTML5, modular CSS3 (Custom Properties), and modular JavaScript (ES2022+), featuring strict XSS security, Content Security Policy (CSP), robust Fetch API error handling, and Clean Code standards."
    },
    tags: ["HTML5", "CSS3", "JavaScript (ES2022+)", "Sanity.io", "Headless CMS", "CSP / XSS Security", "Fetch API"],
    status: { pt: "🛠️ Em desenvolvimento ativo", en: "🛠️ In active development" },
    link: "https://github.com/Thg1zZ/executiva-nacional-dos-estudantes-de-nutricaoenen",
  },
];
