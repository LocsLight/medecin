import React from "react";
import backgroundImage from "../assets/image.png";

export default function Accueil() {
  return (
    <section
      id="accueil"
      style={{
        margin: "0rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      className="section accueil"
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Bienvenue au cabinet médical</h1>
        <p
          style={{
            margin: "3rem",
          }}
        >
          Le Dr. Dupont vous accueille dans son cabinet situé au cœur de la
          ville.
        </p>
      </div>
    </section>
  );
}
