// src/components/AuthEmailForm.jsx
import React, { useState } from "react";

const AuthEmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        Continuer
      </button>
    </form>
  );
};

export default AuthEmailForm;
