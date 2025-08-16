import { Box, Stack, Typography, Link as MLink } from "@mui/material";
import { sectionSX, titleSX, leadSX } from "../styles";
import { Work as WorkIcon } from "@mui/icons-material";

export default function Aboutme() {
  return (
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
        <Typography sx={leadSX}>
          Soy desarrollador frontend con foco en React y Material UI. Disfruto
          trabajar con equipos de desarrollo, construir rápido, medir y mejorar.
          Tengo experiencia armando landings de alto rendimiento, integraciones
          con APIs y desarrollo full stack con PHP y MySQL.
        </Typography>
      </Stack>
    </Box>
  );
}
