import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import introImg from "@/assets/introduzione.jpg";

const Introduzione = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell
      title="Perché ho scritto questi racconti"
      subtitle="Introduzione"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={introImg}
          alt="Quaderno aperto con penna su un davanzale, luce naturale calda"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <article className="space-y-6">
        <p className={pCls}>
          Il 1° settembre 2022 sono andata in pensione dopo 43 anni nel settore pubblico.
        </p>
        <p className={pCls}>
          Emozioni? Felice, sollevata dal peso di mille responsabilità. Ma anche con la strana sensazione di abitare un corpo diverso, con la pelle improvvisamente esposta a stimoli nuovi. La scuola, l'università, i diversi ruoli lavorativi mi avevano insegnato a produrre, a essere utile, a occupare un posto riconoscibile nella società. Era questo il patto: ti formano, ti inquadrano, ti rendono utile. Nessuno, però, ritiene necessario prepararti a ciò che viene dopo — perché dopo, per il sistema, non sei più interessante. Una volta esaurita la tua funzione produttiva, il contratto si considera concluso. Quello che fai del tempo che resta è affar tuo.
        </p>
        <p className={pCls}>
          Le persone che incontro — ex colleghi, conoscenti — sono entusiaste: «Ma come ti fa bene la pensione! Sei più rilassata! Hai proprio cambiato faccia!»
        </p>
        <p className={pCls}>Mi godo i complimenti per circa trenta secondi. Poi arriva la domanda:</p>
        <p className={pCls}>«Ma cosa fai ora? Di cosa ti occupi?»</p>
        <p className={pCls}>
          E, versione ancora più devastante: «Non riesco proprio a vederti senza fare niente. Immagino che sarai ancora impegnata, in qualche modo, con il lavoro che hai lasciato.»
        </p>
        <p className={pCls}>Poche parole. Una mitragliata. Resto a terra.</p>
        <p className={pCls}>
          Tutto ruota intorno al fare, mentre io sono sospesa in un territorio sconosciuto dove il fare si è dissolto nell'essere — e l'essere, per ora, non sa ancora come presentarsi.
        </p>
        <p className={pCls}>
          Trascorro le settimane che seguono a fare cose:: pulisco, riordino, sistemo. Ma tutto diventa presto ripetitivo. Riprendo attività che il lavoro mi aveva impedito, o che avevo sacrificato al senso del dovere — ma le sento inutili. Mi iscrivo a corsi di lingua, di yoga. Mi infastidisce la routine, il rispetto degli orari: almeno questo, il privilegio di non doverli più subire, avrei voluto tenermelo.
        </p>
        <p className={pCls}>
          Il mio sguardo è sempre rivolto fuori. Cerco una risposta socialmente presentabile alla domanda «cosa fai ora» — una risposta che mi restituisca un ruolo, una funzione, un posto nel mondo che gli altri possano riconoscere.
        </p>
        <p className={pCls}>
          Mi sento come la pallina del flipper: lanciata, rimbalzata, sbattuta da una parte all'altra. Resto in equilibrio precario, poi scivolo, vengo inghiottita. Nuovo lancio, nuovo sballottamento. Ma le giocate sono contate, il piano è inclinato, e il game over arriva comunque.
        </p>
        <p className={pCls}>
          Già, perché se ho avuto la fortuna di arrivare alla pensione, non ho più davanti la prospettiva illimitata dei trent'anni.
        </p>
        <p className={pCls}>
          Quando lavoravo, i neo pensionati che venivano a trovarmi e mi raccontavano le loro giornate mi sembravano, devo ammetterlo, un po' diversi. Falsamente felici. In qualche modo, inferiori.
        </p>
        <p className={pCls}><strong>Ora ci sono io.</strong></p>
        <p className={pCls}>
          Cerco sui social qualcuno che parli di questa condizione con lucidità e senza sconti. Trovo poco, e quel poco mi scoraggia: un'immagine quasi sempre ridicola di persone un po' rimbecillite che fanno cose stravaganti, come bambini intrappolati in corpi segnati dalle rughe. Stessa cosa nei film, nei libri. Lo sguardo sull'anziano — e «pensionato» e «anziano» si fondono inevitabilmente — è un misto di pietà e condiscendenza affettuosa: scusiamoli, sono vecchi.
        </p>
        <p className={pCls}>
          Ma io non mi sento così. Anche se non so ancora bene cosa sono, e cosa dovrei fare.
        </p>
        <p className={pCls}>
          E poi c'è quella parola impronunciabile, quella che fa abbassare la voce, che fa toccare gli scongiuri. Morte. Cosa resterà di me? Chi si ricorderà? Chi capirà perché certi oggetti erano importanti?
        </p>
        <p className={pCls}><strong>Basta!</strong></p>
        <p className={pCls}>
          Fermati. Respira. Cambia postura — non del corpo, della mente. Smetti di guardare fuori e inizia a guardare dentro.
        </p>
        <p className={pCls}>
          Per farlo, però, devo lavorare. Su me stessa, per me stessa. È faticoso — più faticoso di quanto immaginassi. Abbandonare le abitudini meccaniche e confortanti, anche quelle che non mi piacciono, è difficile. Riscoprirsi lo è ancora di più.
        </p>
        <p className={pCls}>
          E così mi metto a scrivere.
        </p>
        <p className={pCls}>
          Con l'aiuto dell'intelligenza artificiale, senza nessuna velleità letteraria — ci mancherebbe. Scrivo racconti brevi di uomini alle prese con la pensione e con la consapevolezza della morte.
        </p>
        <p className={pCls}>
          Storie che seguono la logica del Peggioramento Strategico: portano l'alienazione al suo estremo kafkiano non per pessimismo, ma per smascherarne l'assurdità. Mostrare l'abisso è un reagente chimico — solo toccando il fondo si riconosce la propria gabbia e si scorge, per contrasto, la luce di qualcosa di più autentico. La catastrofe, qui, è la bussola per la libertà.
        </p>
        <p className={pCls}>
          Perché uomini? Perché sono loro, statisticamente e socialmente, i più colpiti da questa transizione. L'uomo come incarnazione estrema dell'identità-lavoro, della difficoltà a staccarsi dal ruolo, del controllo portato all'assurdo.
        </p>
        <p className={pCls}>
          Alla fine di queste storie al buio, arriva il momento di riscriverle. Con una nuova protagonista.
        </p>
      </article>

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

export default Introduzione;