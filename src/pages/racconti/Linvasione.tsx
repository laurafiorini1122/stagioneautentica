import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linvasione.jpg";

const paragrafi = [
  "Per quarant'anni la casa era stata un porto d'attracco. Un luogo dove approdare a luci spente, consumare un pasto rapido e chiudere gli occhi fino alla successiva chiamata del mondo. L'uomo conosceva i suoi muri solo come confini del sonno. La sua vera residenza era altrove, nel rumore del fare.",
  "Con la pensione, l'uomo divenne un abitante permanente. E la casa reagì come un organismo che rigetta un corpo estraneo. Ogni mobile sembrava aver cambiato angolazione. Gli spigoli dei tavoli lo colpivano con precisione maligna. Le stanze, che un tempo gli apparivano vaste, ora si rimpicciolivano a ogni suo passo. Non c'era un centimetro quadrato che non fosse già occupato da una logica a lui aliena: quella della donna che, in quegli anni, aveva governato lo spazio in sua assenza.",
  "L'uomo vagava nel corridoio come un fantasma in cerca di una funzione. Provò a sedersi in salotto, ma il divano sembrava respingerlo, troppo morbido per chi aveva vissuto nella rigidità del comando. Provò a sostare in cucina, ma ogni suo gesto intralciava una danza di abitudini consolidate da decenni. «Cosa fai qui?», chiedeva lo sguardo della donna, anche quando la bocca restava chiusa. Non era una domanda, era una constatazione di ingombro.",
  "Il silenzio domestico non era pace; era un ronzio ostile. La luce che filtrava dalle tapparelle disegnava sbarre d'ombra sul pavimento, trasformando ogni stanza in una cella di isolamento. L'uomo si accorse che non stava abitando la casa: la stava infestando.",
  "L'uomo non tentò più di reclamare il suo spazio. Si rimpicciolì, cercando di occupare il minor volume possibile, fino a diventare un'ombra sottile contro la parete. La donna passò con lo straccio per la polvere, sfiorando il punto in cui lui si trovava, senza rallentare, senza vederlo. Lui era diventato una macchia sul muro, un difetto della carta da parati che nessuno avrebbe mai riparato. L'integrazione nel vuoto era ultimata: l'intruso era stato finalmente assorbito dal cemento.",
];

const Linvasione = () => (
  <PageShell
    title="L'invasione"
    subtitle="Quando la casa diventa un territorio ostile abitato da un estraneo"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano che si dissolve contro il muro di casa" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default Linvasione;