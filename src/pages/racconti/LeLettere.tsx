import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-lettere.jpg";

const paragrafi = [
  "Dopo una vita trascorsa a ingoiare parole non dette, a macerare silenzi imposti e a recitare copioni altrui, un uomo si ritrovò in pensione con un fardello inaspettato: il peso di tutte le risposte mancate. Anni di riunioni in cui non era riuscito a sostenere la sua idea, di conversazioni tra amici in cui la battuta giusta gli era venuta in mente solo ore dopo, di piccoli e grandi soprusi subiti in silenzio.",
  "E così, con un tempo infinito a disposizione e un'ossessione crescente, decise di dedicare la sua intera esistenza a un compito: riscrivere la storia, almeno sulla carta.",
  "Scriveva lettere, lunghissime e dettagliate, a colleghi ormai lontani, ad amici di cui aveva perso le tracce, a conoscenti con i quali aveva questioni rimaste in sospeso. Cercava con maniacale precisione la frase perfetta, la battuta folgorante che, durante un contrasto, non aveva avuto la prontezza di esprimere.",
  "Si ritrovò intrappolato in un vortice ossessivo. Riscriveva lettere già redatte, aggiungendo dettagli, sfumature, cercando le parole definitive. Ogni lettera era un tentativo di riprendere il controllo di un passato sfuggito.",
  "Il culmine di questa ossessione arrivò quando decise che quelle lettere non potevano essere inviate subito. Non bastava avere l'ultima parola; doveva essere l'ultima parola in assoluto. Scrisse testamenti epistolari, confidando a un notaio l'incarico di spedire le missive solo dopo la sua morte. Avrebbe finalmente vinto, in un silenzio tombale che avrebbe consacrato la sua ragione.",
  "Ma la morte, con la sua indifferente puntualità, arrivò. E le lettere, sigillate e pronte per la spedizione, rimasero lì, tra le mani del notaio, pesanti di parole mai udite, di verità mai comprese. Il mondo continuò a girare, inconsapevole delle grandi e piccole vittorie che l'uomo aveva così meticolosamente preparato. Lui non ottenne l'ultima parola. Ottenne solo il nulla, il medesimo nulla dal quale aveva tentato disperatamente di risorgere attraverso l'inchiostro.",
];

const LeLettere = () => (
  <PageShell
    title="Le lettere"
    subtitle="Quando l'ultima parola viene affidata a un notaio e alla morte"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano scrive lettere sigillate circondato da buste" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default LeLettere;