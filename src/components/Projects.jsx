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
import { useState } from "react";

export default function Projects({ projects }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenDetails = (p) => {
    setActiveProject(p);
    setOpenDetails(true);
  };
  const handleCloseDetails = () => {
    setOpenDetails(false);
    setActiveProject(null);
  };

  return (
    <>
      <Box id="projects" sx={{ ...sectionSX }}>
        <Stack spacing={3} sx={{ width: "100%" }} alignItems="center">
          <Typography sx={titleSX}>Algunas cosas que construí</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%", mx: 0 }}
          >
            {projects.map((p, i) => (
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
                        Ir a la Landing
                      </Button>
                    )}
                    {p.gallery && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleOpenDetails(p)}
                      >
                        Detalles
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

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                sx={{ mb: 2 }}
              >
                {activeProject.gallery?.map((src, i) => (
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
              {activeProject.highlights?.length > 0 && (
                <>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    Lo destacado
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
              <Button onClick={handleCloseDetails}>Cerrar</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
