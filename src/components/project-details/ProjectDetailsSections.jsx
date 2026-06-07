import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Launch as LaunchIcon,
  OpenInFull as OpenInFullIcon,
  Security as SecurityIcon,
  ViewModule as ViewModuleIcon,
} from "@mui/icons-material";
import SectionHeading from "./SectionHeading.jsx";
import {
  deploymentIconMap,
  fallbackDeploymentIcon,
  getText,
  panelSx,
  sectionSx,
  skillIconMap,
} from "./projectDetailsConfig.js";

export default function ProjectDetailsSections({
  project,
  stack,
  skills,
  screenshots,
  highlights,
  security,
  deployment,
  deploymentItems,
  liveUrl,
  onPreviewOpen,
  t,
}) {
  return (
    <Box sx={{ px: { xs: 2.5, md: 5 }, pb: { xs: 3, md: 5 } }}>
      {skills.length > 0 && <CapabilitiesSection skills={skills} t={t} />}

      {screenshots.length > 0 && (
        <ScreenshotsSection
          project={project}
          screenshots={screenshots}
          onPreviewOpen={onPreviewOpen}
          t={t}
        />
      )}

      {highlights.length > 0 && <HighlightsSection highlights={highlights} t={t} />}

      {stack.length > 0 && <TechStackSection stack={stack} t={t} />}

      {security.length > 0 && <SecuritySection security={security} t={t} />}

      {deploymentItems.length > 0 && (
        <DeploymentSection
          deployment={deployment}
          deploymentItems={deploymentItems}
          t={t}
        />
      )}

      {liveUrl && <LiveAccessSection liveUrl={liveUrl} project={project} t={t} />}
    </Box>
  );
}

function CapabilitiesSection({ skills, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading
        eyebrow={t("projects.modal.overview")}
        title={t("projects.modal.key_capabilities")}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: 1.5,
        }}
      >
        {skills.map((skill) => {
          const skillId = typeof skill === "string" ? skill : skill.id;
          const Icon = skillIconMap[skillId] ?? CheckCircleOutlineIcon;

          return (
            <Box key={skillId ?? getText(skill)} sx={{ ...panelSx, p: 2 }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <SectionIcon icon={Icon} />
                <Stack spacing={0.6}>
                  <Typography sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                    {skill.title ?? getText(skill)}
                  </Typography>
                  {skill.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {skill.description}
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function ScreenshotsSection({ project, screenshots, onPreviewOpen, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading
        eyebrow={t("projects.modal.overview")}
        title={t("projects.modal.modules")}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: 1.5,
        }}
      >
        {screenshots.map((screenshot, index) => {
          const title = screenshot.title ?? `${project.title} ${index + 1}`;
          const alt =
            screenshot.alt ??
            t("projects.modal.screenshot_alt", {
              title: project.title,
              current: index + 1,
            });

          return (
            <Box
              key={screenshot.id ?? screenshot.image}
              component="button"
              type="button"
              onClick={() => onPreviewOpen(index)}
              aria-label={`${t("projects.modal.open_preview")}: ${title}`}
              sx={{
                ...panelSx,
                p: 0,
                color: "inherit",
                font: "inherit",
                textAlign: "left",
                cursor: "pointer",
                overflow: "hidden",
                transition: "border-color 160ms ease, transform 160ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "text.disabled",
                },
                "&:focus-visible": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: 2,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  bgcolor: "background.default",
                  overflow: "hidden",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box
                  component="img"
                  src={screenshot.image}
                  alt={alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    display: "grid",
                    placeItems: "center",
                    color: "text.primary",
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(10,10,11,0.72)"
                        : "rgba(255,255,255,0.9)",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <OpenInFullIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
              <Stack spacing={0.5} sx={{ p: 1.75 }}>
                <Typography sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  {title}
                </Typography>
                {screenshot.description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.55 }}
                  >
                    {screenshot.description}
                  </Typography>
                )}
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function HighlightsSection({ highlights, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading
        eyebrow={t("projects.modal.tech_stack")}
        title={t("projects.modal.featured_features")}
      />
      <ItemGrid>
        {highlights.map((highlight) => (
          <ListPanel key={highlight.id ?? getText(highlight)}>
            <CheckCircleOutlineIcon
              fontSize="small"
              sx={{ flexShrink: 0, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: 500, lineHeight: 1.4 }}>
              {getText(highlight)}
            </Typography>
          </ListPanel>
        ))}
      </ItemGrid>
    </Box>
  );
}

function TechStackSection({ stack, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading title={t("projects.modal.tech_stack")} />
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {stack.map((item) => (
          <Chip
            key={`stack-${item}`}
            label={item}
            icon={<ViewModuleIcon fontSize="small" />}
            variant="outlined"
            sx={{ borderRadius: "7px", fontWeight: 500 }}
          />
        ))}
      </Stack>
    </Box>
  );
}

function SecuritySection({ security, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading title={t("projects.modal.security")} />
      <ItemGrid>
        {security.map((item) => (
          <ListPanel key={item.id ?? getText(item)}>
            <SectionIcon icon={SecurityIcon} size={32} />
            <Typography sx={{ fontWeight: 500, lineHeight: 1.4 }}>
              {getText(item)}
            </Typography>
          </ListPanel>
        ))}
      </ItemGrid>
    </Box>
  );
}

function DeploymentSection({ deployment, deploymentItems, t }) {
  return (
    <Box component="section" sx={sectionSx}>
      <SectionHeading title={t("projects.modal.deployment")} />
      {deployment.description && (
        <Typography color="text.secondary" sx={{ maxWidth: 820, lineHeight: 1.7, mb: 2 }}>
          {deployment.description}
        </Typography>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: 1.5,
        }}
      >
        {deploymentItems.map((item) => {
          const itemId = typeof item === "string" ? item : item.id;
          const Icon = deploymentIconMap[itemId] ?? fallbackDeploymentIcon;
          const technologies = Array.isArray(item.technologies)
            ? item.technologies
            : [];

          return (
            <Box key={itemId ?? getText(item)} sx={{ ...panelSx, p: 2 }}>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <SectionIcon icon={Icon} size={36} />
                  <Typography sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                    {item.title ?? getText(item)}
                  </Typography>
                </Stack>
                {item.description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                )}
                {technologies.length > 0 && (
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {technologies.map((technology) => (
                      <Chip
                        key={technology}
                        label={technology}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: "7px", fontWeight: 500 }}
                      />
                    ))}
                  </Stack>
                )}
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function LiveAccessSection({ liveUrl, project, t }) {
  return (
    <Box component="section" sx={{ ...sectionSx, pb: 0 }}>
      <Box sx={{ ...panelSx, p: { xs: 2.25, md: 3 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Stack spacing={0.6}>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {t("projects.modal.live_access")}
            </Typography>
            <Typography sx={{ fontWeight: 600, lineHeight: 1.4 }}>
              {t("projects.modal.live_app_intro")}
            </Typography>
          </Stack>
          <Button
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            endIcon={<LaunchIcon />}
            aria-label={t("projects.modal.live_app_aria", {
              title: project.title,
            })}
            sx={{
              borderRadius: "8px",
              minWidth: { xs: "100%", sm: 180 },
            }}
          >
            {t("projects.modal.view_live_app")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

function ItemGrid({ children }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
        },
        gap: 1.25,
      }}
    >
      {children}
    </Box>
  );
}

function ListPanel({ children }) {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      alignItems="center"
      sx={{ ...panelSx, p: 1.6 }}
    >
      {children}
    </Stack>
  );
}

function SectionIcon({ icon, size = 34 }) {
  const IconComponent = icon;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "8px",
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        color: "text.secondary",
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.04)"
            : "rgba(0,0,0,0.04)",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <IconComponent fontSize="small" />
    </Box>
  );
}
