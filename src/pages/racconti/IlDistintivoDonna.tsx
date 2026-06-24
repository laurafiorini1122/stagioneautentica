import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/donna-il-distintivo.png";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per ventotto anni una donna aveva portato lo stesso badge, sostituito solo due volte: la prima quando era scaduto, la seconda quando era cambiato il logo dell'azienda. Foto tessera, nome, cognome, qualifica: «Responsabile Acquisti». Lo agganciava alla borsa ogni mattina, con lo stesso gesto automatico con cui altre si infilano un orecchino.",
  "Il giorno della pensione, la collega delle risorse umane le chiese di restituirlo come prevedeva la procedura. La donna lo staccò dalla tracolla e lo posò sul tavolo, sentendo qualcosa che non sapeva nominare: non tristezza, non rabbia. Più simile alla sensazione di restituire un documento d'identità sapendo che nessuno gliene avrebbe più rilasciato uno nuovo.",
  "A casa il badge non mancava. Mancava fuori: in coda alla posta, al supermercato, per strada. La mano andava alla borsa, cercava il gancio, non trovava niente. Un gesto a vuoto, come quando si allunga la mano verso un oggetto che non è più al suo posto.",
  "Un pomeriggio, per caso, passò davanti a una copisteria che faceva anche tessere plastificate, pass per parcheggi, cartellini per fiere. In vetrina, un cartello: «Badge personalizzati, pronti in giornata». Si ritrovò dentro prima ancora di decidere di entrarci.",
  "Aveva ancora, sul telefono, la foto del vecchio badge, scattata anni prima per sostituirlo in caso di smarrimento. La mostrò al ragazzo dietro al banco. «Mi serve uguale a questo», disse. «Per un ricordo.»",
  "Il ragazzo non fece domande. Ricreò il layout, il logo, i colori. Per il nome lasciò lo stesso. Per la qualifica, la donna esitò un istante, poi disse: «Lasci pure così». Ritirò il badge il giorno dopo, in una busta trasparente, identico all'originale tranne che per il retro: la plastica, lì, era leggermente più sottile.",
  "Lo portò a casa. Lo posò nello stesso punto dove per ventotto anni, ogni sera tornando dal lavoro, aveva posato l'originale: sul mobile dell'ingresso, accanto alle chiavi della macchina.",
];

const IlDistintivoDonna = () => (
  <PageShell
    title="Il distintivo"
    subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Un nome scritto su un cartellino è ancora un'identità</em></strong></span></>}
    bgClassName="bg-page-donna"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Il distintivo" width={2752} height={1536} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il distintivo" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlDistintivoDonna;
