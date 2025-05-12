import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
const useScrollAnimation = (offset = 100) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - offset) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return [ref, visible];
};

const Home = () => {
  const [ref, visible] = useScrollAnimation();
  return (
    <div className="home-section bg-blue-50 py-16">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-6">
          Bienvenue au cabinet du Dr. Marie Dubois
        </h1>
        <p className="text-xl text-center text-gray-700 mb-8">
          Médecin généraliste à Paris, à votre service pour votre santé et votre
          bien-être.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Consultations
            </h2>
            <p>
              Suivi médical, bilans de santé, traitements personnalisés pour
              toute la famille.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Urgences
            </h2>
            <p>
              Accueil des urgences légères sur rendez-vous ou sans, selon
              disponibilité.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Prévention
            </h2>
            <p>
              Vaccinations, dépistages, conseils santé pour une meilleure
              qualité de vie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Infos = () => {
  const [ref, visible] = useScrollAnimation();
  return (
    <div className="bg-white py-16 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Informations pratiques
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Adresse :</strong> 123 Rue de la Santé, 75000 Paris
          </li>
          <li>
            <strong>Horaires :</strong> Du lundi au vendredi, de 9h à 18h
          </li>
          <li>
            <strong>Téléphone :</strong> 01 23 45 67 89
          </li>
          <li>
            <strong>Email :</strong> contact@drdubois.fr
          </li>
        </ul>
      </div>
    </div>
  );
};

const RendezVous = () => {
  const [ref, visible] = useScrollAnimation();
  return (
    <div className="bg-blue-50 py-16 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Prendre rendez-vous
        </h2>
        <p className="mb-6 text-gray-700">
          Utilisez le calendrier ci-dessous pour réserver une consultation en
          ligne en quelques clics.
        </p>
        <div className="w-full h-[600px] bg-white shadow-md rounded-md overflow-hidden">
          <iframe
            src="https://calendly.com/locslight"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="bg-blue-700 text-white p-4 flex justify-center space-x-6 sticky top-0 z-50 shadow-md">
    <Link to="/" className="hover:underline">
      Accueil
    </Link>
    <Link to="/infos" className="hover:underline">
      Infos
    </Link>
    <Link to="/rendez-vous" className="hover:underline">
      Rendez-vous
    </Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
      </Routes>
    </Router>
  );
}

export default App;
