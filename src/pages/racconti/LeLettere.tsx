import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-lettere.jpg";

const paragrafi = [
  "Dopo quarant'anni di lavoro, un uomo aveva portato a casa due cose: la pensione e un elenco di torti che teneva in mente da decenni.",
  "Non torti grandi. Il capufficio che nel '94 si era preso il merito di un'idea sua davanti al direttore, e lui aveva lasciato perdere. L'amico che a una cena aveva detto una cosa falsa su di lui davanti a tutti, e l'uomo si era limitato a sorridere. Cose così.",
  "Ma ciò che lo rodeva di più era altro. In certi momenti in cui una discussione si accendeva, una voce saliva di tono, si era sempre bloccato. Gli altri sapevano essere aggressivi e lucidi insieme, tirare fuori le parole giuste con una sicurezza che non lasciava spazio. Lui no. Anche quando capiva che avevano torto — e spesso ce l'avevano — rimaneva in silenzio, schiacciato da quella velocità. La risposta giusta gli arrivava ore dopo, a volte il giorno seguente, mentre era solo in macchina o stava per addormentarsi. Perfetta, inattaccabile, inutile.",
  "In pensione aveva capito che le risposte verbali non sarebbero mai arrivate in tempo. Aveva smesso di aspettarle.",
  "Cominciò quindi a scrivere lettere. Poteva costruire a freddo quello che non era riuscito a dire a caldo senza una voce che lo sovrastava, senza quella sensazione di vuoto in testa mentre l'altro parlava.",
  "Le scriveva a mano, su carta pesante, con la stilografica comprata apposta. Le rileggeva, correggeva, riscriveva. Ci metteva settimane su una sola. Non bastava che fossero giuste, dovevano essere definitive. Doveva trovare la frase che non ammetteva repliche, quella che avrebbe chiuso ogni questione.",
  "Ma ogni lettera finita sembrava ancora perfettibile e, pertanto, non riusciva a spedirle. Inoltre, se le avesse mandate da vivo, l'altro avrebbe potuto rispondere. E lui si sarebbe ritrovato di nuovo lì, a cercare le parole, a perdere.",
  "Aveva consegnato tutto a un notaio discreto, con istruzioni precise: spedire solo dopo la sua morte. Così non ci sarebbe stata risposta.",
  "Morì di novembre, un giovedì mattina.",
  "Il notaio rispettò le istruzioni. Alcune lettere arrivarono a indirizzi sbagliati. Tre tornarono al mittente. Le altre, probabilmente, vennero aperte e buttate via.",
];

const LeLettere = () => (
  <PageShell
    title="Le lettere"
    subtitle="Quando l'ultima parola viene affidata a un notaio e alla morte"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano scrive lettere sigillate circondato da buste" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LeLettere;