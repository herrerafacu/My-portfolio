import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { sectionSX, titleSX } from "../styles";

export default function Experience({ experiences }) {
  return (
    <Box id="experience" sx={{ ...sectionSX }}>
      <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
        <Typography sx={titleSX}>Dónde apliqué lo que sé</Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {experiences.map((e, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
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
                    sx={{ pl: 2, m: 0, gap: 1, textAlign: "left" }}
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
