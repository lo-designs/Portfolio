import React, { createContext, useContext } from "react";
import portfolioNavData from "./PortfolioNavData";

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
