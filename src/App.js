import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header"
import PageRoutes from "./Components/PageRoutes/PageRoutes";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="noise"></div>
        <div className="header-section">
            <Header />
        </div>
        <div className="page-routes-section">
            <PageRoutes />
        </div>
        <div className="footer-section">
         <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
