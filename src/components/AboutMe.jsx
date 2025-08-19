import { Box, Stack, Typography } from "@mui/material";
import { sectionSX, titleSX, leadSX } from "../styles";
import { Work as WorkIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const { t } = useTranslation();

  return (
    <Box id="about" sx={{ ...sectionSX }}>
      <Stack spacing={2.5} sx={{ width: "100%" }} alignItems="center">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <WorkIcon color="primary" />
          <Typography variant="overline" color="primary">
            {t("about.about_me")}
          </Typography>
        </Stack>

        <Typography sx={titleSX}> {t("about.title")}</Typography>

        <Stack sx={{ width: "100%", maxWidth: { xs: 720, md: 900 } }}>
          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            <strong>{t("about.who_title")}</strong>
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            {t("about.who_body")}
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 2 }}>
            {t("about.who_body2")}
            s.
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 3 }}>
            {t("about.who_body3")}
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left", mb: 1.5 }}>
            <strong> {t("about.how_title")}</strong>
          </Typography>

          <Typography sx={{ ...leadSX, textAlign: "left" }}>
            {t("about.how_body")}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
