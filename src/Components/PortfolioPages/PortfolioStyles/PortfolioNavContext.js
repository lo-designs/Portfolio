import React, { createContext, useContext } from "react";

// Portfolio navigation data
const portfolioNavData = [
  {
    id: "outtawax",
    label: "OuttaWax",
    url: "/outtawax",
    prev: null,
    next: "parralily",
  },
  {
    id: "parralily",
    label: "ParraLily",
    url: "/parralily",
    prev: "outtawax",
    next: "petteshounds",
  },
  {
    id: "petteshounds",
    label: "Pettes Hounds",
    url: "/petteshounds",
    prev: "parralily",
    next: "soona",
  },
  {
    id: "soona",
    label: "Soona",
    url: "/soona",
    prev: "petteshounds",
    next: "neurotype",
  },
  {
    id: "neurotype",
    label: "Neurotype",
    url: "/neurotype",
    prev: "soona",
    next: "yha",
  },
  {
    id: "yha",
    label: "YHA",
    url: "/yha",
    prev: "neurotype",
    next: null,
  },
];

const PortfolioNavContext = createContext();

export function PortfolioNavProvider({ children }) {
  return (
    <PortfolioNavContext.Provider value={portfolioNavData}>
      {children}
    </PortfolioNavContext.Provider>
  );
}

export function usePortfolioNav() {
  return useContext(PortfolioNavContext);
}
