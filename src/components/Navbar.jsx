import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Navbar({ mode, setMode }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
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
            Facundo Javier Herrera
          </Box>
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {[
            { href: "#about", label: t("nav.about") },
            { href: "#projects", label: t("nav.projects") },
            { href: "#skills", label: t("nav.skills") },
            { href: "#experience", label: t("nav.experience") },
            { href: "#contact", label: t("nav.contact") },
          ].map((l) => (
            <Button key={l.href} href={l.href} color="inherit" size="small">
              {l.label}
            </Button>
          ))}
        </Stack>
        <Tooltip
          title={
            i18n.language === "es" ? "Cambiar a English" : "Switch to Spanish"
          }
        >
          <IconButton color="inherit" onClick={toggleLang}>
            <LanguageIcon />
          </IconButton>
        </Tooltip>
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
  );
}
