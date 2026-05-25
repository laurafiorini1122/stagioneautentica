import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linvasione.jpg";

const paragrafi = [
  "Per quarant'anni la casa era stato un posto dove dormire. L'uomo conosceva i suoi muri come confini del sonno, non come confini della vita. La sua vera residenza era altrove, nel rumore del fare.",
  "Con la pensione, divenne un abitante permanente. La casa reagì come un organismo che rigetta un intruso. Gli spigoli dei tavoli lo colpivano con precisione maligna. Le stanze, che un tempo gli apparivano vaste, si rimpicciolivano a ogni suo passo. Non c'era un centimetro quadrato che non fosse già occupato da una logica a lui aliena: quella della donna che, in quegli anni, aveva governato lo spazio in sua assenza.",
  "L'uomo vagava nel corridoio come un fantasma in cerca di una funzione. Provò a sedersi in salotto, ma il divano sembrava respingerlo. Provò a sostare in cucina, ma ogni suo gesto intralciava qualcosa che non sapeva nominare. «Cosa fai qui?», chiedeva lo sguardo della donna, anche quando la bocca restava chiusa. Non era una domanda. Era una constatazione di ingombro.",
  "Il silenzio domestico ronzava. La luce filtrava dalle tapparelle disegnando sbarre sul pavimento. L'uomo si accorse che non stava abitando la casa: la stava infestando.",
  "Smise di reclamare. Si rimpicciolì, cercando di occupare il minor volume possibile, finché non divenne un'ombra contro la parete. La donna passò con lo straccio per la polvere, sfiorando il punto in cui lui si trovava, senza rallentare, senza vederlo. Era diventato una macchia sul muro, un difetto della carta da parati che nessuno avrebbe mai riparato. L'integrazione nel vuoto era ultimata: l'intruso era stato finalmente assorbito dal cemento.",
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