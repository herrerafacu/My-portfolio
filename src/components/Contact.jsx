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
          ¿Te interesó mi perfil?
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Estoy abierto a nuevas oportunidades, podés contactarme directamente.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            href="mailto:facu.h_007@hotmail.com"
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
  );
}
