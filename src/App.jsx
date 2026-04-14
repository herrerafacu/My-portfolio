import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import projects from "./data/projects";
import { skillCapabilityGroups, courses } from "./data/skills";
import { buildTheme } from "./theme";

import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Seo from "./components/Seo.jsx";

export default function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme-mode");
    return savedMode === "light" || savedMode === "dark" ? savedMode : "dark";
  });
  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} />
      <Hero />
      <AboutMe />
      <Projects projects={projects} />
      <Skills skillGroups={skillCapabilityGroups} courses={courses} />
      <Experience />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
