import { Box, Chip, Stack, Typography, Button } from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Download as DownloadIcon,
  RocketLaunch as RocketLaunchIcon,
} from "@mui/icons-material";
import {
  heroActionsSX,
  heroBadgeSX,
  heroButtonSX,
  heroContentSX,
  heroSX,
  heroTitleSX,
  leadSX,
} from "../styles";
import cvFacundoHerrera from "../assets/Currículum Vitae Facundo Herrera.pdf";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <Box id="home" sx={{ ...heroSX }}>
      <Stack
        spacing={3}
        alignItems="center"
        sx={heroContentSX}
      >
        <Chip
          icon={<RocketLaunchIcon />}
          label={t("hero.badge")}
          color="primary"
          variant="outlined"
          sx={heroBadgeSX}
        />

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
            endIcon={<OpenInNewIcon />}
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
    </Box>
  );
}
