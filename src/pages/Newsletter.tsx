import PageShell from "@/components/PageShell";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter = () => {
  return (
    <PageShell title="Newsletter">
      <p className="font-serif text-lg leading-[1.8] text-foreground/80 text-center mb-12">
        Lascia la tua email per ricevere un avviso quando aggiungo nuovi
        racconti, finali condivisi o tracce. Niente spam — un'email solo
        quando c'è davvero qualcosa di nuovo.
      </p>
      <NewsletterForm />
    </PageShell>
  );
};

export default Newsletter;
