import { Box, Stack, Typography, Chip, Card, Link as MLink } from "@mui/material";
import {
  AccountTree as AccountTreeIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  Handyman as HandymanIcon,
  OpenInNew as OpenInNewIcon,
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
  return [course.provider, course.year].filter(Boolean).join(" · ");
}

function localizeSkillGroup(group, t) {
  return {
    ...group,
    title: t(`skills.groups.${group.id}.title`),
    items: group.items.map((itemId) => ({
      id: itemId,
      label: t(`skills.groups.${group.id}.items.${itemId}`),
    })),
  };
}

export default function Skills({ skillGroups = [], courses = [] }) {
  const { t } = useTranslation();
  const headerRef = useReveal();
  const cardRef = useReveal();
  const localizedGroups = skillGroups.map((group) =>
    localizeSkillGroup(group, t)
  );
  const hasCourses = Array.isArray(courses) && courses.length > 0;

  return (
    <Box id="skills" component="section" sx={sectionSX}>
      <Box sx={sectionInnerSX}>
        <Stack
          spacing={0}
          sx={{ mb: { xs: 4, md: 6 } }}
          ref={headerRef}
          className="reveal"
        >
          <Typography sx={sectionLabelSX}>{t("nav.skills")}</Typography>
          <Typography component="h2" sx={sectionTitleSX}>
            {t("skills.title")}
          </Typography>
          <Typography sx={{ ...sectionSubtitleSX, mb: 0 }}>
            {t("skills.subtitle")}
          </Typography>
        </Stack>

        <Card
          ref={cardRef}
          className="reveal"
          sx={{ borderRadius: 2.5, px: { xs: 2.5, md: 3.5 }, py: { xs: 1, md: 1.5 } }}
        >
          {localizedGroups.map((group, idx) => {
            const Icon = skillGroupIcons[group.id] ?? CodeIcon;
            return (
              <Box
                key={group.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "230px 1fr" },
                  columnGap: 3,
                  rowGap: 1.25,
                  alignItems: "center",
                  py: { xs: 2.25, md: 2.5 },
                  borderTop: idx === 0 ? "none" : "1px solid",
                  borderColor: "divider",
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Icon sx={{ fontSize: 19, color: "text.secondary" }} />
                  <Typography sx={{ fontWeight: 600, fontSize: "0.98rem" }}>
                    {group.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
                  {group.items.map((item) => (
                    <Chip
                      key={item.id}
                      label={item.label}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 1.5 }}
                    />
                  ))}
                </Stack>
              </Box>
            );
          })}

          {hasCourses && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "230px 1fr" },
                columnGap: 3,
                rowGap: 1.25,
                alignItems: "start",
                py: { xs: 2.25, md: 2.5 },
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "0.98rem", color: "text.primary" }}>
                {t("skills.courses")}
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                  columnGap: 3,
                  rowGap: 1,
                }}
              >
                {courses.map((course, index) => (
                  <Stack
                    key={`${course.title}-${index}`}
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ minWidth: 0 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.88rem",
                        color: "text.secondary",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                      }}
                    >
                      <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
                        {course.title}
                      </Box>
                      {"  ·  "}
                      {formatCourseMeta(course)}
                    </Typography>
                    {course.url ? (
                      <MLink
                        href={course.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("skills.open_course", { title: course.title })}
                        sx={{
                          display: "inline-flex",
                          color: "text.secondary",
                          flexShrink: 0,
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        <OpenInNewIcon sx={{ fontSize: 15 }} />
                      </MLink>
                    ) : null}
                  </Stack>
                ))}
              </Box>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
}
