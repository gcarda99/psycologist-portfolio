# 🗺️ Roadmap — psicologalbano.it

## Priorità alta

- [ ] **Gestione del consenso ai cookie** — bloccare Google Analytics fino al consenso esplicito, fornire azioni di accettazione e rifiuto con pari evidenza e permettere all'utente di modificare o revocare la propria scelta.
- [ ] **Configurazione di Google Search Console e rilevazione iniziale** — verificare tutte le varianti del dominio, inviare `sitemap.xml`, controllare indicizzazione e Core Web Vitals e registrare impressioni, clic, posizioni e query attuali, come "psicologa Mercato San Severino" e "psicologi Mercato San Severino".
- [x] **Coerenza interna dei dati locali** — allineati nome canonico e alias, telefono, qualifiche, sedi, relazioni con le strutture, coordinate e servizi tra contenuti visibili, dati React, `index.html` e JSON-LD.
- [ ] **Allineamento delle fonti esterne** — verificare e aggiornare Google Business Profile, MioDottore, SalutePsy, profili social e directory affinché usino nome, telefono, sedi, qualifica e sito canonici.
- [x] **Correzione dei dati strutturati delle sedi** — rappresentate separatamente la sede professionale di Mercato San Severino e la struttura SalutePsy di Castel San Giorgio, con indirizzi completi, coordinate verificate, link Maps e relazioni corrette; rimossi i telefoni non verificati delle strutture partner.
- [x] **Rimozione della `SearchAction` non supportata** — eliminata dal JSON-LD la ricerca interna dichiarata ma non implementata.
- [ ] **Pagina locale per Mercato San Severino** — creare una route indicizzabile, ad esempio `/psicologa-mercato-san-severino`, con H1 chiaro, contenuto locale originale, servizi, indirizzo, link Maps, indicazioni stradali, modalità di appuntamento e FAQ.
- [x] **Prerendering statico / SSG** — la build genera HTML completo per homepage e pagina legale, successivamente idratato da React nel browser.
- [x] **Sezione FAQ visibile** — aggiunta alla homepage una sezione accessibile e responsive, mantenuta coerente con il JSON-LD `FAQPage` e collegata dalla navigazione.
- [ ] **Completamento del Google Business Profile** — verificare categoria primaria, servizi, descrizione, telefono, sito, orari, link per appuntamenti, foto, attributi e sedi fisiche idonee.

## Priorità media

- [ ] **Processo etico per le recensioni Google** — richiedere recensioni autentiche senza incentivi, favorire un flusso costante di feedback recenti e rispondere senza confermare o esporre l'esistenza di un rapporto terapeutico.
- [ ] **Pagina locale per Castel San Giorgio** — creare una pagina realmente distinta per la seconda sede, evitando contenuti scarni, duplicati o creati esclusivamente per intercettare query locali.
- [ ] **Pagine dettagliate dei servizi** — creare pagine utili per DSA/BES, ADHD, Parent Training, supporto alla genitorialità, bambini e adolescenti, coppie, potenziamento cognitivo, riabilitazione neuropsicologica e consulenze online.
- [ ] **Metadati specifici per ogni route** — definire title, description, URL canonico, Open Graph e dati strutturati univoci per ogni pagina pubblica.
- [ ] **Estensione della sitemap** — aggiungere tutte le pagine indicizzabili relative a sedi, servizi, FAQ e articoli, utilizzando URL canonici corretti e valori `lastmod` significativi.
- [ ] **Segnali di autorevolezza professionale** — rendere evidenti numero di iscrizione all'Albo, qualifiche, specializzazioni, ruolo professionale, identità dell'autrice e date di revisione o aggiornamento dei contenuti sanitari.
- [ ] **Backlink dai partner** — ottenere link e riferimenti professionali legittimi da SalutePsy, Meta Studio APS, associazioni, scuole, organizzazioni locali e altre realtà con cui la psicologa collabora realmente.
- [ ] **Allineamento del profilo MioDottore** — verificare che il profilo esistente contenga recapiti, servizi, sedi, biografia e foto coerenti, oltre a un link verso il sito ufficiale.
- [ ] **Profilo Psicologi.it** — registrare e completare un profilo su [psicologi.it](https://www.psicologi.it) con dati professionali e sedi coerenti.
- [ ] **Profilo GuidaPsicologi.it** — registrare e completare un profilo su [guidapsicologi.it](https://www.guidapsicologi.it) con dati professionali e sedi coerenti.
- [ ] **Verifica delle citazioni locali** — individuare schede errate o duplicate, in particolare quelle relative a professionisti con nomi simili, e correggere riferimenti incoerenti a nome, indirizzi, telefono e sito.
- [ ] **Struttura dei link interni** — collegare pagine delle sedi, servizi, FAQ, articoli e azioni di contatto utilizzando testi descrittivi.
- [ ] **Prestazioni ed esperienza mobile** — monitorare e migliorare Core Web Vitals, caricamento delle immagini e dei font, peso JavaScript, accessibilità e conversione dei contatti sui dispositivi mobili.

## Priorità bassa / miglioramento continuo

- [ ] **Piano editoriale** — pubblicare articoli originali e clinicamente accurati che rispondano a domande reali, evitando contenuti generici o generati automaticamente.
- [ ] **Contenuti informativi locali** — trattare argomenti pratici rilevanti per gli utenti di Mercato San Severino, Castel San Giorgio e della provincia di Salerno, senza ripetizioni forzate delle parole chiave.
- [ ] **FAQ visibili aggiuntive** — rispondere a domande locali e specifiche sui servizi con un linguaggio conciso, adatto sia agli utenti sia ai riepiloghi dei risultati di ricerca.
- [ ] **Citazioni nei contenuti** — fare riferimento, quando opportuno, a fonti autorevoli come Albo professionale, Ministero della Salute, ISS, OMS e linee guida cliniche riconosciute.
- [ ] **Processo di manutenzione dei contenuti** — mostrare autrice, qualifica professionale, data di pubblicazione e data dell'ultima revisione nelle pagine relative alla salute.
- [ ] **Attività sul Google Business Profile** — aggiungere periodicamente foto aggiornate, novità sui servizi, variazioni degli orari e post pertinenti.
- [ ] **Analisi delle prestazioni di ricerca** — controllare mensilmente Search Console e le metriche del Business Profile, monitorando query locali, pagine indicizzate, chiamate, richieste di appuntamento e visibilità su Maps.
- [ ] **Visualizzazione delle recensioni Google** — mostrare recensioni selezionate sul sito solo dopo aver valutato privacy, consenso, autenticità e requisiti della piattaforma.
- [ ] **Dati strutturati delle recensioni** — aggiungere `Review` o `AggregateRating` solo quando le recensioni sono visibili, autentiche, ammesse dalle regole Google e non costituiscono markup autoreferenziale ignorato dal motore di ricerca.
- [ ] **Blog e articoli informativi** — utilizzare contenuti approfonditi per costruire autorevolezza tematica e aumentare la probabilità di essere citati dai motori di ricerca e dai sistemi AI.
- [ ] **Leggibilità per le risposte AI** — preferire titoli chiari, risposte dirette, paragrafi fattuali brevi, FAQ visibili, entità coerenti e HTML facilmente scansionabile.

## Completato

- [x] **Google Business Profile creato e verificato**
- [x] **Indirizzi degli studi collegati a Google Maps**
- [x] **Google Analytics dichiarato nella Privacy Policy**
- [x] **Implementazione del consenso a Google Analytics registrata come priorità**

## Principi guida

- Il posizionamento locale su Google dipende principalmente da **pertinenza, distanza e autorevolezza**; nessuna implementazione può garantire la prima posizione per ogni utente o località.
- Google AI Overviews e la ricerca basata su Gemini utilizzano lo stesso indice scansionabile e i principi consolidati della SEO. Non sono richiesti schemi dedicati esclusivamente all'AI né il file `llms.txt`.
- I contenuti e i dati strutturati devono descrivere le stesse informazioni realmente visibili agli utenti.
- Le pagine locali devono fornire valore originale e non devono essere create come pagine ripetitive finalizzate esclusivamente al posizionamento.
- Il meta tag `keywords` non migliora il posizionamento su Google e non deve essere considerato uno strumento SEO.

## Riferimenti ufficiali

- [Migliorare il ranking locale su Google](https://support.google.com/business/answer/7091?hl=it)
- [Indicazioni Google Search per le funzionalità AI](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Dati strutturati per attività locali](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
