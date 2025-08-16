// App.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  Link as MLink,
} from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
  RocketLaunch as RocketLaunchIcon,
  Work as WorkIcon,
  OpenInNew as OpenInNewIcon,
  Download as DownloadIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Imagen local (si podés, renombrala sin espacios)
import faqImage from "./assets/fAQ Solution image.png";
import cvPDF from "./assets/Curriculum Vitae Facundo Herrera PDF.pdf";
// ====== Datos ======
const projects = [
  {
    title: "fAQ Solutions - Landing",
    description:
      "Landing con foco en conversión: carrusel, formulario, diseño responsive y performance.",
    stack: ["HTML", "CSS Tailwind", "Javascript", "Vercel"],
    link: "https://faq-solutions.vercel.app/",
    repo: "https://github.com/tuusuario/metz-landing",
    image: faqImage,
  },
  {
    title: "Mi lista de animes vistos",
    description:
      "App personal con búsqueda, filtros y base para integrar API (AniList/MyAnimeList).",
    stack: ["React", "TypeScript", "MUI"],
    link: "https://tu-dominio-anime.vercel.app/",
    repo: "https://github.com/tuusuario/anime-tracker",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mini CRM / Gestor de turnos",
    description:
      "CRUD fullstack simple con login básico, ABM y tabla con filtros.",
    stack: ["React", "Node/Express", "MySQL"],
    link: "https://tu-dominio-crm.vercel.app/",
    repo: "https://github.com/tuusuario/mini-crm",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
];

const skills = [
  "Html",
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

const experiences = [
  {
    role: "Desarrollador Full Stack",
    company: "PBS - Telviso",
    period: "jun.2025 – Actualidad",
    bullets: [
      "Diseño y desarrollo web",
      "Manejo de base de datos",
      "Integraciones con APIs",
    ],
  },
  {
    role: "Desarrollador Full Stack (Freelance)",
    company: "fAQ Solutions",
    period: "2024 – Actualidad",
    bullets: [
      "Diseño y desarrollo de landings y aplicaciones web a medida",
      "Integraciones con APIs y despliegue en Vercel",
      "Optimización de performance y SEO básico",
    ],
  },
  {
    role: "Desarrollador web",
    company: "Miii",
    period: "nov.2021 – dic.2023",
    bullets: [
      "Diseño y desarrollo web",
      "Automatizaciones con scripts y manejo de datos",
      "Integraciones con APIs",
    ],
  },
];

// Animaciones
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ====== Estilos ======
const sectionSX = {
  width: "100%",
  py: { xs: 5, md: 7 },
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollMarginTop: "80px",
};

const heroSX = {
  width: "100%",
  minHeight: "100vh",
  py: 0,
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "clamp(1.8rem, 6vw, 2.6rem)",
    md: "clamp(2.2rem, 4.5vw, 3.2rem)",
  },
  lineHeight: 1.15,
  mb: 2,
};

const heroTitleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "clamp(2.2rem, 8vw, 3.2rem)",
    md: "clamp(3rem, 5vw, 4.2rem)",
  },
  lineHeight: 1.08,
  mb: 2,
};

// 👉 Texto descriptivo con máximo ancho (para que no ocupe todo el largo)
const leadSX = {
  color: "text.secondary",
  fontSize: { xs: 16, md: 18 },
  maxWidth: { xs: 680, md: 880 }, // límite visual pro
  mx: "auto",
};

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-mode") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976d2" },
          secondary: { main: "#00bcd4" },
          background: {
            default: mode === "dark" ? "#0b1220" : "#f7f9fc",
            paper: mode === "dark" ? "#0f172a" : "#ffffff",
          },
        },
        shape: { borderRadius: 14 },
        typography: {
          fontFamily:
            "Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial",
          button: { textTransform: "none", fontWeight: 700 },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow:
                  mode === "dark"
                    ? "0 10px 30px rgba(0,0,0,0.35)"
                    : "0 10px 25px rgba(2, 30, 84, 0.08)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "saturate(1.2) blur(10px)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ width: "100%", px: { xs: 2, md: 3 } }}>
          <Typography variant="h6" sx={{ fontWeight: 800, flexGrow: 1 }}>
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#1976d2,#00bcd4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Facundo Herrera
            </Box>
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[
              { href: "#about", label: "Sobre mí" },
              { href: "#projects", label: "Proyectos" },
              { href: "#skills", label: "Habilidades" },
              { href: "#experience", label: "Experiencia" },
              { href: "#contact", label: "Contacto" },
            ].map((l) => (
              <Button key={l.href} href={l.href} color="inherit" size="small">
                {l.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label="toggle theme"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box id="home" sx={{ ...heroSX }}>
        <Stack
          spacing={3}
          alignItems="center"
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Chip
            icon={<RocketLaunchIcon />}
            label="Disponible para nuevos proyectos"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700 }}
          />

          <Typography sx={heroTitleSX}>
            Creo interfaces limpias, rápidas y con{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#1976d2,#00bcd4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              excelente UX
            </Box>
          </Typography>

          {/* ⬇️ Texto del hero con ancho limitado */}
          <Typography sx={leadSX}>
            Desarrollador Frontend con foco en React, MUI y buenas prácticas. Me
            gusta construir productos reales y medibles.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            component={motion.div}
            variants={item}
            justifyContent="center"
          >
            <Button
              href="#projects"
              size="large"
              variant="contained"
              endIcon={<OpenInNewIcon />}
            >
              Ver proyectos
            </Button>
            <Button
              href={cvPDF}
              size="large"
              variant="outlined"
              startIcon={<DownloadIcon />}
            >
              Descargar CV
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* ABOUT */}
      <Box id="about" sx={{ ...sectionSX }}>
        <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <WorkIcon color="primary" />
            <Typography variant="overline" color="primary">
              SOBRE MÍ
            </Typography>
          </Stack>
          <Typography sx={titleSX}>Quién soy y cómo trabajo</Typography>

          {/* ⬇️ Párrafo con el mismo ancho controlado */}
          <Typography sx={leadSX}>
            Soy desarrollador frontend con foco en React y Material UI. Disfruto
            trabajar con equipos de desarrollo, construir rápido, medir y
            mejorar. Tengo experiencia armando landings de alto rendimiento,
            integraciones con APIs y desarrollo full stack con PHP y MySQL.
          </Typography>
        </Stack>
      </Box>

      {/* PROJECTS */}
      <Box id="projects" sx={{ ...sectionSX }}>
        <Stack spacing={3} sx={{ width: "100%" }} alignItems="center">
          <Typography sx={titleSX}>Algunas cosas que construí</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%", mx: 0 }}
          >
            {projects.map((p, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {p.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 1, flexWrap: "wrap", justifyContent: "center" }}
                    >
                      {p.stack.map((s) => (
                        <Chip
                          key={s}
                          size="small"
                          label={s}
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      href={p.link}
                      target="_blank"
                    >
                      Demo
                    </Button>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={p.repo}
                      target="_blank"
                    >
                      Código
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>

      {/* SKILLS */}
      <Box id="skills" sx={{ ...sectionSX }}>
        <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
          <Typography sx={titleSX}>Stack y herramientas</Typography>
          <Stack
            direction="row"
            spacing={1.5}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {skills.map((s) => (
              <Chip
                key={s}
                label={s}
                variant="outlined"
                icon={<CodeIcon fontSize="small" />}
              />
            ))}
          </Stack>
        </Stack>
      </Box>

      {/* EXPERIENCE */}
      <Box id="experience" sx={{ ...sectionSX }}>
        <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
          <Typography sx={titleSX}>Dónde apliqué lo que sé</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            {experiences.map((e, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {e.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.company} • {e.period}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack
                      component="ul"
                      sx={{ pl: 2, m: 0, gap: 1, textAlign: "left" }}
                    >
                      {e.bullets.map((b, j) => (
                        <Typography key={j} component="li" variant="body2">
                          {b}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>

      {/* CONTACTO */}
      <Box id="contact" sx={{ ...sectionSX }}>
        <Card sx={{ p: 3, width: "min(720px, 100%)" }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            No dudes en contactarme
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<MailIcon />}
              href="facu.h_007@hotmail.com"
            >
              Contactar
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </Stack>
        </Card>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          py: 3,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mb: 1 }}
        >
          <IconButton
            color="inherit"
            component={MLink}
            href="https://github.com/herrerafacu"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={MLink}
            href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={MLink}
            href="facu.h_007@hotmail.com"
          >
            <MailIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Facundo Herrera — Hecho con React &
          Material UI
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
