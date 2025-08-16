import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

export default function Navbar({ mode, setMode }) {
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
            { href: "#about", label: "Sobre mí" },
            { href: "#projects", label: "Proyectos" },
            { href: "#skills", label: "Habilidades" },
            { href: "#experience", label: "Experiencia" },
            { href: "#contact", label: "Contacto" },
          ].map((l) => (
            <Button key={l.href} href={l.href} color="inherit" size="small">
              {l.label}
            </Button>
          ))}
        </Stack>

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
