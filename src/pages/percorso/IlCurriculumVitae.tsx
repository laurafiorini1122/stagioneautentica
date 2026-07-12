import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const IlCurriculumVitae = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Il curriculum vitae">
      <article className="space-y-6">
        <p className={pCls}>Il primo gesto concreto è stato banale: ho ripreso in mano il mio curriculum vitae.</p>
        <p className={pCls}>Non per mandarlo da qualche parte. Con la pensione appena arrivata, quell'idea mi sembrava quasi comica. L'ho ripreso per aggiornarlo con la data di fine servizio e poi, per la prima volta, leggerlo dall'inizio alla fine come se fosse il documento di qualcun altro.</p>
        <p className={pCls}>È stata una lettura strana. C'erano quarant'anni di vita compressi in poche pagine. Date, ruoli, qualifiche, competenze. Tutto esatto, tutto verificabile, tutto, però, rivolto verso l'esterno. Il curriculum vitae non racconta chi sei: racconta cosa hai fatto nell'ottica di chi potrebbe avere bisogno di te. È un documento di utilità, non di identità. È la risposta alla domanda degli altri, non alla tua.</p>
        <p className={pCls}>Mi è sempre pesato scriverlo, aggiornarlo, mandarlo. Quella sensazione di doversi ridurre a un elenco puntato, di scegliere cosa includere e cosa omettere sapendo che qualcuno avrebbe valutato, classificato, approvato o scartato. Non era ansia da prestazione: era il disagio di chi sa che quell'elenco non è davvero la persona che lo sta scrivendo. Quella sensazione, oggi, ha un significato più chiaro. Il curriculum non mi ha mai giudicata. Sono io che, per anni, ho lasciato che lo facesse.</p>
        <p className={pCls}>Eppure quel documento non dice come ho lavorato. Non dice se un'attività mi pesava o mi faceva sentire viva, le scelte fatte, gli errori ammessi ad alta voce, le relazioni costruite negli anni e mai messe per iscritto. Il curriculum elenca i ruoli. Non dice se in quei ruoli sono stata leale con me stessa.</p>
        <p className={pCls}>E non importa quale lavoro si è fatto. Ogni lavoro, anche il meno visibile, ha avuto un suo peso, una sua necessità: non c'è da vantarsene e non c'è da vergognarsene. Conta il modo in cui quel ruolo è stato vissuto. Con cura o di malavoglia. Con onestà o barando un po'. Con passione o soltanto per dovere. Su questo, il curriculum tace.</p>
        <p className={pCls}>Il curriculum vitae è pieno di etichette. Alcune le ho scelte io, altre me le hanno cucite addosso gli anni e le circostanze. Rileggendolo, mi chiedevo quante di quelle etichette corrispondessero davvero a qualcosa che sentivo mio e quante fossero invece il risultato di aspettative, altrui o mie, alle quali avevo risposto senza chiedermi se fosse quello che volevo.</p>
        <p className={pCls}>Ho chiuso il file. L'ho rinominato: <em>CV archiviato</em>.</p>
        <p className={pCls}>Poi ho aperto un documento nuovo.</p>
      </article>

      <section className="mt-16 space-y-6">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">Strumenti</h2>
        <p className={pCls}>Il modulo qui sotto è scaricabile in formato Excel (.xlsx). Si apre con Microsoft Excel oppure, se non lo hai installato, con programmi gratuiti compatibili come LibreOffice o Excel Online.</p>
        <p className={pCls}>Le sezioni sono già pronte e colorate: Informazioni personali, Esperienza professionale, Istruzione e formazione, Competenze personali, Sezioni aggiuntive. Basta scrivere accanto a ogni etichetta.</p>
        <p className={pCls}>Non tutte le voci ti riguarderanno. Se devi togliere delle parti, seleziona le righe da eliminare e premendo il tasto destro del mouse, scegli "elimina". Il foglio resta con solo ciò che ti serve.</p>
        <p className={pCls}>Vale anche il contrario. Per aggiungere parti non previste dal file, copia un blocco di righe già pronto e incollalo subito sotto, poi modifica i contenuti. Accanto ad alcuni blocchi trovi anche un piccolo simbolo "meno": premilo per comprimere quella parte e vedere il documento nel suo insieme.</p>
        <p className={pCls}>Il file è tuo: aggiungi, togli, sposta le righe finché non risulta comodo da leggere.</p>
        <p className={pCls}>
          <a
            href="/Curriculum_Vitae.xlsx"
            download
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Scarica il modulo in formato Excel
          </a>
        </p>
        <p className={pCls}>
          Scarica il documento in formato Word compilabile a mano dopo aver inserito o tolto le voci che interessano{" "}
          <a
            href="/CV_compilabile_mano.docx"
            download
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            CV_compilabile_mano.docx
          </a>
        </p>
        <p className={pCls}>
          Scarica il documento in formato Word compilabile a PC{" "}
          <a
            href="/CV_compilabile_PC.docx"
            download
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            CV_compilabile_PC.docx
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

export default IlCurriculumVitae;