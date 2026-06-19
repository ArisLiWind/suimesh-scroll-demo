# SuiMesh Scroll Demo

> Scroll-driven presentation demo for **SuiMesh** — the communication layer for agent actions.

🚀 **Live Preview:** [https://arisliwind.github.io/suimesh-scroll-demo/](https://arisliwind.github.io/suimesh-scroll-demo/)

---

## What is this?

A full-screen, scroll-driven narrative that walks through:

1. **Computing history** → how we got here
2. **Agent coordination** → the next paradigm
3. **Fragmented context** → the problem we face today
4. **Verifiable receipts** → trust without centralization
5. **Protocol mechanics** → how SuiMesh works under the hood
6. **Recoverable state** → resilience by design
7. **SDK call-to-action** → start building

The experience is bilingual (`中文` toggles Chinese / English) and supports both scroll and click navigation.

---

## Quick Start

### 1. Open the live demo
👉 **[https://arisliwind.github.io/suimesh-scroll-demo/](https://arisliwind.github.io/suimesh-scroll-demo/)**

### 2. Or run locally
```bash
cd suimesh-scroll-demo
python3 -m http.server 4173
# Then visit http://localhost:4173
```

---

## Controls

| Input | Action |
|-------|--------|
| `Scroll / Wheel` | Navigate through the narrative |
| `中文` button | Toggle Chinese / English copy |
| `◀` / `▶` | Move between slides |
| `Click / Enter / Space / ArrowRight` | Advance **Heavy Action Trace** animation |

---

## Deployment

This repo uses **GitHub Actions** to auto-deploy to GitHub Pages on every push to `main`.

If you fork this repo, make sure to:
1. Go to ⚙️ **Settings → Pages** (`https://github.com/<user>/suimesh-scroll-demo/settings/pages`)
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Save — the first push to `main` will trigger the deployment

---

## Project Structure

```
suimesh-scroll-demo/
├── index.html              # Main entry
├── styles.css              # Core styles
├── script.js               # Scroll engine & interactions
├── suimesh-final-polish.css  # Visual polish layer
├── assets/                 # Images, logos, icons
├── demo_recording.webm     # Screen recording
├── record_demo.py          # Recording helper
└── .github/workflows/
    └── pages.yml           # Auto-deploy to GitHub Pages
```

---

## Links

- 🔗 **Live Demo:** https://arisliwind.github.io/suimesh-scroll-demo/
- 🌐 **Main Site:** https://arisliwind.github.io/SuiMesh/
- 📦 **Site Repo:** https://github.com/ArisLiWind/SuiMesh
- 🔧 **Protocol Repo:** https://github.com/mor9x/suimesh
