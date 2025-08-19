import { Box, Chip, Stack, Typography, Button } from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Download as DownloadIcon,
  RocketLaunch as RocketLaunchIcon,
} from "@mui/icons-material";
import { heroSX, heroTitleSX, leadSX } from "../styles";
import { motion } from "framer-motion";
import cvFacundoHerrera from "../assets/Curriculum Vitae Facundo Herrera PDF.pdf";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const { t } = useTranslation();
  return (
    <Box id="home" sx={{ ...heroSX }}>
      <Stack
        spacing={3}
        alignItems="center"
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Chip
          icon={<RocketLaunchIcon />}
          label={t("hero.badge")}
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 700 }}
        />

        <Typography sx={heroTitleSX}>
          {t("hero.title_prefix")}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#1976d2,#00bcd4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          ></Box>
        </Typography>

        <Typography sx={leadSX}>{t("hero.lead")}</Typography>

        <Stack
          direction="row"
          spacing={2}
          component={motion.div}
          variants={item}
          justifyContent="center"
        >
          <Button
            href="#projects"
            size="large"
            variant="contained"
            endIcon={<OpenInNewIcon />}
          >
            {t("hero.cta_projects")}
          </Button>
          <Button
            href={cvFacundoHerrera}
            download={cvFacundoHerrera}
            size="large"
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            {t("hero.cta_cv")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
