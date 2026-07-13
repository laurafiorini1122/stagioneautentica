import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const sezioni = [
  {
    titolo: "Dati",
    voci: [
      "Nome e cognome",
      "Foto della persona, con le date di nascita ed eventuale morte",
    ],
  },
  {
    titolo: "Accudimento e sicurezza",
    voci: [
      "Com'eri accudita da piccola, se presenti e attenti ai tuoi bisogni o più distanti",
      "Se ti sentivi al sicuro e protetta con loro",
      "Come reagivano alle tue emozioni, rabbia tristezza paura, se ti lasciavano spazio per esprimerle o ti spingevano a tenerle dentro",
    ],
  },
  {
    titolo: "Comunicazione e affetto",
    voci: [
      "Come si comunicava in casa, se c'era apertura o argomenti che restavano sempre sul vago",
      "Come i tuoi genitori ti facevano sentire il loro affetto, con le parole, con i gesti, con il tempo passato insieme",
      "Come si affrontavano i litigi in famiglia",
    ],
  },
  {
    titolo: "Regole e aspettative",
    voci: [
      "Quali erano le regole di casa, e se erano chiare o cambiavano a seconda dei momenti",
      "Cosa si aspettavano da te, negli studi, nel comportamento, per il futuro",
      "Cosa succedeva quando sbagliavi o disobbedivi",
    ],
  },
  {
    titolo: "Ruoli in famiglia",
    voci: [
      "Che ruolo avevi in famiglia, la brava figlia, quella ribelle, quella che teneva pace",
      "Com'era il rapporto tra i tuoi genitori",
      "Chi decideva le cose importanti in casa",
    ],
  },
  {
    titolo: "Momenti difficili",
    voci: [
      "Momenti difficili o eventi pesanti vissuti insieme a loro",
      "Come hanno reagito i tuoi genitori in quei momenti e quanto ti sono stati vicino",
    ],
  },
  {
    titolo: "Modelli appresi",
    voci: [
      "Cose che facevano o dicevano i tuoi genitori che ritrovi anche in te",
      "Modi di pensare le relazioni che ti sembrano simili ai loro",
    ],
  },
  {
    titolo: "Il mio valore",
    voci: [
      "Se ti sentivi amata e accettata per come eri davvero",
      "Se avevi spazio per essere te stessa, con le tue idee",
      "Quanto il loro giudizio pesava su come ti vedevi",
    ],
  },
];

const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

const RelazioniGenitori = () => {
  return (
    <PageShell title="Genitori" subtitle="L'albero genealogico">
      <article className="space-y-6">
        <p className={pCls}>Alcuni spunti per costruire la scheda della relazione con i tuoi genitori. Rispondi con parole tue, su un quaderno o su un foglio a parte: non c'è un modo giusto di farlo.</p>
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

export default RelazioniGenitori;
