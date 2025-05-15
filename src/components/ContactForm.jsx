import React, { useState } from "react";
import { saveContactForm } from "../firebase/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((fd) => ({
      ...fd,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Veuillez remplir tous les champs obligatoires.",
      });
      return;
    }

    // Enregistrement Firestore
    const success = await saveContactForm({
      ...formData,
      date: new Date().toISOString(),
    });

    if (success) {
      setStatus({ type: "success", message: "Message envoyé avec succès." });
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: "Une erreur est survenue, veuillez réessayer.",
      });
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nom">Nom *</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom *</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      {status && (
        <p
          className={`form-status ${
            status.type === "error" ? "error" : "success"
          }`}
        >
          {status.message}
        </p>
      )}
    </section>
  );
}
