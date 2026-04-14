import faqImage from "../assets/fAQ Solution image.webp";
import pandapediaAbout from "../assets/pandapedia/about.webp";
import pandapediaAccount from "../assets/pandapedia/account.webp";
import pandapediaExplore from "../assets/pandapedia/explorar.webp";
import pandapediaHome from "../assets/pandapedia/inicio.webp";
import pandapediaLogin from "../assets/pandapedia/login.webp";
import pandapediaAddContent from "../assets/pandapedia/pandateca add.webp";
import pandapediaLibrary from "../assets/pandapedia/pandateca.webp";
import pandapediaStats from "../assets/pandapedia/stats.webp";

export const projects = [
  {
    id: "faq-solutions",
    i18nKey: "faqSolutions",
    title: "fAQ Solutions - Landing",
    techStack: ["HTML", "CSS Tailwind", "JavaScript", "Vercel"],
    link: "https://faq-solutions.vercel.app/",
    repo: null,
    image: faqImage,
  },
  {
    id: "pandapedia",
    i18nKey: "pandapedia",
    title: "PandaPedia",
    techStack: [
      { id: "react" },
      { id: "typescript" },
      { id: "nodeExpress" },
      { id: "mysql" },
      { id: "externalApis" },
    ],
    link: null,
    repo: null,
    privateRepo: true,
    image: pandapediaLibrary,
    skills: [
      "frontendArchitecture",
      "backendApiDesign",
      "databaseModeling",
      "externalApiIntegration",
      "advancedFilteringSearch",
      "productThinking",
      "dashboardUx",
    ],
    screenshots: [
      { id: "home", image: pandapediaHome },
      { id: "explore", image: pandapediaExplore },
      { id: "pandateca", image: pandapediaLibrary },
      { id: "addContent", image: pandapediaAddContent },
      { id: "stats", image: pandapediaStats },
      { id: "account", image: pandapediaAccount },
      { id: "login", image: pandapediaLogin },
      { id: "about", image: pandapediaAbout },
    ],
    highlights: [
      "crudLibrary",
      "advancedSearch",
      "externalApis",
      "mysqlPersistence",
      "modularArchitecture",
      "metricsDashboard",
      "personalLibraryUx",
    ],
    security: [
      "jwtAuth",
      "frontendBackendSeparation",
      "environmentVariables",
      "protectedEndpoints",
      "centralizedErrors",
      "backendValidation",
      "secureCookiesRefresh",
    ],
    deployment: {
      items: [
        { id: "frontend" },
        { id: "backend" },
        { id: "database" },
      ],
    },
    liveUrl: "https://pandapedia.vercel.app/",
  },
];

export default projects;
