import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/donna-il-successore.png";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per trentacinque anni una donna aveva diretto la produzione di un'azienda manifatturiera. Non era stata l'amministratrice delegata, non aveva mai avuto il suo nome sulla porta dell'ufficio più grande, ma tutti, in fabbrica, sapevano che era lei a far funzionare le cose. I capireparto chiedevano a lei prima di chiedere al direttore generale. I problemi salivano fino a lei e lì, quasi sempre, si risolvevano.",
  "Quando arrivò la pensione, l'azienda le affidò una consulenza esterna, due giorni a settimana, per accompagnare il passaggio. La donna accettò con sollievo: non era un addio, era un arrivederci. Avrebbe continuato a varcare quei cancelli, anche se con un badge diverso.",
  "I primi mesi andarono come previsto. Il nuovo responsabile di produzione, un uomo più giovane arrivato da un'altra azienda del settore, la consultava spesso. Si sedevano insieme davanti ai tabulati di produzione, e la donna spiegava perché quella linea si inceppava sempre il giovedì, perché quel fornitore non andava mai sollecitato per email ma solo per telefono, perché certi operai rendevano meglio se li si lasciava organizzare da soli le pause.",
  "Poi, gradualmente, le domande si fecero più rade. Il nuovo responsabile portava soluzioni proprie, metodi imparati altrove, software che la donna non aveva mai usato. Educatamente, le chiedeva un parere. Educatamente, la ringraziava. E procedeva come aveva già deciso di procedere.",
  "La consulenza si esaurì dopo un anno, prima del previsto. Nessuno lo disse esplicitamente: semplicemente, un giorno, non la richiamarono più per fissare la giornata successiva.",
  "A casa, la donna si trovò con un computer e troppo tempo. Iniziò a controllare il sito dell'azienda, la sezione «Lavora con noi», per curiosità, si disse. Poi cominciò a farlo ogni mattina, con il caffè ancora in mano, prima di leggere il giornale.",
  "Scoprì che esisteva un modo per restare informata senza nemmeno chiedere: il sito della Camera di Commercio pubblicava le variazioni di organigramma delle società, i depositi delle nomine, i cambi di procura. Bastava cercare la ragione sociale dell'azienda e tutto appariva, asettico e pubblico, in un elenco di atti notarili.",
  "Imparò a leggere quei documenti come un tempo leggeva i bilanci. Capì che il nuovo responsabile, dopo due anni, aveva ottenuto una procura più ampia. Capì, qualche mese dopo, che era stato assunto un vice, un ragazzo di trentadue anni con un master preso all'estero. Cercò il suo nome su LinkedIn. Guardò le foto del profilo, lesse le esperienze precedenti, si fece un'idea: troppo teorico, pensò, in fabbrica certe cose non si imparano sui libri.",
  "Cominciò a tenere un file. Un semplice documento di testo, sul desktop, intitolato «Produzione». Vi annotava i nomi, le date delle nomine, le promozioni, gli arrivi e le uscite. Quando un dirigente lasciava l'azienda dopo pochi mesi, la donna scriveva un breve commento: «Previsto», oppure «Non aveva capito niente del reparto saldatura».",
  "I figli, quando la sentivano al telefono, le chiedevano come passava le giornate. «Bene», diceva lei. «Mi tengo informata.» Non specificava su cosa.",
  "Con gli anni, il file crebbe.",
];

const IlSuccessoreDonna = () => (
  <PageShell
    title="Il successore"
    subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Restare informata è un modo per non andarsene davvero</em></strong></span></>}
    bgClassName="bg-page-donna"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Il successore" width={2752} height={1536} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il successore" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlSuccessoreDonna;
