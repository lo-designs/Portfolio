import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Index from "../Index/Index";
import Portfolio from "../Portfolio/Portfolio";
import Neurotype from "../PortfolioPages/Neurotype/Neurotype";
import OuttaWax from "../PortfolioPages/OuttaWax/OuttaWax";
import ParraLily from "../PortfolioPages/ParraLily/ParraLily";
import PettesHounds from "../PortfolioPages/PettesHounds/PettesHounds";
import Soona from "../PortfolioPages/Soona/Soona";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/petteshounds" element={<PettesHounds />} />
      <Route path="/parralily" element={<ParraLily />} />
      <Route path="/neurotype" element={<Neurotype />} />
      <Route path="/soona" element={<Soona />} />
      <Route path="/outtawax" element={<OuttaWax />} />
    </Routes>
  );
};

export default PageRoutes;
