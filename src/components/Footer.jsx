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
  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 3 },
        textAlign: "center",
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#08080c" : "#ffffff",
      }}
    >
      <Stack
        spacing={2.5}
        alignItems="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1.5, sm: 3 }}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {navLinks.map((link) => (
            <MLink
              key={link.href}
              href={link.href}
              underline="hover"
              sx={{
                color: "text.secondary",
                fontSize: "0.9rem",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </MLink>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton
            component={MLink}
            href="https://github.com/herrerafacu"
            target="_blank"
            rel="noreferrer"
            aria-label={t("footer.github")}
            sx={{
              borderRadius: 999,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component={MLink}
            href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
            target="_blank"
            rel="noreferrer"
            aria-label={t("footer.linkedin")}
            sx={{
              borderRadius: 999,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            component={MLink}
            href="mailto:facu.h_007@hotmail.com"
            aria-label={t("footer.email")}
            sx={{
              borderRadius: 999,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <MailIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.85rem" }}
        >
          © {new Date().getFullYear()} Facundo Herrera · {t("footer.made")}
        </Typography>
      </Stack>
    </Box>
  );
}
