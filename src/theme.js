import { createTheme } from "@mui/material";

const PURPLE = "#6366f1";
const PURPLE_LIGHT = "#818cf8";
const PURPLE_DARK = "#4f46e5";

export const buildTheme = (mode) => {
  const isDark = mode === "dark";
  return createTheme({
    palette: {
      mode,
      primary: {
        main: PURPLE,
        light: PURPLE_LIGHT,
        dark: PURPLE_DARK,
        contrastText: "#ffffff",
      },
      secondary: { main: PURPLE_LIGHT },
      background: {
        default: isDark ? "#050505" : "#f4f4f8",
        paper: isDark ? "#0c0c10" : "#ffffff",
      },
      text: {
        primary: isDark ? "#f5f5f7" : "#0b0b14",
        secondary: isDark ? "rgba(245,245,247,0.62)" : "rgba(11,11,20,0.62)",
      },
      divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(11,11,20,0.1)",
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily:
        '"Geist", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      button: { textTransform: "none", fontWeight: 500 },
      h1: { fontWeight: 700, letterSpacing: "-0.04em" },
      h2: { fontWeight: 700, letterSpacing: "-0.03em" },
      h3: { fontWeight: 700, letterSpacing: "-0.025em" },
      h4: { fontWeight: 600, letterSpacing: "-0.02em" },
      h5: { fontWeight: 600, letterSpacing: "-0.015em" },
      h6: { fontWeight: 600, letterSpacing: "-0.01em" },
      body1: { letterSpacing: "-0.005em" },
      body2: { letterSpacing: "-0.003em" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? "#050505" : "#f4f4f8",
          },
          "body::before": {
            content: '""',
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            backgroundImage: isDark
              ? "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)"
              : "radial-gradient(rgba(11,11,20,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            transform: "translateZ(0)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: isDark ? "#0e0e14" : "#ffffff",
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.07)" : "rgba(11,11,20,0.08)"
            }`,
            boxShadow: isDark
              ? "0 30px 80px rgba(0,0,0,0.55)"
              : "0 1px 2px rgba(11,11,20,0.04), 0 12px 32px rgba(11,11,20,0.06)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            paddingInline: 20,
            paddingBlock: 10,
          },
          containedPrimary: {
            boxShadow: `0 10px 30px ${
              isDark ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.25)"
            }`,
            "&:hover": {
              boxShadow: `0 14px 40px ${
                isDark ? "rgba(99,102,241,0.45)" : "rgba(99,102,241,0.35)"
              }`,
            },
          },
          outlined: {
            borderColor: isDark
              ? "rgba(255,255,255,0.14)"
              : "rgba(11,11,20,0.14)",
            color: isDark ? "#f5f5f7" : "#0b0b14",
            "&:hover": {
              borderColor: isDark
                ? "rgba(255,255,255,0.28)"
                : "rgba(11,11,20,0.28)",
              backgroundColor: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(11,11,20,0.04)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            fontWeight: 600,
          },
          outlined: {
            borderColor: isDark
              ? "rgba(255,255,255,0.14)"
              : "rgba(11,11,20,0.14)",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
              backgroundColor: isDark
                ? "rgba(255,255,255,0.03)"
                : "rgba(11,11,20,0.03)",
              "& fieldset": {
                borderColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(11,11,20,0.1)",
              },
              "&:hover fieldset": {
                borderColor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(11,11,20,0.2)",
              },
            },
          },
        },
      },
    },
  });
};

export const PURPLE_PALETTE = {
  main: PURPLE,
  light: PURPLE_LIGHT,
  dark: PURPLE_DARK,
};
