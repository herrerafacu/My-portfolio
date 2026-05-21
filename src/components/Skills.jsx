import {
  Box,
  Stack,
  Typography,
  Chip,
  Card,
  Link as MLink,
} from "@mui/material";
import {
  AccountTree as AccountTreeIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  Handyman as HandymanIcon,
  OpenInNew as OpenInNewIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {
  sectionSX,
  sectionInnerSX,
  sectionLabelSX,
  sectionTitleSX,
  sectionSubtitleSX,
} from "../styles";
import useReveal from "../utils/useReveal.js";

const skillGroupIcons = {
  frontendEngineering: CodeIcon,
  backendApis: AccountTreeIcon,
  dataPersistence: DataObjectIcon,
  devopsTools: HandymanIcon,
};

function formatCourseMeta(course) {
  return [course.provider, course.year].filter(Boolean).join(" - ");
}

function localizeSkillGroup(group, t) {
  return {
    ...group,
    title: t(`skills.groups.${group.id}.title`),
    description: t(`skills.groups.${group.id}.description`),
    items: group.items.map((itemId) => ({
      id: itemId,
      label: t(`skills.groups.${group.id}.items.${itemId}`),
    })),
  };
}

export default function Skills({ skillGroups = [], courses = [] }) {
  const { t } = useTranslation();
  const headerRef = useReveal();
  const localizedGroups = skillGroups.map((group) =>
    localizeSkillGroup(group, t)
  );

  return (
    <Box id="skills" component="section" sx={sectionSX}>
      <Box sx={sectionInnerSX}>
        <Stack
          spacing={0}
          sx={{ mb: { xs: 5, md: 8 } }}
          ref={headerRef}
          className="reveal"
        >
          <Typography sx={sectionLabelSX}>
            {t("nav.skills")}
          </Typography>
          <Typography component="h2" sx={sectionTitleSX}>
            {t("skills.title")}
          </Typography>
          <Typography sx={sectionSubtitleSX}>{t("skills.subtitle")}</Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 2, md: 2.5 },
            mb: { xs: 3, md: 4 },
          }}
        >
          {localizedGroups.map((group, idx) => (
            <SkillCard
              key={group.id}
              group={group}
              delay={idx * 80}
              fromLeft={idx % 2 === 0}
            />
          ))}
        </Box>

        {Array.isArray(courses) && courses.length > 0 && (
          <CoursesPanel courses={courses} t={t} />
        )}
      </Box>
    </Box>
  );
}

function SkillCard({ group, delay, fromLeft }) {
  const ref = useReveal();
  const Icon = skillGroupIcons[group.id] ?? CodeIcon;

  return (
    <Card
      ref={ref}
      className={`reveal ${fromLeft ? "reveal-left" : "reveal-right"}`}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 4,
        textAlign: "left",
        transitionDelay: `${delay}ms`,
        transition:
          "transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease, opacity 800ms cubic-bezier(0.16,1,0.3,1)",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "primary.main",
        },
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1.5} alignItems="center">
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
          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {group.title}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {group.description}
        </Typography>

        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
          {group.items.map((item) => (
            <Chip
              key={item.id}
              label={item.label}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1.5, fontWeight: 600 }}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}

function CoursesPanel({ courses, t }) {
  const ref = useReveal();
  return (
    <Card
      ref={ref}
      className="reveal"
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        textAlign: "left",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <SchoolIcon color="primary" fontSize="small" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {t("skills.courses")}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 1,
          }}
        >
          {courses.map((course, index) => (
            <Box
              key={`${course.title}-${index}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                py: 1,
                px: 1.5,
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(11,11,20,0.04)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Stack spacing={0.25} sx={{ minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {course.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatCourseMeta(course)}
                </Typography>
              </Stack>
              {course.url ? (
                <MLink
                  href={course.url}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  aria-label={t("skills.open_course", { title: course.title })}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "primary.main",
                    flexShrink: 0,
                  }}
                >
                  <OpenInNewIcon fontSize="small" />
                </MLink>
              ) : null}
            </Box>
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
