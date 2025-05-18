import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function EspaceRDV() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/rendez-vous");
    } else {
      navigate("/auth");
    }
  };

  return (
    <section id="espace-rdv" className="section espace-rdv">
      <h2>Espace rendez-vous</h2>
      <p>
        Les rendez-vous ont lieu à la clinique Médicale, 12 rue des Soignants,
        75000 Paris.
      </p>
      <button className="btn" onClick={handleClick}>
        Prendre rendez-vous
      </button>
    </section>
  );
}
