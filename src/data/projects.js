import faqImage from "../assets/fAQ Solution image.png";
import tableImage from "../assets/Table.png";
import tableFilterImage from "../assets/Table filter.png";
import deleteImage from "../assets/Eliminar.png";
import editImage from "../assets/Editar.png";
import newAnimeImage from "../assets/Nuevo.png";
import baseImage from "../assets/BaseDatos.png";
export const projects = [
  {
    title: "fAQ Solutions - Landing",
    description:
      "Landing con foco en conversión: carrusel, formulario, diseño responsive y performance.",
    stack: ["HTML", "CSS Tailwind", "Javascript", "Vercel"],
    link: "https://faq-solutions.vercel.app/",
    repo: null,
    image: faqImage,
  },
  {
    title: "My anime list (privado)",
    description:
      "Listado de animes con CRUD (alta/edición/baja), búsqueda, filtros y paginado. Persistencia en MySQL.",
    stack: ["React", "MUI", "Node/Express", "MySQL"],
    link: null,
    repo: null,
    privateRepo: true,
    image: tableImage,
    gallery: [
      tableFilterImage,
      deleteImage,
      editImage,
      newAnimeImage,
      baseImage,
    ],
    highlights: [
      "CRUD completo (alta/edición/baja)",
      "Búsqueda y filtros por toda la informacion de la tabla",
      "Paginación e infinite-scroll",
      "Capa de datos con MySQL (pool de conexiones)",
    ],
  },
];
export default projects;
