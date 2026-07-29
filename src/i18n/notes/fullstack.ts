import type { Note } from "@/content/types";

export const fullstackRoadmapNoteEnglish: Note = {
  slug: "fullstack-roadmap",
  title: "Full-Stack Development Roadmap",
  description: "Build complete full-stack skills through project-driven stages covering web foundations, frontend, backend, data, security, testing, and delivery.",
  publishedAt: "2026-07-29T00:00:00+08:00",
  updatedAt: "2026-07-29T00:00:00+08:00",
  category: "Software Engineering",
  tags: ["Full-Stack", "TypeScript", "React", "Node.js", "Roadmap"],
  draft: false,
  noindex: false,
  body: "",
  outline: [
    {
      title: "Stage I · Web Foundations",
      items: [
        { id: "learning-strategy", label: "1.1 Learning Strategy" },
        { id: "web-and-http", label: "1.2 The Web and HTTP" },
        { id: "html-css-accessibility", label: "1.3 HTML, CSS, and Accessibility" },
        { id: "javascript-typescript", label: "1.4 JavaScript and TypeScript" },
      ],
    },
    {
      title: "Stage II · Frontend Development",
      items: [
        { id: "react-architecture", label: "2.1 React and Component Architecture" },
        { id: "frontend-data-flow", label: "2.2 State, Routing, and Data Flow" },
        { id: "browser-performance", label: "2.3 Browsers and Performance" },
      ],
    },
    {
      title: "Stage III · Backend and Data",
      items: [
        { id: "backend-api", label: "3.1 Backend and API Design" },
        { id: "database-modeling", label: "3.2 Databases and Data Modeling" },
        { id: "auth-security", label: "3.3 Authentication, Authorization, and Security" },
      ],
    },
    {
      title: "Stage IV · Engineering and Delivery",
      items: [
        { id: "testing-observability", label: "4.1 Testing and Observability" },
        { id: "delivery-capstone", label: "4.2 Deployment and Capstone" },
      ],
    },
  ],
  lessons: [
    {
      id: "learning-strategy",
      eyebrow: "1.1 · Web Foundations",
      title: "Learning Strategy",
      summary: "Full-stack learning is not about collecting technologies. It is about independently turning a real requirement into a working, maintainable, and verifiable product.",
      formula: "understand → complete a small exercise → apply in a project → review and refactor",
      points: [
        "Choose one primary stack—TypeScript, React, Node.js, and PostgreSQL—to reduce the cost of constantly switching languages and frameworks.",
        "Ship a working result at every stage; a useful split is roughly 30% study and 70% building and debugging.",
        "Keep evidence through Git commits, READMEs, tests, and live URLs so progress is based on independent execution.",
      ],
      examples: [
        { source: "Week 1: static personal site", translation: "Practice semantic HTML, responsive CSS, forms, Git, and a GitHub Pages deployment." },
        { source: "Week 12: authenticated full-stack app", translation: "Connect React, APIs, PostgreSQL, authentication, tests, and deployment." },
      ],
      tip: "Measure progress by whether the project really works, not by how many courses you have finished.",
    },
    {
      id: "web-and-http",
      eyebrow: "1.2 · Web Foundations",
      title: "The Web and HTTP",
      summary: "Understanding how browsers, servers, DNS, TCP/TLS, and HTTP work together is the shared foundation for cross-stack debugging and API design.",
      formula: "URL → DNS → connection and TLS → HTTP request → server response → browser rendering",
      points: [
        "Learn URLs, methods, status codes, headers, cookies, caching, and CORS, and explain a request with the browser Network panel.",
        "Understand that HTTP is stateless and distinguish client errors, server errors, network failures, and business failures.",
        "Verify an API independently with curl or an API client instead of treating every problem as a frontend issue.",
      ],
      examples: [
        { source: "GET /api/projects → 200", translation: "Reading a resource should be cacheable and should not create a business side effect." },
        { source: "POST /api/sessions → 201", translation: "Return the new resource identifier and a stable error shape when creation fails." },
      ],
      tip: "When a page fails, first inspect whether the request was sent, its status, and its response body.",
    },
    {
      id: "html-css-accessibility",
      eyebrow: "1.3 · Web Foundations",
      title: "HTML, CSS, and Accessibility",
      summary: "A page is first a meaningful, accessible document and only then a visual interface. Layout skill should begin with normal document flow.",
      formula: "semantic structure + responsive layout + accessible interaction = resilient interface",
      points: [
        "Use semantic elements, form labels, image alternatives, and heading hierarchy so keyboards, screen readers, and search engines understand the page.",
        "Master the box model, cascade, Flexbox, Grid, positioning, and media queries; prefer layout systems over manual coordinates.",
        "Check widths from 320px to desktop, keyboard focus, color contrast, and reduced motion—not only your own device.",
      ],
      examples: [
        { source: "<button>Save</button>", translation: "A native button includes keyboard and semantic behavior that a clickable div lacks." },
        { source: "grid-template-columns: repeat(auto-fit, minmax(...))", translation: "Let content determine the column count and reduce page-specific breakpoints." },
      ],
      tip: "Complete the layout without fixed heights or positioning first, then add only the visual layers that truly require them.",
    },
    {
      id: "javascript-typescript",
      eyebrow: "1.4 · Web Foundations",
      title: "JavaScript and TypeScript",
      summary: "JavaScript determines runtime behavior while TypeScript adds development-time constraints. Types do not replace runtime validation.",
      formula: "validate input → narrow types → transform with pure functions → isolate side effects",
      points: [
        "Master scope, closures, prototypes, modules, the event loop, promises, async/await, and error propagation.",
        "Use unions, generics, type guards, and unknown to express real constraints instead of hiding design problems with any.",
        "Separate compile-time types from runtime data and validate APIs, forms, and environment variables with schemas.",
      ],
      examples: [
        { source: "Promise.all([profile, projects])", translation: "Run independent requests concurrently; preserve order and handle partial failure when dependencies exist." },
        { source: "parse(requestBody): CreateProjectInput", translation: "Validate external input before it enters typed business logic." },
      ],
      tip: "If a type is hard to express, the data boundary or state model probably needs more thought.",
    },
    {
      id: "react-architecture",
      eyebrow: "2.1 · Frontend Development",
      title: "React and Component Architecture",
      summary: "React describes interfaces with state and uses component boundaries to control complexity; the goal is not to create the largest possible file tree.",
      formula: "UI = f(props, state); composition before page-specific variants",
      points: [
        "Understand rendering, events, effects, controlled forms, and lifecycle; do not use effects to synchronize values that can be derived directly.",
        "Reuse the project component library and primitives before extracting domain components; let component APIs express business intent.",
        "Keep one-way data flow and separate data access, business state, and presentation without introducing abstractions too early.",
      ],
      examples: [
        { source: "<ProjectCard project={project} />", translation: "Pass a domain object and explicit callbacks instead of letting the card assemble backend requests." },
        { source: "const fullName = `${first} ${last}`", translation: "Compute derived values during rendering rather than adding state and an effect." },
      ],
      tip: "A component boundary reduces complexity only when it can be understood, reused, or tested independently.",
    },
    {
      id: "frontend-data-flow",
      eyebrow: "2.2 · Frontend Development",
      title: "State, Routing, and Data Flow",
      summary: "Identify state ownership before choosing a tool. Server data, URLs, forms, and temporary UI state should not all live in React State.",
      formula: "Server State + URL State + Form State + UI State",
      points: [
        "Lists, caching, and revalidation are Server State; filters, pagination, and shareable views usually belong in the URL.",
        "Forms need field validation, submission state, and server-error mapping; short-lived state such as dialog visibility stays near the component.",
        "Routes define page boundaries, authorization entry points, and loading strategy, including loading, empty, error, and not-found states.",
      ],
      examples: [
        { source: "/projects?tag=agent&page=2", translation: "Filters and pagination survive refresh, are shareable, and support browser navigation." },
        { source: "queryKey: ['project', projectId]", translation: "Cache identity comes from a stable business key, not component mount count." },
      ],
      tip: "Before adding state, ask where its authority lives, whether it survives refresh, and who invalidates it.",
    },
    {
      id: "browser-performance",
      eyebrow: "2.3 · Frontend Development",
      title: "Browsers and Performance",
      summary: "Performance work starts with user metrics and the browser pipeline: measure the bottleneck before reducing network, main-thread, or rendering cost.",
      formula: "load → parse → execute → layout → paint → interact",
      points: [
        "Understand the DOM, CSSOM, rendering pipeline, storage, and caching, and use Performance, Network, and Lighthouse to locate bottlenecks.",
        "Improve LCP, INP, and CLS through critical-resource planning, code splitting, image sizing, shorter tasks, and stable layouts.",
        "Choose CSR, SSR, or SSG according to content and interaction needs rather than adopting runtime complexity for its own sake.",
      ],
      examples: [
        { source: "lazy-load below-the-fold routes", translation: "Reduce initial JavaScript while avoiding a new waterfall of serial requests." },
        { source: "declare image width and height", translation: "Let the browser reserve space and reduce cumulative layout shift." },
      ],
      tip: "Record the metric and reproduction conditions before changing code; optimization without a baseline is usually just change.",
    },
    {
      id: "backend-api",
      eyebrow: "3.1 · Backend and Data",
      title: "Backend and API Design",
      summary: "The backend owns trusted business rules, data boundaries, and resource lifecycles. APIs should model domain capabilities rather than one page.",
      formula: "parse → authenticate → validate → business service → data access → stable response",
      points: [
        "Learn the Node.js runtime, routing, middleware, dependency injection, error handling, configuration, and structured logging.",
        "Design REST APIs around resources and use cases with consistent pagination, errors, idempotency, and versioning; reuse existing APIs first.",
        "Keep business rules in testable services instead of scattering them across route handlers, ORM callbacks, and frontend components.",
      ],
      examples: [
        { source: "PATCH /api/projects/:id", translation: "Update only provided fields while validating authorization and the resource version." },
        { source: "Idempotency-Key: create-order-123", translation: "Prevent duplicate side effects when a create request may be retried." },
      ],
      tip: "A page change does not automatically require an API change; first check whether the existing API already expresses the capability.",
    },
    {
      id: "database-modeling",
      eyebrow: "3.2 · Backend and Data",
      title: "Databases and Data Modeling",
      summary: "Database design begins with business facts, constraints, and query patterns. An ORM improves productivity but does not replace SQL or transaction knowledge.",
      formula: "entities + relationships + constraints + indexes + transactions",
      points: [
        "Learn tables, keys, foreign keys, unique constraints, normalization, joins, aggregation, indexes, and EXPLAIN.",
        "Use transactions for writes that must succeed together and migrations for schema evolution instead of editing production structures directly.",
        "Start with PostgreSQL as the reliable source of truth and add Redis, search, or object storage only for measured needs.",
      ],
      examples: [
        { source: "UNIQUE (user_id, project_id)", translation: "Let the database prevent a user from bookmarking the same project twice." },
        { source: "INDEX (status, created_at)", translation: "Match index order to common filtering and sorting rather than indexing every column." },
      ],
      tip: "Write the most important queries before designing tables and indexes; the model must support both writes and reads.",
    },
    {
      id: "auth-security",
      eyebrow: "3.3 · Backend and Data",
      title: "Authentication, Authorization, and Security",
      summary: "Authentication asks who you are; authorization asks what you may do. External input and permission checks belong at trusted backend boundaries.",
      formula: "authentication + resource authorization + validation + least privilege + audit",
      points: [
        "Understand sessions, cookies, tokens, OAuth, password hashing, and secret management, and prefer mature authentication solutions.",
        "Mitigate XSS, CSRF, SQL injection, SSRF, brute force, and secret leakage with security headers and rate limits.",
        "Enforce ownership and roles on the server. Hiding a frontend button improves UX but provides no security boundary.",
      ],
      examples: [
        { source: "project.ownerId === session.userId", translation: "Verify ownership on the server before reading or changing a private resource." },
        { source: "HttpOnly + Secure + SameSite", translation: "Reduce script access, plaintext transport, and cross-site request risk for session cookies." },
      ],
      tip: "Do not invent cryptography or authentication protocols; prefer reviewed libraries, hosted services, and secure defaults.",
    },
    {
      id: "testing-observability",
      eyebrow: "4.1 · Engineering and Delivery",
      title: "Testing and Observability",
      summary: "Tests prove expected behavior while observability explains real runtime behavior. Together they shorten the path from failure to repair.",
      formula: "static checks + unit + integration + E2E + logs/metrics/traces",
      points: [
        "Test critical business rules, APIs, and user journeys while avoiding fragile coupling to internal implementation details.",
        "Run lint, typecheck, tests, and builds in CI, and make every failure reproducible.",
        "Use structured logs with request IDs, core metrics, error tracking, and alerts instead of depending on console.log in production.",
      ],
      examples: [
        { source: "register → sign in → create project → refresh", translation: "One E2E test covers the most important cross-layer user value path." },
        { source: "request_id + user_id + duration_ms", translation: "Correlate identity, latency, and errors without logging passwords or tokens." },
      ],
      tip: "Test behaviors that would lose user data, violate permissions, or break a core revenue path first.",
    },
    {
      id: "delivery-capstone",
      eyebrow: "4.2 · Engineering and Delivery",
      title: "Deployment and Capstone",
      summary: "Turn the local app into a continuously deliverable product, then integrate the full roadmap through one capstone with real constraints.",
      formula: "code → CI → artifact → migration → deploy → health check → monitor and roll back",
      points: [
        "Understand environment variables, Docker, reverse proxies, domains, TLS, migrations, backups, and the basics of zero-downtime deployment.",
        "Include authentication, CRUD, search or filtering, permissions, persistence, tests, logs, and a live deployment in the capstone.",
        "Document architecture, tradeoffs, setup, and verification in a README; plan with issues and review technical debt after delivery.",
      ],
      examples: [
        { source: "team task-management platform", translation: "Members, roles, task states, comments, activity logs, filters, notifications, and access control." },
        { source: "AI knowledge-base application", translation: "Upload, background processing, cited retrieval, quotas, recovery, and evaluation." },
      ],
      tip: "Choose one primary problem, deliver an end-to-end thin slice, then add reliability and experience layer by layer.",
    },
  ],
};
