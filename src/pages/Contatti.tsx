import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const Contatti = () => {
  return (
    <PageShell title="Contatti" subtitle="Scrivici">
      <p className="font-serif text-lg leading-[1.8] text-foreground/80 text-center mb-12">
        Per condividere una storia, una domanda o un pensiero.
      </p>
      <ContactForm />
    </PageShell>
  );
};

export default Contatti;