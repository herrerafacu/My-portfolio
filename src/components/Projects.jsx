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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { sectionSX, titleSX } from "../styles";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Projects({ projects }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useTranslation();
  const [openImageZoom, setOpenImageZoom] = useState(false);

  const [zoomSrc, setZoomSrc] = useState(null);
  const i18nItems = t("projects.items", { returnObjects: true }) || [];

  const mergedProjects = useMemo(() => {
    return projects.map((p, idx) => {
      const text = i18nItems[idx] || {};
      return {
        ...p,
        title: text.title ?? p.title,
        description: text.description ?? p.description,
        highlights:
          Array.isArray(text.highlights) && text.highlights.length
            ? text.highlights
            : p.highlights,
      };
    });
  }, [projects, i18nItems]);

  const handleOpenDetails = (p) => {
    setActiveProject(p);
    setOpenDetails(true);
  };
  const handleCloseDetails = () => {
    setOpenDetails(false);
    setActiveProject(null);
  };

  const handleOpenZoom = (src) => {
    setZoomSrc(src);
    setOpenImageZoom(true);
  };

  const handleCloseZoom = () => {
    setOpenImageZoom(false);
    setZoomSrc(null);
  };
  return (
    <>
      <Box id="projects" sx={{ ...sectionSX }}>
        <Stack spacing={3} sx={{ width: "100%" }} alignItems="center">
          <Typography sx={titleSX}>{t("projects.title")}</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%", mx: 0 }}
          >
            {mergedProjects.map((p, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {p.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 1, flexWrap: "wrap", justifyContent: "center" }}
                    >
                      {p.stack.map((s) => (
                        <Chip
                          key={s}
                          size="small"
                          label={s}
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", gap: 1 }}>
                    {p.link && (
                      <Button
                        size="small"
                        endIcon={<OpenInNewIcon />}
                        href={p.link}
                        target="_blank"
                      >
                        {t("projects.go_landing")}
                      </Button>
                    )}
                    {p.gallery && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleOpenDetails(p)}
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

      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
      >
        {activeProject && (
          <>
            <DialogTitle sx={{ fontWeight: 800 }}>
              {activeProject.title}
            </DialogTitle>
            <DialogContent dividers>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {activeProject.description}
              </Typography>

              {/* Galería clickeable */}
              <Stack
                direction="row"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                sx={{ mb: 3, justifyContent: "center" }}
              >
                {activeProject.gallery?.map((src, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: { xs: "100%", sm: "48%" }, // dos columnas en desktop
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: 3,
                      bgcolor: "background.paper",
                      "&:hover": { opacity: 0.9 },
                      "& img": {
                        width: "100%",
                        height: "100%",
                        maxHeight: 320,
                        objectFit: "cover",
                        display: "block",
                      },
                    }}
                    onClick={() => handleOpenZoom(src)}
                  >
                    <Box component="img" src={src} alt={`cap-${i}`} />
                  </Box>
                ))}
              </Stack>

              {activeProject.highlights?.length > 0 && (
                <>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    {t("projects.highlights")}
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2, m: 0, gap: 0.5 }}>
                    {activeProject.highlights.map((h, i) => (
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
                {activeProject.stack?.map((s) => (
                  <Chip key={s} size="small" label={s} variant="outlined" />
                ))}
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetails}>
                {t("projects.close")}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Visor de imagen en grande */}
      <Dialog
        open={openImageZoom}
        onClose={handleCloseZoom}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0 }}>
          {zoomSrc && (
            <Box
              component="img"
              src={zoomSrc}
              alt="zoom"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
