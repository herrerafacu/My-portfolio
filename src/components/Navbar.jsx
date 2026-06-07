import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Stack,
  Button,
  IconButton,
  Tooltip,
  Drawer,
  Typography,
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
import { MAX_WIDTH } from "../styles";

export default function Navbar({ mode, setMode }) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { href: "#about", label: t("nav.about") },
      { href: "#projects", label: t("nav.projects") },
      { href: "#experience", label: t("nav.experience") },
      { href: "#skills", label: t("nav.skills") },
      { href: "#contact", label: t("nav.contact") },
    ],
    [t]
  );

  const toggleLang = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  const languageLabel =
    i18n.language === "es"
      ? t("nav.switch_to_english")
      : t("nav.switch_to_spanish");
  const themeLabel =
    mode === "light" ? t("nav.enable_dark_mode") : t("nav.enable_light_mode");

  const isDark = mode === "dark";

  return (
    <Box
      component="nav"
      aria-label={t("nav.primary_navigation")}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        borderBottom: "1px solid",
        borderColor: scrolled ? "divider" : "transparent",
        backgroundColor: scrolled
          ? isDark
            ? "rgba(10,10,11,0.72)"
            : "rgba(246,246,247,0.78)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(1.3)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(1.3)" : "none",
        transition:
          "background-color 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          maxWidth: MAX_WIDTH,
          mx: "auto",
          px: { xs: 2.5, md: 4 },
          height: { xs: 60, md: 68 },
        }}
      >
        <Typography
          component="a"
          href="#home"
          sx={{
            color: "text.primary",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Facundo Herrera
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.25}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              disableRipple
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.9rem",
                px: 1.5,
                py: 0.75,
                borderRadius: 1.5,
                "&:hover": {
                  color: "text.primary",
                  backgroundColor: "transparent",
                },
              }}
            >
              {link.label}
            </Button>
          ))}

          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: 1, my: 1.25, borderColor: "divider" }}
          />

          <Tooltip title={languageLabel}>
            <IconButton
              onClick={toggleLang}
              aria-label={languageLabel}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title={themeLabel}>
            <IconButton
              onClick={toggleTheme}
              aria-label={themeLabel}
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              {mode === "light" ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <LightModeIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Tooltip title={themeLabel}>
            <IconButton
              onClick={toggleTheme}
              aria-label={themeLabel}
              size="small"
              sx={{ color: "text.secondary" }}
            >
              {mode === "light" ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <LightModeIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
          <IconButton
            onClick={() => setMobileOpen(true)}
            aria-label={t("nav.open_menu")}
            sx={{ color: "text.primary" }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "min(320px, 86vw)",
            p: 2.5,
            bgcolor: "background.paper",
            backgroundImage: "none",
            borderLeft: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <Stack spacing={0.5} component="nav" aria-label={t("nav.mobile_navigation")}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Typography sx={{ fontWeight: 600, color: "text.secondary", fontSize: "0.82rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {t("nav.menu")}
            </Typography>
            <IconButton
              onClick={() => setMobileOpen(false)}
              aria-label={t("nav.close_menu")}
              size="small"
              sx={{ color: "text.secondary" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              fullWidth
              onClick={() => setMobileOpen(false)}
              sx={{
                justifyContent: "flex-start",
                color: "text.primary",
                fontWeight: 500,
                py: 1.1,
                fontSize: "1rem",
              }}
            >
              {link.label}
            </Button>
          ))}
          <Divider sx={{ my: 1 }} />
          <Button
            fullWidth
            startIcon={<LanguageIcon />}
            onClick={toggleLang}
            sx={{ justifyContent: "flex-start", color: "text.secondary" }}
          >
            {languageLabel}
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
