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
import { MAX_WIDTH } from "../styles";

export default function Footer() {
  const { t } = useTranslation();
  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: { xs: 5, md: 6 },
        px: { xs: 2.5, md: 4 },
        width: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        sx={{ maxWidth: MAX_WIDTH, mx: "auto" }}
      >
        <Stack spacing={1.5}>
          <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>
            Facundo Herrera
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 2.5 }}
            useFlexGap
            flexWrap="wrap"
          >
            {navLinks.map((link) => (
              <MLink
                key={link.href}
                href={link.href}
                underline="none"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  "&:hover": { color: "text.primary" },
                }}
              >
                {link.label}
              </MLink>
            ))}
          </Stack>
        </Stack>

        <Stack spacing={1.5} alignItems={{ xs: "flex-start", sm: "flex-end" }}>
          <Stack direction="row" spacing={0.5}>
            <IconButton
              component={MLink}
              href="https://github.com/herrerafacu"
              target="_blank"
              rel="noreferrer"
              aria-label={t("footer.github")}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={MLink}
              href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
              target="_blank"
              rel="noreferrer"
              aria-label={t("footer.linkedin")}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={MLink}
              href="mailto:facu.h_007@hotmail.com"
              aria-label={t("footer.email")}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              <MailIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Typography sx={{ color: "text.secondary", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Facundo Herrera · {t("footer.made")}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
