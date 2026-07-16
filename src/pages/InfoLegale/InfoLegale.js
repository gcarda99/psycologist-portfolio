import './InfoLegale.css';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {privacyPolicyData} from '../../data/privacyPolicyData';

function InfoLegale() {
    return (
        <div className="info-legale">
            <Helmet>
                <title>{privacyPolicyData.name}</title>
            </Helmet>
            <div className="container">
                <h1>Privacy Policy</h1>
                <p><strong>Ultimo aggiornamento:</strong> {privacyPolicyData.lastUpdate}</p>

                <h2>1. Titolare del trattamento</h2>
                <p>
                    <strong>{privacyPolicyData.name}</strong><br/>
                    Psicologa, iscritta all'Albo degli Psicologi della Campania n.{' '}
                    <a href={privacyPolicyData.alboUrl} target="_blank"
                       rel="noreferrer">{privacyPolicyData.albo}</a><br/>
                    {privacyPolicyData?.iva && privacyPolicyData?.iva.trim() !== '' && (
                        <>
                            Partita IVA: {privacyPolicyData.iva}
                        </>
                    )}
                    <br/>
                    Email: <a href={'mailto:' + privacyPolicyData.email}>{privacyPolicyData.email}</a>
                    <br/>
                    PEC: <a href={'mailto:' + privacyPolicyData.pec}>{privacyPolicyData.pec}</a>
                </p>

                <h2>2. Tipologie di dati raccolti</h2>
                <p>
                    Attraverso il form di contatto, l'utente può fornire nome, indirizzo email,
                    oggetto e contenuto del messaggio inviato.
                </p>
                <p>
                    Durante la navigazione, Google Analytics 4 può raccogliere automaticamente dati tecnici e
                    informazioni sull'utilizzo del sito, come indirizzo IP, tipo di dispositivo e browser,
                    pagine visitate, interazioni e dati geografici approssimativi, mediante cookie e tecnologie
                    analoghe.
                </p>

                <h2>3. Finalità del trattamento</h2>
                <p>
                    I dati forniti tramite il form vengono trattati per rispondere alle richieste dell'utente e
                    fornire informazioni sui servizi professionali.
                </p>
                <p>
                    I dati raccolti tramite Google Analytics vengono utilizzati per elaborare statistiche
                    sull'utilizzo del sito, comprenderne le prestazioni e migliorare contenuti ed esperienza di
                    navigazione.
                </p>

                <h2>4. Base giuridica del trattamento</h2>
                <p>
                    Il trattamento dei dati inviati tramite il form si fonda sull'art. 6, par. 1, lett. b) GDPR:
                    esecuzione di misure precontrattuali richieste dall'interessato.
                </p>
                <p>
                    Il trattamento effettuato tramite cookie analitici si fonda sul consenso dell'utente ai sensi
                    dell'art. 6, par. 1, lett. a) GDPR e dell'art. 122 del Codice Privacy. Il consenso può essere
                    revocato in qualsiasi momento senza pregiudicare la liceità del trattamento effettuato prima
                    della revoca.
                </p>

                <h2>5. Modalità di trattamento e conservazione dei dati</h2>
                <p>
                    I dati vengono inviati tramite email e conservati nella casella di posta elettronica del Titolare.
                    I dati saranno conservati per il tempo necessario a gestire la richiesta e successivamente
                    cancellati, salvo obblighi di legge. Non sono utilizzati per finalità di marketing.
                </p>
                <p>
                    I dati analitici sono conservati secondo le impostazioni configurate in Google Analytics.
                    I cookie di Google Analytics possono avere una durata massima di due anni, salvo cancellazione
                    anticipata da parte dell'utente o diversa configurazione del servizio.
                </p>

                <h2>6. Comunicazione dei dati</h2>
                <p>
                    I dati non vengono diffusi. Possono essere trattati da fornitori tecnici necessari al
                    funzionamento del sito e alla gestione delle comunicazioni, inclusi EmailJS e il provider di
                    posta elettronica.
                </p>
                <p>
                    Per il servizio di analisi, i dati sono trattati da Google Ireland Limited e dalle società del
                    gruppo Google. Il trattamento può comportare trasferimenti verso Paesi esterni allo Spazio
                    Economico Europeo, effettuati sulla base delle garanzie previste dalla normativa applicabile.
                    Per maggiori informazioni consulta la{' '}
                    <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">
                        Privacy Policy di Google
                    </a>.
                </p>

                <h2>7. Diritti dell'interessato</h2>
                <p>
                    L'utente ha diritto, in qualunque momento, di: accedere ai propri dati personali,
                    chiederne la rettifica o la cancellazione, limitarne o opporsi al trattamento,
                    revocare il consenso prestato e presentare reclamo all'Autorità Garante per la Protezione dei
                    Dati Personali.
                    Le richieste possono essere inviate via email al Titolare.
                </p>

                <h2>8. Cookie e Google Analytics</h2>
                <p>
                    Questo sito non utilizza cookie di profilazione pubblicitaria. Utilizza Google Analytics 4,
                    servizio fornito da Google, per raccogliere statistiche sull'utilizzo del sito.
                </p>
                <p>
                    Google Analytics può impostare cookie come <code>_ga</code> e{' '}
                    <code>_ga_&lt;container-id&gt;</code>, utilizzati rispettivamente per distinguere gli utenti e
                    mantenere lo stato della sessione. La durata predefinita può arrivare a due anni.
                </p>
                <p>
                    L'utente può cancellare o bloccare i cookie tramite le impostazioni del proprio browser.
                    Ulteriori informazioni sono disponibili nella{' '}
                    <a
                        href="https://support.google.com/analytics/answer/11397207?hl=it"
                        target="_blank"
                        rel="noreferrer"
                    >
                        documentazione sui cookie di Google Analytics
                    </a>.
                </p>

                <h2>9. Aggiornamenti</h2>
                <p>
                    La presente Privacy Policy potrà essere aggiornata nel tempo.
                </p>
            </div>
        </div>
    );
}

export default InfoLegale;
