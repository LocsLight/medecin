import React from "react";
import Navbar from "./components/Navbar";
import EspaceRDV from "./components/EspaceRDV";
import Horaires from "./components/Horaires";
import Infos from "./components/Infos";
import ContactForm from "./components/ContactForm";
import PlanAcces from "./components/PlanAcces";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
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

export default App;
