import React from "react";

const horaires = [
  { jour: "Lundi", ouverture: "09:00", fermeture: "18:00" },
  { jour: "Mardi", ouverture: "09:00", fermeture: "18:00" },
  { jour: "Mercredi", ouverture: "09:00", fermeture: "18:00" },
  { jour: "Jeudi", ouverture: "09:00", fermeture: "18:00" },
  { jour: "Vendredi", ouverture: "09:00", fermeture: "17:00" },
  { jour: "Samedi", ouverture: "Fermé", fermeture: "" },
  { jour: "Dimanche", ouverture: "Fermé", fermeture: "" },
];

export default function Horaires() {
  return (
    <section id="horaires" className="section horaires">
      <h2>Horaires d'ouverture</h2>
      <table>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Ouverture</th>
            <th>Fermeture</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map(({ jour, ouverture, fermeture }) => (
            <tr key={jour}>
              <td>{jour}</td>
              <td>{ouverture}</td>
              <td>{fermeture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
