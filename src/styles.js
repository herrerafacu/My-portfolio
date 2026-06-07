export const MAX_WIDTH = 1120;

export const sectionSX = {
  width: "100%",
  py: { xs: 8, md: 12 },
  px: { xs: 2.5, md: 4 },
  scrollMarginTop: "84px",
  position: "relative",
};

export const sectionInnerSX = {
  width: "100%",
  maxWidth: MAX_WIDTH,
  mx: "auto",
};

// Small eyebrow above a section title. The one place the accent earns its keep.
export const sectionLabelSX = {
  color: "primary.main",
  fontWeight: 600,
  fontSize: "0.8rem",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  mb: 1.5,
};

export const sectionTitleSX = {
  fontWeight: 600,
  fontSize: { xs: "1.85rem", sm: "2.25rem", md: "2.75rem" },
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  color: "text.primary",
  mb: 2,
};

export const sectionSubtitleSX = {
  color: "text.secondary",
  fontSize: { xs: "1.02rem", md: "1.12rem" },
  maxWidth: 640,
  lineHeight: 1.6,
  mb: { xs: 5, md: 7 },
};

// Hero — left-aligned, editorial, no glow or gradient text.
export const heroSX = {
  width: "100%",
  pt: { xs: 15, md: 17 },
  pb: { xs: 7, md: 8 },
  px: { xs: 2.5, md: 4 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: { xs: "auto", md: "84vh" },
  color: "text.primary",
  position: "relative",
};

export const heroContentSX = {
  width: "100%",
  maxWidth: MAX_WIDTH,
  mx: "auto",
};

export const heroGreetingSX = {
  color: "text.secondary",
  fontWeight: 500,
  fontSize: { xs: "0.98rem", md: "1.05rem" },
  letterSpacing: "-0.005em",
};

export const heroTitleSX = {
  fontWeight: 600,
  fontSize: { xs: "2.5rem", sm: "3.4rem", md: "4.4rem" },
  lineHeight: { xs: 1.08, md: 1.04 },
  letterSpacing: "-0.04em",
  color: "text.primary",
  maxWidth: 920,
  mb: { xs: 3, md: 3.5 },
};

export const leadSX = {
  color: "text.secondary",
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  maxWidth: 680,
  lineHeight: 1.55,
  letterSpacing: "-0.008em",
  mb: { xs: 4.5, md: 5 },
};

export const heroActionsSX = {
  width: "100%",
};

export const heroButtonSX = {
  width: { xs: "100%", sm: "auto" },
  minWidth: 150,
  py: 1.15,
  px: 2.5,
  fontWeight: 500,
  fontSize: "0.98rem",
};

export const titleSX = sectionTitleSX;

// Generic content card: hairline border, flat surface, restrained hover.
export const cardSX = {
  height: "100%",
  borderRadius: 2.5,
  p: { xs: 2.5, md: 3 },
  transition: "border-color 200ms ease, background-color 200ms ease",
  "&:hover": {
    borderColor: "text.disabled",
  },
};
