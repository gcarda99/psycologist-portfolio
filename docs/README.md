# 🧠 Portfolio — Dott.ssa Albano Mariaelisabetta

Professional portfolio website for Dott.ssa Albano Mariaelisabetta (Psychologist).

Built with **React 18** + **Vite 6** + **Material UI 6**.

🌐 Live at: [https://psicologalbano.it](https://psicologalbano.it)

---

## Sections

- **Home** — Landing page with introduction and social links
- **About me** — Professional background and values
- **Services** — Types of consultations offered
- **Education** — Academic path and specializations
- **Contacts** — Contact form and references

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 6 |
| UI Library | Material UI 6 |
| Animations | Framer Motion 12 |
| Routing | React Router DOM 6 |
| Icons | React Icons 5 |
| Form validation | Validator 13 |
| Email service | EmailJS |

---

## Infrastructure

| Service | Provider |
|---|---|
| Hosting | [Netlify](https://www.netlify.com) (free tier) |
| DNS | [Cloudflare](https://www.cloudflare.com) (free tier) |
| Domain registrar | [OVHcloud](https://www.ovhcloud.com/it/) |

- The site is deployed on **Netlify** with automatic CI/CD from the `main` branch
- **Cloudflare** is used as DNS provider with proxy enabled (CDN + DDoS protection)
- The domain `psicologalbano.it` was registered via **OVHcloud** and nameservers are pointed to Cloudflare

---

## Roadmap

- [ ] Loading skeleton / splash screen template
- [ ] Dynamic detail page for each service
- [ ] Blog page — import posts/reels from the professional Instagram profile
- [x] Google Maps links from the studio addresses
- [ ] Google Reviews integration

---

## Local Development

### Requirements
- [Node.js](https://nodejs.org/) >= 18
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/gcarda99/psycologist-portfolio.git
cd psycologist-portfolio
npm install
```

### Start dev server

```bash
npm run dev
# → http://localhost:8080
```

### Production build

```bash
npm run build
# output in /build
```

### Preview build

```bash
npm run preview
```

---

## Sharing locally with ngrok

To share the dev server via a temporary public link:

```bash
# Terminal 1
npm run dev

# Terminal 2
ngrok http http://localhost:8080
```

Alternative without an account (Cloudflare Tunnel):

```bash
npx cloudflared tunnel --url http://localhost:8080
```

---

## Project Structure

```
├── index.html
├── vite.config.js
├── package.json
└── src
    ├── App.js
    ├── main.jsx
    ├── assets
    │   ├── fonts
    │   ├── png
    │   └── svg
    ├── components
    │   ├── About
    │   ├── Contacts
    │   ├── Education
    │   ├── Landing
    │   ├── Navbar
    │   ├── Services
    │   ├── WaveDivider
    │   └── Footer
    ├── contexts
    │   └── ThemeContext.js
    ├── data              ← editable content
    │   ├── headerData.js
    │   ├── aboutData.js
    │   ├── educationData.js
    │   ├── servicesData.js
    │   ├── contactsData.js
    │   ├── socialsData.js
    │   └── themeData.js
    ├── pages
    │   └── Main
    ├── theme
    └── utils
        └── ScrollToTop.js
```

---

## Content Customization

All site content lives in `src/data/`. Edit the corresponding files:

| File | Content |
|---|---|
| `headerData.js` | Name, title, photo, description |
| `aboutData.js` | "About me" section text |
| `educationData.js` | Academic background |
| `servicesData.js` | Services offered |
| `contactsData.js` | Email, phone, address |
| `socialsData.js` | Social links (LinkedIn, Instagram, TikTok) |
| `themeData.js` | Theme colors |

---

## Branches

| Branch | Description |
|---|---|
| `main` | Stable version |

---

## Credits

This project is based on and evolved from [developer-portfolio](https://github.com/hhhrrrttt222111/developer-portfolio) by [Hemanth R](https://github.com/hhhrrrttt222111), adapted and extended for a professional psychologist portfolio.

---

## Author

Developed by [Giuseppe Cardaropoli](https://github.com/gcarda99)
