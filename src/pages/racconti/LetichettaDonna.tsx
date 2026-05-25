import { useState } from "react";
import { z } from "zod";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import img from "@/assets/letichetta-donna.jpg";

// Email destinataria delle proposte
const RECIPIENT_EMAIL = "redazione@stagioneautentica.it";

const paragrafi = [
  "Dopo quarant'anni trascorsi a costruire la sua vita gesto dopo gesto, una donna si ritrovò in un territorio sconosciuto: la pensione.",
  "Amici e colleghi, con sorrisi larghi, le dicevano: «Beata te che non devi fare più niente», «Ora siamo noi a lavorare per pagarti la pensione». La donna annuiva con una smorfia. Per lei, cresciuta nell'etica del produrre, il «non fare» coincideva con il «non essere». Se non faceva, non produceva — che cosa era? «Inutile», sentenziò la voce nella sua testa.",
  "I primi giorni si trascinavano, lunghi e vuoti, come un'interminabile domenica senza la promessa del lunedì. Decenni di sveglie con uno scopo, di un ruolo definito. Ora, in questo spazio privo di orari e direttive, sentiva l'urgenza di trovarsi un'etichetta: qualcosa che la tenesse insieme, che le restituisse un posto nel mondo.",
  "C'era però qualcosa che rendeva il suo smarrimento diverso da quello di molti uomini intorno a lei. Il lavoro non era stato solo una carriera — era stato la sua emancipazione. La generazione di sua madre aveva abitato le case, governato le cucine, aspettato il ritorno di qualcuno. Lei aveva scelto altro: una scrivania, un ruolo, una firma in calce ai documenti. Per quarant'anni quella scelta aveva significato qualcosa — per lei, e per chi la guardava. Ora che quel ruolo era scomparso, temeva di scivolare indietro: non solo verso il vuoto del pensionato qualunque, ma verso qualcosa di più antico e più pesante. La casalinga. Colei che non ha mai avuto altro. Come se quei quarant'anni di lavoro fossero stati cancellati con una riga, e sotto ci fosse rimasto solo il ruolo che aveva sempre rifiutato di essere l'unico.",
  "«Sono in pensione», si disse, provando a dare un senso a quelle parole. Ma suonava strano, alieno. Lei si sentiva ancora piena di energie, di idee, di vita. «Pensione» era un termine carico di fine, di giochi conclusi — come se il sipario fosse calato e non ci fosse più nulla da aspettarsi.",
  "«I'm retired», per usare l'espressione inglese. Ma non si sentiva pronta a ritirarsi, né c'era un luogo dove nascondersi dall'assenza di scopo.",
  "Provò con altre espressioni.",
  "«In quiescenza». Era il termine peggiore. Le evocava l'immagine di una radice che marcisce sotto terra.",
  "Poi «Collocamento a riposo». La faceva sentire come un vecchio attrezzo, ancora funzionante ma un po' obsoleto, messo in un angolo polveroso.",
  "E poi «Uscire dal mondo del lavoro». Questa la assaliva con la domanda più pesante: per entrare in quale dimensione?",
  "La donna si rigirava nel letto. L'orologio segnava le 6:30. Nessuna sveglia. Nessun appuntamento. Nessun treno. Era il suo terzo giorno di pensione e il silenzio della casa, di solito un sollievo, cominciava a pesarle.",
  "«Sono nella Terza età?» Anche questa la confondeva. Nessuno le aveva mai annunciato di essere uscita dalla «seconda età». Sembrava più un'etichetta apposta dagli altri, un modo per archiviarla.",
  "«Ti puoi dedicare ai tuoi passatempi». Anche questa parola — passatempo — era carica di inutilità. Passare il tempo... per arrivare dove? La risposta era sempre la stessa, ma faceva fatica a pronunciarla. Morte. Fine.",
  "Si alzò, fece colazione. Il caffè le sembrava insapore. Il giornale era una sequenza di notizie che non la riguardavano più — la cronaca di un mondo per persone che avevano ancora il diritto di sbagliare e ricominciare. Lei era fuori dal tempo.",
  "Tornò nello studio. Se le etichette ufficiali avevano fallito, ne avrebbe create di proprie. Iniziò a scrivere parole su piccoli pezzi di carta. «Lettrice appassionata», «Amante dei viaggi», «Curiosa del mondo». Nessuna aderiva. Ogni definizione scivolava via e lei restava lì, con le parole appiccicate alla pelle come etichette su un oggetto che nessuno voleva comprare. Maschere trasparenti, che il mondo non riconosceva e che lei stessa non riusciva a indossare.",
];

const propostaSchema = z.object({
  nome: z.string().trim().nonempty({ message: "Inserisci il tuo nome." }).max(80),
  email: z.string().trim().email({ message: "Email non valida." }).max(255),
  sottotitolo: z.string().trim().max(200).optional(),
  finale: z.string().trim().nonempty({ message: "Scrivi il tuo finale o anche solo l'idea." }).max(4000),
});

const LetichettaDonna = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sottotitolo, setSottotitolo] = useState("");
  const [finale, setFinale] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = propostaSchema.safeParse({ nome, email, sottotitolo, finale });
    if (!result.success) {
      toast({ title: "Controlla il modulo", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    const subject = `Proposta di finale — L'etichetta — ${nome}`;
    const body = `Nome: ${nome}\nEmail: ${email}\n\nSottotitolo proposto:\n${sottotitolo || "(nessuno)"}\n\nFinale / idea:\n${finale}`;
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({ title: "Grazie", description: "Si aprirà il tuo programma di posta per inviare la proposta." });
    setNome(""); setEmail(""); setSottotitolo(""); setFinale("");
  };

  return (
    <PageShell title="L'etichetta" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza un&apos;etichetta che gli altri riconoscano, non so più chi sono</em></strong></span></>} bgClassName="bg-page-donna">
      <div className="mb-12 overflow-hidden rounded-sm">
        <img src={img} alt="Donna seduta a una scrivania mentre scrive, luce naturale" width={1600} height={900} loading="lazy" className="w-full h-auto object-cover" />
      </div>

      <article className="space-y-6">
        {paragrafi.map((p, i) => (
          <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
        ))}
      </article>

      {/* Spazio proposta */}
      <section className="mt-24">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-4">
          Proponi un sottotitolo e un finale
        </h2>
        <p className="font-serif text-base leading-[1.8] text-foreground/75 mb-8">
          Scrivi il tuo finale, anche solo l'idea. Quello che invii arriverà direttamente
          nella casella di posta della redazione e potrà essere pubblicato qui sotto.
        </p>
        <div className="border-2 border-dashed border-foreground/30 rounded-md p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="nome" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">Nome</Label>
                <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} maxLength={80} className="bg-background border-border rounded-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="bg-background border-border rounded-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sottotitolo" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">Sottotitolo proposto (facoltativo)</Label>
              <Input id="sottotitolo" value={sottotitolo} onChange={(e) => setSottotitolo(e.target.value)} maxLength={200} className="bg-background border-border rounded-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="finale" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">Il tuo finale (o l'idea)</Label>
              <Textarea id="finale" value={finale} onChange={(e) => setFinale(e.target.value)} rows={8} maxLength={4000} placeholder="Scrivi qui…" className="bg-background border-border rounded-sm resize-none font-serif text-base leading-[1.7]" />
            </div>
            <Button type="submit" variant="outline" className="font-sans text-xs uppercase tracking-[0.2em] px-8 py-6 rounded-sm border-foreground/40 hover:bg-foreground hover:text-background transition-colors">
              Invia la tua proposta
            </Button>
          </form>
        </div>
      </section>

      {/* Raccolta finali proposti */}
      <section className="mt-24">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-8">
          Finali proposti
        </h2>

        <article>
          <p className="font-serif text-xl md:text-2xl text-foreground mb-4">
            Proposta di sottotitolo e finale di <strong>Laura</strong>
          </p>
          <Link
            to="/una-donna/letichetta/finale-laura"
            className="font-serif italic text-xl md:text-2xl text-foreground tracking-tight hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
          >
            Quando smettere di fare significa finalmente cominciare a essere
          </Link>
        </article>
      </section>

      <div className="mt-16 mb-8">
        <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Una donna
        </Link>
      </div>
    </PageShell>
  );
};

export default LetichettaDonna;