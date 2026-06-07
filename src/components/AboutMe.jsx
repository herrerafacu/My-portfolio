import { Box, Stack, Typography } from "@mui/material";
import {
  PsychologyAlt as PsychologyAltIcon,
  Devices as DevicesIcon,
  AllInclusive as AllInclusiveIcon,
} from "@mui/icons-material";
import {
  sectionSX,
  sectionInnerSX,
  sectionLabelSX,
  sectionTitleSX,
  sectionSubtitleSX,
} from "../styles";
import { useTranslation } from "react-i18next";
import useReveal from "../utils/useReveal.js";

// Three pillars, using the existing copy: product, production, end-to-end fullstack.
const FEATURES = [
  { id: "conversion", icon: PsychologyAltIcon },
  { id: "performance", icon: DevicesIcon, hasItems: true },
  { id: "fullstack", icon: AllInclusiveIcon },
];

export default function AboutMe() {
  const { t } = useTranslation();
  const headerRef = useReveal();

  return (
    <Box id="about" component="section" sx={sectionSX}>
      <Box sx={sectionInnerSX}>
        <Stack spacing={0} sx={{ mb: { xs: 5, md: 8 } }} ref={headerRef} className="reveal">
          <Typography sx={sectionLabelSX}>{t("about.about_me")}</Typography>
          <Typography component="h2" sx={sectionTitleSX}>
            {t("about.title")}
          </Typography>
          <Typography sx={sectionSubtitleSX}>{t("about.subtitle")}</Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            columnGap: { xs: 4, md: 6 },
            rowGap: { xs: 4.5, md: 6 },
          }}
        >
          {FEATURES.map((feature, idx) => (
            <FeatureItem key={feature.id} feature={feature} t={t} delay={idx * 55} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function FeatureItem({ feature, t, delay }) {
  const ref = useReveal();
  const Icon = feature.icon;
  const items = feature.hasItems
    ? t(`about.features.${feature.id}.items`, { returnObjects: true })
    : null;
  const itemList = Array.isArray(items) ? items : [];

  return (
    <Box
      ref={ref}
      className="reveal"
      sx={{
        transitionDelay: `${delay}ms`,
        borderTop: "1px solid",
        borderColor: "divider",
        pt: 2.5,
      }}
    >
      <Icon sx={{ fontSize: 22, color: "text.secondary", mb: 1.75 }} />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "1.08rem",
          letterSpacing: "-0.01em",
          mb: 1,
          color: "text.primary",
        }}
      >
        {t(`about.features.${feature.id}.title`)}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.96rem",
          lineHeight: 1.62,
        }}
      >
        {t(`about.features.${feature.id}.body`)}
      </Typography>

      {itemList.length > 0 && (
        <Stack direction="row" spacing={2} sx={{ mt: 1.75 }}>
          {itemList.map((label) => (
            <Typography
              key={label}
              sx={{
                color: "text.secondary",
                fontSize: "0.82rem",
                fontWeight: 500,
              }}
            >
              {label}
            </Typography>
          ))}
        </Stack>
      )}
    </Box>
  );
}
