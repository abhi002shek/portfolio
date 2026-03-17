# Abhishek Singh — Portfolio Website

**DevOps Engineer · SRE · Platform Engineer**

Built with Next.js 14 (App Router) + TypeScript + TailwindCSS + Framer Motion.

---

## Run Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata + fonts
│   ├── page.tsx            # Main page — orchestrates all sections
│   └── globals.css         # Global styles, glass, glow, gradients
├── components/
│   ├── AnimatedBackground  # Canvas particle mesh (60fps, mobile-safe)
│   ├── SplashScreen        # 1.5s intro with monogram + progress bar
│   ├── Navigation          # Sticky nav with scroll spy + progress bar
│   ├── HeroSection         # Name, title, tagline, CTAs, top impact
│   ├── ExperienceSection   # Accordion story cards with all bullets
│   ├── AchievementsSection # Trophy cards with spotlight hover
│   ├── ProjectSection      # DevSecOps project with stack + bullets
│   ├── SkillsSection       # Full skills grid + roles + certs
│   └── ContactSection      # All contact details + CTAs
├── lib/
│   └── data.ts             # ← SINGLE SOURCE OF TRUTH (all resume data)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Customisation

All content lives in **`lib/data.ts`** — edit that one file to update anything on the site.

### To update:
- **Personal info**: `basics` object
- **Experience bullets**: `experience[0].bullets`
- **Achievements**: `achievements` array
- **Skills**: `skills` array
- **Project**: `projects[0]`

---

## Design System

| Token | Value |
|---|---|
| Background | `#050A14` |
| Surface | `#0D1626` |
| Accent (cyan) | `#00D4FF` |
| Accent2 (purple) | `#7B61FF` |
| Gold | `#F0A500` |
| Font Display | Syne |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono |

---

## Features

- ✅ Splash screen with animated monogram (1.5s)
- ✅ Canvas particle mesh background (60fps, mobile-capped)
- ✅ Sticky navigation with scroll spy + progress bar
- ✅ Hero with top impact metrics
- ✅ Experience accordion (all 15 bullets + highlight chips)
- ✅ Achievements trophy cards (all 6 with spotlight hover)
- ✅ Project section with full stack + all 7 bullets
- ✅ Complete skills grid (12 categories)
- ✅ Education + certifications
- ✅ Contact section with all links
- ✅ `prefers-reduced-motion` respected
- ✅ Fully responsive (360px → 1280px+)
- ✅ Dark mode default
