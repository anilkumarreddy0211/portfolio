# ⚡ G Anil Kumar Reddy - Developer Portfolio (`portfolio`)

A modern, high-performance personal developer portfolio built with **React 19**, **Vite**, **Lucide Icons**, and configured for **Cloudflare Workers / Pages** production deployment.

---

## 🚀 Getting Started

### 1. Open Terminal and Navigate to the Project Folder:
```powershell
cd d:\Project\portfolio
```

### 2. Install Dependencies:
```powershell
npm install
```

### 3. Start the Development Server:
```powershell
npm run dev
```
Open your browser to `http://localhost:5173/`.

### 4. Build for Production:
```powershell
npm run build
```

### 5. Production Cloudflare Deployment:
```powershell
npm run deploy
```
*(or `npm run deploy:prod`)*

Automatic deployments are triggered to Production on every push to the `main` branch via `.github/workflows/deploy.yml`.

---

## ✨ Features & Architecture

1. **⚡ Modern SPA Architecture**
   - Built with **React 19** and **Vite 8** for instant HMR and minimal bundle footprint.
   - Light & Dark theme switcher with persistent preferences stored in `localStorage`.

2. **🎯 Live Header & Dynamic Typewriter Hero**
   - Profile avatar with live status indicator and GATE 2024 qualification badge (`AIR 9642`).
   - Smooth animated typewriter effect highlighting key roles (*Python Developer*, *Data Analyst*, *Web Developer*, *AI & ML Enthusiast*).
   - Quick action buttons (Explore Projects, View Resume in Google Drive, Contact Me).
   - Key metric cards: GATE AIR 9642, B.Tech CSE (AI&DS), Intern Trainee @ Lumen Technologies, 10+ Projects.

3. **👤 In-Depth Profile & Interests**
   - Comprehensive biography and personal attributes grid (Birthday, Phone, City, Personal & College Email).
   - Core fields of interest with icons and descriptions (Data Analytics, Machine Learning, Data Science, Web Development, Software Engineering, Data Structures, Algorithms).

4. **🎓 Academic Milestones (Education)**
   - B.Tech in CSE (AI & DS) at NBKRIST.
   - Intermediate in MPC at Shastra Junior College.
   - Secondary schooling at VVMS.
   - Coursework tags and campus imagery.

5. **💼 Professional Experience**
   - **Lumen Technologies** (Intern Trainee - Bangalore): Enterprise solutions, automation scripting, telecom data workflows, and distributed systems.
   - **Pantech e-Learning** (Machine Learning Intern): End-to-end loan approval prediction model with 98% accuracy.

6. **📁 Filterable Projects & Interactive Details Modal**
   - Categorized by **All Works**, **Projects**, and **Internships**.
   - Live real-time search filtering across title, description, and tech stack tags.
   - Interactive project detail modal for deep dives with tech stack pills, architecture highlights, GitHub repo links, and live demos.

7. **🏆 Accredited Certifications Gallery**
   - Filterable by **All**, **Completion**, **Participation**, and **Workshops**.
   - Interactive certificate inspection modal and direct credential verification links.

8. **🛠️ Technical Mastery (Skills & Stack)**
   - Categorized into: Programming Languages, Frameworks & Libraries, Databases & Storage, and Tools & Cloud Platforms.
   - Animated visual percentage proficiency meters with official technology badges and logos.

9. **✉️ Interactive Contact & Communication**
   - Contact cards with physical address, phone, and dual email addresses.
   - One-click copy email to clipboard with instant toast notification.
   - Interactive direct message form with real-time field validation, sending state spinner, and toast feedback.

10. **☁️ Cloudflare Production CI/CD**
    - `wrangler.jsonc` configured for SPA static assets with single production target (`portfolio`).
    - GitHub Actions workflow (`.github/workflows/deploy.yml`) deploying directly to production.
