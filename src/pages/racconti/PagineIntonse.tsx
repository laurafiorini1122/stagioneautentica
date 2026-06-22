import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import pagineIntonseImg from "@/assets/unuomo-pagine-intonse.png";

const PagineIntonse = () => {
  return (
    <PageShell
      title="Pagine intonse"
      subtitle="Quello che sai vale quanto qualcuno è disposto ad usarlo"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={pagineIntonseImg}
          alt="Pagine intonse"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default PagineIntonse;
