import { createTheme } from "@mui/material";

export const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      secondary: { main: "#00bcd4" },
      background: {
        default: mode === "dark" ? "#0b1220" : "#f7f9fc",
        paper: mode === "dark" ? "#0f172a" : "#ffffff",
      },
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: "Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial",
      button: { textTransform: "none", fontWeight: 700 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === "dark"
                ? "0 10px 30px rgba(0,0,0,0.35)"
                : "0 10px 25px rgba(2, 30, 84, 0.08)",
          },
        },
      },
    },
  });
