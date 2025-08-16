import { Box, Card, Stack, Typography, Button } from "@mui/material";
import { sectionSX } from "../styles";
import {
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ ...sectionSX }}>
      <Card sx={{ p: 3, width: "min(720px, 100%)" }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          ¿Hablamos de tu próximo proyecto?
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Escribime y armamos algo a medida.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            href="mailto:tucorreo@ejemplo.com"
          >
            Contactar
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
