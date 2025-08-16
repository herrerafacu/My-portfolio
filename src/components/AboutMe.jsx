// src/components/AboutMe.jsx
import { Box, Stack, Typography } from "@mui/material";
import { sectionSX, titleSX, leadSX } from "../styles";
import { Work as WorkIcon } from "@mui/icons-material";

export default function Aboutme() {
  return (
    <Box id="about" sx={{ ...sectionSX }}>
      <Stack spacing={2.5} sx={{ width: "100%" }} alignItems="center">
        {/* Encabezado */}
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

        {/* Título */}
        <Typography sx={titleSX}>Quién soy y cómo trabajo</Typography>

        {/* Contenido */}
        <Stack sx={{ width: "100%", maxWidth: { xs: 720, md: 900 } }}>
          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            <strong>¿Quién soy?</strong>
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            Soy <b>Desarrollador Full Stack</b> con foco en el <b>frontend</b>{" "}
            utilizando
            <b> React</b> y <b>Material UI</b>. Cuento con más de{" "}
            <b>3 años de experiencia </b>
            en el desarrollo de aplicaciones web, landings de alto rendimiento e
            integraciones con APIs.
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            En <b>Miiii</b> me encargué del desarrollo del <b>backoffice</b>{" "}
            interno y de landings corporativos, además de gestionar{" "}
            <i>deploys</i> y mantenimiento en producción. Luego trabajé como{" "}
            <b>freelance</b>, donde construí landings y aplicaciones con
            <b> React</b>, <b>Angular</b>, <b>Tailwind CSS</b> y otras
            tecnologías.
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 3 }}>
            Actualmente me desempeño en <b>PBS</b> como{" "}
            <b>Full Stack Developer</b>, participando tanto en frontend como en
            backend con <b>PHP</b> y <b>MySQL</b>, con enfoque en escalabilidad,
            calidad de código y mejora continua.
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 1.5 }}>
            <strong>¿Cómo trabajo?</strong>
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left" }}>
            Me gusta trabajar en equipo, construir rápido, medir resultados y
            optimizar constantemente los productos digitales. Priorizo una
            comunicación clara, entregas iterativas, código legible y
            mantenible.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
