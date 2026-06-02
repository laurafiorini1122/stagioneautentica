import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjreonr";

const propostaSchema = z.object({
  nome: z.string().trim().nonempty({ message: "Inserisci il tuo nome." }).max(80),
  email: z.string().trim().email({ message: "Email non valida." }).max(255),
  sottotitolo: z.string().trim().max(200).optional(),
  finale: z
    .string()
    .trim()
    .nonempty({ message: "Scrivi il tuo finale o anche solo l'idea." })
    .max(4000),
});

interface ProponiFinaleProps {
  raccontoTitolo: string;
}

const ProponiFinale = ({ raccontoTitolo }: ProponiFinaleProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sottotitolo, setSottotitolo] = useState("");
  const [finale, setFinale] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = propostaSchema.safeParse({ nome, email, sottotitolo, finale });
    if (!result.success) {
      toast({
        title: "Controlla il modulo",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          racconto: raccontoTitolo,
          nome,
          email,
          sottotitolo: sottotitolo || "(nessuno)",
          finale,
          _subject: `Proposta di finale — ${raccontoTitolo} — ${nome}`,
        }),
      });
      if (!response.ok) {
        throw new Error(`Formspree status ${response.status}`);
      }
      toast({
        title: "Grazie",
        description: "La tua proposta è stata inviata alla redazione.",
      });
      setNome("");
      setEmail("");
      setSottotitolo("");
      setFinale("");
    } catch {
      toast({
        title: "Invio non riuscito",
        description: "Riprova tra qualche minuto o scrivi a redazione@stagioneautentica.it",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
          <Button type="submit" disabled={submitting} variant="outline" className="font-sans text-xs uppercase tracking-[0.2em] px-8 py-6 rounded-sm border-foreground/40 hover:bg-foreground hover:text-background transition-colors">
            {submitting ? "Invio in corso…" : "Invia la tua proposta"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProponiFinale;