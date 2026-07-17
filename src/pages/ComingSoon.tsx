import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight">
        Stagione Autentica
      </h1>
      <span className="block w-12 h-px bg-foreground/30 mx-auto my-6" />
      <p className="font-serif text-xl md:text-2xl text-foreground/85">
        Ci vediamo presto.
      </p>
    </div>
  );
};

export default ComingSoon;
