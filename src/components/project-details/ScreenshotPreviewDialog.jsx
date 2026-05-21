import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export default function ScreenshotPreviewDialog({
  open,
  onClose,
  fullScreen,
  activeScreenshot,
  activeScreenshotIndex,
  screenshots,
  project,
  onPrevious,
  onNext,
  t,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      fullScreen={fullScreen}
      aria-labelledby="project-screenshot-preview-title"
      slotProps={{
        paper: {
          sx: {
            borderRadius: fullScreen ? 0 : "8px",
            bgcolor: "background.paper",
            overflow: "hidden",
          },
        },
      }}
    >
      {activeScreenshot && (
        <>
          <DialogTitle component="div" sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack spacing={0.25} sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography
                  id="project-screenshot-preview-title"
                  sx={{ fontWeight: 800 }}
                  noWrap
                >
                  {activeScreenshot.title ??
                    `${project.title} ${activeScreenshotIndex + 1}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("projects.modal.screenshot_counter", {
                    current: activeScreenshotIndex + 1,
                    total: screenshots.length,
                  })}
                </Typography>
              </Stack>
              <IconButton
                onClick={onClose}
                aria-label={t("projects.modal.close_preview")}
                sx={{ borderRadius: "8px" }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </DialogTitle>

          <DialogContent sx={{ p: 0, bgcolor: "rgba(2,6,23,0.96)" }}>
            <Box
              component="img"
              src={activeScreenshot.image}
              alt={
                activeScreenshot.alt ??
                t("projects.modal.screenshot_alt", {
                  title: project.title,
                  current: activeScreenshotIndex + 1,
                })
              }
              sx={{
                width: "100%",
                maxHeight: fullScreen ? "calc(100vh - 168px)" : "76vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </DialogContent>

          <DialogActions
            sx={{
              justifyContent: "space-between",
              gap: 1,
              px: 2,
              py: 1.5,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Button
              onClick={onPrevious}
              startIcon={<ChevronLeftIcon />}
              disabled={screenshots.length < 2}
              sx={{ borderRadius: "6px" }}
            >
              {t("projects.modal.previous_screenshot")}
            </Button>
            <Button
              onClick={onNext}
              endIcon={<ChevronRightIcon />}
              disabled={screenshots.length < 2}
              sx={{ borderRadius: "6px" }}
            >
              {t("projects.modal.next_screenshot")}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
