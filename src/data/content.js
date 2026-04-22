export const navItems = [
  { label: "Value", href: "#value", id: "value" },
  { label: "Projects", href: "#work", id: "work" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Me", href: "#why", id: "why" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const trustSignals = [
  "Clean UI",
  "Fast Performance",
  "Mobile First",
  "Conversion Focused",
];

export const heroStats = [
  {
    value: "Startups",
    label: "launch-ready websites with sharper messaging, stronger trust, and a more premium first impression.",
  },
  {
    value: "Small Businesses",
    label: "service websites built to explain value fast and move more visitors toward real inquiries.",
  },
  {
    value: "Brands",
    label: "modern web experiences shaped to look more credible, feel more intentional, and convert better.",
  },
];

export const valueProps = [
  {
    title: "Who I help",
    text: "Startups, small businesses, and brands that want a website to look sharper, feel more credible, and do a better job of converting attention into action.",
  },
  {
    title: "What I build",
    text: "Landing pages, business websites, portfolios, and frontend-heavy web experiences built with modern structure, responsive execution, and strong visual clarity.",
  },
  {
    title: "What makes it different",
    text: "The work is designed around clarity first, so visitors understand what matters quickly and are guided toward the action you actually want them to take.",
  },
  {
    title: "How I work",
    text: "Fast communication, sharp execution, and attention to detail so the final result feels premium, business-ready, and far from template-looking.",
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Wellness-Connect",
    category: "Student Wellness Platform",
    problem:
      "The platform needed to bring booking, assessments, support resources, and admin control into one experience without feeling fragmented or confusing.",
    improved:
      "I restructured the experience so students could move through key actions more clearly while admins had a more organized operational view behind the scenes.",
    result:
      "Clarified the value proposition within seconds and created a cleaner user journey across booking, support access, and admin management.",
    summary:
      "A full-stack wellness platform that combines booking, self-assessment, announcements, and admin oversight in one connected system.",
    tags: ["PHP", "MySQL", "JavaScript"],
    impact: "Improved clarity and conversion flow by turning multiple support actions into one guided digital experience.",
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
      { label: "Project Type", value: "Full-stack web platform" },
      { label: "Challenge", value: "Multi-flow student support system" },
      { label: "Build", value: "PHP + MySQL implementation" },
    ],
  },
  {
    id: 2,
    title: "Aptisense",
    category: "Placement Analytics Platform",
    problem:
      "The product needed to make mock tests, performance insight, and placement-readiness data feel useful instead of overwhelming for both students and admins.",
    improved:
      "I restructured the dashboards, test discovery, and analytics flow so users could understand performance faster and act on it with less friction.",
    result:
      "Restructured the experience to create a cleaner user journey and make readiness, weak areas, and testing activity easier to read quickly.",
    summary:
      "A full-stack placement-readiness platform with mock tests, analytics dashboards, and ML-assisted prediction workflows.",
    tags: ["React", "Node.js", "Python ML"],
    impact: "Created a stronger dashboard-first product experience with clearer performance insight and more useful decision-making screens.",
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
      { label: "Project Type", value: "Analytics-focused web app" },
      { label: "Challenge", value: "Student + admin dashboard clarity" },
      { label: "Build", value: "React, Node, MongoDB, ML service" },
    ],
  },
  {
    id: 3,
    title: "Get It All Sorted",
    category: "Service Business Website",
    problem:
      "The service needed a stronger online presence that felt trustworthy fast and made it easier for visitors to understand the offer and reach out.",
    improved:
      "I built a sharper brand-first landing page with clearer service framing, stronger visual proof, and a simpler path toward inquiry.",
    result:
      "Guided users toward action with a stronger conversion flow built around trust, visual proof, and consultation intent.",
    summary:
      "A clean service website built to help a home organization business communicate value quickly and convert visitors into consultations.",
    tags: ["HTML", "CSS", "JavaScript"],
    impact: "Improved brand clarity and lead-focused structure with a simpler, more credible user journey.",
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
      { label: "Project Type", value: "Business marketing website" },
      { label: "Challenge", value: "Trust-building service presentation" },
      { label: "Build", value: "Multi-page frontend website" },
    ],
  },
  {
    id: 4,
    title: "E-Placement Hub",
    category: "Placement Management System",
    problem:
      "The system had to bring student management, drive updates, notices, and placement outcomes into a flow that felt more organized and easier to operate.",
    improved:
      "I structured the product around role-based clarity, stronger operational visibility, and workflows that made recruitment progress easier to manage.",
    result:
      "Built a more usable admin-first platform with clearer workflow logic, stronger dashboard visibility, and a cleaner operational journey.",
    summary:
      "A full-stack placement platform for managing drives, student progress, notices, offer letters, and placement outcomes in one system.",
    tags: ["React", "Node.js", "MongoDB"],
    impact: "Redesigned the experience for a cleaner user journey across dashboards, workflows, and day-to-day placement operations.",
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
      { label: "Project Type", value: "Full-stack management system" },
      { label: "Challenge", value: "Role-based recruitment workflow design" },
      { label: "Build", value: "React, Express, MongoDB" },
    ],
  },
];

export const services = [
  {
    title: "Landing Pages",
    description: "High-converting pages built to communicate value quickly and drive more inquiries, signups, or calls.",
  },
  {
    title: "Business Websites",
    description: "Modern websites for service businesses and brands that need to look more credible and convert better.",
  },
  {
    title: "Portfolio Websites",
    description: "Clean, premium portfolio sites for creatives, freelancers, and personal brands who need a stronger online presence.",
  },
  {
    title: "Frontend Development",
    description: "Polished UI implementation for custom designs, product pages, dashboards, and responsive component-heavy builds.",
  },
];

export const trustPoints = [
  {
    title: "No template-looking design",
    text: "The work is designed to feel sharper, more intentional, and more premium than the average off-the-shelf site.",
  },
  {
    title: "Clarity-first design thinking",
    text: "Every layout is shaped to help people understand what you do fast and move toward the next action with less hesitation.",
  },
  {
    title: "Fast, responsive builds",
    text: "The sites are built to feel smooth, polished, and strong across desktop, tablet, and mobile from the start.",
  },
  {
    title: "Results over empty visuals",
    text: "The goal is not just a nicer interface. It is a website that builds trust faster and does a better job of converting visitors.",
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:aryxzing@gmail.com" },
  { label: "Reddit", href: "https://www.reddit.com/user/Orphis_/" },
  { label: "Telegram", href: "https://t.me/Orphyxz" },
];
