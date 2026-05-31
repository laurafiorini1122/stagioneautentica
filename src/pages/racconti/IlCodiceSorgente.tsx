import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-codice-sorgente.jpg";

const paragrafi = [
  "Per quell'uomo, la pensione non fu un traguardo ma un cambio di gestione. Smesso di amministrare i beni dell'azienda, si nominò curatore fallimentare della propria memoria. Il passato non era più un insieme di ricordi: era un enorme database non indicizzato che esigeva un ordine definitivo.",
  "Trascorreva dodici ore al giorno davanti allo schermo. Scansionava vecchie ricevute fiscali, allegava grafici sull'andamento del suo peso corporeo negli anni Ottanta, trascriveva verbali di assemblee condominiali di trent'anni prima che lo avevano visto presidente. Ogni evento aveva data, ora, luogo, causale.",
  "L'implementazione finale fu il progetto della lapide. Sulla sua tomba non ci sarebbe stato un volto, ma un QR code inciso nel marmo, un portale che avrebbe rimandato l'utente al server contenente l'intera, monumentale biografia. «Sarò l'unico uomo a restare accessibile», pensava.",
  "Morì con la mano sul mouse, intento ad aggiungere un'ultima appendice sulla qualità del servizio telefonico ricevuto nel 1994.",
  "Il QR code fu inciso con precisione millimetrica sulla pietra grigia. Per qualche mese attirò curiosi. Ma la connessione nel cimitero era debole, e i faldoni digitali erano troppo densi per essere letti in piedi tra i loculi.",
  "Dopo un anno, la società di hosting fallì. Il link restituì un «Error 404 — Page Not Found». La pagina era vuota, il segnale era interrotto.",
];

const IlCodiceSorgente = () => (
  <PageShell
    title="Il codice sorgente"
    subtitle="Quando si sacrifica il presente per archiviare un passato che nessuno leggerà"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano davanti al computer, lapide con QR code sullo sfondo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default IlCodiceSorgente;