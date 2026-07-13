import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LalberoGenealogico = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="L'albero genealogico">
      <article className="space-y-6">
        <p className={pCls}>Dopo il curriculum vitae e la linea del tempo, lo sguardo si allarga. Non più solo la mia storia, ma le persone dentro cui quella storia è nata.</p>
        <p className={pCls}>Ho ripreso la scatola delle fotografie. Non per ordinarle: per rovistare, che è un gesto diverso. Tra quelle foto ho ritrovato facce che non vedevo da anni, e alcune che non vedrò più.</p>
        <p className={pCls}>I parenti non si scelgono. Si trovano, già lì, quando arrivi. Alcuni li hai frequentati abbastanza da costruire qualcosa di vero. Altri li hai tenuti a distanza, o ci hai provato. Anche questo fa parte della storia.</p>
        <p className={pCls}>Quello che ho cercato di fare, guardando quelle foto, è capire cosa ciascuna di quelle persone mi ha lasciato: in positivo e in negativo, perché entrambe le cose contano. Un modo di fare, una frase detta al momento giusto o sbagliato, un oggetto che è ancora in casa e che ogni tanto incontro. A volte è un episodio preciso, una situazione che ricordo bene e che mi ha fatto capire perché quella persona è stata importante, o difficile, o tutte e due le cose insieme.</p>
        <p className={pCls}>Questa traccia parte da lì: dall'albero genealogico come mappa di relazioni, non solo di nomi e date.</p>
      </article>

      <section className="mt-16 space-y-6">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">Strumenti</h2>
        <p className={pCls}>
          La rete offre molte risorse per compilare l'albero genealogico. Io ho utilizzato{" "}
          <a
            href="http://myheritage.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            MyHeritage
          </a>
          , gratuito fino alla compilazione dell'albero personale.
        </p>
        <p className={pCls}>Permette di aggiungere immagini e, per ogni persona, una scheda con molti dati: biografia, informazioni personali e altro ancora. L'albero generato può essere utile come base per crearne uno fai da te, con collage, disegni, stampe fotografiche.</p>
        <p className={pCls}>Anche qui si può realizzare una linea del tempo con le date di nascita ed eventuale morte dei tuoi familiari. Poi, autonomamente, per ciascuna persona puoi creare una scheda per definire le relazioni che avevi con lei.</p>
        <p className={pCls}>In allegato esempi di schede da personalizzare:</p>
        <ul className={`${pCls} list-disc pl-6 space-y-2`}>
          <li>
            <a href="/Scheda_Genitori.docx" download className="underline underline-offset-4 hover:text-foreground transition-colors">
              Le relazioni con i genitori
            </a>
          </li>
          <li>
            <a href="/Scheda_Fratelli_Sorelle.docx" download className="underline underline-offset-4 hover:text-foreground transition-colors">
              Le relazioni con fratelli / sorelle
            </a>
          </li>
          <li>
            <a href="/Scheda_Parenti.docx" download className="underline underline-offset-4 hover:text-foreground transition-colors">
              Le relazioni con i parenti
            </a>
          </li>
        </ul>
        <p className={pCls}>Usa questi spunti per compilare un tuo profilo delle persone che compongono il tuo albero genealogico. Puoi realizzare un quaderno tutto tuo, arricchito con immagini e scritte colorate.</p>
      </section>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LalberoGenealogico;
