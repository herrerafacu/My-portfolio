import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ProjectDetailsHeader from "./project-details/ProjectDetailsHeader.jsx";
import ProjectDetailsSections from "./project-details/ProjectDetailsSections.jsx";
import ScreenshotPreviewDialog from "./project-details/ScreenshotPreviewDialog.jsx";
import {
  getScreenshots,
  getStackLabel,
} from "./project-details/projectDetailsConfig.js";

export default function ProjectDetailsDialog({ open, project, onClose }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const screenshots = useMemo(() => getScreenshots(project), [project]);
  const activeScreenshot = screenshots[activeScreenshotIndex] ?? screenshots[0];
  const stack = (project?.stack ?? project?.techStack ?? [])
    .map(getStackLabel)
    .filter(Boolean);
  const skills = Array.isArray(project?.skills) ? project.skills : [];
  const highlights = Array.isArray(project?.highlights) ? project.highlights : [];
  const security = Array.isArray(project?.security) ? project.security : [];
  const deployment = project?.deployment ?? null;
  const deploymentItems = Array.isArray(deployment?.items)
    ? deployment.items
    : [];
  const liveUrl = project?.liveUrl;
  const hasDetails =
    skills.length > 0 ||
    screenshots.length > 0 ||
    highlights.length > 0 ||
    security.length > 0 ||
    deploymentItems.length > 0 ||
    Boolean(liveUrl);

  useEffect(() => {
    if (!open) return;
    setActiveScreenshotIndex(0);
    setPreviewOpen(false);
  }, [open, project?.id]);

  if (!project) return null;

  const handlePreviewOpen = (index) => {
    setActiveScreenshotIndex(index);
    setPreviewOpen(true);
  };

  const handlePreviousScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      screenshots.length ? (current - 1 + screenshots.length) % screenshots.length : 0
    );
  };

  const handleNextScreenshot = () => {
    setActiveScreenshotIndex((current) =>
      screenshots.length ? (current + 1) % screenshots.length : 0
    );
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        fullScreen={fullScreen}
        aria-labelledby="project-dialog-title"
        slotProps={{
          paper: {
            sx: {
              borderRadius: fullScreen ? 0 : "8px",
              bgcolor: "background.paper",
              backgroundImage:
                "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(2,6,23,0.98))",
              border: fullScreen ? 0 : "1px solid",
              borderColor: "divider",
              overflow: "hidden",
            },
          },
        }}
      >
        <ProjectDetailsHeader
          project={project}
          stack={stack}
          onClose={onClose}
          t={t}
        />

        <DialogContent sx={{ p: 0 }}>
          {hasDetails && (
            <ProjectDetailsSections
              project={project}
              stack={stack}
              skills={skills}
              screenshots={screenshots}
              highlights={highlights}
              security={security}
              deployment={deployment}
              deploymentItems={deploymentItems}
              liveUrl={liveUrl}
              onPreviewOpen={handlePreviewOpen}
              t={t}
            />
          )}
        </DialogContent>

        <DialogActions
          sx={{
            px: { xs: 2.5, md: 5 },
            py: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            bgcolor: "rgba(2,6,23,0.62)",
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{ borderRadius: "6px" }}
          >
            {t("projects.close")}
          </Button>
        </DialogActions>
      </Dialog>

      <ScreenshotPreviewDialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        fullScreen={fullScreen}
        activeScreenshot={activeScreenshot}
        activeScreenshotIndex={activeScreenshotIndex}
        screenshots={screenshots}
        project={project}
        onPrevious={handlePreviousScreenshot}
        onNext={handleNextScreenshot}
        t={t}
      />
    </>
  );
}
