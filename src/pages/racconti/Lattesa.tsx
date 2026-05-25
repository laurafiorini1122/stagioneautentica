import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import lattesaImg from "@/assets/lattesa.jpg";

const paragrafi = [
  "Un uomo aveva lavorato una vita: l'alba, il caffè trangugiato in fretta, il treno, l'ufficio, poi di nuovo il treno, la casa, la cena, il letto. Un ciclo ininterrotto per quarantacinque anni, spezzato solo da quindici giorni estivi, ogni volta nello stesso anonimo luogo di villeggiatura. Aveva scalato, ottenuto, confermato. Ogni promozione era stata la prova che il ciclo valeva la pena.",
  "Poi, un giorno, l'ultimo timbro del cartellino: la pensione.",
  "All'inizio ci fu il silenzio. L'uomo lo scambiò per pace. Il lusso di un sonno prolungato, la lettura del giornale senza l'ansia dell'orologio, il caffè sorseggiato in una quiete insolita. Ma dopo qualche settimana, quella sensazione svanì. I vicini si riversavano fuori dalle loro case, la città correva con la sua solita frenesia, e lui restava fermo. Il silenzio, da privilegio, era diventato un peso.",
  "Per quarantacinque anni il giudizio degli altri aveva funzionato da bussola — il riconoscimento, il prestigio, la carriera come specchio in cui vedersi. Senza quello specchio, non sapeva più cosa guardare. Niente e nessuno lo aveva preparato alla vita oltre la professione, e lui non aveva avuto il tempo, né la voglia, di prepararsi. Si trovava a fare i conti con un sé stesso che, in fondo, gli era sempre stato uno sconosciuto.",
  "Un pomeriggio, guardando la vita che passava oltre il vetro, qualcosa cedette. La sua esistenza era stata il suo ruolo. Senza ruolo, non c'era uomo. Decise di smettere di cercare. Scelse l'unica azione che non richiedeva utilità: l'attesa.",
  "Sistemò la poltrona vicino alla finestra. La posizione era perfetta. Ogni mattina, dopo aver espletato i bisogni meccanici del corpo, si sedeva. Non leggeva. Non guardava davvero. Aspettava. Il tempo continuava a scorrere, un fiume che non arrivava da nessuna parte. Le pareti della stanza rimasero al loro posto, ma la porta sembrò farsi più piccola, più lontana.",
  "L'uomo non aspettava un ritorno, né una visita, né un cambiamento. Aspettava perché l'attesa era diventata la sua nuova mansione, l'unico incarico che nessuno poteva revocargli. Rimase lì, immobile, un custode di sé stesso in una stanza vuota. Fuori il mondo continuava a correre, ignaro che dietro quel vetro un uomo avesse finalmente trovato il suo posto: un'attesa infinita che non prevedeva alcun arrivo.",
];

const Lattesa = () => {
  return (
    <PageShell
      title="L'attesa"
      subtitle="Quando il tempo libero diventa la prigione più silenziosa"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={lattesaImg}
          alt="Poltrona vuota accanto a una finestra in una stanza silenziosa"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <article className="space-y-6">
        {paragrafi.map((p, i) => (
          <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">
            {p}
          </p>
        ))}
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default Lattesa;