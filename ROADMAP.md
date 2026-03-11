# 🗺️ Roadmap — psicologalbano.it

Tracciamento delle attività SEO, GEO e AEO per il sito della Dott.ssa Mariaelisabetta Albano.

---

## ✅ Completato

### SEO — `index.html`
- [x] `<title>` ottimizzato con nome, qualifica e città
- [x] `<meta description>` completa e pertinente
- [x] `<meta keywords>` con termini locali (Mercato San Severino, Castel San Giorgio, Sant'Angelo, SalutePsy, Meta Studio APS)
- [x] `<meta robots>`, `lang`, `geo.region`, `geo.placename`
- [x] URL canonico (`<link rel="canonical">`)
- [x] Open Graph completo (Facebook, WhatsApp, LinkedIn)
- [x] Twitter Card

### JSON-LD — Schema.org
- [x] **Blocco 1** — `Person` + `LocalBusiness` (studio principale) + centri collaboratori
  - [x] Nodo `#person` con `name`, `alternateName`, `jobTitle`, `description`, `sameAs`
  - [x] `sameAs` con: LinkedIn, MioDottore.it, Instagram, TikTok
  - [x] `worksFor` verso tutti e 3 i nodi business
  - [x] Nodo `#localbusiness` — Studio Psicologico (Mercato San Severino) con `geo`, `areaServed`, `hasOfferCatalog`
  - [x] Nodo `#salutepsy` — SalutePsy, Via Palmiro Togliatti 21, Castel San Giorgio (SA), tel. 353 3866098
  - [x] Nodo `#metastudio` — Meta Studio APS, Via Carmine Amato 1/24, 84085 Mercato San Severino (SA), tel. 089 2852922
  - [x] Relazione corretta: `member` (non `employee`) per collaborazioni P.IVA
- [x] **Blocco 2** — `WebSite` + `SearchAction`
- [x] **Blocco 3** — `FAQPage` (9 Q&A per GEO/AEO)
  - Domande che intercettano query AI locali (es. "Quali sono gli psicologi a Mercato San Severino?")

### GEO / AEO — Presenze esterne
- [x] **MioDottore.it** — profilo attivo
- [x] **LinkedIn** — profilo attivo
- [x] **Instagram** — profilo attivo
- [x] **TikTok** — profilo attivo

### File tecnici
- [x] **robots.txt** — presente in `public/robots.txt`, configurato correttamente (`Allow: /`, blocco `/build/` e `/.env`, link sitemap)
- [x] **sitemap.xml** — presente in `public/sitemap.xml`

---

## 🔜 Da fare

### Alta priorità
- [ ] **Google Business Profile** — creare e verificare il profilo su [business.google.com](https://business.google.com). È il segnale più impattante per le ricerche locali su Google e per le risposte generate dalle AI (ChatGPT, Gemini, Perplexity). Aggiungere: nome, indirizzo, telefono, orari, categoria "Psicologo", foto, link al sito.
- [ ] **Sezione FAQ visibile on-page** — il `FAQPage` Schema funziona al meglio se le domande sono presenti anche nel testo visibile della pagina (non solo nel JSON-LD). Creare un componente React `FAQ` da aggiungere alla homepage.

### Media priorità
- [ ] **Psicologi.it** — registrare profilo gratuito su [psicologi.it](https://www.psicologi.it)
- [ ] **GuidaPsicologi.it** — registrare profilo gratuito su [guidapsicologi.it](https://www.guidapsicologi.it)
- [ ] **og:image dedicata** — sostituire `favicon.png` con un'immagine OG professionale (1200×630px) per migliorare le anteprime su social e WhatsApp

### Bassa priorità / Futura
- [ ] Varianti FAQ locali aggiuntive (es. "psicologa Castel San Giorgio", "psicologa provincia Salerno")
- [ ] Aggiungere `Review` / `AggregateRating` al JSON-LD se la dottoressa raccoglie recensioni
- [ ] Blog / articoli informativi — contenuti long-form aumentano la citabilità da parte delle AI

---
---

# 🗺️ Roadmap — psicologalbano.it (English)

Tracking of SEO, GEO and AEO tasks for the website of Dr. Mariaelisabetta Albano.

---

## ✅ Completed

### SEO — `index.html`
- [x] `<title>` optimised with name, role and city
- [x] Complete and relevant `<meta description>`
- [x] `<meta keywords>` with local terms (Mercato San Severino, Castel San Giorgio, Sant'Angelo, SalutePsy, Meta Studio APS)
- [x] `<meta robots>`, `lang`, `geo.region`, `geo.placename`
- [x] Canonical URL (`<link rel="canonical">`)
- [x] Full Open Graph tags (Facebook, WhatsApp, LinkedIn)
- [x] Twitter Card

### JSON-LD — Schema.org
- [x] **Block 1** — `Person` + `LocalBusiness` (main practice) + partner centres
  - [x] `#person` node with `name`, `alternateName`, `jobTitle`, `description`, `sameAs`
  - [x] `sameAs` includes: LinkedIn, MioDottore.it, Instagram, TikTok
  - [x] `worksFor` pointing to all 3 business nodes
  - [x] `#localbusiness` node — Psychology Practice (Mercato San Severino) with `geo`, `areaServed`, `hasOfferCatalog`
  - [x] `#salutepsy` node — SalutePsy, Via Palmiro Togliatti 21, Castel San Giorgio (SA), tel. 353 3866098
  - [x] `#metastudio` node — Meta Studio APS, Via Carmine Amato 1/24, 84085 Mercato San Severino (SA), tel. 089 2852922
  - [x] Correct relationship: `member` (not `employee`) for freelance/VAT-number collaborations
- [x] **Block 2** — `WebSite` + `SearchAction`
- [x] **Block 3** — `FAQPage` (9 Q&As for GEO/AEO)
  - Questions designed to intercept local AI queries (e.g. "Who are the psychologists in Mercato San Severino?")

### GEO / AEO — External Profiles
- [x] **MioDottore.it** — active profile
- [x] **LinkedIn** — active profile
- [x] **Instagram** — active profile
- [x] **TikTok** — active profile

### Technical Files
- [x] **robots.txt** — present at `public/robots.txt`, correctly configured (`Allow: /`, blocking `/build/` and `/.env`, sitemap link included)
- [x] **sitemap.xml** — present at `public/sitemap.xml`

---

## 🔜 To Do

### High Priority
- [ ] **Google Business Profile** — create and verify the profile at [business.google.com](https://business.google.com). This is the highest-impact signal for local Google searches and for AI-generated answers (ChatGPT, Gemini, Perplexity). Add: name, address, phone, opening hours, category "Psychologist", photos, website link.
- [ ] **Visible FAQ section on-page** — the `FAQPage` Schema works best when the questions are also present as visible text on the page (not only in the JSON-LD). Create a React `FAQ` component and add it to the homepage.

### Medium Priority
- [ ] **Psicologi.it** — register a free profile at [psicologi.it](https://www.psicologi.it)
- [ ] **GuidaPsicologi.it** — register a free profile at [guidapsicologi.it](https://www.guidapsicologi.it)
- [ ] **Dedicated og:image** — replace `favicon.png` with a professional OG image (1200×630px) to improve link previews on social media and WhatsApp

### Low Priority / Future
- [ ] Additional local FAQ variants (e.g. "psychologist Castel San Giorgio", "psychologist province of Salerno")
- [ ] Add `Review` / `AggregateRating` to JSON-LD if Dr. Albano collects reviews
- [ ] Blog / informational articles — long-form content increases the likelihood of being cited by AI models
