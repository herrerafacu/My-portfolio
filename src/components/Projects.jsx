import { Box, Typography, Chip, Button, Stack } from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Lock as LockIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { lazy, Suspense, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  sectionSX,
  sectionInnerSX,
  sectionLabelSX,
  sectionTitleSX,
  sectionSubtitleSX,
} from "../styles";
import {
  asRecord,
  hasProjectDetails,
  localizeDeployment,
  localizeStructuredItems,
  localizeTechStack,
} from "../utils/projectLocalization.js";
import useReveal from "../utils/useReveal.js";

const ProjectDetailsDialog = lazy(() => import("./ProjectDetailsDialog.jsx"));

export default function Projects({ projects }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useTranslation();
  const headerRef = useReveal();

  const mergedProjects = useMemo(() => {
    return projects.map((project) => {
      const localized = asRecord(
        project.i18nKey
          ? t(`projects.items.${project.i18nKey}`, {
              returnObjects: true,
              defaultValue: {},
            })
          : {}
      );
      const stack = localizeTechStack(
        project.techStack ?? project.stack,
        localized.techStack
      );

      return {
        ...project,
        title: localized.title ?? project.title,
        subtitle: localized.subtitle ?? project.subtitle,
        description: localized.description ?? project.description,
        shortDescription:
          localized.shortDescription ??
          project.shortDescription ??
          localized.description ??
          project.description,
        stack,
        techStack: stack,
        skills: localizeStructuredItems(project.skills, localized.skills),
        screenshots: localizeStructuredItems(
          project.screenshots,
          localized.screenshots
        ),
        highlights: localizeStructuredItems(
          project.highlights,
          localized.highlights
        ),
        security: localizeStructuredItems(project.security, localized.security),
        deployment: localizeDeployment(project.deployment, localized.deployment),
        liveUrl: project.liveUrl,
      };
    });
  }, [projects, t]);

  const handleOpenDetails = (project) => {
    setActiveProject(project);
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setActiveProject(null);
  };

  return (
    <>
      <Box id="projects" component="section" sx={sectionSX}>
        <Box sx={sectionInnerSX}>
          <Stack
            spacing={0}
            sx={{ mb: { xs: 6, md: 9 } }}
            ref={headerRef}
            className="reveal"
          >
            <Typography sx={sectionLabelSX}>
              {t("projectsSection.label")}
            </Typography>
            <Typography component="h2" sx={sectionTitleSX}>
              {t("projectsSection.title")}
            </Typography>
            <Typography sx={sectionSubtitleSX}>
              {t("projectsSection.subtitle")}
            </Typography>
          </Stack>

          <Stack spacing={{ xs: 8, md: 14 }}>
            {mergedProjects.map((project, idx) => (
              <ProjectRow
                key={project.id}
                project={project}
                t={t}
                onOpenDetails={() => handleOpenDetails(project)}
                reverse={idx % 2 === 1}
              />
            ))}
          </Stack>
        </Box>
      </Box>

      {activeProject && (
        <Suspense fallback={null}>
          <ProjectDetailsDialog
            open={openDetails}
            project={activeProject}
            onClose={handleCloseDetails}
          />
        </Suspense>
      )}
    </>
  );
}

function ProjectRow({ project, t, onOpenDetails, reverse }) {
  const ref = useReveal();
  const hasDetails = hasProjectDetails(project);

  return (
    <Box
      ref={ref}
      className="reveal"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
        gap: { xs: 3.5, md: 7 },
        alignItems: "center",
      }}
    >
      {/* Screenshot — the product, shown plainly in a clean frame */}
      <Box
        sx={{
          order: { xs: 0, md: reverse ? 1 : 0 },
          position: "relative",
          borderRadius: 2.5,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: { xs: 240, sm: 320, md: 400 },
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
        {project.privateRepo && (
          <Chip
            icon={<LockIcon sx={{ fontSize: 15 }} />}
            label={t("projectsSection.private_label")}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(10,10,11,0.78)"
                  : "rgba(255,255,255,0.9)",
              color: "text.secondary",
              backdropFilter: "blur(6px)",
              border: "1px solid",
              borderColor: "divider",
              fontWeight: 500,
              "& .MuiChip-icon": { color: "text.secondary", ml: 0.5 },
            }}
          />
        )}
      </Box>

      {/* Narrative */}
      <Box sx={{ order: { xs: 1, md: reverse ? 0 : 1 } }}>
        <Typography
          component="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.6rem", md: "2rem" },
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            mb: project.subtitle ? 1 : 1.5,
          }}
        >
          {project.title}
        </Typography>

        {project.subtitle && (
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: { xs: "1.02rem", md: "1.1rem" },
              lineHeight: 1.4,
              mb: 1.75,
            }}
          >
            {project.subtitle}
          </Typography>
        )}

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.65,
            fontSize: "1rem",
            mb: 3,
            maxWidth: 540,
          }}
        >
          {project.shortDescription}
        </Typography>

        <Stack
          direction="row"
          spacing={0.75}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 3.5 }}
        >
          {project.stack.map((item) => (
            <Chip
              key={item}
              size="small"
              label={item}
              variant="outlined"
              sx={{ borderRadius: 1.5 }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={1.25} sx={{ flexWrap: "wrap", gap: 1.25 }}>
          {hasDetails && (
            <Button
              variant="contained"
              size="medium"
              onClick={onOpenDetails}
              endIcon={<ArrowForwardIcon />}
            >
              {t("projects.details")}
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="outlined"
              size="medium"
              endIcon={<OpenInNewIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("projects.view_live_app")}
            </Button>
          )}
          {project.link && !project.liveUrl && (
            <Button
              variant="contained"
              size="medium"
              endIcon={<OpenInNewIcon />}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {t("projects.go_landing")}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
