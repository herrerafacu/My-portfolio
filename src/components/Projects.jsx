import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { lazy, Suspense, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { sectionSX, titleSX } from "../styles";
import {
  asRecord,
  hasProjectDetails,
  localizeDeployment,
  localizeStructuredItems,
  localizeTechStack,
} from "../utils/projectLocalization.js";

const ProjectDetailsDialog = lazy(() => import("./ProjectDetailsDialog.jsx"));

export default function Projects({ projects }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useTranslation();

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
      <Box id="projects" component="section" sx={{ ...sectionSX }}>
        <Stack spacing={3} sx={{ width: "100%" }} alignItems="center">
          <Typography component="h2" sx={titleSX}>
            {t("projects.title")}
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%", mx: 0 }}
          >
            {mergedProjects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    loading="lazy"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, lineHeight: 1.65 }}
                    >
                      {project.shortDescription}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mt: 1.5, justifyContent: "center" }}
                    >
                      {project.stack.map((item) => (
                        <Chip
                          key={item}
                          size="small"
                          label={item}
                          variant="outlined"
                          sx={{ borderRadius: "6px" }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      gap: 1,
                      pb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    {project.link && (
                      <Button
                        size="small"
                        endIcon={<OpenInNewIcon />}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ borderRadius: "6px" }}
                      >
                        {t("projects.go_landing")}
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="small"
                        endIcon={<OpenInNewIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ borderRadius: "6px" }}
                      >
                        {t("projects.view_live_app")}
                      </Button>
                    )}
                    {hasProjectDetails(project) && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleOpenDetails(project)}
                        sx={{ borderRadius: "6px" }}
                      >
                        {t("projects.details")}
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
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
