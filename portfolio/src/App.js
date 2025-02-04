import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Formations from "./pages/Formations";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Hauteur totale de l'écran */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Prend toute la hauteur restante entre Navbar et Footer */
`;

function App() {
  return (
    <Router>
      <PageWrapper>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </Router>
  );
}

export default App;
