export const navItems = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const trustSignals = [
  "Premium UI",
  "Full-Stack Ready",
  "Responsive by Default",
  "Conversion Focused",
];

export const heroStats = [
  { value: "Static + Full Stack", label: "from sharp service websites to dashboard-style product builds" },
  { value: "Cloudflare Ready", label: "fast deployment and clean delivery for modern launches" },
  { value: "MongoDB + AI/ML", label: "backend logic, structured data, and prediction-aware product thinking" },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Wellness-Connect",
    category: "Student Wellness Platform",
    summary:
      "A full-stack mental wellness platform designed to help students book therapy slots, take self-assessment tests, and access support resources through one structured system.",
    tags: ["PHP", "MySQL", "JavaScript"],
    impact: "Combined booking, assessments, announcements, and admin visibility into one connected support workflow.",
    year: "2025",
    accent: "from-[#69d2b0]/22 via-[#5dd2ff]/10 to-transparent",
    thumbnail: "/projects/wellness-connect/home.png",
    screenshots: [
      { src: "/projects/wellness-connect/home.png", label: "Homepage and counseling-focused hero" },
      { src: "/projects/wellness-connect/slot-booking.png", label: "Student slot booking interface" },
      { src: "/projects/wellness-connect/announcements-dropdown.png", label: "Student announcements and self-help navigation" },
      { src: "/projects/wellness-connect/admin-dashboard.png", label: "Admin dashboard with bookings and test results" },
      { src: "/projects/wellness-connect/admin-announcements.png", label: "Admin announcement management view" },
    ],
    image:
      "Student login flow, therapy slot booking, self-help resources, mental health tests, and an admin dashboard for managing data.",
    details: [
      "Built separate student and admin experiences with authentication, booking management, and announcement posting.",
      "Connected depression, anxiety, and stress test flows to a MySQL-backed results system for structured record keeping.",
      "Added self-help article access and slot cancellation logic to make the platform more useful beyond a single booking step.",
    ],
    scope: [
      { label: "UI Design", value: "Student + admin flows" },
      { label: "Build", value: "Full-stack web platform" },
      { label: "Backend", value: "PHP + MySQL system" },
    ],
  },
  {
    id: 2,
    title: "Aptisense",
    category: "Placement Analytics Platform",
    summary:
      "A full-stack aptitude testing and placement-readiness platform built for students and admins, combining mock tests, analytics dashboards, and ML-assisted success prediction.",
    tags: ["React", "Node.js", "Python ML"],
    impact: "Connected assessments, performance analytics, and prediction signals into one platform for clearer readiness tracking.",
    year: "2025",
    accent: "from-[#5dd2ff]/25 via-[#5dd2ff]/10 to-transparent",
    thumbnail: "/projects/aptisense/student-dashboard.png",
    screenshots: [
      { src: "/projects/aptisense/student-dashboard.png", label: "Student dashboard and readiness overview" },
      { src: "/projects/aptisense/performance-trend.png", label: "Performance trend analytics" },
      { src: "/projects/aptisense/mock-tests.png", label: "Available mock tests and company filters" },
      { src: "/projects/aptisense/admin-dashboard.png", label: "Admin dashboard with batch analytics" },
    ],
    image:
      "Role-based student and admin dashboards, timed mock tests, trend analysis, weak-topic detection, and a FastAPI prediction service with fallback scoring.",
    details: [
      "Built a React + TypeScript frontend with protected student and admin routes, test flows, results views, and performance history.",
      "Developed backend analytics and prediction routes on Express/MongoDB, including readiness scoring, heatmaps, and weak-topic summaries.",
      "Integrated a Python FastAPI ML service to estimate success probability, with a backend fallback model to keep predictions available even if the ML service is unavailable.",
    ],
    scope: [
      { label: "UI Design", value: "Dashboards + test flows" },
      { label: "Build", value: "Full-stack web app" },
      { label: "Systems", value: "Node, MongoDB, ML service" },
    ],
  },
  {
    id: 3,
    title: "Get It All Sorted",
    category: "Home Organization Service",
    summary:
      "A clean multi-page service website for a professional home organizer, built to create trust quickly and turn visitors into consultation inquiries.",
    tags: ["HTML", "CSS", "JavaScript"],
    impact: "Used before-and-after visuals, service-focused copy, and simple navigation to support consultation-driven conversions.",
    year: "2024",
    accent: "from-[#d9a676]/22 via-[#f5d08b]/10 to-transparent",
    thumbnail: "/projects/getitallsorted/hero.png",
    screenshots: [
      { src: "/projects/getitallsorted/hero.png", label: "Home page hero" },
      { src: "/projects/getitallsorted/gallery.png", label: "Before and after gallery" },
      { src: "/projects/getitallsorted/faq.png", label: "FAQ page" },
      { src: "/projects/getitallsorted/contact.png", label: "Contact page" },
    ],
    image:
      "Hero-led landing page, before-and-after gallery, about page, FAQ content, and direct contact flow for a personal service brand.",
    details: [
      "Built a clear multi-page structure with Home, About, FAQ, and Contact pages for a small business service brand.",
      "Used real photography and transformation imagery to make the value of the service visible without overexplaining it.",
      "Kept the frontend lightweight and easy to navigate with focused CTAs that lead users toward a free consultation.",
    ],
    scope: [
      { label: "UI Design", value: "Service website layout" },
      { label: "Build", value: "Multi-page business website" },
      { label: "Frontend", value: "HTML, CSS, JavaScript" },
    ],
  },
  {
    id: 4,
    title: "E-Placement Hub",
    category: "Placement Management System",
    summary:
      "A full-stack campus placement platform built to help students and administrators manage recruitment drives, student progress, offer letters, and placement outcomes in one system.",
    tags: ["React", "Node.js", "MongoDB"],
    impact: "Brought student management, drive tracking, selection reporting, and offer-letter workflows into one structured placement dashboard.",
    year: "2025",
    accent: "from-[#38c9b8]/22 via-[#5dd2ff]/10 to-transparent",
    thumbnail: "/projects/e-placement-hub/admin-dashboard.jpg",
    screenshots: [
      { src: "/projects/e-placement-hub/admin-dashboard.jpg", label: "Admin dashboard analytics overview" },
      { src: "/projects/e-placement-hub/student-dashboard.jpg", label: "Student dashboard with placement stats and upcoming drives" },
      { src: "/projects/e-placement-hub/drives-list.jpg", label: "Placement drive listing for admins" },
      { src: "/projects/e-placement-hub/add-drive-modal.jpg", label: "Add new placement drive workflow" },
      { src: "/projects/e-placement-hub/students-table.jpg", label: "Student management table and upload flow" },
      { src: "/projects/e-placement-hub/notices.jpg", label: "Notices and announcements management" },
      { src: "/projects/e-placement-hub/selected-students.png", label: "Final selected students and package tracking" },
      { src: "/projects/e-placement-hub/offer-letter.jpg", label: "Student offer-letter upload interface" },
    ],
    image:
      "Student and admin login flows, dashboard analytics, recruitment drive tracking, round-wise applicant management, notices, and offer-letter uploads.",
    details: [
      "Built separate student and admin experiences with protected routes, role-based access, APSIT-focused registration, and JWT-backed session handling.",
      "Added drive creation, applicant tracking, round-wise status updates, selected-student package management, and notice workflows for day-to-day placement operations.",
      "Connected MongoDB-backed dashboards, offer-letter uploads, and a prediction endpoint that can call an ML microservice to estimate placement probability for students in a drive.",
    ],
    scope: [
      { label: "UI Design", value: "Admin + student portal UX" },
      { label: "Build", value: "Full-stack placement system" },
      { label: "Backend", value: "React, Express, MongoDB" },
    ],
  },
];

export const strengths = [
  {
    title: "UI/UX Design",
    text: "Clean hierarchy, strong layout rhythm, and polished visual decisions that make the work feel intentional from the first screen.",
  },
  {
    title: "Frontend Development",
    text: "Responsive interfaces with thoughtful motion, refined interactions, and execution that feels production-ready instead of improvised.",
  },
  {
    title: "Responsive Design",
    text: "Layouts that stay sharp across desktop, tablet, and mobile so the design still feels premium on smaller screens.",
  },
  {
    title: "Conversion Thinking",
    text: "Every screen is shaped to build trust quickly, communicate value clearly, and move visitors toward action without clutter.",
  },
];

export const services = [
  {
    title: "Static Websites",
    description:
      "High-trust marketing websites for businesses, creators, and personal brands that need a polished online presence without unnecessary complexity.",
  },
  {
    title: "Full-Stack Websites",
    description:
      "Custom builds with frontend, backend, and database logic for dashboards, portals, booking flows, and system-driven web products.",
  },
  {
    title: "Cloudflare Deployment",
    description:
      "Deployment support for fast, reliable launches with modern hosting, clean handoff, and performance kept in mind from the start.",
  },
  {
    title: "Website Redesigns",
    description:
      "Strategic redesigns that replace weak visuals and clunky UX with something sharper, faster, and far more credible.",
  },
];

export const processSteps = [
  {
    title: "Understand the Need",
    text: "I start by understanding what the client actually needs, what the website should achieve, and what kind of impression it should leave.",
  },
  {
    title: "Build the Product",
    text: "Once the direction is clear, I design and build with clean UI, strong responsiveness, and the right level of functionality for the project.",
  },
  {
    title: "Share Working Samples",
    text: "You see progress early through working previews, so feedback happens while the product is taking shape instead of after everything is locked.",
  },
  {
    title: "Refine and Launch",
    text: "Revisions are handled carefully, then the final site is refined, tested, and prepared for a confident launch.",
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:aryxzing@gmail.com" },
  { label: "Reddit", href: "https://www.reddit.com/user/Orphis_/" },
  { label: "Telegram", href: "https://t.me/Orphyxz" },
];
