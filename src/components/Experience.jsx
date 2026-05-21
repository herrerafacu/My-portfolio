import { useTranslation } from "react-i18next";
import {
  Box,
  Card,
  Typography,
  Stack,
} from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {items.map((e, idx) => (
            <ExperienceCard
              key={`${e.company}-${e.role}`}
              item={e}
              delay={idx * 100}
              fromLeft={idx % 2 === 0}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ExperienceCard({ item, delay, fromLeft }) {
  const ref = useReveal();
  return (
    <Card
      ref={ref}
      className={`reveal ${fromLeft ? "reveal-left" : "reveal-right"}`}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 4,
        height: "100%",
        transitionDelay: `${delay}ms`,
        transition:
          "transform 320ms ease, border-color 320ms ease, opacity 800ms cubic-bezier(0.16,1,0.3,1)",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "primary.main",
        },
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
          <Box
            sx={{
              width: 42,
              height: 42,
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
              flexShrink: 0,
            }}
          >
            <BusinessIcon fontSize="small" />
          </Box>
          <Stack spacing={0.25} sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {item.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.company} · {item.period}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          component="ul"
          sx={{
            pl: 2.5,
            m: 0,
            gap: 0.65,
            textAlign: "left",
            color: "text.secondary",
            "& li::marker": { color: "primary.main" },
          }}
        >
          {item.bullets.map((b, j) => (
            <Typography
              key={j}
              component="li"
              variant="body2"
              sx={{ lineHeight: 1.55 }}
            >
              {b}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
