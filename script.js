/* ============ Config ============ */
var EMAIL = "knp13012006@gmail.com";

/* ============ Theme (light / dark) ============ */
var root = document.documentElement;
var themeBtn = document.getElementById("themeBtn");
var themeIc = document.getElementById("themeIc");

function currentTheme() {
  var set = root.getAttribute("data-theme");
  if (set) return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function paintToggle() {
  var dark = currentTheme() === "dark";
  themeIc.textContent = dark ? "☀" : "☾";
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
themeBtn.addEventListener("click", function () {
  var next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("devlok-theme", next); } catch (e) {}
  paintToggle();
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
  var saved = null;
  try { saved = localStorage.getItem("devlok-theme"); } catch (e) {}
  if (!saved) { root.removeAttribute("data-theme"); paintToggle(); }
});
paintToggle();

/* ============ Content ============ */
var ICONS = { biz: "▦", web: "◧", crm: "☺", shop: "◈", auto: "⟳", ai: "✦" };
var SOL = [
  ["biz", "Custom Business Software", "Internal platforms, dashboards and workflow systems."],
  ["crm", "CRM & Customer Management", "Lead, customer, sales and relationship management."],
  ["auto", "Operations Management", "Projects, employees, tasks, documents and reporting."],
  ["shop", "E-commerce", "Professional online shopping experiences and administration systems."],
  ["ai", "AI & Automation", "Document intelligence, workflow automation and AI-powered business tools."],
  ["web", "Custom Web Applications", "Purpose-built applications for specific business requirements."]
];
var HOME = [
  ["biz", "Business Software", "Custom platforms designed around specific business workflows."],
  ["web", "Web Applications", "Modern, responsive applications for customers and internal teams."],
  ["crm", "CRM & Operations", "Tools for managing customers, sales, projects and daily operations."],
  ["shop", "E-commerce", "Modern online stores with customer and administration experiences."],
  ["auto", "Automation", "Digital workflows that reduce repetitive manual work."],
  ["ai", "AI Solutions", "AI-powered tools for documents, knowledge and business processes."]
];
var P = {
  werkflow: {
    n: "WerkFlow", ind: "Construction & Service Management", kind: "kan",
    d: "A centralized platform that brings projects, employees, tasks, documents and finances into one workspace.",
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    feat: ["Projects, tasks and teams in one workspace", "Documents, expenses and invoices", "Role-based access and audit log", "Live dashboard and reports"],
    ov: "DEVLOK WerkFlow is a centralized construction and service management platform that brings projects, employees, tasks, documents and finances into one workspace.",
    ch: "German construction and service SMEs often manage operations with fragmented, disconnected tools, which makes projects hard to track and management visibility poor.",
    sol: "WerkFlow centralizes these processes in a single web-based platform: one source of operational truth with role-based access, live dashboards and a complete workflow from customer to invoice.",
    imp: "",
    x: {
      who: ["Construction & Service industry", "SMEs in Germany", "20–100 employees"],
      roles: ["Company Administrators", "Project Managers", "Employees / Workers", "Finance / Office Staff", "Management"],
      probs: ["Excel spreadsheets for project tracking, budgets and task lists", "Email, phone and WhatsApp for communication", "Paper documents for contracts, plans and receipts", "Separate files and folders for project information", "Project data maintained by hand in several places"],
      results: ["Duplicate information", "Lost documents", "Outdated Excel files", "Difficult project tracking", "Poor management visibility", "Manual task assignment", "Difficult expense tracking", "Delayed invoicing", "No central audit history"],
      old: ["Customer", "Email / Phone / WhatsApp", "Project Manager", "Excel", "Paper documents", "Employees", "Separate files", "Accounting / Invoices"],
      pillars: ["Projects & Documents", "People & Tasks", "Finance & Expenses", "Reports"],
      diff: [
        ["German-market focus", "Built around German SMEs: GDPR-ready, DATEV-ready architecture, German terminology, EUR and DD.MM.YYYY formats."],
        ["Construction-specific", "Designed for building plans, material expenses, subcontractors and progress tracking, not a generic project tool."],
        ["End-to-end workflow", "Customer, project, task, employee, document, expense, invoice and report in one platform."],
        ["Swappable architecture", "Storage, auth and hosting can be replaced; multi-tenant isolation (companyId) is already modeled."]
      ],
      mods: [
        ["Authentication & roles", "JWT login with five roles: Admin, Project Manager, Employee, Finance, Management."],
        ["Dashboard", "Live KPIs, project progress bars, activity feed and upcoming deadlines."],
        ["Projects", "Detail workspace with tabs for tasks, team, documents, expenses, invoices and activity; budget vs actual cost."],
        ["Customers", "Contact details, project counts and open invoice totals."],
        ["Employees", "Status, skills, department and project assignments."],
        ["Tasks", "Priority and status tracking; project progress updates automatically."],
        ["Documents", "Validated file uploads linked to projects, customers, employees and invoices."],
        ["Expenses", "Categories with an approval workflow; costs roll up to the project."],
        ["Invoices", "Auto-numbering, VAT calculation, status workflow and overdue detection."],
        ["Reports", "Revenue by month plus project, task, expense and invoice charts."],
        ["Settings", "Company profile, users and roles, German locale (EUR, DD.MM.YYYY)."],
        ["Audit log", "Activity trail for important events such as task completed or invoice paid."]
      ],
      stepsTitle: "Demo scenario: from customer to invoice",
      steps: ["Admin logs in", "Creates a customer", "Creates a project with a budget", "Assigns a project manager", "Adds employees to the project", "Creates tasks (electrical, interior, material delivery, inspections)", "Employees update task statuses", "Manager uploads a building plan", "Employee records an expense", "Finance creates and sends an invoice", "Invoice stays outstanding until paid", "Dashboard updates automatically", "Manager reviews the reports"],
      stack: [["Frontend", "React 18, TypeScript, Tailwind CSS, React Router, Recharts, Lucide Icons, React Hook Form + Zod"], ["Backend", "Node.js, Express, TypeScript, Prisma ORM"], ["Database", "PostgreSQL (SQLite for local development)"], ["Auth & files", "JWT with bcrypt hashing; Multer uploads, replaceable with S3-compatible storage"], ["Tooling", "Vite, shared Zod validation schemas"]],
      sec: ["Password hashing with bcrypt", "JWT sessions and protected API endpoints", "Role-based authorization enforced on the backend, not only the frontend", "Zod input validation; Prisma guards against SQL injection", "File type validation and a 10 MB upload limit", "Secure HTTP headers and rate limiting on sensitive endpoints", "Audit logging of critical actions; secrets kept in environment variables", "GDPR-readiness: data minimization, access control, export and deletion capability"],
      imp: ["Less fragmentation: one workspace instead of Excel, email, WhatsApp and paper.", "Better visibility: live project progress, outstanding invoices and team workload for management.", "Faster invoicing: a streamlined path from expense to invoice to payment tracking.", "Audit trail: a complete activity history for key business events.", "Time savings: less duplicate data entry, manual status updating and document searching."],
      note: "The demo is seeded with fictional German data (24 projects, 38 employees, 20+ invoices) so the full workflow can be shown live. These figures are demo data, not client results.",
      done: ["Backend API with authentication, roles, validation and middleware", "Database schema and realistic seed data", "All feature pages from Dashboard to Settings", "Design system components", "File upload and Recharts reports", "Responsive layout, desktop first"],
      next: ["Production deployment", "Landing page and sales demo assets", "Notifications", "Dark mode", "CSV export", "PDF report generation"]
    }
  },
  nordiccrm: {
    n: "NordicCRM", ind: "CRM & Sales Management", kind: "crm",
    d: "A modern CRM platform that helps businesses manage companies, contacts, leads, deals and customer relationships in one centralized workspace.",
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    feat: ["Companies, contacts and leads", "One-click lead-to-deal conversion", "Visual Kanban sales pipeline", "Revenue dashboard and reports"],
    ov: "DEVLOK NordicCRM is a modern, European-focused CRM platform that centralizes the sales lifecycle, from first contact to closed deal, in a single workspace. It is built for businesses in Sweden, the Netherlands and Germany, with EUR/SEK support and a four-language interface.",
    ch: "European SMEs typically manage sales across disconnected tools, which leads to forgotten leads, missed follow-ups and no reliable view of the pipeline.",
    sol: "NordicCRM creates one central business workspace around three pillars: customers, sales and activities, with reports on top. The core journey is company, contact, lead, qualification, deal, proposal, won, revenue.",
    imp: "",
    x: {
      who: ["European SMEs", "Sweden · Netherlands · Germany", "EUR / SEK"],
      roles: ["Administrator", "Sales Manager", "Sales Representative", "Executive"],
      probs: ["Excel for lead lists, deal trackers and revenue sheets", "Email for customer conversations and proposals", "WhatsApp for follow-ups and quick coordination", "Personal notes holding critical account intelligence"],
      results: ["Forgotten leads", "Missed follow-ups", "Duplicated data", "Invisible pipelines", "Lost customer history when employees leave", "Unreliable revenue forecasting"],
      old: ["Excel", "Email", "WhatsApp", "Personal notes"], oldTitle: "Tools in use today", oldTags: true,
      pillars: ["Customers: companies & contacts", "Sales: leads, deals & pipeline", "Activities: tasks, notes & timeline", "Reports"],
      diff: [
        ["Complete sales journey", "Company to contact to lead to deal to won revenue, polished end to end rather than a long list of loose features."],
        ["European-ready", "Live English, German, Dutch and Swedish switcher, EUR/SEK currency and locale-based date formats."],
        ["Accessible by design", "Built to WCAG 2.1 AA guidelines: keyboard navigation, visible focus, ARIA labels and a keyboard alternative to drag-and-drop."],
        ["Multi-tenant ready", "Every business record carries an organization ID, so the data model can grow into isolated per-company SaaS tenants."]
      ],
      mods: [
        ["Authentication & roles", "Email/password login with JWT sessions and four roles, enforced on the backend."],
        ["Dashboard", "Revenue from won deals, period growth, pipeline value by stage, recent activity and upcoming tasks."],
        ["Companies", "Search, filters and a detail view with contacts, leads, deals, tasks, notes and activity."],
        ["Contacts", "People linked to companies, with search and filtering."],
        ["Leads", "Status workflow and eight lead sources, with one-click conversion to a deal and automatic company/contact de-duplication."],
        ["Deals & Kanban", "Lead, Qualified, Proposal and Won columns with drag-and-drop and a keyboard-friendly stage menu."],
        ["Tasks", "Priorities, due dates, overdue flagging and links to any CRM record."],
        ["Notes", "Plain-text notes attached to companies, contacts, leads and deals."],
        ["Activities", "17 event types logged automatically into a unified timeline."],
        ["Reports", "Revenue trend, pipeline by stage, sales performance with win rate, and leads by source."],
        ["Search & filtering", "Server-side search, filters, sorting and pagination across modules."],
        ["Localization & responsive UI", "Four-language switcher, collapsible mobile navigation and single-column mobile cards."]
      ],
      stepsTitle: "Demo scenario: from first contact to won deal",
      steps: ["Create a company", "Add a contact", "Create a lead with its source and estimated value", "Create a follow-up task", "Log a call activity", "Qualify the lead", "Convert the lead into a deal", "Move the deal through the pipeline to Proposal", "Add a note about the customer's decision", "Mark the deal as Won", "Dashboard updates revenue, customer count and activity"],
      stack: [["Frontend", "React 19, TypeScript, Tailwind CSS v4, React Router, Recharts, Lucide Icons"], ["Backend", "Node.js, Express 5, TypeScript, REST API"], ["Database", "PostgreSQL with Prisma ORM: 10 models, enums and indexed queries"], ["Auth", "bcrypt password hashing and JWT tokens"], ["Design", "DEVLOK Design System with shared tokens, Inter typeface"]],
      sec: ["Password hashing with bcrypt and JWT authentication", "Role-based access control enforced at the API, not only in the interface", "Input validation; Prisma guards against SQL injection", "Secrets kept in environment variables", "Activity and audit logging", "Data minimization, organization data isolation and user deactivation instead of deletion", "GDPR-considerate design; compliance is not claimed without a formal review"],
      imp: ["One central workspace instead of spreadsheets, email threads and personal notes.", "Fewer forgotten leads and missed follow-ups through tasks and activity logging.", "Clearer pipeline visibility with a Kanban board and value per stage.", "Customer history that stays with the company when team members change.", "More reliable revenue reporting based on won deals."],
      note: "The demo is seeded with fictional data (about 284 companies, 350 contacts and 142 leads). Revenue and growth figures shown in the demo are seed data, not client results.",
      done: ["Seven structured build phases, from foundation to portfolio launch", "Authentication with backend-enforced roles", "Companies, contacts, leads and deals with lead conversion", "Kanban pipeline with keyboard-accessible stage changes", "Tasks, notes and activity timeline", "Dashboard and four reports", "Responsive layout and four-language switcher"],
      next: ["Full German, Dutch and Swedish translations", "Admin user management interface", "Automated unit, API and UI tests", "Dark mode, CSV export and notifications", "Configurable pipelines", "Free-tier production deployment", "Email and calendar integrations"]
    }
  },
  bookflow: {
    n: "BookFlow", ind: "Booking & Customer Management", kind: "cal",
    d: "An appointment management platform for service businesses, spanning customer booking, admin operations, staff management and analytics.",
    tech: ["React", "Fastify", "TypeScript", "Prisma", "PostgreSQL"],
    feat: ["Online booking and availability engine", "Staff schedules and unified calendar", "Customer database and notifications", "Admin dashboard and analytics"],
    stageTag: "In development", demoLabel: "Request Walkthrough",
    ov: "BookFlow is a comprehensive appointment management system designed for modern service businesses. It spans customer-facing booking, administrative operations, staff management and business analytics, built as a TypeScript monorepo.",
    ch: "Service businesses such as salons, clinics, consultants and fitness centers struggle with fragmented tools, manual booking and limited customer self-service.",
    sol: "BookFlow turns \u201ccustomers need appointments and staff need to manage them\u201d into one connected system: customer booking, backend processing, admin operations, customer management and business analytics.",
    imp: "",
    demoText: "BookFlow is still in active development, so a live booking demo is not available yet. We can walk you through the architecture, specifications and current interfaces on request.",
    demoBtn: "Request a Walkthrough",
    x: {
      who: ["Service businesses", "Salons, clinics, consultants, fitness centers", "Multi-location ready"],
      roles: ["Super Admin", "Admin", "Manager", "Staff", "Customer"],
      probs: ["Separate systems for booking, calendar, CRM, payments and analytics", "Phone-based booking and paper records", "No-show tracking done by hand", "Little self-service or choice of communication channel for customers", "GDPR, data retention and audit requirements often unmet"],
      results: ["Fragmented tools", "Manual processes", "Scalability limits", "Compliance gaps", "Poor customer experience"],
      old: ["Booking", "Calendar", "CRM", "Payments", "Analytics"], oldTitle: "Separate systems today", oldTags: true,
      pillars: ["Customer booking", "Backend processing", "Admin operations", "Customer management", "Business analytics"],
      diff: [
        ["Architecture first", "14 detailed specifications (9 modules and 5 cross-cutting concerns) written before the build."],
        ["Type-safe monorepo", "Three applications and six shared packages managed with Turborepo, sharing types, validation and UI."],
        ["Multi-tenant from day one", "Organization isolation modeled at every layer, with soft deletes and audit trails."],
        ["Compliance-minded", "Designed with GDPR/DSGVO, security by default and accessibility (WCAG 2.1 AA) in mind."]
      ],
      mods: [
        ["Core platform", "Authentication, database, API gateway, configuration and logging."],
        ["Customer website", "Public booking interface for self-service appointments."],
        ["Booking engine", "Scheduling, availability, conflict detection with buffers, booking rules, waitlist and recurring bookings."],
        ["Customer database", "Profiles, history, notes, tags, segmentation and household records."],
        ["Staff management", "Staff profiles, schedules, time off, services and roles."],
        ["Calendar system", "Unified calendar with drag-and-drop and external sync."],
        ["Notifications", "Email, SMS, push and in-app messages with templates and preferences."],
        ["Admin dashboard", "Business operations, reporting and settings."],
        ["Analytics & reporting", "KPIs, exports and real-time metrics."],
        ["Cross-cutting", "Security, performance, observability, internationalization (EN, DE, FR, ES first) and accessibility."]
      ],
      modsNote: "These modules are specified in detail. The customer website, admin dashboard and API foundation are built; the booking engine and other backend logic are the next build steps.",
      stepsTitle: "Intended booking flow",
      steps: ["Customer chooses a service and optional add-ons", "System calculates open slots from staff schedules, buffers, time off and blackout dates", "Customer selects a slot and confirms", "Conflict check prevents double bookings", "Staff and admins see the booking in the unified calendar", "Customer receives confirmation and reminders", "Customer record and history update in the CRM", "Analytics and KPIs update"],
      stack: [["Frontend", "React 18, TypeScript, Vite, React Router, TanStack Query, React Hook Form, Radix UI, Tailwind CSS, i18next"], ["Backend", "Node.js, TypeScript, Fastify, Zod validation, Redis + BullMQ queues, Socket.io"], ["Database", "PostgreSQL with Prisma ORM: 60+ models"], ["Auth", "JWT, Argon2id password hashing, OAuth2"], ["Tooling", "npm workspaces, Turborepo, GitHub Actions, Docker"]],
      secTitle: "Security & compliance (design)",
      sec: ["Argon2id password hashing, JWT access and refresh tokens, MFA for admins", "RBAC and ABAC hybrid authorization with scoped access", "Encryption at rest, TLS in transit and field-level encryption for personal data", "Payments tokenized through Stripe so card data is never stored", "Audit logging and soft deletes", "GDPR/DSGVO-aware design; certifications such as SOC 2 are targets, not claims"],
      imp: ["Online self-service booking in place of phone scheduling.", "Fewer double bookings through conflict detection and buffers.", "Less no-show impact through reminders and tracking.", "One system for calendar, customers, staff and reporting.", "An architecture prepared for multi-location growth."],
      note: "BookFlow is in active development. Performance and compliance figures in the specifications (such as response-time targets or SOC 2) are design targets, not measured results or certifications.",
      iface: "The customer website (7 pages) and admin dashboard (9 pages) are built. Screenshots can be shared on request.",
      stage: "In development",
      done: ["Monorepo with three applications and six shared packages", "14 requirement specifications", "Database schema with 60+ models", "Customer website: 7 pages with routing and layout", "Admin dashboard: 9 pages with protected routes", "API server foundation with health checks", "CI/CD pipeline configured"],
      next: ["Database migrations and seed data", "Authentication endpoints", "Connect the frontends to the API", "Booking engine core logic", "Real-time updates and notification providers", "Later: analytics and forecasting, mobile app, integrations, AI scheduling"]
    }
  }
};
var SOON = [["NordShop", "E-commerce"], ["DocMind", "AI Business Document Assistant"]];

/* ============ Helpers ============ */
function $(s) { return document.querySelector(s); }
function tags(a, c) { return a.map(function (t) { return '<span class="tag ' + (c || "") + '">' + t + "</span>"; }).join(""); }
function icards(a) {
  return a.map(function (x) {
    return '<div class="card"><div class="ic">' + ICONS[x[0]] + "</div><h3>" + x[1] + "</h3><p>" + x[2] + "</p></div>";
  }).join("");
}
function mock(k, lg) {
  var m;
  if (k === "kan") {
    m = '<div class="kan"><div><i></i><i></i><i></i></div><div><i></i><i></i></div><div><i></i></div></div>';
  } else if (k === "cal") {
    m = '<div class="cal">' + Array.from({ length: 21 }, function (_, i) {
      return '<i class="' + ([2, 5, 9, 12, 16].indexOf(i) > -1 ? "a" : [7, 14, 19].indexOf(i) > -1 ? "c" : "") + '"></i>';
    }).join("") + "</div>";
  } else {
    m = '<div class="chart">' + [40, 65, 50, 80, 60, 95, 75].map(function (h) { return '<i style="height:' + h + '%"></i>'; }).join("") + "</div>";
  }
  return '<div class="mock"><div class="bar"><b></b><b></b><b></b></div><div class="scr' + (lg ? " lg" : "") +
    '"><div class="side"><i></i><i></i><i></i><i></i></div><div class="main"><div class="kp"><i></i><i></i><i></i></div>' + m +
    '<div class="lines"><i style="width:80%"></i><i style="width:55%"></i></div></div></div></div>';
}
function pcard(id) {
  var p = P[id];
  return '<div class="card">' + mock(p.kind) + '<div style="margin-top:18px">' + tags(p.stageTag ? [p.ind, p.stageTag] : [p.ind], "o") +
    "<h3>" + p.n + "</h3><p>" + p.d + '</p><div style="margin:10px 0">' + tags(p.tech) +
    '</div><div class="row"><a class="btn sm" href="#/case/' + id + '">View Case Study</a><a class="btn p sm" href="#/contact">' + (p.demoLabel || "Request Demo") + '</a></div></div></div>';
}

/* ============ Render static sections ============ */
$("#heroMocks").innerHTML = Object.keys(P).map(function (k) { return mock(P[k].kind); }).join("");
$("#whatWeBuild").innerHTML = icards(HOME);
$("#solGrid").innerHTML = icards(SOL);
$("#featured").innerHTML = Object.keys(P).map(pcard).join("");
$("#workList").innerHTML =
  Object.keys(P).map(function (id, i) {
    var p = P[id];
    return '<div class="card"><div class="grid g2" style="align-items:center">' + mock(p.kind, 1) +
      '<div><div class="eyebrow">0' + (i + 1) + "</div>" + tags([p.ind], "o") + tags(p.stageTag ? ["Concept project", p.stageTag] : ["Concept project"], "b") +
      "<h2>" + p.n + '</h2><p class="mute">' + p.d + '</p><div style="margin:12px 0">' + tags(p.tech) +
      '</div><ul class="mute" style="padding-left:18px;margin-bottom:16px">' +
      p.feat.map(function (f) { return "<li>" + f + "</li>"; }).join("") +
      '</ul><div class="row"><a class="btn sm" href="#/case/' + id + '">Case Study</a><a class="btn p sm" href="#/contact">' + (p.demoLabel || "Request Demo") + '</a></div></div></div></div>';
  }).join("") +
  SOON.map(function (s, i) {
    return '<div class="card soon"><div class="eyebrow">0' + (i + 4) + "</div>" + tags(["Coming soon"], "b") +
      '<h2 style="font-size:28px">' + s[0] + '</h2><p class="mute">' + s[1] + "</p></div>";
  }).join("");

/* ============ Case studies ============ */
function sec(n, t, b) { return '<div class="cs-sec"><span>' + n + " — " + t + "</span><div>" + b + "</div></div>"; }
function ul(a) { return "<ul>" + a.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>"; }
function sub(t) { return '<p class="sub">' + t + "</p>"; }
function flow(a) {
  return '<div class="flow">' + a.map(function (f, i) {
    return (i ? '<span style="background:none;padding:0">→</span>' : "") + "<span>" + f + "</span>";
  }).join("") + "</div>";
}
function mg(a) { return '<div class="mg">' + a.map(function (m) { return "<div><b>" + m[0] + "</b><span>" + m[1] + "</span></div>"; }).join("") + "</div>"; }

function caseView(id) {
  var p = P[id] || P.werkflow;
  id = P[id] ? id : "werkflow";
  var x = p.x;
  var tabs = Object.keys(P).map(function (k) {
    return '<a class="btn sm' + (k === id ? " p" : "") + '" href="#/case/' + k + '">' + P[k].n + "</a>";
  }).join("");

  var s01 = "<p>" + p.ov + "</p>" + (x ? sub("Target customer") + "<div>" + tags(x.who, "b") + "</div>" + sub("Primary users") + "<div>" + tags(x.roles) + "</div>" : "");
  var s02 = "<p>" + p.ch + "</p>" + (x ? sub("Where they are today") + ul(x.probs) + sub("What this creates") + "<div>" + tags(x.results, "o") + "</div>" + sub(x.oldTitle || "Typical workflow") + (x.oldTags ? "<div>" + tags(x.old) + "</div>" : flow(x.old)) : "");
  var s03 = "<p>" + p.sol + "</p>" + (x ? '<div style="margin-top:14px">' + tags(x.pillars, "o") + "</div>" + sub("What makes it different") + mg(x.diff) : "");
  var s04 = x ? mg(x.mods) + (x.modsNote ? '<p style="margin-top:12px">' + x.modsNote + "</p>" : "") : ul(p.feat);
  var s05 = x ? sub(x.stepsTitle || "Demo scenario: from customer to invoice") + "<ol>" + x.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>" : flow(p.flow);
  var s07 = x
    ? '<div class="kv">' + x.stack.map(function (r) { return "<b>" + r[0] + "</b><span>" + r[1] + "</span>"; }).join("") + "</div>" + sub(x.secTitle || "Security & compliance") + ul(x.sec)
    : "<div>" + tags(p.tech) + "</div>";
  var s08 = x
    ? sub("Intended impact") + ul(x.imp) + '<p style="margin-top:12px">' + x.note + "</p>"
    : "<p>" + p.imp + " No measured results are claimed, as this is a concept project.</p>";
  var s10 = '<div class="status">Concept Project — DEVLOK EU Showcase</div>' +
    (x ? '<p style="margin:12px 0 4px">Build stage: <b style="color:var(--ink)">' + (x.stage || "Demo / MVP") + '</b></p><div class="grid g2" style="margin-top:8px"><div>' + sub("Completed") + ul(x.done) + "</div><div>" + sub("In progress / next") + ul(x.next) + "</div></div>" : "");

  $("#caseBody").innerHTML =
    '<div class="eyebrow">Case study</div><div class="row" style="margin-bottom:24px">' + tabs + "</div>" +
    tags([p.ind], "o") + '<h1 class="ph" style="margin:8px 0 28px">' + p.n + "</h1>" + mock(p.kind, 1) +
    sec("01", "Overview", s01) +
    sec("02", "Business Challenge", s02) +
    sec("03", "Proposed Solution", s03) +
    sec("04", "Key Features", s04) +
    sec("05", "User Flow", s05) +
    sec("06", "Interface", "<p>" + ((x && x.iface) || "Screenshots of the full application are shared during the live demonstration.") + "</p>") +
    sec("07", "Technology", s07) +
    sec("08", "Expected Business Impact", s08) +
    sec("09", "Live Demonstration", '<p style="margin-bottom:14px">' + (p.demoText || "A live demonstration is available on request.") + '</p><a class="btn p" href="#/contact">' + (p.demoBtn || "Request a Live Demo") + "</a>") +
    sec("10", "Project Status", s10);
}

/* ============ Router ============ */
function route() {
  var h = location.hash.replace(/^#\/?/, "").split("/");
  var pg = h[0] || "home";
  if (!document.getElementById(pg)) pg = "home";
  if (pg === "case") caseView(h[1]);
  document.querySelectorAll(".page").forEach(function (e) { e.classList.toggle("on", e.id === pg); });
  document.querySelectorAll("#nav a").forEach(function (a) { a.classList.toggle("on", a.dataset.p === pg); });
  window.scrollTo(0, 0);
  document.title = (pg === "home" ? "" : pg.charAt(0).toUpperCase() + pg.slice(1) + " — ") + "DEVLOK";
}
window.addEventListener("hashchange", route);
route();

/* ============ Footer + contact form ============ */
$("#yr").textContent = new Date().getFullYear();
$("#cf").addEventListener("submit", function (e) {
  e.preventDefault();
  var d = new FormData(e.target);
  var body = "Name: " + d.get("name") + "\nCompany: " + d.get("company") + "\nEmail: " + d.get("email") +
    "\nCountry: " + d.get("country") + "\nProject type: " + d.get("type") + "\n\n" + d.get("msg");
  location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("DEVLOK enquiry: " + d.get("type")) + "&body=" + encodeURIComponent(body);
});
