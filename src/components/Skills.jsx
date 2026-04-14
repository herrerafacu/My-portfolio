import {
  Box,
  Stack,
  Typography,
  Chip,
  Card,
  CardContent,
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
import { sectionSX, titleSX } from "../styles";

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
  const localizedGroups = skillGroups.map((group) =>
    localizeSkillGroup(group, t),
  );

  return (
    <Box id="skills" component="section" sx={{ ...sectionSX }}>
      <Stack spacing={3.5} sx={{ width: "100%" }} alignItems="center">
        <Stack spacing={1} alignItems="center" sx={{ maxWidth: 760 }}>
          <Typography component="h2" sx={{ ...titleSX, mb: 0 }}>
            {t("skills.title")}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 680,
              lineHeight: 1.65,
              fontSize: { xs: "0.98rem", md: "1.05rem" },
            }}
          >
            {t("skills.subtitle")}
          </Typography>
        </Stack>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1120,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {localizedGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </Box>

        {Array.isArray(courses) && courses.length > 0 && (
          <CoursesPanel courses={courses} t={t} />
        )}
      </Stack>
    </Box>
  );
}

function SkillCard({ group }) {
  const Icon = skillGroupIcons[group.id] ?? CodeIcon;

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(15, 23, 42, 0.62)",
        textAlign: "left",
        backgroundImage:
          "linear-gradient(135deg, rgba(25,118,210,0.11), rgba(0,188,212,0.04) 55%, rgba(15,23,42,0))",
      }}
    >
      <CardContent sx={{ p: { xs: 2.25, md: 2.75 } }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                display: "grid",
                placeItems: "center",
                color: "secondary.main",
                bgcolor: "rgba(0,188,212,0.1)",
                border: "1px solid rgba(0,188,212,0.22)",
                flexShrink: 0,
              }}
            >
              <Icon fontSize="small" />
            </Box>
            <Stack spacing={0.6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 900, lineHeight: 1.2 }}
              >
                {group.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.65 }}
              >
                {group.description}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {group.items.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: "6px",
                  fontWeight: 700,
                  bgcolor: "rgba(255,255,255,0.03)",
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function CoursesPanel({ courses, t }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1120,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "8px",
        bgcolor: "rgba(15, 23, 42, 0.36)",
        textAlign: "left",
        px: { xs: 2, md: 2.5 },
        py: { xs: 1.5, md: 1.75 },
      }}
    >
      <Stack spacing={1.25}>
        <Stack direction="row" spacing={1} alignItems="center">
          <SchoolIcon color="primary" fontSize="small" />
          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
            {t("skills.courses")}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: { xs: "none", sm: "inline" } }}
          ></Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 0.75, md: 1 },
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
                minWidth: 0,
                py: 0.75,
                px: 1,
                borderRadius: "6px",
                bgcolor: "rgba(255,255,255,0.025)",
              }}
            >
              <Stack spacing={0.15} sx={{ minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
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
                  aria-label={t("skills.open_course", {
                    title: course.title,
                  })}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "secondary.main",
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
    </Box>
  );
}
