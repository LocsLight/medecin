// src/components/RegisterForm.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ email }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/rendez-vous");
    } catch (err) {
      setError("Erreur lors de la création du compte.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <h2>Créer un compte</h2>
      <p>Email : {email}</p>

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Créer le compte</button>
    </form>
  );
};

export default RegisterForm;
