import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/labirinto-burocratico.jpg";

const paragrafi = [
  "Per anni, un uomo aveva costruito il suo ruolo nell'amministrazione come una rete di tutele. Non era burocrazia; era qualcosa che non aveva un nome preciso negli organigrammi. Una cura ostinata, che continuava oltre l'orario, oltre il mandato. Arrivava prima degli altri, restava dopo, portava a casa i fascicoli più difficili non perché qualcuno glielo chiedesse, ma perché non riusciva a smettere di pensarci. Gestiva un settore rivolto ai fragili, convinto di fare da tramite tra la rigidità del codice e la vita concreta delle persone.",
  "L'imminenza della pensione gli era sembrata l'occasione giusta per trasmettere quelle pratiche. Voleva consegnare al successore qualcosa che reggesse. Il giovane era ambizioso, con buone intenzioni a fior di labbra, e all'inizio mostrò una riconoscenza genuina: capiva di non essere ancora all'altezza della complessità che si trovava tra le mani, e il collega in pensione era il puntello che teneva in piedi tutto. Accettò il sostegno con gratitudine, quasi con sollievo.",
  "Ma la gratitudine ha una durata. Il giovane non aveva la stessa tenuta, né la pazienza per costruirla. Gestire quel settore richiedeva una resistenza che non si impara in fretta: reggere l'urto delle situazioni più intricate senza scaricarle su procedure standardizzate, senza perdere il filo delle persone che ci stavano dietro. Lui diceva di voler fare, annuiva, prendeva appunti. Poi rimandava, si sovraccaricava di cose più semplici, lasciava che fosse ancora il vecchio a risolvere le crisi.",
  "Quando il giovane gli chiese di restare «ancora un po'», l'uomo accettò, lusingato dall'idea di un passaggio graduale.",
  "La transizione divenne un limbo lungo tre anni. Formalmente fuori, materialmente incastrato: continuava a gestire il settore, a istruire pratiche, a tenere i fili che il successore non sapeva raccogliere, mentre il titolare ufficiale incassava i meriti e rimandava la presa in carico reale.",
  "Poi arrivò il cavillo. Un vincolo burocratico, privo di basi normative solide e contestabile con un minimo di volontà, fu usato come pretesto per interrompere la collaborazione. Il giovane non cercò una strada alternativa. Non fece nessuno sforzo per aggirare l'ostacolo. Era più semplice così. Forse più comodo. L'uomo che lo sosteneva era anche quello che rendeva visibile, per contrasto, quanto il successore non fosse all'altezza. Lavorare bene, in certi ambienti, è una colpa silenziosa: mette in risalto l'incapacità degli altri, che sono quasi sempre la maggioranza. Chi arriva prima e resta dopo diventa un rimprovero ambulante. Meglio liberarsene.",
  "Senza una parola di spiegazione, l'uomo fu revocato. Ogni suo contributo degli ultimi decenni venne cancellato. La rete di supporto ai fragili fu smantellata in favore di procedure standardizzate. Chi gli era stato vicino si volatilizzò. I colleghi si adeguarono al nuovo corso con la rapidità di chi sa sempre da che parte stare. L'uomo passò in un istante da punto di riferimento a peso da togliersi.",
  "L'uomo si consumò tra udienze rinviate e conti correnti svuotati. L'ingiustizia trionfò per sfinimento. Morì civilmente tra le carte bollate. Il sistema non riconobbe mai niente di quello che aveva fatto, e non riconoscerlo era anche il modo più comodo per non dover spiegare perché non lo aveva fatto prima.",
  "Fu allora che iniziò la battaglia legale. Assunse avvocati costosi, produsse memorie, raccolse prove di tre anni di gestione ombra che avevano tenuto in piedi il servizio.",
  "Il risparmio di una vita iniziò a defluire in parcelle. L'Amministrazione rispondeva con la grammatica del rinvio: eccezioni procedurali, richieste di integrazione documentale, approfondimenti istruttori che non approdavano da nessuna parte. Ogni istanza cadeva nel silenzio.",
  "L'uomo si consumò tra udienze rinviate e conti correnti svuotati. Morì civilmente tra le carte bollate. Il sistema non gli riconobbe niente. Farlo avrebbe significato ammettere di non averlo visto per anni, e questa era forse l'unica cosa che il sistema sapeva fare davvero bene: ignorare con coerenza.",
];

const LabirintoBurocratico = () => (
  <PageShell
    title="Il labirinto burocratico"
    subtitle="Quando la fedeltà al lavoro viene punita dal sistema che si è servito"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano sommerso da pile di pratiche burocratiche" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LabirintoBurocratico;