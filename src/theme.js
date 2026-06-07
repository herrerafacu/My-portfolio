import { createTheme } from "@mui/material";

// Single, restrained accent. Used sparingly (eyebrows, links, focus, active
// states). Primary actions are ink, not coloured — see MuiButton below.
const ACCENT = "#2563eb";
const ACCENT_DARK_MODE = "#7aa2ff";

const tokens = {
  light: {
    bg: "#f6f6f7",
    paper: "#ffffff",
    surfaceAlt: "#f0f0f2",
    border: "#e6e6e8",
    borderStrong: "#d6d6d9",
    text: "#1a1a1f",
    textSecondary: "#5d5d68",
    inkButton: "#1a1a1f",
    inkButtonHover: "#000000",
    inkButtonText: "#ffffff",
    accent: ACCENT,
  },
  dark: {
    bg: "#0a0a0b",
    paper: "#141416",
    surfaceAlt: "#101012",
    border: "rgba(255,255,255,0.09)",
    borderStrong: "rgba(255,255,255,0.16)",
    text: "#f4f4f5",
    textSecondary: "#9a9aa6",
    inkButton: "#fafafa",
    inkButtonHover: "#ffffff",
    inkButtonText: "#0a0a0b",
    accent: ACCENT_DARK_MODE,
  },
};

export const buildTheme = (mode) => {
  const isDark = mode === "dark";
  const c = isDark ? tokens.dark : tokens.light;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: c.accent,
        contrastText: "#ffffff",
      },
      secondary: { main: c.accent },
      background: {
        default: c.bg,
        paper: c.paper,
      },
      text: {
        primary: c.text,
        secondary: c.textSecondary,
      },
      divider: c.border,
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily:
        '"Geist", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      button: { textTransform: "none", fontWeight: 500 },
      h1: { fontWeight: 600, letterSpacing: "-0.035em" },
      h2: { fontWeight: 600, letterSpacing: "-0.03em" },
      h3: { fontWeight: 600, letterSpacing: "-0.025em" },
      h4: { fontWeight: 600, letterSpacing: "-0.02em" },
      h5: { fontWeight: 600, letterSpacing: "-0.018em" },
      h6: { fontWeight: 600, letterSpacing: "-0.012em" },
      body1: { letterSpacing: "-0.005em", lineHeight: 1.65 },
      body2: { letterSpacing: "-0.003em", lineHeight: 1.6 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: c.bg,
            // No decorative background pattern. Content is the surface.
          },
          "::selection": {
            backgroundColor: isDark
              ? "rgba(122,162,255,0.26)"
              : "rgba(37,99,235,0.16)",
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: c.paper,
            border: `1px solid ${c.border}`,
            boxShadow: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },
      MuiButton: {
        disableRipple: false,
        styleOverrides: {
          root: {
            borderRadius: 8,
            paddingInline: 18,
            paddingBlock: 9,
            fontWeight: 500,
            boxShadow: "none",
            transition:
              "background-color 160ms ease, border-color 160ms ease, color 160ms ease",
          },
          // Primary = ink (Vercel / Linear style), not a coloured accent.
          containedPrimary: {
            backgroundColor: c.inkButton,
            color: c.inkButtonText,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: c.inkButtonHover,
              boxShadow: "none",
            },
          },
          outlined: {
            borderColor: c.borderStrong,
            color: c.text,
            "&:hover": {
              borderColor: isDark
                ? "rgba(255,255,255,0.28)"
                : "rgba(26,26,31,0.32)",
              backgroundColor: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(26,26,31,0.035)",
            },
          },
          text: {
            color: c.textSecondary,
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255,255,255,0.05)"
                : "rgba(26,26,31,0.04)",
              color: c.text,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 7,
            fontWeight: 500,
            backgroundColor: "transparent",
          },
          outlined: {
            borderColor: c.border,
            color: c.textSecondary,
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: "hover" },
        styleOverrides: {
          root: { color: c.accent, textUnderlineOffset: "2px" },
        },
      },
      MuiTextField: {
        defaultProps: { variant: "outlined" },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              backgroundColor: isDark
                ? "rgba(255,255,255,0.02)"
                : "#ffffff",
              "& fieldset": { borderColor: c.border },
              "&:hover fieldset": { borderColor: c.borderStrong },
              "&.Mui-focused fieldset": {
                borderColor: c.accent,
                borderWidth: "1px",
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isDark ? "#26262a" : "#1a1a1f",
            fontSize: "0.78rem",
            fontWeight: 500,
            borderRadius: 6,
            paddingInline: 10,
            paddingBlock: 6,
          },
        },
      },
    },
  });
};

export const ACCENT_COLOR = ACCENT;
