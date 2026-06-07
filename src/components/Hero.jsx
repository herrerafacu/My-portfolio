import { Box, Stack, Typography, Button, Divider } from "@mui/material";
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
      <Box sx={heroContentSX}>
        <Stack
          direction="row"
          spacing={1.75}
          alignItems="center"
          sx={{ mb: { xs: 4, md: 5 } }}
        >
          <Box
            component="img"
            src={facundoPhoto}
            alt="Facundo Herrera"
            loading="eager"
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 20%",
              border: "1px solid",
              borderColor: "divider",
              flexShrink: 0,
            }}
          />
          <Stack spacing={0.4}>
            <Typography component="p" sx={heroGreetingSX}>
              {t("hero.greeting")}
            </Typography>
            <Stack direction="row" spacing={0.9} alignItems="center">
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#22a06b",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {t("hero.badge")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Typography component="h1" sx={heroTitleSX}>
          {t("hero.title_prefix")}
        </Typography>

        <Typography sx={leadSX}>{t("hero.lead")}</Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
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

        <Divider sx={{ mt: { xs: 6, md: 9 }, mb: 3, borderColor: "divider" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 3 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 500,
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {t("hero.tech_label")}
          </Typography>

          <Box
            className="hero-marquee-mask"
            sx={{ overflow: "hidden", width: "100%", minWidth: 0 }}
          >
            <Box className="hero-marquee" aria-hidden="true">
              {loop.map((tech, i) => (
                <Box
                  key={`${tech}-${i}`}
                  component="span"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "text.primary",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tech}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      mx: { xs: 1.75, md: 2.5 },
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      bgcolor: "text.disabled",
                      flexShrink: 0,
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
