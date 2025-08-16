import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import experiences from "./data/experiences";
import skills from "./data/skills";
import projects from "./data/projects";
import Navbar from "./components/navbar.jsx";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { skillsByCategory, skillsFlat, courses } from "./data/skills";
import Footer from "./components/footer";
import Aboutme from "./components/aboutMe";
import ProjectDetailsDialog from "./components/projectDetailsDialog";
import { buildTheme } from "./theme";
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
      <Aboutme />
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
