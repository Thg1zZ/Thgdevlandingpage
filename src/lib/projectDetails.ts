type Localized<T = string> = { pt: T; en: T };

export interface ProjectDetails {
  category: Localized;
  overview: Localized;
  features: Localized<string[]>;
  architecture: Localized;
  validation: Localized;
  flow: Localized<string[]>;
  repository: string;
  images: { src: string; caption: Localized; source?: string }[];
}

// Curated from project documentation and demos; screenshots are bundled for static hosting.
export const projectDetails: Record<string, ProjectDetails> = {
  "001": {
    category: { pt: "Backend · Concorrência", en: "Backend · Concurrency" },
    overview: {
      pt: "Uma abertura de vendas coloca milhares de compradores disputando os mesmos assentos. O TicketSystem explora como manter reservas e pagamentos consistentes nesse cenário, comparando quatro estratégias de concorrência na mesma aplicação.",
      en: "A ticket launch puts thousands of buyers in competition for the same seats. TicketSystem explores how to keep reservations and payments consistent under this pressure by comparing four concurrency strategies in one application."
    },
    features: {
      pt: ["Reservas com locks pessimista, otimista, atualização condicional ou Redis + Lua.", "Checkout com chave de idempotência, reserva com expiração e cancelamento.", "Emissão assíncrona de ingressos com QR code, padrão outbox e RabbitMQ.", "Mapa de assentos, fila virtual, SSE e rate limiting para lidar com picos."],
      en: ["Reservations using pessimistic locking, optimistic locking, conditional updates, or Redis + Lua.", "Idempotency-key checkout, expiring holds, and cancellation.", "Asynchronous QR-code tickets using the outbox pattern and RabbitMQ.", "Seat map, virtual waiting room, SSE, and rate limiting to handle traffic spikes."]
    },
    architecture: {
      pt: "Java 21 e Spring Boot 4, com PostgreSQL como fonte da verdade. Redis controla admissão e auxilia as reservas; RabbitMQ processa o pós-venda. Réplicas stateless ficam atrás do Nginx, com métricas no Prometheus e Grafana.",
      en: "Java 21 and Spring Boot 4, with PostgreSQL as the source of truth. Redis manages admission and assists reservations; RabbitMQ handles post-sale processing. Stateless replicas sit behind Nginx, with Prometheus and Grafana metrics."
    },
    validation: {
      pt: "Capturas reais da aplicação executada localmente com PostgreSQL, Redis e RabbitMQ: seleção, reserva e compra simulada com emissão de QR codes. O README documenta testes de integração, carga com k6 e verificações SQL contra vendas duplicadas. As medições são locais e o gateway de pagamento é simulado.",
      en: "Real screenshots of the application running locally with PostgreSQL, Redis, and RabbitMQ: selection, reservation, and a simulated purchase with QR-code tickets. The README documents integration tests, k6 load tests, and SQL checks against duplicate sales. Measurements are local and the payment gateway is simulated."
    },
    flow: { pt: ["Escolher assentos", "Reservar", "Pagar", "Emitir ingresso"], en: ["Choose seats", "Reserve", "Pay", "Issue ticket"] },
    repository: "https://github.com/Thg1zZ/TicketSystem",
    images: [
      { src: "ticket-seatmap.jpg", caption: { pt: "Mapa ao vivo · Seleção de assentos", en: "Live seat map · Seat selection" } },
      { src: "ticket-reservation.jpg", caption: { pt: "Reserva ativa · Expiração e checkout idempotente", en: "Active reservation · Expiration and idempotent checkout" } },
      { src: "ticket-confirmed.jpg", caption: { pt: "Pedido confirmado · Ingressos emitidos com QR code", en: "Confirmed order · Tickets issued with QR codes" } },
    ],
  },
  "002": {
    category: { pt: "Full stack · Produtividade", en: "Full stack · Productivity" },
    overview: {
      pt: "O TaskFlow reúne organização pessoal e colaboração em uma plataforma de tarefas. Além do quadro Kanban, oferece calendário, estatísticas e ferramentas para acompanhar o trabalho em equipe em tempo real.",
      en: "TaskFlow brings personal organization and collaboration into one task platform. Alongside its Kanban board, it offers a calendar, statistics, and tools for following teamwork in real time."
    },
    features: {
      pt: ["Kanban com arrastar e soltar, subtarefas, etiquetas, prioridades e filtros combinados.", "Tarefas recorrentes, calendário, gráficos de produtividade e Pomodoro.", "Compartilhamento por convite e atualização em tempo real via SSE.", "Login com Google, recuperação de senha, exportação de dados e temas claro/escuro."],
      en: ["Drag-and-drop Kanban, subtasks, labels, priorities, and combined filters.", "Recurring tasks, calendar, productivity charts, and Pomodoro.", "Invitation-based sharing and real-time updates through SSE.", "Google sign-in, password recovery, data export, and light/dark themes."]
    },
    architecture: {
      pt: "Frontend Next.js 16 com React, TypeScript e Tailwind CSS. API Java 17 / Spring Boot 3.5 com PostgreSQL e Flyway. A Vercel encaminha as chamadas ao backend no Render, mantendo a sessão em cookie HttpOnly no mesmo domínio.",
      en: "Next.js 16 frontend with React, TypeScript, and Tailwind CSS. Java 17 / Spring Boot 3.5 API with PostgreSQL and Flyway. Vercel forwards requests to the backend on Render, keeping the session in a same-domain HttpOnly cookie."
    },
    validation: {
      pt: "A documentação descreve testes unitários, integração com PostgreSQL real via Testcontainers e fluxos de navegador com Playwright. A demonstração usa o plano gratuito do Render: a primeira requisição pode levar até um minuto.",
      en: "Documentation describes unit tests, integration with real PostgreSQL through Testcontainers, and Playwright browser flows. The demo uses Render's free tier: the first request may take up to a minute."
    },
    flow: { pt: ["Criar tarefa", "Organizar", "Compartilhar", "Acompanhar"], en: ["Create task", "Organize", "Share", "Track progress"] },
    repository: "https://github.com/Thg1zZ/TaskFlowProject",
    images: [
      { src: "taskflow-dashboard-light.png", caption: { pt: "Dashboard · Visão geral no tema claro", en: "Dashboard · Light theme overview" }, source: "https://github.com/Thg1zZ/TaskFlowProject/blob/main/docs/screenshots/dashboard-light.png" },
      { src: "taskflow-dashboard-dark.png", caption: { pt: "Dashboard · Tema escuro", en: "Dashboard · Dark theme" }, source: "https://github.com/Thg1zZ/TaskFlowProject/blob/main/docs/screenshots/dashboard-dark.png" },
      { src: "taskflow-kanban.png", caption: { pt: "Kanban · Organização visual das tarefas", en: "Kanban · Visual task organization" }, source: "https://github.com/Thg1zZ/TaskFlowProject/blob/main/docs/screenshots/kanban.png" },
      { src: "taskflow-statistics.png", caption: { pt: "Estatísticas · Acompanhamento de produtividade", en: "Statistics · Productivity tracking" }, source: "https://github.com/Thg1zZ/TaskFlowProject/blob/main/docs/screenshots/statistics.png" },
    ],
  },
  "003": {
    category: { pt: "Python · Automação", en: "Python · Automation" },
    overview: {
      pt: "Um assistente de pesquisa dentro do Discord. O usuário envia um termo pelo chat e recebe os primeiros resultados do DuckDuckGo organizados em uma mensagem com títulos, resumos e links.",
      en: "A search assistant inside Discord. Users send a query in chat and receive the first DuckDuckGo results in a message with titles, summaries, and links."
    },
    features: {
      pt: ["Comando !search, com aliases !busca e !pesquisa.", "Até três resultados por consulta, apresentados em embeds do Discord.", "Validação de termos vazios, aviso quando não há resultados e tratamento de falhas.", "Busca executada em thread separada para não bloquear o processamento do bot."],
      en: ["The !search command, with !busca and !pesquisa aliases.", "Up to three results per query, displayed in Discord embeds.", "Empty-query validation, no-results feedback, and error handling.", "Search runs in a separate thread to keep the bot's event loop responsive."]
    },
    architecture: {
      pt: "Python com discord.py, duckduckgo_search e asyncio. O token do bot é carregado por variável de ambiente usando python-dotenv. A versão pública consultada realiza as buscas sem persistência em banco de dados.",
      en: "Python with discord.py, duckduckgo_search, and asyncio. The bot token is loaded from an environment variable using python-dotenv. The inspected public version performs searches without database persistence."
    },
    validation: {
      pt: "O repositório público contém o código do bot e suas dependências, sem capturas ou suíte de testes publicada. Para executar, é preciso configurar um bot no Discord e fornecer o token no ambiente.",
      en: "The public repository contains the bot code and dependencies, with no published screenshots or test suite. Running it requires a configured Discord bot and an environment-provided token."
    },
    flow: { pt: ["Comando no chat", "Validar busca", "Consultar web", "Responder"], en: ["Chat command", "Validate query", "Search web", "Reply"] },
    repository: "https://github.com/Thg1zZ/Bot-Discord",
    images: [],
  },
  "004": {
    category: { pt: "Streaming · Análise de eventos", en: "Streaming · Event analysis" },
    overview: {
      pt: "O FraudDetector acompanha transações sintéticas em tempo real e transforma padrões suspeitos em alertas consultáveis. O projeto cobre o caminho do evento no Kafka até a análise, persistência, classificação e observabilidade.",
      en: "FraudDetector monitors synthetic transactions in real time and turns suspicious patterns into queryable alerts. It covers the path from Kafka events through analysis, persistence, classification, and observability."
    },
    features: {
      pt: ["Quatro regras: frequência de compras, valor fora do padrão, viagem impossível e teste de cartão.", "Janelas deslizantes e histórico por cartão processados com Kafka Streams.", "Alertas idempotentes no PostgreSQL e API REST com filtros e classificação.", "Quarentena para mensagens inválidas e métricas de fluxo, atraso e memória."],
      en: ["Four rules: purchase velocity, unusual amounts, impossible travel, and card testing.", "Sliding windows and per-card history processed with Kafka Streams.", "Idempotent PostgreSQL alerts and a REST API with filters and classification.", "Quarantine for invalid messages and metrics for throughput, latency, and memory."]
    },
    architecture: {
      pt: "Dois módulos Java 21: um simulador publica transações e o detector Spring Boot aplica as regras. Kafka Streams mantém o estado e o recupera por changelog; um consumidor persiste os alertas e a API os expõe. Prometheus e Grafana acompanham a execução.",
      en: "Two Java 21 modules: a simulator publishes transactions and a Spring Boot detector applies rules. Kafka Streams maintains state and restores it from changelogs; a consumer persists alerts for the API. Prometheus and Grafana monitor execution."
    },
    validation: {
      pt: "O README registra 54 testes e 94,9% de cobertura de linhas no detector em 10/11/2026, incluindo Kafka e PostgreSQL reais. É uma demonstração local com dados sintéticos, sem autenticação, modelo de machine learning ou bloqueio de pagamentos.",
      en: "The README records 54 tests and 94.9% detector line coverage on November 10, 2026, including real Kafka and PostgreSQL. This is a local demo with synthetic data, without authentication, machine learning, or payment blocking."
    },
    flow: { pt: ["Simular compras", "Analisar regras", "Gerar alertas", "Classificar"], en: ["Simulate purchases", "Analyze rules", "Generate alerts", "Classify"] },
    repository: "https://github.com/Thg1zZ/FraudDetector",
    images: [
      { src: "fraud-dashboard.jpg", caption: { pt: "Grafana · Transações, alertas e desempenho", en: "Grafana · Transactions, alerts, and performance" }, source: "https://github.com/Thg1zZ/FraudDetector/blob/main/docs/images/dashboard.jpg" },
      { src: "fraud-api.jpg", caption: { pt: "Swagger · Consulta de alertas pela API", en: "Swagger · Querying alerts through the API" }, source: "https://github.com/Thg1zZ/FraudDetector/blob/main/docs/images/api.jpg" },
      { src: "fraud-kafka.jpg", caption: { pt: "Kafka UI · Tópicos do processamento de eventos", en: "Kafka UI · Event processing topics" }, source: "https://github.com/Thg1zZ/FraudDetector/blob/main/docs/images/kafka.jpg" },
    ],
  },
  "005": {
    category: { pt: "Extensão · Foco e privacidade", en: "Extension · Focus and privacy" },
    overview: {
      pt: "O FocusBlock ajuda a reservar tempo para o que importa, bloqueando sites distrativos nos horários escolhidos. A extensão combina programação de bloqueios, proteção das configurações e acompanhamento de tentativas de acesso.",
      en: "FocusBlock helps reserve time for what matters by blocking distracting websites during selected hours. The extension combines scheduled blocking, protected settings, and tracking of blocked visits."
    },
    features: {
      pt: ["Lista personalizável de sites e horários, inclusive períodos que cruzam a meia-noite.", "Proteção das configurações por senha, com hash gerado pela Web Crypto API.", "Estatísticas de acessos bloqueados, sites frequentes e tempo economizado.", "Português, inglês e espanhol, com temas claro e escuro."],
      en: ["Custom website lists and schedules, including periods that cross midnight.", "Password-protected settings, with hashing through the Web Crypto API.", "Statistics for blocked visits, frequent websites, and saved time.", "Portuguese, English, and Spanish, with light and dark themes."]
    },
    architecture: {
      pt: "Extensão Chrome Manifest V3 com JavaScript, HTML e CSS. Um service worker coordena o bloqueio; popup, página de bloqueio e estatísticas usam APIs do Chrome. As configurações e estatísticas ficam no armazenamento do navegador, sem backend próprio.",
      en: "Chrome Manifest V3 extension using JavaScript, HTML, and CSS. A service worker coordinates blocking; the popup, blocked page, and statistics use Chrome APIs. Settings and statistics use browser storage, without a custom backend."
    },
    validation: {
      pt: "As imagens foram publicadas no README do projeto. A instalação documentada é manual pelo modo de desenvolvedor do Chrome; não há suíte de testes automatizados publicada no repositório consultado.",
      en: "These images were published in the project README. Documented installation is manual through Chrome developer mode; the inspected repository has no published automated test suite."
    },
    flow: { pt: ["Escolher sites", "Definir horários", "Bloquear", "Ver estatísticas"], en: ["Choose websites", "Set schedule", "Block", "View statistics"] },
    repository: "https://github.com/Thg1zZ/FocusBlock",
    images: [
      { src: "focusblock-settings.png", caption: { pt: "Popup · Proteção das configurações", en: "Popup · Protected settings" }, source: "https://github.com/Thg1zZ/FocusBlock/blob/main/README.md" },
      { src: "focusblock-schedule.png", caption: { pt: "Extensão · Configuração dos bloqueios", en: "Extension · Blocking settings" }, source: "https://github.com/Thg1zZ/FocusBlock/blob/main/README.md" },
      { src: "focusblock-statistics.png", caption: { pt: "Estatísticas · Visão dos acessos bloqueados", en: "Statistics · Blocked visits overview" }, source: "https://github.com/Thg1zZ/FocusBlock/blob/main/README.md" },
    ],
  },
  "006": {
    category: { pt: "Web · Gestão de conteúdo", en: "Web · Content management" },
    overview: {
      pt: "Portal da Executiva Nacional dos Estudantes de Nutrição, pensado para reunir notícias, eventos e documentos em um espaço institucional com conteúdo gerenciado por CMS.",
      en: "A portal for the National Executive of Nutrition Students, designed to bring news, events, and documents into an institutional website with CMS-managed content."
    },
    features: {
      pt: ["Notícias, posicionamentos oficiais, documentos e divulgação dos encontros nacionais.", "Apresentação da entidade, princípios, história e espaços do movimento estudantil.", "Gestão de conteúdo desacoplada da interface por meio do Sanity.", "Carrosséis de imagens e navegação por áreas institucionais, conteúdo e atividades."],
      en: ["News, official statements, documents, and national meeting announcements.", "Organization profile, principles, history, and student movement spaces.", "Content management separated from the interface through Sanity.", "Image carousels and navigation across institutional information, content, and activities."]
    },
    architecture: {
      pt: "A apresentação do portfólio descreve HTML5, CSS3 com Custom Properties e JavaScript ES2022+, integrados ao Sanity como headless CMS via Fetch API, com atenção a tratamento de erros, CSP e XSS.",
      en: "The portfolio describes HTML5, CSS3 Custom Properties, and ES2022+ JavaScript integrated with Sanity as a headless CMS through the Fetch API, with attention to error handling, CSP, and XSS."
    },
    validation: {
      pt: "Capturas reais fornecidas pelo autor e navegação conferida no portal publicado na Vercel. A galeria mostra a página inicial, notícias, linha do tempo e princípios da entidade. O repositório e a suíte de testes não estavam disponíveis para consulta.",
      en: "Real screenshots provided by the author, with navigation checked on the portal hosted on Vercel. The gallery shows the home page, news, timeline, and organizational principles. The repository and test suite were unavailable for inspection."
    },
    flow: { pt: ["Editar no CMS", "Consultar conteúdo", "Publicar no portal", "Informar estudantes"], en: ["Edit in CMS", "Fetch content", "Publish on portal", "Inform students"] },
    repository: "https://github.com/Thg1zZ/executiva-nacional-dos-estudantes-de-nutricaoenen",
    images: [
      { src: "enen-home.png", caption: { pt: "Página inicial · Identidade e representação estudantil", en: "Home page · Identity and student representation" } },
      { src: "enen-news.png", caption: { pt: "Notícias e posicionamentos · Divulgação do ENENUT", en: "News and statements · ENENUT announcements" } },
      { src: "enen-history.png", caption: { pt: "Linha do tempo · História do movimento estudantil", en: "Timeline · History of the student movement" } },
      { src: "enen-principles.png", caption: { pt: "Princípios e lutas · Compromissos da entidade", en: "Principles and causes · Organizational commitments" } },
    ],
  },
};
