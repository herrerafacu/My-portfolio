import {
  Box,
  Chip,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export default function ProjectDetailsHeader({ project, stack, onClose, t }) {
  return (
    <DialogTitle component="div" sx={{ p: 0 }}>
      <Box
        sx={{
          position: "relative",
          px: { xs: 2.5, md: 5 },
          py: { xs: 3.5, md: 4.5 },
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.default",
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label={t("projects.close")}
          sx={{
            position: "absolute",
            top: { xs: 10, md: 16 },
            right: { xs: 10, md: 16 },
            color: "text.secondary",
            borderRadius: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Stack spacing={2} sx={{ maxWidth: 920, pr: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {t("projects.modal.case_study")}
          </Typography>

          <Stack spacing={1}>
            <Typography
              id="project-dialog-title"
              component="h2"
              sx={{
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3rem" },
              }}
            >
              {project.title}
            </Typography>
            {project.subtitle && (
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  maxWidth: 780,
                  fontSize: { xs: "1.02rem", sm: "1.15rem" },
                }}
              >
                {project.subtitle}
              </Typography>
            )}
          </Stack>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 820,
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </Typography>

          {stack.length > 0 && (
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
              {stack.map((item) => (
                <Chip
                  key={item}
                  size="small"
                  label={item}
                  variant="outlined"
                  sx={{ borderRadius: "7px", fontWeight: 500 }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Box>
    </DialogTitle>
  );
}
