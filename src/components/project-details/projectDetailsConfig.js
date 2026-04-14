import {
  AccountTree as AccountTreeIcon,
  AutoAwesome as AutoAwesomeIcon,
  CloudQueue as CloudQueueIcon,
  Code as CodeIcon,
  Dashboard as DashboardIcon,
  Language as LanguageIcon,
  RocketLaunch as RocketLaunchIcon,
  Search as SearchIcon,
  Storage as StorageIcon,
} from "@mui/icons-material";

export const skillIconMap = {
  frontendArchitecture: CodeIcon,
  backendApiDesign: AccountTreeIcon,
  databaseModeling: StorageIcon,
  externalApiIntegration: LanguageIcon,
  advancedFilteringSearch: SearchIcon,
  productThinking: AutoAwesomeIcon,
  dashboardUx: DashboardIcon,
};

export const deploymentIconMap = {
  frontend: LanguageIcon,
  backend: CloudQueueIcon,
  database: StorageIcon,
};

export const fallbackDeploymentIcon = RocketLaunchIcon;

export const sectionSx = {
  py: { xs: 3, md: 4 },
  borderTop: "1px solid",
  borderColor: "divider",
};

export const panelSx = {
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "8px",
  bgcolor: "rgba(15, 23, 42, 0.68)",
};

export function getStackLabel(item) {
  if (typeof item === "string") return item;
  return item?.label ?? item?.title ?? item?.id ?? "";
}

export function getText(item) {
  if (typeof item === "string") return item;
  return item?.text ?? item?.label ?? item?.title ?? item?.id ?? "";
}

export function getScreenshots(project) {
  if (Array.isArray(project?.screenshots) && project.screenshots.length) {
    return project.screenshots;
  }

  return (
    project?.gallery?.map((image, index) => ({
      id: `gallery-${index}`,
      image,
    })) ?? []
  );
}
