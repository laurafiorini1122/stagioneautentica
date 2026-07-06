import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import UnUomo from "./pages/UnUomo.tsx";
import UnaDonna from "./pages/UnaDonna.tsx";
import Tracce from "./pages/Tracce.tsx";
import ComeSonoArrivata from "./pages/percorso/ComeSonoArrivata.tsx";
import IlCurriculumVitae from "./pages/percorso/IlCurriculumVitae.tsx";
import LaLineaDelTempo from "./pages/percorso/LaLineaDelTempo.tsx";
import LalberoGenealogico from "./pages/percorso/LalberoGenealogico.tsx";
import Incontri from "./pages/percorso/Incontri.tsx";
import Viaggi from "./pages/percorso/Viaggi.tsx";
import IlCurriculumDellAutostima from "./pages/percorso/IlCurriculumDellAutostima.tsx";
import LeParoleCheFannoStareBene from "./pages/percorso/LeParoleCheFannoStareBene.tsx";
import ParoleBenePresenza from "./pages/percorso/ParoleBenePresenza.tsx";
import ParoleBeneSlancio from "./pages/percorso/ParoleBeneSlancio.tsx";
import ParoleBeneCura from "./pages/percorso/ParoleBeneCura.tsx";
import ParoleBeneLegame from "./pages/percorso/ParoleBeneLegame.tsx";
import LaFine from "./pages/percorso/LaFine.tsx";
import LaScatolaDelTempo from "./pages/percorso/LaScatolaDelTempo.tsx";
import LeLetture from "./pages/percorso/LeLetture.tsx";
import BotanicaDellaMeraviglia from "./pages/percorso/BotanicaDellaMeraviglia.tsx";
import PerdonareSeStessiEGliAltri from "./pages/percorso/PerdonareSeStessiEGliAltri.tsx";
import MorireIstruzioniPerLuso from "./pages/percorso/MorireIstruzioniPerLuso.tsx";
import LaNotteNonFaPaura from "./pages/percorso/LaNotteNonFaPaura.tsx";
import LingannevolePauraDiNonEssereAllAltezza from "./pages/percorso/LingannevolePauraDiNonEssereAllAltezza.tsx";
import SocrateAgataEIlFuturo from "./pages/percorso/SocrateAgataEIlFuturo.tsx";
import LascioTuttoERipartoDaMe from "./pages/percorso/LascioTuttoERipartoDaMe.tsx";
import ViaggiPostumi from "./pages/percorso/ViaggiPostumi.tsx";
import LeIntermittenzeDellaMorte from "./pages/percorso/LeIntermittenzeDellaMorte.tsx";
import AvventurePostumeDiPersonaggiIllustri from "./pages/percorso/AvventurePostumeDiPersonaggiIllustri.tsx";
import LiberatiDellaBravaBambina from "./pages/percorso/LiberatiDellaBravaBambina.tsx";
import Film from "./pages/percorso/Film.tsx";
import Letichetta from "./pages/racconti/Letichetta.tsx";
import Lattesa from "./pages/racconti/Lattesa.tsx";
import IlVoyeur from "./pages/racconti/IlVoyeur.tsx";
import Introduzione from "./pages/racconti/Introduzione.tsx";
import Contatti from "./pages/Contatti.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import RiscriviamoInsieme from "./pages/racconti/RiscriviamoInsieme.tsx";
import LetichettaDonna from "./pages/racconti/LetichettaDonna.tsx";
import FinaleLaura from "./pages/racconti/FinaleLaura.tsx";
import LaRoutine from "./pages/racconti/LaRoutine.tsx";
import LecoDelCapo from "./pages/racconti/LecoDelCapo.tsx";
import LabirintoBurocratico from "./pages/racconti/LabirintoBurocratico.tsx";
import IlConsiglio from "./pages/racconti/IlConsiglio.tsx";
import IlLinguaggio from "./pages/racconti/IlLinguaggio.tsx";
import Linvasione from "./pages/racconti/Linvasione.tsx";
import IlCorpoEstraneo from "./pages/racconti/IlCorpoEstraneo.tsx";
import LeLettere from "./pages/racconti/LeLettere.tsx";
import LaFormulaMatematica from "./pages/racconti/LaFormulaMatematica.tsx";
import Linventario from "./pages/racconti/Linventario.tsx";
import LeUltimeDisposizioni from "./pages/racconti/LeUltimeDisposizioni.tsx";
import LaNotaAPiediPagina from "./pages/racconti/LaNotaAPiediPagina.tsx";
import IlCodiceSorgente from "./pages/racconti/IlCodiceSorgente.tsx";
import Lepitaffio from "./pages/racconti/Lepitaffio.tsx";
import LaManutenzioneDellassenza from "./pages/racconti/LaManutenzioneDellassenza.tsx";
import GlossarioFineRapporto from "./pages/racconti/GlossarioFineRapporto.tsx";
import AlloSpecchio from "./pages/racconti/AlloSpecchio.tsx";
import IlRisparmio from "./pages/racconti/IlRisparmio.tsx";
import LaCondivisione from "./pages/racconti/LaCondivisione.tsx";
import RuoliInvertiti from "./pages/racconti/RuoliInvertiti.tsx";
import IlSuccessore from "./pages/racconti/IlSuccessore.tsx";
import IlDistintivo from "./pages/racconti/IlDistintivo.tsx";
import LaRiunione from "./pages/racconti/LaRiunione.tsx";
import PagineIntonse from "./pages/racconti/PagineIntonse.tsx";
import IlGruppoWhatsapp from "./pages/racconti/IlGruppoWhatsapp.tsx";
import LattesaDonna from "./pages/racconti/LattesaDonna.tsx";
import LaVoyeur from "./pages/racconti/LaVoyeur.tsx";
import LaRoutineDonna from "./pages/racconti/LaRoutineDonna.tsx";
import LecoDelCapoDonna from "./pages/racconti/LecoDelCapoDonna.tsx";
import LabirintoBurocraticoDonna from "./pages/racconti/LabirintoBurocraticoDonna.tsx";
import IlConsiglioDonna from "./pages/racconti/IlConsiglioDonna.tsx";
import IlLinguaggioDonna from "./pages/racconti/IlLinguaggioDonna.tsx";
import LinvasioneDonna from "./pages/racconti/LinvasioneDonna.tsx";
import IlCorpoEstraneoDonna from "./pages/racconti/IlCorpoEstraneoDonna.tsx";
import LeLettereDonna from "./pages/racconti/LeLettereDonna.tsx";
import LaFormulaMatematicaDonna from "./pages/racconti/LaFormulaMatematicaDonna.tsx";
import LinventarioDonna from "./pages/racconti/LinventarioDonna.tsx";
import LeUltimeDisposizioniDonna from "./pages/racconti/LeUltimeDisposizioniDonna.tsx";
import LaNotaAPiediPaginaDonna from "./pages/racconti/LaNotaAPiediPaginaDonna.tsx";
import IlCodiceSorgenteDonna from "./pages/racconti/IlCodiceSorgenteDonna.tsx";
import LepitaffioDonna from "./pages/racconti/LepitaffioDonna.tsx";
import LaManutenzioneDellassenzaDonna from "./pages/racconti/LaManutenzioneDellassenzaDonna.tsx";
import GlossarioFineRapportoDonna from "./pages/racconti/GlossarioFineRapportoDonna.tsx";
import AlloSpecchioDonna from "./pages/racconti/AlloSpecchioDonna.tsx";
import IlRisparmioDonna from "./pages/racconti/IlRisparmioDonna.tsx";
import LaCondivisioneDonna from "./pages/racconti/LaCondivisioneDonna.tsx";
import RuoliInvertitiDonna from "./pages/racconti/RuoliInvertitiDonna.tsx";
import IlSuccessoreDonna from "./pages/racconti/IlSuccessoreDonna.tsx";
import IlDistintivoDonna from "./pages/racconti/IlDistintivoDonna.tsx";
import LaRiunioneDonna from "./pages/racconti/LaRiunioneDonna.tsx";
import PagineIntonseDonna from "./pages/racconti/PagineIntonseDonna.tsx";
import IlGruppoWhatsappDonna from "./pages/racconti/IlGruppoWhatsappDonna.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/un-uomo" element={<UnUomo />} />
          <Route path="/un-uomo/introduzione" element={<Introduzione />} />
          <Route path="/un-uomo/letichetta" element={<Letichetta />} />
          <Route path="/un-uomo/lattesa" element={<Lattesa />} />
          <Route path="/un-uomo/il-voyeur" element={<IlVoyeur />} />
          <Route path="/un-uomo/la-routine" element={<LaRoutine />} />
          <Route path="/un-uomo/leco-del-capo" element={<LecoDelCapo />} />
          <Route path="/un-uomo/il-labirinto-burocratico" element={<LabirintoBurocratico />} />
          <Route path="/un-uomo/il-consiglio" element={<IlConsiglio />} />
          <Route path="/un-uomo/il-linguaggio" element={<IlLinguaggio />} />
          <Route path="/un-uomo/linvasione" element={<Linvasione />} />
          <Route path="/un-uomo/il-corpo-estraneo" element={<IlCorpoEstraneo />} />
          <Route path="/un-uomo/le-lettere" element={<LeLettere />} />
          <Route path="/un-uomo/la-formula-matematica" element={<LaFormulaMatematica />} />
          <Route path="/un-uomo/linventario" element={<Linventario />} />
          <Route path="/un-uomo/le-ultime-disposizioni" element={<LeUltimeDisposizioni />} />
          <Route path="/un-uomo/la-nota-a-piedi-pagina" element={<LaNotaAPiediPagina />} />
          <Route path="/un-uomo/il-codice-sorgente" element={<IlCodiceSorgente />} />
          <Route path="/un-uomo/lepitaffio" element={<Lepitaffio />} />
          <Route path="/un-uomo/la-manutenzione-dellassenza" element={<LaManutenzioneDellassenza />} />
          <Route path="/un-uomo/glossario-del-fine-rapporto" element={<GlossarioFineRapporto />} />
          <Route path="/un-uomo/allo-specchio" element={<AlloSpecchio />} />
          <Route path="/un-uomo/il-risparmio" element={<IlRisparmio />} />
          <Route path="/un-uomo/la-condivisione" element={<LaCondivisione />} />
          <Route path="/un-uomo/ruoli-invertiti" element={<RuoliInvertiti />} />
          <Route path="/un-uomo/il-successore" element={<IlSuccessore />} />
          <Route path="/un-uomo/il-distintivo" element={<IlDistintivo />} />
          <Route path="/un-uomo/la-riunione" element={<LaRiunione />} />
          <Route path="/un-uomo/pagine-intonse" element={<PagineIntonse />} />
          <Route path="/un-uomo/il-gruppo-whatsapp" element={<IlGruppoWhatsapp />} />
          <Route path="/una-donna" element={<UnaDonna />} />
          <Route path="/una-donna/riscriviamo-insieme" element={<RiscriviamoInsieme />} />
          <Route path="/una-donna/letichetta" element={<LetichettaDonna />} />
          <Route path="/una-donna/letichetta/finale-laura" element={<FinaleLaura />} />
          <Route path="/una-donna/lattesa" element={<LattesaDonna />} />
          <Route path="/una-donna/la-voyeur" element={<LaVoyeur />} />
          <Route path="/una-donna/la-routine" element={<LaRoutineDonna />} />
          <Route path="/una-donna/leco-del-capo" element={<LecoDelCapoDonna />} />
          <Route path="/una-donna/labirinto-burocratico" element={<LabirintoBurocraticoDonna />} />
          <Route path="/una-donna/labirinto-burocratico/finale-laura" element={<FinaleLaura />} />
          <Route path="/una-donna/il-consiglio" element={<IlConsiglioDonna />} />
          <Route path="/una-donna/il-linguaggio" element={<IlLinguaggioDonna />} />
          <Route path="/una-donna/linvasione" element={<LinvasioneDonna />} />
          <Route path="/una-donna/il-corpo-estraneo" element={<IlCorpoEstraneoDonna />} />
          <Route path="/una-donna/le-lettere" element={<LeLettereDonna />} />
          <Route path="/una-donna/la-formula-matematica" element={<LaFormulaMatematicaDonna />} />
          <Route path="/una-donna/linventario" element={<LinventarioDonna />} />
          <Route path="/una-donna/le-ultime-disposizioni" element={<LeUltimeDisposizioniDonna />} />
          <Route path="/una-donna/la-nota-a-piedi-pagina" element={<LaNotaAPiediPaginaDonna />} />
          <Route path="/una-donna/il-codice-sorgente" element={<IlCodiceSorgenteDonna />} />
          <Route path="/una-donna/lepitaffio" element={<LepitaffioDonna />} />
          <Route path="/una-donna/la-manutenzione-dellassenza" element={<LaManutenzioneDellassenzaDonna />} />
          <Route path="/una-donna/glossario-del-fine-rapporto" element={<GlossarioFineRapportoDonna />} />
          <Route path="/una-donna/allo-specchio" element={<AlloSpecchioDonna />} />
          <Route path="/una-donna/il-risparmio" element={<IlRisparmioDonna />} />
          <Route path="/una-donna/la-condivisione" element={<LaCondivisioneDonna />} />
          <Route path="/una-donna/ruoli-invertiti" element={<RuoliInvertitiDonna />} />
          <Route path="/una-donna/il-successore" element={<IlSuccessoreDonna />} />
          <Route path="/una-donna/il-distintivo" element={<IlDistintivoDonna />} />
          <Route path="/una-donna/la-riunione" element={<LaRiunioneDonna />} />
          <Route path="/una-donna/pagine-intonse" element={<PagineIntonseDonna />} />
          <Route path="/una-donna/il-gruppo-whatsapp" element={<IlGruppoWhatsappDonna />} />
          <Route path="/tracce" element={<Tracce />} />
          <Route path="/tracce/come-sono-arrivata-fin-qui" element={<ComeSonoArrivata />} />
          <Route path="/tracce/il-curriculum-vitae" element={<IlCurriculumVitae />} />
          <Route path="/tracce/la-linea-del-tempo" element={<LaLineaDelTempo />} />
          <Route path="/tracce/lalbero-genealogico" element={<LalberoGenealogico />} />
          <Route path="/tracce/incontri" element={<Incontri />} />
          <Route path="/tracce/viaggi" element={<Viaggi />} />
          <Route path="/tracce/il-curriculum-dellautostima" element={<IlCurriculumDellAutostima />} />
          <Route path="/tracce/le-parole-che-fanno-stare-bene" element={<LeParoleCheFannoStareBene />} />
          <Route path="/tracce/le-parole-che-fanno-stare-bene/presenza" element={<ParoleBenePresenza />} />
          <Route path="/tracce/le-parole-che-fanno-stare-bene/slancio" element={<ParoleBeneSlancio />} />
          <Route path="/tracce/le-parole-che-fanno-stare-bene/cura" element={<ParoleBeneCura />} />
          <Route path="/tracce/le-parole-che-fanno-stare-bene/legame" element={<ParoleBeneLegame />} />
          <Route path="/tracce/la-fine" element={<LaFine />} />
          <Route path="/tracce/la-scatola-del-tempo" element={<LaScatolaDelTempo />} />
          <Route path="/tracce/le-letture" element={<LeLetture />} />
          <Route path="/tracce/le-letture/botanica-della-meraviglia" element={<BotanicaDellaMeraviglia />} />
          <Route path="/tracce/le-letture/perdonare-se-stessi-e-gli-altri" element={<PerdonareSeStessiEGliAltri />} />
          <Route path="/tracce/le-letture/morire-istruzioni-per-luso" element={<MorireIstruzioniPerLuso />} />
          <Route path="/tracce/le-letture/la-notte-non-fa-paura" element={<LaNotteNonFaPaura />} />
          <Route path="/tracce/le-letture/lingannevole-paura-di-non-essere-allaltezza" element={<LingannevolePauraDiNonEssereAllAltezza />} />
          <Route path="/tracce/le-letture/socrate-agata-e-il-futuro" element={<SocrateAgataEIlFuturo />} />
          <Route path="/tracce/le-letture/lascio-tutto-e-riparto-da-me" element={<LascioTuttoERipartoDaMe />} />
          <Route path="/tracce/le-letture/viaggi-postumi" element={<ViaggiPostumi />} />
          <Route path="/tracce/le-letture/le-intermittenze-della-morte" element={<LeIntermittenzeDellaMorte />} />
          <Route path="/tracce/le-letture/avventure-postume-di-personaggi-illustri" element={<AvventurePostumeDiPersonaggiIllustri />} />
          <Route path="/tracce/le-letture/liberati-della-brava-bambina" element={<LiberatiDellaBravaBambina />} />
          <Route path="/tracce/film" element={<Film />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
