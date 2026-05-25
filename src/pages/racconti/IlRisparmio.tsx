import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-risparmio.jpg";

const paragrafi = [
  "Un uomo aveva un quaderno. Non un'applicazione, non un foglio di calcolo, non un conto online con grafici a torta e proiezioni automatiche: un quaderno a righe, copertina nera, con le pagine numerate a mano. Su quel quaderno, ogni sera, annotava le uscite del giorno con una grafia precisa, quasi tipografica.",
  "Caffè al bar: 1,20. Giornale: 1,30. Autobus: 1,50.",
  "Poi sommava. Poi confrontava con il giorno precedente. Poi con la settimana precedente. Poi con lo stesso periodo dell'anno scorso.",
  "Aveva lavorato quarant'anni. Aveva ricoperto posizioni che gli avevano permesso di vivere bene — non lussuosamente, ma con quella dignità solida del professionista che non guarda il prezzo al ristorante ma non ordina mai due antipasti. Aveva messo da parte. Aveva investito con prudenza. Aveva un patrimonio sufficiente, più che sufficiente, per vivere senza preoccupazioni fino alla fine dei suoi giorni — qualunque giorno fosse.",
  "Non aveva figli. Non aveva nipoti. Non aveva cause in cui credere abbastanza da intestare loro qualcosa. Le onlus gli sembravano macchine burocratiche che consumavano il 40% delle donazioni in gestione; i partiti erano fuori discussione; la chiesa era un'altra burocrazia con costumi più scenografici. Il denaro aveva lavorato una vita per lui. Non aveva intenzione di lasciarlo lavorare per qualcun altro.",
  "E quindi risparmiava.",
  "Risparmiava sul riscaldamento, tenendo il termostato a diciotto gradi e indossando il maglione che aveva comprato nel 2011 e che ancora teneva benissimo. Risparmiava sulla spesa, comprando quasi esclusivamente in offerta e pianificando i pasti intorno ai volantini del giovedì. Risparmiava sulle uscite, valutando ogni spesa non necessaria con la serietà di un consiglio di amministrazione.",
  "Non era avarizia, si diceva. Era rigore. Era il rispetto per il lavoro che aveva fatto quei soldi.",
  "Un'estate, sua sorella lo invitò in Sardegna. C'era una casa in affitto, tre famiglie, diciassette giorni. L'uomo calcolò: il volo, la quota dell'affitto, il cibo, qualche uscita. Una cifra non enorme, ma non trascurabile. Ringraziò e declinò.",
  "«Non te lo puoi permettere?» chiese la sorella, con una faccia che non era una domanda.",
  "«Non è questo», disse l'uomo.",
  "Ma non aggiunse altro, perché non riuscì a trovare una spiegazione che suonasse ragionevole ad alta voce.",
  "Quell'inverno si ruppe la caldaia. L'uomo chiamò tre idraulici, confrontò i preventivi, scelse il più economico, poi aspettò quattro giorni prima di farlo venire perché i giorni in mezzo al mese costavano di più di quelli a inizio mese. Quelle notti dormì con due piumini e un giubbotto.",
  "Il mattino del quarto giorno, mentre aspettava l'idraulico, aprì il quaderno e guardò la colonna delle uscite. Era una settimana eccezionalmente contenuta. Quasi una settimana di vacanza, nei numeri.",
  "Si accorse, in quel momento, di stare sorridendo.",
  "Non perché fosse felice. Ma perché il quaderno quadrava, e il quaderno che quadrava era l'unica forma di soddisfazione che riuscisse ancora a riconoscere con certezza.",
  "Il patrimonio continuò a crescere. Lentamente, regolarmente, come una pianta che nessuno annaffia ma che sopravvive all'umidità dell'aria. L'uomo continuò a registrare, a sommare, a confrontare. Le pagine del quaderno si riempirono. Ne comprò un altro, uguale — stessa copertina nera, stesse righe, stesso formato.",
  "Costavano 3,50 l'uno. Li comprò in offerta: tre per sette euro.",
  "Mise i due di scorta nel cassetto, sopra il quaderno precedente, che aveva conservato.",
  "Erano documenti. Erano la prova di qualcosa. Non sapeva esattamente di cosa — ma era importante che esistessero, che qualcuno li trovasse, che qualcuno capisse quanto lavoro c'era voluto.",
  "Qualcuno. Chiunque.",
  "Anche se non c'era nessuno.",
];

const IlRisparmio = () => (
  <PageShell title="Il risparmio" subtitle="Quando la frugalità diventa la prigione più cara di tutte" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano scrive in un quaderno nero" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default IlRisparmio;