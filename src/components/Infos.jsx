import React, { useState } from "react";

const diplomes = [
  "Diplôme d'État de Docteur en Médecine - Université de Paris",
  "Formation spécialisée en cardiologie",
  "Certificat de compétence en échocardiographie",
];

const honoraires = [
  { acte: "Consultation", tarif: "50 €" },
  { acte: "Échographie cardiaque", tarif: "80 €" },
  { acte: "Test d'effort", tarif: "120 €" },
];

export default function Infos() {
  const [showHonoraires, setShowHonoraires] = useState(false);

  return (
    <section id="infos" className="section infos">
      <h2>Informations sur le médecin et la clinique</h2>

      <h3>Diplômes et formations</h3>
      <ul>
        {diplomes.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <h3>Honoraires principaux</h3>
      <button
        className="btn-small"
        onClick={() => setShowHonoraires((v) => !v)}
        aria-expanded={showHonoraires}
      >
        {showHonoraires ? "Cacher" : "Afficher"} les honoraires
      </button>
      {showHonoraires && (
        <ul className="honoraires-list">
          {honoraires.map(({ acte, tarif }, i) => (
            <li key={i}>
              {acte} : {tarif}
            </li>
          ))}
        </ul>
      )}

      <h3>Informations sur le lieu</h3>
      <p>Accès PMR : oui</p>
      <p>Vidéosurveillance : en place pour votre sécurité</p>
      <p>Langues parlées : Français, Anglais, Espagnol</p>
    </section>
  );
}
