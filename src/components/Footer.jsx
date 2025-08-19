import {
  Box,
  Stack,
  IconButton,
  Typography,
  Link as MLink,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
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
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 1 }}>
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
          href="mailto:facu.h_007@hotmail.com"
        >
          <MailIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Facundo Herrera — {t("footer.made")}
      </Typography>
    </Box>
  );
}
