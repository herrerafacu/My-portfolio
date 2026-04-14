import { Box, Card, Stack, Typography, Button } from "@mui/material";
import { sectionSX } from "../styles";
import {
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Box id="contact" component="section" sx={{ ...sectionSX }}>
      <Card sx={{ p: 3, width: "min(720px, 100%)" }}>
        <Typography component="h2" variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t("contact.title")}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {t("contact.lead")}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            href="mailto:facu.h_007@hotmail.com"
          >
            {t("contact.email")}
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
            target="_blank"
            rel="noreferrer"
          >
            {t("contact.linkedin")}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
