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

export default function Navbar({ mode, setMode }) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { href: "#home", label: t("nav.home", { defaultValue: "Home" }) },
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

  const isDark = mode === "dark";

  return (
    <Box
      component="nav"
      aria-label={t("nav.primary_navigation")}
      sx={{
        position: "fixed",
        top: { xs: 14, md: 22 },
        left: 0,
        right: 0,
        zIndex: 1100,
        display: "flex",
        justifyContent: "center",
        px: 2,
        pointerEvents: "none",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{
          pointerEvents: "auto",
          backgroundColor: isDark
            ? scrolled
              ? "rgba(10,10,14,0.85)"
              : "rgba(18,18,24,0.7)"
            : scrolled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px) saturate(1.4)",
          WebkitBackdropFilter: "blur(18px) saturate(1.4)",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(11,11,20,0.08)",
          borderRadius: 999,
          px: { xs: 1, md: 1.25 },
          py: 0.75,
          boxShadow: isDark
            ? "0 18px 40px rgba(0,0,0,0.45)"
            : "0 18px 40px rgba(11,11,20,0.08)",
          transition: "all 240ms ease",
        }}
      >
        <Stack
          direction="row"
          spacing={0.25}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              color="inherit"
              size="small"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: "0.92rem",
                px: 1.75,
                py: 0.85,
                borderRadius: 999,
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(11,11,20,0.05)",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 0.5,
            my: 0.5,
            display: { xs: "none", md: "block" },
            borderColor: isDark
              ? "rgba(255,255,255,0.08)"
              : "rgba(11,11,20,0.08)",
          }}
        />

        <Tooltip title={languageLabel}>
          <IconButton
            onClick={toggleLang}
            aria-label={languageLabel}
            size="small"
            sx={{
              color: "text.primary",
              display: { xs: "none", md: "inline-flex" },
              borderRadius: 999,
              width: 34,
              height: 34,
            }}
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title={themeLabel}>
          <IconButton
            onClick={toggleTheme}
            aria-label={themeLabel}
            size="small"
            sx={{
              color: "text.primary",
              display: { xs: "none", md: "inline-flex" },
              borderRadius: 999,
              width: 34,
              height: 34,
            }}
          >
            {mode === "light" ? (
              <DarkModeIcon fontSize="small" />
            ) : (
              <LightModeIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>

        <Typography
          component="a"
          href="#home"
          sx={{
            display: { xs: "block", md: "none" },
            color: "text.primary",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
            px: 1.5,
          }}
        >
          Facundo H.
        </Typography>

        <IconButton
          onClick={() => setMobileOpen(true)}
          aria-label={t("nav.open_menu")}
          sx={{
            color: "text.primary",
            display: { xs: "inline-flex", md: "none" },
            borderRadius: 999,
            width: 36,
            height: 36,
          }}
        >
          <MenuIcon />
        </IconButton>
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
          },
        }}
      >
        <Stack
          spacing={1.25}
          component="nav"
          aria-label={t("nav.mobile_navigation")}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 800 }}
            >
              {t("nav.menu")}
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(false)}
              aria-label={t("nav.close_menu")}
              sx={{ borderRadius: 999 }}
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
              sx={{
                justifyContent: "flex-start",
                borderRadius: 10,
                py: 1.1,
                fontSize: "0.98rem",
              }}
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
            sx={{ justifyContent: "flex-start", borderRadius: 10 }}
          >
            {languageLabel}
          </Button>
          <Button
            color="inherit"
            fullWidth
            startIcon={
              mode === "light" ? <DarkModeIcon /> : <LightModeIcon />
            }
            onClick={toggleTheme}
            sx={{ justifyContent: "flex-start", borderRadius: 10 }}
          >
            {themeLabel}
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
