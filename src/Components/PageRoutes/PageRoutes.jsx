import { Route, Routes } from "react-router-dom";
import Index from "../Index/Index";
import Portfolio from "../Portfolio/Portfolio";
import Neurotype from "../PortfolioPages/Neurotype/Neurotype";
import ParraLily from "../PortfolioPages/ParraLily/ParraLily";
import PettesHounds from "../PortfolioPages/PettesHounds/PettesHounds";
import OuttaWax from "../PortfolioPages/OuttaWax/OuttaWax";
import Soona from "../PortfolioPages/Soona/Soona";
import Yha from "../PortfolioPages/Yha/Yha";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/neurotype" element={<Neurotype />} />
      <Route path="/parralily" element={<ParraLily />} />
      <Route path="/petteshounds" element={<PettesHounds />} />
      <Route path="/outtawax" element={<OuttaWax />} />
      <Route path="/soona" element={<Soona />} />
      <Route path="/yha" element={<Yha />} />
    </Routes>
  );
};

export default PageRoutes;
