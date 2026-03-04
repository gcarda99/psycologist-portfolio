# 🧠 Portfolio — Dott.ssa Albano Mariaelisabetta

Sito portfolio professionale per la Dott.ssa Albano Mariaelisabetta, Psicologa iscritta all'Albo degli Psicologi della Campania.

Built with **React 18** + **Vite 6** + **Material UI 6**.

---

## Sezioni

- **Home** — Landing page con presentazione e social
- **Su di me** — Descrizione professionale e valori
- **Formazione** — Percorso accademico e specializzazioni
- **Servizi** — Tipologie di consulenza offerte
- **Contatti** — Form di contatto e riferimenti

---

## Stack tecnico

| Categoria | Tecnologia |
|---|---|
| Framework | React 18 |
| Build tool | Vite 6 |
| UI Library | Material UI 6 |
| Animazioni | Framer Motion 12 |
| Routing | React Router DOM 6 |
| Icone | React Icons 5 |
| Form validation | Validator 13 |

---

## Sviluppo locale

### Requisiti
- [Node.js](https://nodejs.org/) >= 18
- [Git](https://git-scm.com/)

### Installazione

```bash
git clone https://github.com/gcarda99/psycologist-portfolio.git
cd psycologist-portfolio
npm install
```

### Avvio dev server

```bash
npm run dev
# → http://localhost:8080
```

### Build di produzione

```bash
npm run build
# output in /build
```

### Preview build

```bash
npm run preview
```

---

## Condivisione locale con ngrok

Per condividere il dev server con link pubblico temporaneo:

```bash
# Terminale 1
npm run dev

# Terminale 2
ngrok http http://localhost:8080
```

Alternativa senza account (Cloudflare Tunnel):

```bash
npx cloudflared tunnel --url http://localhost:8080
```

---

## Struttura del progetto

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
    │   └── Footer
    ├── contexts
    │   └── ThemeContext.js
    ├── data              ← contenuti modificabili
    │   ├── headerData.js
    │   ├── aboutData.js
    │   ├── educationData.js
    │   ├── servicesData.js
    │   ├── contactsData.js
    │   ├── socialsData.js
    │   └── themeData.js
    ├── pages
    │   └── Main
    └── theme
```

---

## Personalizzazione contenuti

Tutti i contenuti del sito si trovano in `src/data/`. Modificare i file corrispondenti:

| File | Contenuto |
|---|---|
| `headerData.js` | Nome, titolo, foto, descrizione |
| `aboutData.js` | Testo sezione "Su di me" |
| `educationData.js` | Percorso formativo |
| `servicesData.js` | Servizi offerti |
| `contactsData.js` | Email, telefono, indirizzo |
| `socialsData.js` | Link social (LinkedIn, Instagram, TikTok) |
| `themeData.js` | Colori del tema |

---

## Branch

| Branch | Descrizione |
|---|---|
| `main` | Versione stabile |
| `feat/migrate-to-vite` | Migrazione da CRA a Vite (branch attivo) |

---

## Autore

Developed by [Giuseppe Cardaropoli](https://github.com/gcarda99)
