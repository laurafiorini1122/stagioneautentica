import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ProponiFinale from "@/components/ProponiFinale";
import img from "@/assets/labirinto-burocratico-donna.jpg";

const paragrafi = [
  "Per anni, una donna aveva costruito il suo ruolo nell'amministrazione come una rete di tutele. Non era burocrazia; era qualcosa che non aveva un nome preciso negli organigrammi. Una cura ostinata, che continuava oltre l'orario, oltre il mandato. Arrivava prima degli altri, restava dopo, portava a casa i fascicoli più difficili non perché qualcuno glielo chiedesse, ma perché non riusciva a smettere di pensarci. Gestiva un settore rivolto ai fragili, convinta di fare da tramite tra la rigidità del codice e la vita concreta delle persone.",
  "L'imminenza della pensione le era sembrata l'occasione giusta per trasmettere quelle pratiche. Voleva consegnare alla successora qualcosa che reggesse. La giovane era ambiziosa, con buone intenzioni a fior di labbra, e all'inizio mostrò una riconoscenza genuina: capiva di non essere ancora all'altezza della complessità che si trovava tra le mani, e la collega in pensione era il puntello che teneva in piedi tutto. Accettò il sostegno con gratitudine, quasi con sollievo.",
  "Ma la gratitudine ha una durata. La giovane non aveva la stessa tenuta, né la pazienza per costruirla. Gestire quel settore richiedeva una resistenza che non si impara in fretta: reggere l'urto delle situazioni più intricate senza scaricarle su procedure standardizzate, senza perdere il filo delle persone che ci stavano dietro. Lei diceva di voler fare, annuiva, prendeva appunti. Poi rimandava, si sovraccaricava di cose più semplici, lasciava che fosse ancora la donna a risolvere le crisi.",
  "Quando la giovane le chiese di restare «ancora un po'», la donna accettò, lusingata dall'idea di un passaggio graduale.",
  "La transizione divenne un limbo lungo tre anni. Formalmente fuori, materialmente incastrata: continuava a gestire il settore, a istruire pratiche, a tenere i fili che la successora non sapeva raccogliere, mentre la titolare ufficiale incassava i meriti e rimandava la presa in carico reale.",
  "Poi arrivò il cavillo. Un vincolo burocratico, privo di basi normative solide e contestabile con un minimo di volontà, fu usato come pretesto per interrompere la collaborazione. La giovane non cercò una strada alternativa. Non fece nessuno sforzo per aggirare l'ostacolo. Era più semplice così. Forse più comodo. La donna che la sosteneva era anche quella che rendeva visibile, per contrasto, quanto la successora non fosse all'altezza. Lavorare bene, in certi ambienti, è una colpa silenziosa: mette in risalto l'incapacità degli altri, che sono quasi sempre la maggioranza. Chi arriva prima e resta dopo diventa un rimprovero ambulante. Meglio liberarsene.",
  "Senza una parola di spiegazione, la donna fu revocata. Ogni suo contributo degli ultimi decenni venne cancellato. La rete di supporto ai fragili fu smantellata in favore di procedure standardizzate. Chi le era stato vicino si volatilizzò. I colleghi si adeguarono al nuovo corso con la rapidità di chi sa sempre da che parte stare. La donna passò in un istante da punto di riferimento a peso da togliersi.",
];

const LabirintoBurocraticoDonna = () => (
  <PageShell title="Il labirinto burocratico" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Chi ha subito un'ingiustizia deve combatterla fino in fondo, altrimenti ha perso</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna in un ufficio amministrativo circondata da pile di pratiche" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>

    <ProponiFinale raccontoTitolo="Il labirinto burocratico" />

    <section className="mt-24">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-8">
        Finali proposti
      </h2>
      <article>
        <p className="font-serif text-xl md:text-2xl text-foreground mb-4">
          Proposta di sottotitolo e finale di <strong>Laura</strong>
        </p>
        <Link
          to="/una-donna/labirinto-burocratico/finale-laura"
          className="font-serif italic text-xl md:text-2xl text-foreground tracking-tight hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
        >
          Quando la dignità vale più dell'ultima battaglia
        </Link>
      </article>
    </section>

    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LabirintoBurocraticoDonna;