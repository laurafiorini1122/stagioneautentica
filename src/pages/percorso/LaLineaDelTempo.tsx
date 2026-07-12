import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LaLineaDelTempo = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="La linea del tempo">
      <article className="space-y-6">
        <p className={pCls}>Dopo averlo concluso, ho trasposto il mio CV in una linea del tempo per mantenere ancora l'oggettività di quanto vissuto e per inserire gli anni dalla nascita al primo titolo di studio: quelli che nel CV non compaiono mai, come se la vita cominciasse solo quando diventi utile a qualcuno.</p>
        <p className={pCls}>Amo usare il PC, quindi ho aperto un foglio di calcolo e ho impostato le colonne: Anni — Dove ho abitato — Scuole, lavoro e formazione — Eventi significativi — Come ho risposto — Cosa porto con me. Le righe con gli anni, suddivise per fasce: da 0 a 5, da 6 a 10, da 11 a 13, da 14 a 18, e poi università, primi lavori, e via avanti.</p>
        <p className={pCls}>Fino a quando si è trattato di compilare dati oggettivi sono andata abbastanza spedita. Poi, per aiutare la memoria a recuperare ricordi sfocati, episodi che non riesco sempre a collocare nel tempo e nello spazio, ho aperto la scatola delle fotografie, le prime ancora in bianco e nero. Sono un'ossessionata della catalogazione, lo ammetto senza vergogna, e così ho selezionato le fotografie in cui ci sono solo io, le ho suddivise per periodi e inserite in buste colorate, una per ogni fase della vita.</p>
        <p className={pCls}>L'obiettivo non era scrivere un'autobiografia: quella è un'altra cosa, più letteraria e più esposta. Quello che mi interessava era qualcosa di più selettivo e più utile: individuare i comportamenti ricorrenti, le reazioni che si ripetono nelle relazioni e nelle scelte, che riconosco come mie anche a distanza di decenni. Non cosa è successo, ma come ho risposto a quello che è successo. Quella, alla fine, è l'unica parte della storia che dice qualcosa di davvero interessante su chi si è.</p>
        <p className={pCls}>Ed è lì che è cominciata la vera fatica.</p>
        <p className={pCls}>In pensione la mente ha finalmente tempo. Ma il tempo, senza una direzione, diventa facilmente uno spazio in cui rimuginare. La mente ristagna, torna sugli stessi punti, si blocca. I social sono pieni di frasi che fanno stare bene per qualche minuto, i libri di crescita personale promettono rivoluzioni interiori in dodici capitoli, i video motivazionali durano tre minuti e lasciano una sensazione di leggerezza che svanisce prima di sera. Poi la mente riprende il sopravvento, e ci si ritrova al punto di prima: o peggio, con l'aggiunta del senso di colpa per non essere riuscite a cambiare.</p>
        <p className={pCls}>Man mano che passavo in rassegna gli anni da adulta, il ricordare diventava più difficile. Non per mancanza di dati, ma perché è l'età delle scelte. E le scelte portano con sé i rimpianti, i giudizi su sé stessa, il pensiero ricorrente di quello che avrei potuto fare e non ho fatto.</p>
        <p className={pCls}>Qui voglio essere onesta: c'è un rischio reale in questo esercizio. Il rischio di restare bloccate nel passato, di trasformare la linea del tempo in un tribunale invece che in uno strumento. Di usare quello che è stato per giustificare quello che non si riesce a cambiare, dimenticando che il passato non si può cambiare, e nemmeno le persone che ne hanno fatto parte. L'unica cosa che si può cambiare è sé stesse. Non i ricordi, non chi eravamo, non chi ci ha fatto del male o chi abbiamo deluso. Solo il modo in cui scegliamo di stare con tutto questo.</p>
        <p className={pCls}>Ma cambiare richiede fatica vera, non la fatica morbida del rimuginare. Richiede azioni concrete. Per me scrivere è stato uno di quegli strumenti: non per restare ancorata al passato, ma per guardarlo in faccia. Per far affiorare episodi che erano rimasti in superficie senza essere mai davvero guardati, e poi lasciarli andare. Non è stato romantico, né rapido. Ci si può crogiolare a lungo in un tempo sospeso che sembra movimento ma non porta da nessuna parte. La differenza tra il rimuginare e il lavorare su sé stesse è sottile ma decisiva: una ti tiene ferma, l'altra ti sposta.</p>
        <p className={pCls}>C'è un punto, e lo si riconosce quando ci si arriva, non prima, in cui il passato smette di essere una spiegazione e diventa semplicemente quello che è: qualcosa che è accaduto. Qualcosa che spiega molte cose, ma non libera da niente. Perché la liberazione non arriva dalla comprensione: arriva dalla scelta. È il momento in cui si smette di essere ciò che ci è successo e si comincia a decidere cosa farne. Non si tratta di perdonare, necessariamente, né di dimenticare. Si tratta di smettere di lasciare che il passato abbia ancora voce in capitolo sul presente.</p>
        <p className={pCls}>Non è un passaggio facile: è un lavoro impegnativo, quotidiano, che richiede un'onestà verso sé stesse che a volte fa paura. Ma è anche il momento in cui la linea del tempo smette di essere un archivio e diventa qualcosa di più utile: la mappa da cui capire da dove si parte, per scegliere, finalmente, dove andare.</p>
      </article>

      <section className="mt-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">Strumenti</h2>
        <p className={pCls}>
          Puoi scaricare un esempio da modificare e compilare al PC o da stampare e completare a mano oppure puoi usare un quaderno e prendere ispirazione dai file gestendo gli spazi come meglio credi.
        </p>
        <p className={pCls}>
          <a
            href="/Linea_Tempo.xlsx"
            download
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Esempio in formato Excel
          </a>
        </p>
      </section>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LaLineaDelTempo;
