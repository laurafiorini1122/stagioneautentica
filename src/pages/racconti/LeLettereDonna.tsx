import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-lettere-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Dopo quarant'anni di lavoro, una donna aveva portato a casa due cose: la pensione e un elenco di torti che teneva in mente da decenni.",
  "Non torti grandi. Il capufficio che nel '94 si era preso il merito di un'idea sua davanti al direttore, e lei aveva lasciato perdere. Un'amica che a una cena aveva detto una cosa falsa su di lei davanti a tutti, e la donna si era limitata a sorridere. Cose così.",
  "Ma ciò che le rodeva di più era altro. In certi momenti in cui una discussione si accendeva, una voce saliva di tono, si era sempre bloccata. Gli altri sapevano essere aggressivi e lucidi insieme, tirare fuori le parole giuste con una sicurezza che non lasciava spazio. Lei no. Anche quando capiva che avevano torto — e spesso ce l'avevano — rimaneva in silenzio, schiacciata da quella velocità. La risposta giusta le arrivava ore dopo, a volte il giorno seguente, mentre era sola in macchina o stava per addormentarsi. Perfetta, inattaccabile, inutile.",
  "In pensione aveva capito che le risposte verbali non sarebbero mai arrivate in tempo. Aveva smesso di aspettarle.",
  "Cominciò pertanto a scrivere lettere. Poteva costruire a freddo quello che non era riuscita a dire a caldo — senza una voce che la sovrastava, senza quella sensazione di vuoto in testa mentre l'altro parlava.",
  "Le scriveva a mano, su carta pesante, con la stilografica comprata apposta. Le rileggeva, correggeva, riscriveva. Ci metteva settimane su una sola. Non bastava che fossero giuste — dovevano essere definitive. Doveva trovare la frase che non ammetteva repliche, quella che avrebbe chiuso ogni questione.",
];

const LeLettereDonna = () => (
  <PageShell title="Le lettere" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Ho ancora dei conti aperti con il passato che devo chiudere</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive lettere sigillate circondata da buste" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Le lettere" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LeLettereDonna;
