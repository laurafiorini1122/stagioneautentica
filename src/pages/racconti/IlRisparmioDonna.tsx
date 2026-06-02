import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-risparmio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva un quaderno. Non un'applicazione, non un foglio di calcolo, non un conto online con grafici a torta e proiezioni automatiche: un quaderno a righe, copertina nera, con le pagine numerate a mano. Su quel quaderno, ogni sera, annotava le uscite del giorno con una grafia precisa, quasi tipografica.",
  "Caffè al bar: 1,20. Giornale: 1,30. Autobus: 1,50.",
  "Poi sommava, confrontava con il giorno precedente, con la settimana precedente, con lo stesso periodo dell'anno scorso.",
  "Aveva lavorato quarant'anni. Aveva ricoperto posizioni che le avevano permesso di vivere bene, non lussuosamente, ma con quella dignità solida di chi non guarda il prezzo al ristorante ma non ordina mai due antipasti. Aveva messo da parte. Aveva investito con prudenza. Aveva un patrimonio sufficiente, più che sufficiente, per vivere senza preoccupazioni fino alla fine dei suoi giorni, qualunque giorno fosse.",
  "Non aveva figli, non aveva nipoti, non aveva nessuno a cui lasciare qualcosa e niente in cui credere abbastanza. Il denaro aveva lavorato una vita per lei e non aveva intenzione di lasciarlo lavorare per qualcun altro.",
  "E quindi risparmiava.",
  "Risparmiava sul riscaldamento, tenendo il termostato a diciotto gradi e indossando il maglione che aveva comprato nel 2011 e che ancora teneva benissimo. Risparmiava sulla spesa, comprando quasi esclusivamente in offerta e pianificando i pasti intorno ai volantini del giovedì. Valutava ogni spesa non necessaria con calma, come se ci fosse sempre tempo.",
  "Non era avarizia, si diceva: era rigore. Era il rispetto per il lavoro che aveva fatto quei soldi.",
  "Un'estate, sua sorella la invitò in Sardegna. C'era una casa in affitto, tre famiglie, diciassette giorni. Calcolò: il volo, la quota dell'affitto, il cibo, qualche uscita. Una cifra non enorme, ma non trascurabile. Ringraziò e declinò.",
  "«Non te lo puoi permettere?» chiese la sorella, con una faccia che non era una domanda.",
  "«Non è questo», disse.",
  "Ma non aggiunse altro, perché non riuscì a trovare una spiegazione che suonasse ragionevole ad alta voce.",
  "Quell'inverno si ruppe la caldaia. Chiamò tre idraulici, confrontò i preventivi, scelse il più economico, poi aspettò quattro giorni prima di farlo venire perché i giorni in mezzo al mese costavano di più di quelli a inizio mese. Quelle notti dormì con due piumini e un giubbotto.",
  "Il mattino del quarto giorno, mentre aspettava l'idraulico, aprì il quaderno e guardò la colonna delle uscite. Era una settimana eccezionalmente contenuta. Quasi una settimana di vacanza, nei numeri.",
];

const IlRisparmioDonna = () => (
  <PageShell title="Il risparmio" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Finché i soldi crescono, il tempo ha ancora una direzione</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna matura controlla l'app di gestione spese sul telefono in cucina" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="Il risparmio" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlRisparmioDonna;