import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (!response.ok) throw new Error("Submit failed");
      toast({
        title: "Iscrizione registrata",
        description: "Grazie. Ti scriverò quando ci saranno novità.",
      });
      setName("");
      setEmail("");
    } catch {
      toast({
        title: "Iscrizione non riuscita",
        description:
          "Riprova più tardi o scrivimi a redazione@stagioneautentica.it",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="newsletter-name"
          className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
        >
          Nome (facoltativo)
        </Label>
        <Input
          id="newsletter-name"
          name="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background border-border rounded-sm"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="newsletter-email"
          className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
        >
          Email
        </Label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background border-border rounded-sm"
        />
      </div>
      <input type="hidden" name="_subject" value="Nuova iscrizione newsletter" />
      <Button
        type="submit"
        variant="outline"
        disabled={submitting}
        className="font-sans text-xs uppercase tracking-[0.2em] px-8 py-6 rounded-sm border-foreground/40 hover:bg-foreground hover:text-background transition-colors"
      >
        {submitting ? "Invio…" : "Iscriviti"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
