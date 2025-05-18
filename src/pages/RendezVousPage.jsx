import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RendezVousPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [days, setDays] = useState([]);
  const navigate = useNavigate();

  const horairesDisponibles = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  const joursSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // lundi = 0

    const calendar = [];

    // Cases vides avant le 1er jour
    for (let i = 0; i < startDay; i++) {
      calendar.push(null);
    }

    // Jours du mois
    for (let d = 1; d <= lastDay.getDate(); d++) {
      calendar.push(new Date(year, month, d));
    }

    setDays(calendar);
  };

  const handlePrevMonth = () => {
    const prev = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prev);
    setSelectedDate(null);
    setSelectedHour("");
  };

  const handleNextMonth = () => {
    const next = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(next);
    setSelectedDate(null);
    setSelectedHour("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedHour) {
      alert("Veuillez choisir une date et une heure.");
      return;
    }
    alert(
      `Rendez-vous confirmé le ${selectedDate.toLocaleDateString(
        "fr-FR"
      )} à ${selectedHour}`
    );
    navigate("/");
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <section className="section rendezvous-page">
      <h2>Prendre rendez-vous</h2>

      <div className="calendrier">
        <div className="cal-header">
          <button onClick={handlePrevMonth}>←</button>
          <h3>
            {currentDate.toLocaleDateString("fr-FR", {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <button onClick={handleNextMonth}>→</button>
        </div>

        <div className="jours-semaine">
          {joursSemaine.map((j) => (
            <div key={j} className="jour-label">
              {j}
            </div>
          ))}
        </div>

        <div className="jours">
          {days.map((day, index) =>
            day ? (
              <button
                key={index}
                className={`jour ${
                  selectedDate?.toDateString() === day.toDateString()
                    ? "selected"
                    : ""
                }`}
                onClick={() => !isWeekend(day) && setSelectedDate(day)}
                disabled={isWeekend(day)}
              >
                {day.getDate()}
              </button>
            ) : (
              <div key={index} className="jour vide"></div>
            )
          )}
        </div>
      </div>

      {selectedDate && (
        <div className="horaires">
          <h3>
            Choisir une heure pour le {selectedDate.toLocaleDateString("fr-FR")}
          </h3>
          <div className="horaire-grid">
            {horairesDisponibles.map((h) => (
              <button
                key={h}
                className={`horaire-btn ${
                  selectedHour === h ? "selected" : ""
                }`}
                onClick={() => setSelectedHour(h)}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      )}

      <button type="submit" className="btn" onClick={handleSubmit}>
        Continuer
      </button>
    </section>
  );
}
