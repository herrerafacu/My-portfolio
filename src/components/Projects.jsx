import {
  Box,
  Card,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Lock as LockIcon,
  ArrowOutward as ArrowOutwardIcon,
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
            sx={{ mb: { xs: 5, md: 8 } }}
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

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {mergedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                t={t}
                onOpenDetails={() => handleOpenDetails(project)}
                delay={idx * 120}
                fromLeft={idx % 2 === 0}
              />
            ))}
          </Box>
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

function ProjectCard({ project, t, onOpenDetails, delay, fromLeft }) {
  const ref = useReveal();
  const hasDetails = hasProjectDetails(project);

  return (
    <Box
      ref={ref}
      className={`reveal ${fromLeft ? "reveal-left" : "reveal-right"}`}
      sx={{ transitionDelay: `${delay}ms` }}
    >
      <Card
        className="project-card-glow"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          overflow: "hidden",
          p: { xs: 2, md: 2.5 },
          transition:
            "transform 360ms ease, border-color 360ms ease, box-shadow 360ms ease",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "primary.main",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
            mb: 2.5,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            loading="lazy"
            sx={{
              width: "100%",
              height: { xs: 220, md: 280 },
              objectFit: "cover",
              transition: "transform 600ms ease",
              "&:hover": { transform: "scale(1.04)" },
            }}
          />
          {project.privateRepo && (
            <Chip
              icon={<LockIcon sx={{ fontSize: 16 }} />}
              label={t("projectsSection.private_label")}
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                bgcolor: "rgba(0,0,0,0.65)",
                color: "#fff",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                "& .MuiChip-icon": { color: "#fff" },
              }}
            />
          )}
        </Box>

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", px: 0.5 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em" }}
            >
              {project.title}
            </Typography>
            {(project.link || project.liveUrl) && (
              <Button
                aria-label={t("projects.view_live_app")}
                href={project.liveUrl || project.link}
                target="_blank"
                rel="noreferrer"
                sx={{
                  minWidth: 0,
                  width: 38,
                  height: 38,
                  p: 0,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: "divider",
                  color: "text.primary",
                  flexShrink: 0,
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    bgcolor: "transparent",
                  },
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: 18 }} />
              </Button>
            )}
          </Stack>

          {project.subtitle && (
            <Typography
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 600, mb: 1.25 }}
            >
              {project.subtitle}
            </Typography>
          )}

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 2,
              fontSize: "0.95rem",
            }}
          >
            {project.shortDescription}
          </Typography>

          <Stack
            direction="row"
            spacing={0.75}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 2 }}
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

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: "auto", flexWrap: "wrap", gap: 1 }}
          >
            {project.link && !project.liveUrl && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<OpenInNewIcon />}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                sx={{ borderRadius: 2 }}
              >
                {t("projects.go_landing")}
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<OpenInNewIcon />}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                sx={{ borderRadius: 2 }}
              >
                {t("projects.view_live_app")}
              </Button>
            )}
            {hasDetails && (
              <Button
                variant="contained"
                size="small"
                onClick={onOpenDetails}
                sx={{ borderRadius: 2 }}
              >
                {t("projects.details")}
              </Button>
            )}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
