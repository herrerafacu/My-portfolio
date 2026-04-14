import { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Tooltip,
  Drawer,
  Divider,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Close as CloseIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Navbar({ mode, setMode }) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "#about", label: t("nav.about") },
      { href: "#projects", label: t("nav.projects") },
      { href: "#skills", label: t("nav.skills") },
      { href: "#experience", label: t("nav.experience") },
      { href: "#contact", label: t("nav.contact") },
    ],
    [t]
  );

  const toggleLang = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const languageLabel =
    i18n.language === "es"
      ? t("nav.switch_to_english")
      : t("nav.switch_to_spanish");
  const themeLabel =
    mode === "light" ? t("nav.enable_dark_mode") : t("nav.enable_light_mode");

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
        <Typography
          component="a"
          href="#home"
          variant="h6"
          sx={{
            fontWeight: 800,
            flexGrow: 1,
            textDecoration: "none",
            minWidth: 0,
            maxWidth: { xs: "calc(100% - 56px)", md: "none" },
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#1976d2,#00bcd4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              verticalAlign: "bottom",
            }}
          >
            Facundo Javier Herrera
          </Box>
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          component="nav"
          aria-label={t("nav.primary_navigation")}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navLinks.map((link) => (
            <Button key={link.href} href={link.href} color="inherit" size="small">
              {link.label}
            </Button>
          ))}
        </Stack>

        <Tooltip title={languageLabel}>
          <IconButton
            color="inherit"
            onClick={toggleLang}
            aria-label={languageLabel}
            sx={{ display: { xs: "none", md: "inline-flex" }, borderRadius: "8px" }}
          >
            <LanguageIcon />
          </IconButton>
        </Tooltip>

        <IconButton
          color="inherit"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            ml: 1,
            borderRadius: "8px",
          }}
          onClick={toggleTheme}
          aria-label={themeLabel}
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        <IconButton
          color="inherit"
          onClick={() => setMobileOpen(true)}
          aria-label={t("nav.open_menu")}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            ml: 1,
            flexShrink: 0,
            color: "secondary.main",
            bgcolor: "rgba(0,188,212,0.08)",
            border: "1px solid rgba(0,188,212,0.24)",
            borderRadius: "8px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "min(320px, 86vw)",
            p: 2,
            bgcolor: "background.paper",
          },
        }}
      >
        <Stack spacing={1.5} component="nav" aria-label={t("nav.mobile_navigation")}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
              {t("nav.menu")}
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(false)}
              aria-label={t("nav.close_menu")}
              sx={{ borderRadius: "8px" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              color="inherit"
              fullWidth
              onClick={() => setMobileOpen(false)}
              sx={{ justifyContent: "flex-start", borderRadius: "6px" }}
            >
              {link.label}
            </Button>
          ))}
          <Divider sx={{ my: 0.5 }} />
          <Button
            color="inherit"
            fullWidth
            startIcon={<LanguageIcon />}
            onClick={toggleLang}
            sx={{ justifyContent: "flex-start", borderRadius: "6px" }}
          >
            {languageLabel}
          </Button>
          <Button
            color="inherit"
            fullWidth
            startIcon={mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            onClick={toggleTheme}
            sx={{ justifyContent: "flex-start", borderRadius: "6px" }}
          >
            {themeLabel}
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
