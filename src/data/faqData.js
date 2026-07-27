import {professionalData} from './professionalData.js'

export const faqData = [
    {
        id: 'profilo-professionale',
        question: 'Chi sono e di cosa mi occupo?',
        answer: <>Sono la <strong>{professionalData.displayName}</strong>, ma puoi chiamarmi anche Elisabetta. Sono una Psicologa iscritta all'Albo degli Psicologi della Campania e specializzanda in psicoterapia ad <strong>orientamento sistemico-relazionale</strong>. Mi occupo di supporto psicologico per bambini, adolescenti, adulti e coppie.</>
    },
    {
        id: 'servizi',
        question: 'Quali servizi offro?',
        answer: 'Offro supporto psicologico per bambini, adolescenti, adulti e coppie, parent training, potenziamento delle abilità cognitive e degli apprendimenti, tutoring DSA e BES, supporto alla genitorialità, orientamento scolastico e lavorativo, trattamento ADHD, valutazioni psicodiagnostiche e riabilitazione neuropsicologica.'
    },
    {
        id: 'sedi',
        question: 'Dove ricevo?',
        answer: <>Ricevo presso il <strong>Meta Studio APS</strong>, in Via Carmine Amato 1/24, 84085 Mercato San Severino (SA). Inoltre, collaboro presso <strong>SalutePsy</strong>, in Via Palmiro Togliatti 21, 84083 Castel San Giorgio (SA), e offro consulenze online.</>
    },
    {
        id: 'consulenze-online',
        question: 'Offro consulenze online?',
        answer: 'Sì, offro consulenze psicologiche online su tutto il territorio italiano. Puoi contattarmi per verificare la disponibilità e concordare le modalità del colloquio.'
    },
    {
        id: 'appuntamento',
        question: 'Come prenotare un appuntamento?',
        answer: <>Puoi chiamare o inviare un messaggio al <strong>${professionalData.phone.display}</strong>, oppure compilare il modulo presente nella sezione <strong>Contatti</strong>.</>
    },
    {
        id: 'psicologo-psicoterapeuta',
        question: 'Qual è la differenza tra psicologo e psicoterapeuta?',
        answer: 'Lo psicologo è un professionista laureato in Psicologia, abilitato e iscritto all\'Albo, che si occupa di valutazione, prevenzione e supporto psicologico. Lo psicoterapeuta è uno psicologo o un medico che ha completato una specifica scuola di specializzazione in psicoterapia. Nel mio caso, sono una Psicologa e mi sto specializzando per diventare una Psicoterapeuta orientamento sistemico-relazionale.'
    },
    {
        id: 'approccio-sistemico-relazionale',
        question: 'Cosa si intende per approccio sistemico-relazionale?',
        answer: 'L\'approccio sistemico-relazionale considera la persona all\'interno dei propri contesti e delle proprie relazioni, come la famiglia, la coppia, la scuola o il lavoro. Nel mio lavoro utilizzo questo orientamento per osservare il modo in cui le dinamiche relazionali possano influire sul benessere psicologico. Perchè un individuo non è "solo al mondo" ma è appartiene ad una rete di relazioni che influscono sulla sua salute mentale.'
    }
]
