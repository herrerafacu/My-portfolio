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
          py: { xs: 3.5, md: 5 },
          borderBottom: "1px solid",
          borderColor: "divider",
          background:
            "linear-gradient(135deg, rgba(25,118,210,0.22), rgba(0,188,212,0.1) 45%, rgba(15,23,42,0))",
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

        <Stack spacing={2.25} sx={{ maxWidth: 920, pr: { xs: 0, md: 0 } }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 800, letterSpacing: 0 }}
          >
            {t("projects.modal.case_study")}
          </Typography>

          <Stack spacing={1}>
            <Typography
              id="project-dialog-title"
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 900,
                lineHeight: 1,
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
              }}
            >
              {project.title}
            </Typography>
            {project.subtitle && (
              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.35,
                  maxWidth: 780,
                  fontSize: { xs: "1.05rem", sm: "1.25rem" },
                }}
              >
                {project.subtitle}
              </Typography>
            )}
          </Stack>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 860,
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </Typography>

          {stack.length > 0 && (
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {stack.map((item) => (
                <Chip
                  key={item}
                  size="small"
                  label={item}
                  variant="outlined"
                  sx={{
                    borderRadius: "6px",
                    bgcolor: "rgba(255,255,255,0.04)",
                    fontWeight: 700,
                  }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Box>
    </DialogTitle>
  );
}
