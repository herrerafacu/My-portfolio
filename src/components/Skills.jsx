import {
  Box,
  Stack,
  Typography,
  Chip,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MLink,
} from "@mui/material";
import { sectionSX, titleSX } from "../styles";
import {
  Code as CodeIcon,
  School as SchoolIcon,
  OpenInNew as OpenInNewIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Skills({
  skillsCategories,
  skills = [],
  courses = [],
}) {
  const hasCategories =
    skillsCategories &&
    typeof skillsCategories === "object" &&
    Object.keys(skillsCategories).length > 0;
  const { t } = useTranslation();

  return (
    <Box id="skills" sx={{ ...sectionSX }}>
      <Stack spacing={3.5} sx={{ width: "100%" }} alignItems="center">
        <Typography sx={titleSX}>{t("skills.title")}</Typography>

        <Stack spacing={3} sx={{ width: "100%", maxWidth: 1100 }}>
          {hasCategories ? (
            Object.entries(skillsCategories).map(([cat, items]) => (
              <Stack key={cat} spacing={1.25} sx={{ mt: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    letterSpacing: 0.2,
                  }}
                >
                  {cat}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.25}
                  useFlexGap
                  flexWrap="wrap"
                >
                  {items.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      variant="outlined"
                      icon={<CodeIcon fontSize="small" />}
                    />
                  ))}
                </Stack>
              </Stack>
            ))
          ) : (
            <Stack
              direction="row"
              spacing={1.5}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
            >
              {skills.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  variant="outlined"
                  icon={<CodeIcon fontSize="small" />}
                />
              ))}
            </Stack>
          )}
        </Stack>

        {Array.isArray(courses) && courses.length > 0 && (
          <Card sx={{ width: "min(900px, 100%)" }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <SchoolIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t("skills.courses")}{" "}
                </Typography>
              </Stack>

              <List dense disablePadding>
                {courses.map((c, i) => (
                  <ListItem key={`${c.title}-${i}`} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <VerifiedIcon fontSize="small" color="action" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 600 }}>
                          {c.title}
                          {c.url ? (
                            <>
                              {" "}
                              <MLink
                                href={c.url}
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                                sx={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                }}
                              >
                                <OpenInNewIcon
                                  fontSize="inherit"
                                  sx={{ ml: 0.5 }}
                                />
                              </MLink>
                            </>
                          ) : null}
                        </Typography>
                      }
                      secondary={`${c.provider}${c.year ? " • " + c.year : ""}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
      </Stack>
    </Box>
  );
}
