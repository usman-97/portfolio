# 💻 Developer Workspace Portfolio

A high-fidelity, interactive IDE-themed portfolio designed to mimic the workflow and aesthetics of a professional development environment. Built with **React**, **Tailwind CSS**, and **Framer Motion**.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://[YOUR-VERCEL-URL].vercel.app)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](#)

---

## 🚀 Live Demo

**[View Live Project](https://[YOUR-VERCEL-URL].vercel.app)**

## ✨ System Features

- **Integrated File Explorer:** A recursive sidebar navigation system with active-route detection and folder/file state management.
- **Synchronized Terminal:** A dynamic terminal component that updates its context and file paths based on the currently "open" editor file.
- **Responsive Workspace:** Fully adaptive grid layout using a custom `useMobile` hook and an IDE-style burger navigation.
- **Developer Aesthetics:** Custom VS Code-inspired status bar, Git branch indicators (`main *`), and emerald-accented UI.
- **Advanced Animations:** Framer Motion-powered page transitions, slide-in mobile menus, and staggered tech-stack badges.

## 🏗️ Technical Stack

| Category       | Tools                                       |
| :------------- | :------------------------------------------ |
| **Frontend**   | React 18, Vite                              |
| **Styling**    | Tailwind CSS                                |
| **Animation**  | Framer Motion                               |
| **Icons**      | Lucide React, React Icons (RxHamburgerMenu) |
| **Routing**    | React Router Dom v6                         |
| **Deployment** | Vercel                                      |

## 📂 Project Structure

```text
.
├── public/             # Static assets (Favicons, images)
├── src/
│   ├── animation/      # Framer Motion variants & animation logic
│   ├── assets/         # Imported media and icon assets
│   ├── components/     # Reusable UI (Header, Footer, TreeItem)
│   ├── constants/      # App data (navItems, tech stack, badge colors)
│   ├── css/            # Global styles and Tailwind directives
│   ├── data/           # Static JSON/data objects
│   ├── hooks/          # Custom hooks (useMobile.jsx)
│   ├── layouts/        # BaseLayout (Grid & Workspace State)
│   ├── pages/          # Individual View components (Home, Projects)
│   ├── router/         # React Router configuration
│   ├── themes/         # Color palettes and theme configurations
│   ├── utils/          # Helper functions (navigationUtils.js)
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── index.html          # HTML template & Meta tags
├── vercel.json         # Vercel deployment & rewrite rules
└── package.json        # Dependencies and scripts
```
