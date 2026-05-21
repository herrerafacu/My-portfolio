import { Box, Stack, Typography, Button } from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import {
  heroActionsSX,
  heroButtonSX,
  heroContentSX,
  heroGreetingSX,
  heroSX,
  heroTitleSX,
  leadSX,
} from "../styles";
import cvFacundoHerrera from "../assets/Currículum Vitae Facundo Herrera.pdf";
import facundoPhoto from "../assets/facundo.jpg";
import { useTranslation } from "react-i18next";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "Vue",
  "Tailwind",
  "Material UI",
  "Vite",
  "Docker",
  "Vercel",
  "Git",
];

export default function Hero() {
  const { t } = useTranslation();
  const loop = [...TECH_STACK, ...TECH_STACK];

  return (
    <Box id="home" sx={heroSX}>
      <Stack spacing={0} alignItems="center" sx={heroContentSX}>
        <Box
          sx={{
            position: "relative",
            width: { xs: 96, md: 112 },
            height: { xs: 96, md: 112 },
            mb: { xs: 3, md: 4 },
            opacity: 0,
            transform: "translateY(10px)",
            animation:
              "heroTextIn 700ms cubic-bezier(0.16, 1, 0.3, 1) 40ms forwards",
            "@media (prefers-reduced-motion: reduce)": {
              opacity: 1,
              transform: "none",
              animation: "none",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -10,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, rgba(99,102,241,0.55) 0%, rgba(99,102,241,0) 70%)",
              zIndex: -1,
              filter: "blur(2px)",
            },
          }}
        >
          <Box
            component="img"
            src={facundoPhoto}
            alt="Facundo Herrera"
            loading="eager"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 20%",
              border: "2px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(11,11,20,0.12)",
              boxShadow: "0 12px 32px rgba(99,102,241,0.35)",
              display: "block",
            }}
          />
        </Box>
        <Typography component="p" sx={heroGreetingSX}>
          {t("hero.greeting")}
        </Typography>

        <Typography component="h1" sx={heroTitleSX}>
          {t("hero.title_prefix")}
        </Typography>

        <Typography sx={leadSX}>{t("hero.lead")}</Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          useFlexGap
          flexWrap="wrap"
          sx={heroActionsSX}
        >
          <Button
            href="#projects"
            size="large"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={heroButtonSX}
          >
            {t("hero.cta_projects")}
          </Button>
          <Button
            href={cvFacundoHerrera}
            download
            size="large"
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={heroButtonSX}
          >
            {t("hero.cta_cv")}
          </Button>
        </Stack>
      </Stack>

      <Box
        className="marquee-mask"
        sx={{
          mt: { xs: 12, md: 16 },
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.8rem",
            textAlign: "center",
            mb: 3.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {t("hero.tech_label")}
        </Typography>
        <Box className="marquee-track">
          {loop.map((tech, i) => (
            <Box
              key={`${tech}-${i}`}
              sx={{
                flex: "0 0 auto",
                mx: { xs: 2, md: 3 },
                px: { xs: 2.5, md: 3.5 },
                py: 1.5,
                borderRadius: 999,
                border: "1px solid",
                borderColor: "divider",
                color: "text.primary",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                whiteSpace: "nowrap",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.02)"
                    : "#ffffff",
                transition: "border-color 240ms ease, color 240ms ease",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
