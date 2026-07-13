import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const sezioni = [
  {
    titolo: "Dati",
    voci: [
      "Nome e cognome",
      "Posizione nell'albero genealogico (zio, cugina, nonna...)",
      "Foto della persona, con le date di nascita ed eventuale morte",
    ],
  },
  {
    titolo: "Il ricordo",
    voci: [
      "Perché mi ricordo di lei/lui",
      "Cosa mi ha lasciato",
      "Come mi ha arricchita",
      "Cosa le/gli direi oggi",
    ],
  },
  {
    titolo: "Eredità e legame",
    voci: [
      "Oggetti suoi che ho ancora a casa o altri che me lo ricordano",
      "Episodi o situazioni che l'hanno reso importante in un momento preciso della mia vita e perché",
    ],
  },
];

const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

const RelazioniParenti = () => {
  return (
    <PageShell title="Parenti" subtitle="L'albero genealogico">
      <article className="space-y-6">
        <p className={pCls}>Alcuni spunti per costruire la scheda della relazione con i tuoi parenti. Rispondi con parole tue, su un quaderno o su un foglio a parte: non c'è un modo giusto di farlo.</p>
      </article>

      <div className="mt-12 space-y-10">
        {sezioni.map((sezione) => (
          <div key={sezione.titolo}>
            <h2 className="font-serif text-xl md:text-2xl text-foreground tracking-tight mb-4">{sezione.titolo}</h2>
            <ul className={`${pCls} list-disc pl-6 space-y-2`}>
              {sezione.voci.map((voce) => (
                <li key={voce}>{voce}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-8">
        <Link
          to="/tracce/lalbero-genealogico"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a L'albero genealogico
        </Link>
      </div>
    </PageShell>
  );
};

export default RelazioniParenti;
