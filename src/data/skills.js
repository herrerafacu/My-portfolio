// src/data/skills.js

// ✅ Agrupado por categorías
export const skillsByCategory = {
  Frontend: [
    "React",
    "Angular",
    "Vue",
    "TypeScript",
    "JavaScript",
    "Material UI",
    "Tailwind / CSS",
    "Redux.js",
    "Vite",
  ],
  Backend: ["Node.js / Express", "PHP", "MySQL"],
  Herramientas: ["Git / GitHub / Vercel", "Docker", "JIRA", "Postman"],
};

// ✅ Si querés mantener el array plano en otras partes
export const skillsFlat = [
  "HTML",
  "CSS / Styled Components",
  "JavaScript",
  "React",
  "TypeScript",
  "Vue",
  "Angular",
  "Redux.js",
  "Material UI",
  "Node.js / Express",
  "MySQL",
  "PHP",
  "Docker",
  "Vite",
  "Git / GitHub / Vercel",
  "JIRA",
  "Postman",
];

// ✅ Cursos (Udemy)
export const courses = [
  {
    title: "Master en Frameworks JavaScript: React, Angular y Vue",
    provider: "Udemy",
    year: 2021,
    url: "",
  },
  {
    title: "MASTER HTML, CSS, JavaScript",
    provider: "Udemy",
    year: 2021,
    url: "",
  },
  {
    title: "Fundamentos de la Programación",
    provider: "Udemy",
    year: 2020,
    url: "",
  },
  {
    title: "Software Testing",
    provider: "Udemy",
    year: 2024,
    url: "",
  },
];

export default skillsFlat;
