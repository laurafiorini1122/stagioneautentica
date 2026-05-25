import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-risparmio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva un'app. Non un quaderno, non un foglio di calcolo cartaceo — un'applicazione sul telefono, aggiornata ogni sera con la precisione di chi tiene un diario segreto. Ogni uscita registrata per categoria, ogni saldo mensile confrontato con il precedente, ogni piccola anomalia segnalata da una notifica arancione che lei aveva imparato a temere come un rimprovero.",
  "Caffè al bar: 1,20. Farmacia: 4,30. Verdura al mercato: 7,80. Poi sommava. Poi confrontava. Poi rifletteva.",
  "Aveva lavorato quarant'anni. Aveva ricoperto posizioni che le avevano permesso di vivere con quella dignità solida di chi non guarda il prezzo al ristorante ma non ordina mai il vino della carta. Aveva messo da parte. Aveva investito con prudenza, si era fatta aiutare da un consulente serio, aveva preso decisioni ponderate. Aveva un patrimonio sufficiente — più che sufficiente — per vivere senza preoccupazioni fino alla fine dei suoi giorni, qualunque giorno fosse.",
  "Non aveva figli. Non aveva nipoti. Non aveva cause in cui credere abbastanza da intestare loro qualcosa. Le onlus le sembravano macchine burocratiche che consumavano il 40% delle donazioni in gestione; la politica era fuori discussione da anni; la chiesa era rimasta, per lei, solo architettura. Il denaro aveva lavorato una vita per lei. Non aveva intenzione di lasciarlo lavorare per qualcun altro.",
  "E quindi risparmiava.",
  "Risparmiava sul riscaldamento, con una logica che chiamava «efficienza energetica» e che suo fratello chiamava, sottovoce, «quella storia dei diciotto gradi». Risparmiava sulla spesa, organizzando le settimane intorno alle offerte del giovedì con la concentrazione di un progetto professionale. Risparmiava sulle uscite, valutando ogni spesa voluttuaria con la serietà con cui un tempo valutava i preventivi dei fornitori.",
  "Non era avarizia, si diceva. Era rispetto per il lavoro che aveva generato quei soldi.",
  "Ma c'era un'altra spiegazione, più vicina alla superficie, che la donna evitava di guardare direttamente: spendere significava usare. Usare significava consumare. Consumare significava avvicinarsi a quel punto in cui non ci sarebbe stato più niente da consumare. Il risparmio non era solo rigore — era una forma di controllo sul tempo. Finché i soldi c'erano e crescevano, il tempo aveva ancora una direzione.",
  "Un'estate, una vecchia amica la invitò a un viaggio in Portogallo. Dieci giorni, un appartamento condiviso con altre due, una cifra ragionevole. La donna aprì l'app, fece i calcoli, trovò tre buone ragioni per rimandare.",
  "«Non è il momento giusto», disse all'amica.",
  "L'amica non chiese quale momento sarebbe stato quello giusto. Forse lo sapeva già.",
  "Quell'autunno si ruppe la lavatrice. La donna confrontò sette modelli, lesse quarantadue recensioni, aspettò una promozione che arrivò sei settimane dopo. Nel frattempo andò a lavare i panni dalla sorella, due volte a settimana, con una puntualità che cominciò a sembrare, anche a lei, leggermente sproporzionata rispetto all'entità del problema.",
  "Una domenica mattina aprì l'app e guardò il saldo. Era cresciuto, come ogni mese. La notifica era verde, non arancione.",
  "Si accorse di stare sorridendo.",
  "Non perché fosse felice. Ma perché il saldo cresceva, e il saldo che cresceva era l'unica cosa che continuasse a darle la sensazione di andare nella direzione giusta. Anche se non aveva più deciso dove fosse, quella direzione.",
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