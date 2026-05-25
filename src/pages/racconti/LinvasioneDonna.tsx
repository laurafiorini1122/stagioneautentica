import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/linvasione-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quarant'anni la casa era stata un posto dove dormire. La donna conosceva i suoi muri come confini del sonno, non come confini della vita. La sua vera residenza era altrove, nel rumore del fare.",
  "Con la pensione, divenne un'abitante permanente. La casa reagì come un organismo che rigetta un intruso. Gli spigoli dei tavoli la colpivano con precisione maligna. Le stanze, che un tempo le apparivano vaste, si rimpicciolivano a ogni suo passo. Non c'era un centimetro quadrato che non fosse già occupato da una logica a lei aliena: quella della colf che, in quegli anni, aveva governato lo spazio in sua assenza — e che la donna aveva deciso di tenere, perché la casa era sempre stata in ordine grazie a lei, e non sembrava giusto cambiare le cose adesso.",
  "La donna vagava nel corridoio come un fantasma in cerca di una funzione. Provò a sedersi in salotto, ma il divano sembrava respingerla. Provò a sostare in cucina, ma ogni suo gesto intralciava qualcosa che non sapeva nemmeno nominare. «Cosa fai qui?», chiedeva lo sguardo della colf, anche quando la bocca restava chiusa. Non era una domanda. Era una constatazione di ingombro.",
  "Il silenzio domestico ronzava. La luce filtrava dalle tapparelle disegnando sbarre sul pavimento. La donna si accorse che non stava abitando la casa: la stava infestando.",
];

const LinvasioneDonna = () => (
  <PageShell title="L'invasione" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>In pensione sono diventata un ingombro anche a casa mia</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Colf intralciata dalla donna in pensione" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="L'invasione" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LinvasioneDonna;