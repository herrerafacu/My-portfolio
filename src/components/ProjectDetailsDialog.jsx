import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Stack,
  Typography,
  Chip,
} from "@mui/material";

export default function ProjectDetailsDialog({ open, project, onClose }) {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 800 }}>{project.title}</DialogTitle>

      <DialogContent dividers>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          {project.gallery?.map((src, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: "calc(50% - 4px)" },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`cap-${i}`}
                sx={{ width: "100%", display: "block" }}
              />
            </Box>
          ))}
        </Stack>
        {project.highlights?.length > 0 && (
          <>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>
              Lo destacado
            </Typography>
            <Stack component="ul" sx={{ pl: 2, m: 0, gap: 0.5 }}>
              {project.highlights.map((h, i) => (
                <Typography key={i} component="li" variant="body2">
                  {h}
                </Typography>
              ))}
            </Stack>
          </>
        )}
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mt: 2 }}
        >
          {project.stack?.map((s) => (
            <Chip key={s} size="small" label={s} variant="outlined" />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}
