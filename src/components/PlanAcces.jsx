import React from "react";

export default function PlanAcces() {
  return (
    <section id="plan" className="section plan">
      <h2>Plan d'accès à la clinique</h2>
      <div className="map-container">
        <iframe
          title="Plan accès clinique"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999912863544!2d2.292292615674263!3d48.858370079287736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdb29c1a6db%3A0x7024abbb42a8520a!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1585020592776!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
