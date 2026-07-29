import type { NoteLessonPointDetail } from "@/content/types";

export const fullstackPointDetailsEnglish = {
  "learning-strategy": [
    {
      title: "Choose a primary stack and define learning boundaries",
      explanation: "A primary stack lets language, typing, package-management, and debugging knowledge compound. TypeScript can span the browser and Node.js, React supplies the UI model, and PostgreSQL supplies relational storage; the choice reduces variables during learning rather than claiming these tools are universally best.",
      concepts: [
        "Separate durable foundations such as HTTP, SQL, and state modeling from replaceable tools such as a router, ORM, or hosting provider.",
        "Keep a deliberate defer list and add a framework, database, or cloud service only when the main project produces a concrete requirement.",
      ],
      application: "Write a short decision record showing how the stack covers the project's UI, API, data, and deployment needs. Name three alternatives you are deferring and the evidence that would trigger reconsideration.",
      pitfalls: ["Changing frameworks with every course and repeatedly relearning setup instead of debugging and delivery.", "Treating a technology choice as an identity rather than a decision that can be revisited."],
    },
    {
      title: "Organize learning around working outcomes",
      explanation: "Knowledge becomes skill only after it meets real input, failures, and constraints. Every stage should add an operable, testable increment to the same project so the next stage builds on earlier work.",
      concepts: [
        "Use input to form a model, closed-book practice to expose gaps, project integration to meet cross-layer problems, and review to preserve reusable judgment.",
        "Every task needs a definition of done such as an accessible page, reproducible API call, automated test, or public health check.",
      ],
      application: "Structure a week as understand, implement from memory, integrate, test, and review. If you cannot recreate the core flow from an empty file without the tutorial, the topic is not complete.",
      pitfalls: ["Using hours watched, bookmarks, or course completion as the measure of progress.", "Practicing only the happy path and never creating empty, error, concurrency, or network-failure cases."],
    },
    {
      title: "Run evidence-based retrospectives",
      explanation: "Engineering notes should help a future reader reproduce a result. Useful evidence names the goal, environment, reproduction, observation, root cause, fix, and verification; Git history should express understandable capability increments.",
      concepts: [
        "README files explain how to run and verify, issues capture problem boundaries, commits show implementation changes, and tests or live URLs prove behavior.",
        "Classify a blocker as a knowledge gap, implementation defect, tooling issue, or unclear requirement, then give each category a prevention action.",
      ],
      application: "Each week, pick one finished feature and explain or rebuild it with notes closed. Verify the result against commits, test output, and live behavior; improve any evidence that would not let your future self reproduce it.",
      pitfalls: ["Saving only the final command without the failed observations or eliminated causes.", "Making commits so large that changes cannot be tied to a learning objective."],
    },
  ],
  "web-and-http": [
    {
      title: "Trace the complete URL-to-page path",
      explanation: "The browser parses a URL, resolves DNS, establishes TCP or QUIC and TLS, sends HTTP, then parses dependencies and builds and paints the page. A failure or delay can occur at every stage.",
      concepts: [
        "DNS maps names, TLS protects transport and identifies the server, HTTP defines exchange semantics, and the browser schedules resources and rendering.",
        "DNS, connection, TTFB, and content-download timings point to different bottlenecks; a slow page is not automatically a slow API.",
      ],
      application: "Preserve Network logs for a real reload and annotate redirects, the document, critical assets, and API dependencies. Use curl to confirm the final URL, HTTP status, and response headers independently.",
      pitfalls: ["Editing React immediately after a blank screen without confirming that HTML, scripts, and APIs loaded.", "Ignoring redirects, proxies, service workers, or cache when comparing observed requests."],
    },
    {
      title: "Define HTTP contracts and failure layers",
      explanation: "Methods express intent, status codes express protocol outcomes, headers carry metadata, and the body carries the resource or error. Network failure, HTTP failure, and business rejection are separate layers with different recovery actions.",
      concepts: [
        "GET should be safe, POST commonly creates or invokes an action, PUT replaces, PATCH updates selected fields, and DELETE removes.",
        "4xx requires a client-facing response, 5xx means the server failed to fulfill the request, while 200, 201, and 204 also have distinct success meanings.",
      ],
      application: "Create a contract table for success, validation, unauthenticated, forbidden, missing, conflict, and internal-error responses. Ensure the client branches on stable codes rather than changeable prose.",
      pitfalls: ["Returning HTTP 200 for every outcome and inventing a JSON status that caches and monitoring cannot understand.", "Handling only Promise rejection even though fetch resolves normally for 4xx and 5xx responses."],
    },
    {
      title: "Diagnose caching, cookies, and CORS independently",
      explanation: "Caching controls response reuse, cookies commonly carry browser sessions, and CORS limits cross-origin script access. They share HTTP headers but solve different problems, so diagnosis must inspect the actual exchange.",
      concepts: [
        "max-age, no-cache, no-store, and ETag revalidation have different semantics, especially for identity-bound responses.",
        "SameSite, Secure, and HttpOnly control cookie transmission and script access; a CORS preflight checks allowed methods and custom headers.",
      ],
      application: "Call the same endpoint from the browser and curl and compare Origin, credentials, preflight, cookies, and cache headers. Browser-only failure points to browser policy or credential configuration, not general endpoint reachability.",
      pitfalls: ["Treating CORS as a server-to-server firewall or trying to set response CORS headers in frontend code.", "Putting private user responses in a shared cache."],
    },
  ],
  "html-css-accessibility": [
    {
      title: "Semantic structure and accessible names",
      explanation: "HTML elements describe responsibility, not merely styling hooks. Landmarks organize the document, buttons and links supply distinct keyboard behavior, and labels, image alternatives, and heading hierarchy make the page understandable to assistive technology and search engines.",
      concepts: [
        "Buttons perform actions and links navigate; labels programmatically name controls, while described-by relationships connect hints and errors.",
        "Informative alt text describes an image's purpose in context, decorative images use empty alt, and heading levels represent hierarchy rather than font size.",
      ],
      application: "Inspect landmarks, roles, and names in the accessibility tree, then complete navigation and form submission with Tab, Enter, and Space. The reading order should remain coherent with CSS removed.",
      pitfalls: ["Using an onClick div as a button and losing focus, keyboard, and disabled behavior.", "Using placeholders as labels or skipping heading levels to achieve a visual size."],
    },
    {
      title: "Box model, layout systems, and responsive constraints",
      explanation: "The box model determines occupied space and the cascade resolves competing rules. Normal flow should carry page structure, Flexbox should solve one-dimensional alignment, Grid should solve rows and columns, and positioning should handle local overlays.",
      concepts: [
        "Flex layouts require understanding axes, shrinking, and min-width; Grid requires tracks, minmax, auto-fit, and intrinsic content size.",
        "Mobile-first media queries enhance the layout when content stops working rather than reproducing fixed coordinates for named devices.",
      ],
      application: "Build the structure without absolute positioning, fixed heights, or negative margins, then resize continuously to find content-driven breakpoints. Test long titles, URLs, and translated copy.",
      pitfalls: ["Recreating the whole design with left/top pixel coordinates that break under zoom or new content.", "Adding !important for every conflict instead of tracing state, class order, and cascade origin."],
    },
    {
      title: "Validate across size and accessibility preferences",
      explanation: "Responsive completion means core tasks survive narrow screens, zoom, keyboard input, and user preferences. Validation needs visual, interaction, and hostile-content cases plus both automated and manual checks.",
      concepts: [
        "Check 320px through desktop and 200% zoom for document-level overflow, obscured content, and unusable targets.",
        "Normal text generally needs 4.5:1 contrast, large text and meaningful controls 3:1, and reduced-motion preferences should remove unnecessary large movement.",
      ],
      application: "Use a repeatable checklist: resize continuously, zoom, traverse by keyboard, submit invalid forms, enable reduced motion, and inspect contrast and target size. Save before-and-after evidence.",
      pitfalls: ["Relying only on an automated audit and missing focus order, modal restoration, and real task completion.", "Removing focus outlines or communicating success and failure only through red and green."],
    },
  ],
  "javascript-typescript": [
    {
      title: "Understand runtime and asynchronous execution",
      explanation: "Scope controls visibility, closures retain creation environments, prototypes share behavior, and modules establish boundaries. The event loop coordinates the call stack, microtasks, and task queues, explaining stale closures, ordering, and asynchronous errors.",
      concepts: ["Promise reactions run as microtasks before the next timer task after the current stack clears.", "An async function returns a Promise; await pauses that function only, and errors must be caught or propagated at a deliberate boundary."],
      application: "Predict the order of synchronous logs, Promises, await, and timers before running the code. During debugging, record where an error is created, wrapped, swallowed, or translated.",
      pitfalls: ["Assuming await blocks the entire thread or serializing independent requests.", "Misdiagnosing a callback's captured stale value as random framework behavior."],
    },
    {
      title: "Model legal states with types",
      explanation: "TypeScript is most valuable when illegal states are hard to represent. Unions model mutually exclusive states, generics preserve input-output relationships, and guards narrow unknown data; any bypasses those protections.",
      concepts: ["A discriminated union can model idle, loading, success, and error without contradictory data/error combinations.", "A generic should encode a real relationship, not add parameters merely to appear reusable."],
      application: "Replace several loading/data/error fields with a discriminated union and use a never check for exhaustiveness. Repeated non-null assertions usually indicate that the model is missing a constraint.",
      pitfalls: ["Using as to force unknown data into a type without runtime evidence.", "Making every object field optional so incomplete states are all accepted."],
    },
    {
      title: "Validate runtime input and isolate side effects",
      explanation: "Types disappear after compilation, so API responses, forms, environment values, and storage remain untrusted unknowns. Parse them before domain logic and isolate network, time, randomness, and storage behind replaceable boundaries.",
      concepts: ["Schemas should validate format, length, enums, and cross-field rules and return errors that can be mapped to users.", "Pure functions transform explicit input; adapters own I/O, retries, and cleanup."],
      application: "Treat an API response as unknown, parse it, and test missing, mistyped, and business-invalid data. Domain-function tests should not require a real network or system clock.",
      pitfalls: ["Annotating a server response with an interface and mistaking that declaration for validation.", "Combining conversion, network calls, storage writes, and global mutation in one function."],
    },
  ],
  "react-architecture": [
    {
      title: "Rendering, state snapshots, and Effects",
      explanation: "React renders UI from current props and state, and handlers observe the snapshot that created them. Effects synchronize with external systems such as subscriptions or browser APIs; they are not a default tool for ordinary derivation.",
      concepts: ["Compute derived values during rendering; put only information that must persist and affect UI into state.", "Effect dependencies describe reactive reads and cleanup cancels subscriptions, requests, or timers, including under Strict Mode checks."],
      application: "For every Effect, name the external object it synchronizes. If the answer is only 'calculate B from A state,' remove it and calculate B during render; test rapid parameter changes for stale responses.",
      pitfalls: ["Copying props into state and synchronizing them with an Effect, creating two authorities.", "Omitting dependencies to suppress reruns while preserving stale closures or leaks."],
    },
    {
      title: "Reuse layers and component APIs",
      explanation: "Check Storybook and foundational UI before composing domain components, and add a new primitive only when existing capabilities truly fail. A good API expresses business intent and accessibility rather than page-specific styling knobs.",
      concepts: ["Primitives own styling and accessibility, domain components express Project or Order concepts, and pages assemble data and routes.", "Prefer composition and clear variants over copied components or conflicting boolean switches."],
      application: "Search existing components, types, and stories before implementation and record why a new component is necessary. Test the abstraction against at least two real uses.",
      pitfalls: ["Copying Button, Modal, or Card for one page and creating inconsistent behavior.", "Abstracting a single use too early until its API is harder to understand than the page."],
    },
    {
      title: "One-way data flow and responsibility boundaries",
      explanation: "Owners pass data downward and child events express intent upward. Query or page layers own remote data, domain services own transformations, and presentational components render inputs, making each layer independently understandable.",
      concepts: ["Lift state only to the lowest common owner that needs it, not automatically to a global store.", "Presentational components should not assemble hidden URLs, read implicit globals, or duplicate business rules."],
      application: "Draw the owner, downward data, and upward events for one core interaction. Split components that fetch, authorize, transform domain data, and control dialogs all at once.",
      pitfalls: ["Keeping the same fact in multiple components and synchronizing copies with Effects.", "Putting all data in global state to avoid props and hiding ownership and invalidation."],
    },
  ],
  "frontend-data-flow": [
    {
      title: "Classify state and choose one authority",
      explanation: "Server state is a cache of remote facts, URL state identifies a navigable view, form state holds unsubmitted input, and UI state controls short-lived interaction. Classification gives each value one authority and a tool that matches its lifetime.",
      concepts: ["A query cache owns stale time, refetch, invalidation, and deduplication rather than ordinary React state.", "Search, filtering, sort, page, or selected detail belong in the URL when they must be shareable or navigable."],
      application: "Inventory every page value with its source, owner, persistence, and invalidation event. A view that should survive refresh cannot exist only in component memory.",
      pitfalls: ["Copying a server list into local state and letting cache and UI diverge.", "Putting hover and every dialog switch into a global store."],
    },
    {
      title: "Manage the form lifecycle and map errors",
      explanation: "A form includes field values, touched and dirty state, client rules, submission state, and server rejection. Client validation improves speed; the server remains authoritative, and each error needs a field or form-level recovery location.",
      concepts: ["Prevent duplicate side effects while submitting and define reset, navigation, or cache updates after success.", "Associate field errors accessibly; conflicts, permission failures, and network errors belong at form level."],
      application: "List each possible error, its source, display location, and recovery. On a slow network, click submit repeatedly and confirm one write and focus on the first invalid field.",
      pitfalls: ["Clearing all input after a server rejection.", "Displaying only 'Something failed' without a cause or next action."],
    },
    {
      title: "Treat routes as asynchronous boundaries",
      explanation: "A route defines URL identity, loading responsibility, access entry, and recovery, not just a component switch. Each route needs loading, empty, error, not-found, and normal states and must resist stale requests and failed optimistic updates.",
      concepts: ["Stable query keys include resource identity and every parameter that changes results; old responses cannot overwrite a newer view.", "401, 403, 404, and general failure lead to login, access explanation, missing-resource handling, or retry."],
      application: "Switch rapidly between two details, navigate back and forward, and refresh a deep link. Confirm URL, title, data, and errors agree, then force an optimistic update to fail and verify rollback.",
      pitfalls: ["Representing a missing resource as an empty list and hiding URL or permission defects.", "Redirecting every error home so the user loses context and cannot retry."],
    },
  ],
  "browser-performance": [
    {
      title: "Map browser work before optimizing",
      explanation: "The browser loads, parses, executes, calculates styles, lays out, paints, and composites. A performance claim must identify the stage: waterfalls are network work, long tasks block the main thread, and forced layout belongs to rendering.",
      concepts: ["Network reveals priority and cache, Performance reveals tasks and layout, and Coverage or bundle analysis reveals unused code.", "Hold device, network, production build, and sampling method constant when comparing an experiment."],
      application: "Record a production mobile baseline and mark critical requests, the longest main-thread tasks, and layout events. Every conclusion should point to a resource or call stack.",
      pitfalls: ["Benchmarking development mode with debugging and unoptimized assets.", "Treating one Lighthouse score as evidence without preserving conditions and traces."],
    },
    {
      title: "Use LCP, INP, and CLS to locate user pain",
      explanation: "LCP measures when primary content appears, INP measures interaction-to-paint delay, and CLS measures unexpected movement. Optimization begins with the actual metric element, interaction, or shift source.",
      concepts: ["LCP often depends on server response, hero media, fonts, and render blockers; INP often depends on long synchronous work.", "Missing media dimensions, inserted content, and font swaps cause CLS; reserved space prevents it."],
      application: "Record the LCP element, slowest interaction and long task, and each layout shift. Change image sizing, route splitting, or task scheduling separately and ensure no new waterfall appears.",
      pitfalls: ["Hiding useful above-the-fold content to improve a metric.", "Adding memoization or splitting everywhere and increasing comparison and loading overhead."],
    },
    {
      title: "Select CSR, SSG, and SSR by route needs",
      explanation: "Rendering follows update frequency, first-view needs, personalization, and operating cost. SSG suits build-time public content, SSR suits request-time HTML, and CSR suits authenticated interaction; a product can mix them by route.",
      concepts: ["SSG caches cheaply but rebuilds for updates; SSR improves initial HTML but adds servers, caching, and hydration.", "CSR is operationally simple but requires controlled bundles, loading states, and search visibility."],
      application: "For each route, record public status, personalization, update rate, SEO, and allowed staleness, then justify rendering and cache behavior.",
      pitfalls: ["Rendering every route on the server merely because the framework supports it.", "Assuming SSR automatically fixes slow APIs, large bundles, or hydration work."],
    },
  ],
  "backend-api": [
    {
      title: "Own the runtime and request lifecycle",
      explanation: "A production API includes startup configuration and dependencies, request parsing and authentication, consistent failure translation, and graceful shutdown that stops traffic and closes resources.",
      concepts: ["Middleware owns cross-cutting request IDs, auth, and logging; dependency injection makes databases, clocks, and external clients explicit.", "Structured logs use stable fields and causal errors while redacting secrets."],
      application: "Diagram startup to shutdown and test missing configuration, database loss, unhandled failure, and termination. One requestId should connect all events for a failed request.",
      pitfalls: ["Opening implicit global connections during module import.", "Logging only an error string without type, context, or cause."],
    },
    {
      title: "Design contracts around resources and use cases",
      explanation: "An API represents stable business resources, not one page's component tree. Paths, methods, pagination, errors, idempotency, and concurrency rules need consistency, and existing APIs and types should be checked before adding another.",
      concepts: ["Lists define filters, order, cursor, and limits; writes define validation, version checks, duplicate requests, and partial-success behavior.", "Stable errors expose a machine code, useful message, and optional field path without leaking internals."],
      application: "Review an OpenAPI or request-response table first, then verify it through curl and integration tests. A visual redesign with unchanged use cases should usually recombine existing APIs.",
      pitfalls: ["Creating a page-specific duplicate endpoint with different permissions and field semantics.", "Leaving writes without limits, idempotency, or version checks."],
    },
    {
      title: "Keep business rules in a service boundary",
      explanation: "Routes translate protocol input, repositories persist, and services own business invariants and transitions. Centralized rules can be tested without HTTP or ORM callbacks.",
      concepts: ["Typed domain errors represent conflicts, illegal transitions, and missing resources before HTTP mapping.", "A transaction usually surrounds a complete use case, not each repository call separately."],
      application: "Move a permissioned, multi-write transition into a service with injected repository and clock, then test success, conflict, forbidden, and rollback.",
      pitfalls: ["Scattering rules across hidden frontend buttons, route conditionals, and database hooks.", "Passing Request and Response into the domain service."],
    },
  ],
  "database-modeling": [
    {
      title: "Turn business invariants into relational constraints",
      explanation: "Tables record facts, keys establish identity and relationships, and unique or check constraints protect invariants. Normalization prevents update anomalies while indexes serve proven queries at a write and storage cost.",
      concepts: ["NOT NULL, UNIQUE, FOREIGN KEY, and CHECK provide a concurrent safety boundary beyond application prechecks.", "Composite-index order should match equality filters, ranges, and sorting for a real query."],
      application: "Write invariants and five high-value queries before the ER diagram. Give every non-primary index a concrete SQL consumer and expected selectivity.",
      pitfalls: ["Indexing every column without evidence.", "Encoding relationships as comma-separated IDs or unconstrained JSON."],
    },
    {
      title: "Control transactions, concurrency, and migrations",
      explanation: "Transactions make a set of changes atomic, while isolation controls concurrent visibility. Schema evolution must be repeatable and compatible with the deployment window in which old code and new structure can coexist.",
      concepts: ["Unique constraints, locks, optimistic versions, and atomic updates solve different races; check-then-write alone is unsafe.", "Expand-and-contract adds compatible structure, backfills and switches usage before removing the old structure."],
      application: "Run two identical writes concurrently and prove only a legal result survives. For a large migration, assess locking, batched backfill, rollback, and old-app compatibility.",
      pitfalls: ["Editing production schema manually without migration history.", "Calling a slow external API while a database transaction holds locks."],
    },
    {
      title: "Add specialized storage only from evidence",
      explanation: "PostgreSQL covers most early transactional and query needs. Redis, search, and object storage solve specialized caching, retrieval, or binary concerns but add consistency, recovery, and operational boundaries.",
      concepts: ["A cache needs key design, TTL, invalidation, stampede handling, and source-outage behavior.", "Search indexes and object stores need an authority, synchronization process, and rebuild plan."],
      application: "Prove a query, capacity, or feature limit first, then document authority, acceptable lag, degradation, and recovery. Optimize the existing query when those answers are missing.",
      pitfalls: ["Using Redis as a default database without durability and eviction planning.", "Adding several stores at tiny scale and spending development time on synchronization."],
    },
  ],
  "auth-security": [
    {
      title: "Secure authentication, sessions, and credentials",
      explanation: "Authentication proves identity and sessions link later requests to it. Passwords need purpose-built slow hashing, and session or token systems need expiry, rotation, and revocation, including complete login, refresh, logout, and recovery flows.",
      concepts: ["Cookie sessions require deliberate Secure, HttpOnly, and SameSite behavior.", "Passwords, tokens, and session identifiers must stay out of URLs, errors, logs, and analytics."],
      application: "Trace credentials through input, transport, verification, storage, and revocation. Test expiry, revoked sessions, reused refresh tokens, and multi-device logout.",
      pitfalls: ["Keeping long-lived tokens in script-readable storage without a matching XSS model.", "Inventing password crypto or logging complete authorization headers."],
    },
    {
      title: "Enforce resource authorization and least privilege",
      explanation: "Authorization checks the current subject, concrete resource, action, and fields on every trusted backend operation. Roles cover broad capability while ownership and membership scope access to individual resources.",
      concepts: ["RBAC, ownership, and attribute rules can combine but should meet at one reviewable policy boundary.", "Default deny, narrow service accounts, and least privilege limit breach impact."],
      application: "Build a subject-by-action matrix and test two users, an administrator, and anonymous access for horizontal escalation. Changing a URL ID must never expose another user's data.",
      pitfalls: ["Filtering list queries but forgetting detail, export, update, or delete.", "Treating a hidden frontend button as authorization."],
    },
    {
      title: "Defend input boundaries and preserve audit evidence",
      explanation: "Validate all external data and encode output for its destination. XSS, CSRF, SQL injection, SSRF, and uploads cross different boundaries and require layered query parameters, origin checks, CSP, and network restrictions.",
      concepts: ["Parameterized SQL separates syntax from data; output encoding and CSP constrain scripts; CSRF concerns automatically attached browser credentials.", "Rate limits, body caps, file inspection, and outbound-address restrictions control abuse."],
      application: "Threat-model the data flow: attacker-controlled input, assets, trust boundaries, and controls. Audit who performed a sensitive action on which resource without storing secrets.",
      pitfalls: ["Assuming an ORM prevents authorization flaws and every injection class.", "Installing security headers without testing permissions and data flows."],
    },
  ],
  "testing-observability": [
    {
      title: "Choose a test layer from risk",
      explanation: "Static checks catch type and policy problems, unit tests prove pure rules, integration tests prove module boundaries, and E2E proves a few critical journeys. The mix follows failure cost and feedback speed rather than a fixed pyramid percentage.",
      concepts: ["Keep business-rule coverage fast and reserve E2E for cross-layer login, creation, payment, or other core journeys.", "Assert public behavior and stable output instead of internal calls, DOM shape, or noisy snapshots."],
      application: "For each high-risk use case, name its likely failure and the cheapest reliable layer. An E2E failure should be narrowed quickly by lower-level tests or diagnostics.",
      pitfalls: ["Chasing coverage percentage with tests for getters and implementation details.", "Mocking every database and network boundary so real contracts are never exercised."],
    },
    {
      title: "Make tests deterministic and CI evidential",
      explanation: "Reliable tests control time, randomness, network, and data, run independently, and clean resources. CI uses a clean, production-like environment for types, tests, builds, and migration checks and retains failure evidence.",
      concepts: ["Use isolated test data, rollback, or unique naming; external substitutes must preserve explicit contracts.", "Investigate flaky races, shared state, and wait conditions instead of masking them with unlimited retries."],
      application: "Randomize and parallelize tests and repeat critical suites. Save seed, logs, screenshots, and traces on failure, and build from a clean checkout.",
      pitfalls: ["Using fixed sleeps for asynchronous UI.", "Skipping the production build, migrations, or static-content validation in CI."],
    },
    {
      title: "Connect logs, metrics, and traces",
      explanation: "Logs record events, metrics reveal trends and alerts, and traces connect causal work across services. Shared request, trace, user, and resource context lets an alert lead to the exact failure.",
      concepts: ["Begin with latency, traffic, errors, and saturation and define alerts around user-facing SLI/SLOs.", "Use structured events rather than free text and keep unbounded IDs out of metric labels."],
      application: "Drill from an API error-rate alert to route metrics, a slow dependency span, and correlated logs without deploying new debug code.",
      pitfalls: ["Producing huge unstructured logs without retention or privacy rules.", "Monitoring only CPU and process uptime instead of user success and latency."],
    },
  ],
  "delivery-capstone": [
    {
      title: "Make builds, configuration, and migrations repeatable",
      explanation: "The same commit and locked dependencies should create a traceable artifact, environment differences should come from validated external configuration, and secrets need dedicated injection. Database changes join the release order and compatibility contract.",
      concepts: ["CI builds once in a clean environment, labels the artifact with its commit, and promotes that artifact across environments.", "Separate public configuration, server secrets, and build-time client variables and fail fast when required values are absent."],
      application: "From a clean machine, follow the README through install, build, migration, and start. Confirm missing configuration and old schema fail clearly instead of running partially.",
      pitfalls: ["Editing production code or dependencies by hand until the running artifact no longer matches Git.", "Putting secrets in the repository, client bundle, or public logs."],
    },
    {
      title: "Verify deployment, health, and rollback",
      explanation: "A platform's success status proves an action finished, not that users can complete a task. Verify public HTTP, rendered behavior, core read/write paths, and migration contracts, and pair rollout strategy with readiness and rollback.",
      concepts: ["Liveness means restart may be needed, readiness means traffic is safe, and a business smoke test proves real dependencies and workflows.", "Rollback must account for backward-compatible database changes; irreversible migrations can block old code."],
      application: "After release, check external URLs, assets, login, critical reads, writes, refresh, errors, and latency. Rehearse one bad build and migration failure with documented recovery.",
      pitfalls: ["Declaring completion when the platform says READY without browser and business verification.", "Returning 200 from health checks regardless of initialization or dependency state."],
    },
    {
      title: "Prove end-to-end capability with the capstone",
      explanation: "A capstone solves a clear user problem and connects requirements, UI, API, data, security, testing, deployment, and operations. Its scope should be small enough to finish every quality loop.",
      concepts: ["Define the user, core task, non-goals, and acceptance first, then deliver vertical usable slices.", "Document architecture, decisions, threats, tests, runbooks, and limitations rather than only screenshots."],
      application: "Observe a real user completing the core task, then ask another developer to start the repository and diagnose a failure from docs alone. Both are evidence of product and engineering completion.",
      pitfalls: ["Using the project as a technology showroom with unnecessary services, queues, and databases.", "Showing only a happy-path video without a live build, tests, failures, or maintenance notes."],
    },
  ],
} satisfies Record<string, NoteLessonPointDetail[]>;
