import { Box, Stack, Typography, Card } from "@mui/material";
import {
  PsychologyAlt as PsychologyAltIcon,
  Devices as DevicesIcon,
  Build as BuildIcon,
  Visibility as VisibilityIcon,
  Storage as StorageIcon,
  AllInclusive as AllInclusiveIcon,
  CheckCircle as CheckCircleIcon,
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

const FEATURES = [
  {
    id: "conversion",
    icon: PsychologyAltIcon,
    span: { xs: "1 / -1", md: "span 1" },
  },
  {
    id: "performance",
    icon: DevicesIcon,
    span: { xs: "1 / -1", md: "span 1" },
    hasItems: true,
  },
  { id: "speed", icon: BuildIcon },
  { id: "quality", icon: VisibilityIcon },
  { id: "process", icon: StorageIcon },
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
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {FEATURES.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              t={t}
              delay={idx * 80}
              big={idx < 2}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function FeatureCard({ feature, t, delay, big }) {
  const ref = useReveal();
  const Icon = feature.icon;
  const items = feature.hasItems
    ? t(`about.features.${feature.id}.items`, { returnObjects: true })
    : null;
  const itemList = Array.isArray(items) ? items : [];

  return (
    <Card
      ref={ref}
      className="reveal"
      sx={{
        gridColumn: big
          ? { xs: "1 / -1", md: "span 1", lg: "span 1" }
          : undefined,
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        transitionDelay: `${delay}ms`,
        position: "relative",
        overflow: "hidden",
        minHeight: big ? { xs: 220, md: 300 } : 220,
        display: "flex",
        flexDirection: "column",
        "&::after": {
          content: '""',
          position: "absolute",
          top: -100,
          right: -100,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        transition:
          "transform 280ms cubic-bezier(0.16,1,0.3,1), border-color 280ms ease",
        "&:hover": {
          transform: "translate3d(0,-4px,0)",
          borderColor: "primary.main",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ mb: 1.5, position: "relative", zIndex: 1 }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2.5,
            display: "grid",
            placeItems: "center",
            color: "primary.main",
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(99,102,241,0.12)"
                : "rgba(99,102,241,0.08)",
            border: "1px solid",
            borderColor: "rgba(99,102,241,0.25)",
          }}
        >
          <Icon />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: { xs: "1.1rem", md: "1.25rem" } }}
        >
          {t(`about.features.${feature.id}.title`)}
        </Typography>
      </Stack>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.6,
          mb: itemList.length ? 2.5 : 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {t(`about.features.${feature.id}.body`)}
      </Typography>

      {itemList.length > 0 && (
        <Stack
          direction="row"
          spacing={1.25}
          useFlexGap
          flexWrap="wrap"
          sx={{ mt: "auto", position: "relative", zIndex: 1 }}
        >
          {itemList.map((label) => (
            <Stack
              key={label}
              direction="row"
              spacing={0.75}
              alignItems="center"
              sx={{
                px: 1.5,
                py: 0.75,
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(11,11,20,0.04)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <CheckCircleIcon
                sx={{ fontSize: 16, color: "primary.main" }}
              />
              <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                {label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Card>
  );
}
