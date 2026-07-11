# Kevin Timothy J — Personal Portfolio

Personal portfolio website for Kevin Timothy J, AI/ML Technical Lead.

## Stack

- **Vite 5** + **React**
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **lucide-react** — icons
- **framer-motion** — installed, available for extended animations

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with dark/light toggle
│   ├── Hero.jsx         # Animated particle canvas + profile photo
│   ├── About.jsx        # Bio, education, certifications
│   ├── Experience.jsx   # Timeline of roles at Zeb
│   ├── Projects.jsx     # Filterable project cards (Production / POC / Demo)
│   ├── Skills.jsx       # Tech stack by category
│   ├── Contact.jsx      # Email, phone, LinkedIn
│   └── Footer.jsx       # Copyright
├── data/
│   └── portfolio.js     # All content lives here — edit this to update the site
├── hooks/
│   ├── useTheme.js      # Dark/light toggle, persisted in localStorage
│   └── useReveal.js     # IntersectionObserver scroll-fade hook
├── App.jsx
├── main.jsx
└── index.css            # Tailwind directives + custom utilities
```

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
```

## Deployment (Netlify)

The repo includes `netlify.toml` — connect the GitHub repo to Netlify and it deploys automatically on every push.

| Setting           | Value           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Publish directory | `dist`          |

## Updating content

All portfolio content is in **`src/data/portfolio.js`** — projects, skills, experience, personal info, and certifications. No need to touch any component file for content changes.
