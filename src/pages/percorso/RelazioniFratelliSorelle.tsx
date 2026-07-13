import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const sezioni = [
  {
    titolo: "Dati",
    voci: [
      "Nome e cognome",
      "Posizione nell'albero genealogico (maggiore, minore...)",
      "Foto della persona, con le date di nascita ed eventuale morte",
    ],
  },
  {
    titolo: "Il rapporto",
    voci: [
      "Come andava il rapporto tra noi da piccoli, complice o conflittuale",
      "Se giocavamo insieme o vivevamo mondi separati",
      "Come si è trasformato il rapporto crescendo, fino a oggi",
    ],
  },
  {
    titolo: "Ruoli e confronto",
    voci: [
      "Che ruolo avevamo l'uno rispetto all'altro, chi proteggeva chi, chi comandava, chi seguiva",
      "Se mi sono sentita messa a confronto con lei/lui dai genitori, e come",
      "Gelosie o rivalità vissute, e per cosa",
    ],
  },
  {
    titolo: "Legame ed eredità",
    voci: [
      "Momenti difficili affrontati insieme",
      "Cosa mi ha dato di positivo, e cosa invece di più difficile",
      "Cosa le/gli direi oggi",
    ],
  },
];

const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

const RelazioniFratelliSorelle = () => {
  return (
    <PageShell title="Fratelli e sorelle" subtitle="L'albero genealogico">
      <article className="space-y-6">
        <p className={pCls}>Alcuni spunti per costruire la scheda della relazione con i tuoi fratelli e sorelle. Rispondi con parole tue, su un quaderno o su un foglio a parte: non c'è un modo giusto di farlo.</p>
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

export default RelazioniFratelliSorelle;
