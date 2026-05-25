const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 mt-24 py-10">
      <div className="container text-center font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} · La stagione più autentica
      </div>
    </footer>
  );
};

export default SiteFooter;