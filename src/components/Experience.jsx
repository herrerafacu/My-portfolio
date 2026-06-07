import { useTranslation } from "react-i18next";
import { Box, Typography, Stack } from "@mui/material";
import {
  sectionSX,
  sectionInnerSX,
  sectionLabelSX,
  sectionTitleSX,
  sectionSubtitleSX,
} from "../styles";
import useReveal from "../utils/useReveal.js";

export default function Experience() {
  const { t } = useTranslation();
  const headerRef = useReveal();
  const translatedItems = t("experience.items", { returnObjects: true });
  const items = Array.isArray(translatedItems) ? translatedItems : [];

  return (
    <Box id="experience" component="section" sx={sectionSX}>
      <Box sx={sectionInnerSX}>
        <Stack
          spacing={0}
          sx={{ mb: { xs: 5, md: 8 } }}
          ref={headerRef}
          className="reveal"
        >
          <Typography sx={sectionLabelSX}>{t("nav.experience")}</Typography>
          <Typography component="h2" sx={sectionTitleSX}>
            {t("experience.title")}
          </Typography>
          <Typography sx={sectionSubtitleSX}>
            {t("experience.subtitle", {
              defaultValue:
                "Tres empresas, contextos muy distintos, el mismo enfoque: terminar lo que arranco.",
            })}
          </Typography>
        </Stack>

        <Box>
          {items.map((e, idx) => (
            <ExperienceItem
              key={`${e.company}-${e.role}`}
              item={e}
              delay={idx * 70}
              isLast={idx === items.length - 1}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ExperienceItem({ item, delay, isLast }) {
  const ref = useReveal();
  return (
    <Box
      ref={ref}
      className="reveal"
      sx={{
        py: { xs: 3.5, md: 4 },
        borderBottom: isLast ? "none" : "1px solid",
        borderColor: "divider",
        transitionDelay: `${delay}ms`,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "270px 1fr" },
        columnGap: { md: 6 },
        rowGap: 2,
        alignItems: "start",
      }}
    >
      {/* Left: the what / where / when — scannable at a glance */}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1.12rem",
            letterSpacing: "-0.015em",
            color: "text.primary",
            lineHeight: 1.25,
          }}
        >
          {item.role}
        </Typography>
        <Typography
          sx={{
            color: "text.primary",
            fontSize: "0.95rem",
            fontWeight: 500,
            mt: 0.4,
          }}
        >
          {item.company}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.82rem",
            fontWeight: 500,
            mt: 0.4,
          }}
        >
          {item.period}
        </Typography>
      </Box>

      {/* Right: responsibilities in two scannable columns */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          columnGap: 3,
          rowGap: 1.1,
        }}
      >
        {item.bullets.map((b, j) => (
          <Stack
            key={j}
            component="li"
            direction="row"
            spacing={1.25}
            alignItems="flex-start"
          >
            <Box
              sx={{
                mt: "8px",
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: "text.disabled",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.94rem",
                lineHeight: 1.55,
              }}
            >
              {b}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
