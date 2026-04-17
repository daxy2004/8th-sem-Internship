# 🌍 GlobalXcelerate — Corporate Website

**Project 1 of the 8th Semester Internship Repository**

A fully responsive, multi-page corporate website built for **GlobalXcelerate** — an international education and career accelerator with offices in UAE, Singapore, and India. The site showcases the company's services, global cohort programs, gallery, and contact information.

---

## 📌 Overview

| Field | Details |
|---|---|
| **Client** | GlobalXcelerate |
| **Type** | Corporate / Marketing Website |
| **Tech Stack** | React 19, TypeScript, Vite, React Router v7 |
| **Internship Semester** | 8th Semester |

---

## 🚀 Features

- **Multi-page SPA** with React Router — Home, About, Services, Gallery, Contact
- **12+ Country Cohort Pages** — UAE, Singapore, Taiwan, England, Scotland, Japan, Australia, Vietnam, Malaysia, Indonesia, South Korea, USA
- **7 Service Detail Pages** — Cultural Immersion, Global Alliances, Career Development, Language Training, Placement, AI Tools, Study Abroad
- **Fully Responsive** — hamburger nav, mobile-first layouts, responsive CSS
- **Modern UI** — custom CSS design system with animations and glassmorphism effects
- **SEO-ready** — semantic HTML, meta tags, proper heading hierarchy

---

## 🗂️ Project Structure

```
GlobalXcelerate/
├── public/                  # Static assets (logo, images)
├── src/
│   ├── App.tsx              # Root component with nav, routes & footer
│   ├── Home.tsx             # Landing page
│   ├── About.tsx            # About page
│   ├── Services.tsx         # Services overview page
│   ├── Service*.tsx         # Individual service detail pages (×7)
│   ├── *Cohort.tsx          # Country cohort pages (×12)
│   ├── Gallery.tsx          # Photo gallery
│   ├── Contact.tsx          # Contact form & info
│   ├── App.css              # Global design system & component styles
│   └── responsive.css       # Responsive/mobile breakpoints
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
# Clone the repository
git clone https://github.com/daxy2004/8th-sem-Internship.git
cd "8th-sem-Internship/GlobalXcelerate"

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌐 Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services Overview |
| `/services/immersion` | Cultural Immersion |
| `/services/alliances` | Global Alliances |
| `/services/career` | Career Development |
| `/services/language` | Language Training |
| `/services/placement` | Placement Services |
| `/services/ai` | AI Tools |
| `/services/study-abroad` | Study Abroad |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/{country}-cohort` | Country Cohort Pages (×12) |

---

## 📍 Company Info

- **Dubai Office:** Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
- **India Office:** WeWork Galaxy43, Residency Rd, Bengaluru, Karnataka 560025
- **Email:** info@globalXcelerate.ae
- **LinkedIn:** [GlobalXcelerate](https://www.linkedin.com/company/globalxcelerate)
- **Instagram:** [@global_xcelerate](https://www.instagram.com/global_xcelerate/)

---

## 🧑‍💻 Developed By

Developed as part of the **8th Semester Internship** — a hands-on industry project experience.

---

*© 2025 GlobalXcelerate. All Rights Reserved.*
