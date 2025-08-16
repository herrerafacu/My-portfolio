import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import experiences from "./data/experiences";
import projects from "./data/projects";
import { skillsByCategory, courses } from "./data/skills";
import { buildTheme } from "./theme";

import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ProjectDetailsDialog from "./components/ProjectDetailsDialog.jsx";

export default function App() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  const [openDetails, setOpenDetails] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setActiveProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} />
      <Hero />

      <AboutMe />
      <Skills skillsCategories={skillsByCategory} courses={courses} />

      <ProjectDetailsDialog
        open={openDetails}
        project={activeProject}
        onClose={handleCloseDetails}
      />

      <Experience experiences={experiences} />
      <Projects projects={projects} />

      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
