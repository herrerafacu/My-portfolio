import { Box, Chip, Stack, Typography, Button } from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Download as DownloadIcon,
  RocketLaunch as RocketLaunchIcon,
} from "@mui/icons-material";
import { heroSX, heroTitleSX, leadSX } from "../styles";
import { motion } from "framer-motion";
import cvFacundoHerrera from "../assets/Curriculum Vitae Facundo Herrera PDF.pdf";
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
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
            href={cvFacundoHerrera}
            download={cvFacundoHerrera}
            size="large"
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            Descargar CV
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
