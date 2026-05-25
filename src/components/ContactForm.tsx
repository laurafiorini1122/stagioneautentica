import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato",
      description: "Grazie per averci scritto. Risponderemo presto.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Nome
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-background border-border rounded-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background border-border rounded-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Messaggio
        </Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="bg-background border-border rounded-sm resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="outline"
        className="font-sans text-xs uppercase tracking-[0.2em] px-8 py-6 rounded-sm border-foreground/40 hover:bg-foreground hover:text-background transition-colors"
      >
        Invia
      </Button>
    </form>
  );
};

export default ContactForm;