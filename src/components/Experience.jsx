import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { sectionSX, titleSX } from "../styles";

export default function Experience() {
  const { t } = useTranslation();
  const translatedItems = t("experience.items", { returnObjects: true });
  const items = Array.isArray(translatedItems) ? translatedItems : [];

  return (
    <Box id="experience" component="section" sx={{ ...sectionSX }}>
      <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
        <Typography component="h2" sx={titleSX}>
          {t("experience.title")}
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {items.map((e) => (
            <Grid item xs={12} md={6} key={`${e.company}-${e.role}`}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {e.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.company} • {e.period}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack
                    component="ul"
                    sx={{ pl: 2, m: 0, gap: 0.5, textAlign: "left" }}
                  >
                    {e.bullets.map((b, j) => (
                      <Typography key={j} component="li" variant="body2">
                        {b}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
