import React from "react";

const icons = [
  {
    id: "acceuil",
    title: "Acceuil",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-home"
        viewBox="0 0 24 24"
      >
        <path d="M3 9.5L12 3l9 6.5v10a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19.5v-10z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "espace-rdv",
    title: "Espace rendez-vous",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    id: "horaires",
    title: "Horaires",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    id: "infos",
    title: "Infos",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
      </svg>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 10a8.38 8.38 0 0 1-1.5 4.9L12 21l-7.5-6.1A8.38 8.38 0 0 1 3 10a8.5 8.5 0 0 1 17 0z" />
      </svg>
    ),
  },
  {
    id: "plan",
    title: "Plan d'accès",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 21c-4.97 0-9-4.03-9-9 0-4.971 4.03-9 9-9s9 4.029 9 9c0 4.97-4.03 9-9 9z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {icons.map(({ id, svg, title }) => (
        <button
          key={id}
          aria-label={title}
          title={title}
          onClick={() => handleClick(id)}
          className="nav-icon"
          type="button"
        >
          {svg}
        </button>
      ))}
    </nav>
  );
}
