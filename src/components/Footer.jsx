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

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        py: 3,
        textAlign: "center",
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 1 }}>
        <IconButton
          color="inherit"
          component={MLink}
          href="https://github.com/tuusuario"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={MLink}
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={MLink}
          href="mailto:tucorreo@ejemplo.com"
        >
          <MailIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Facundo Herrera — Hecho con React &
        Material UI
      </Typography>
    </Box>
  );
}
