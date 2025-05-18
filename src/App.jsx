import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import EspaceRDV from "./components/EspaceRDV";
import Horaires from "./components/Horaires";
import Infos from "./components/Infos";
import ContactForm from "./components/ContactForm";
import PlanAcces from "./components/PlanAcces";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import RendezVousPage from "./pages/RendezVousPage";

import "./styles.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Accueil />
        <EspaceRDV />
        <Horaires />
        <Infos />
        <ContactForm />
        <PlanAcces />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
      </Routes>
    </Router>
  );
}

export default App;
