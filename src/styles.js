export const sectionSX = {
  width: "100%",
  py: { xs: 8, md: 12 },
  px: { xs: 2, md: 4 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollMarginTop: "100px",
  position: "relative",
};

export const sectionInnerSX = {
  width: "100%",
  maxWidth: 1200,
  mx: "auto",
};

export const sectionLabelSX = {
  color: "primary.main",
  fontWeight: 600,
  fontSize: { xs: "0.95rem", md: "1rem" },
  letterSpacing: "-0.01em",
  mb: 1.5,
};

export const sectionTitleSX = {
  fontWeight: 800,
  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  color: "text.primary",
  mb: 1.5,
};

export const sectionSubtitleSX = {
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  maxWidth: 640,
  lineHeight: 1.55,
  mb: { xs: 4, md: 6 },
};

export const heroSX = {
  width: "100%",
  minHeight: { xs: "100svh", md: "100vh" },
  pt: { xs: 18, md: 24 },
  pb: { xs: 8, md: 12 },
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
  color: "text.primary",
  position: "relative",
  isolation: "isolate",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate3d(-50%, 0, 0)",
    width: "70%",
    height: "65%",
    zIndex: -1,
    pointerEvents: "none",
    background:
      "radial-gradient(ellipse at center, rgba(99,102,241,0.22) 0%, transparent 70%)",
    willChange: "transform",
  },
};

export const heroContentSX = {
  width: "100%",
  maxWidth: { xs: 360, sm: 760, md: 1100 },
  minWidth: 0,
  position: "relative",
  zIndex: 1,
};

export const heroGreetingSX = {
  color: "primary.main",
  fontWeight: 500,
  fontSize: { xs: "1rem", md: "1.15rem" },
  letterSpacing: "-0.005em",
  mb: { xs: 3, md: 4 },
  opacity: 0,
  transform: "translateY(10px)",
  animation: "heroTextIn 650ms cubic-bezier(0.16, 1, 0.3, 1) 80ms forwards",
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    animation: "none",
  },
};

export const heroTitleSX = {
  fontWeight: 700,
  fontSize: {
    xs: "2.5rem",
    sm: "3.8rem",
    md: "5.2rem",
    lg: "5.8rem",
  },
  lineHeight: { xs: 1.05, md: 1.02 },
  letterSpacing: "-0.04em",
  mb: { xs: 4, md: 5 },
  width: "100%",
  maxWidth: { xs: 360, sm: 760, md: 1100 },
  mx: "auto",
  background: (theme) =>
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)"
      : "linear-gradient(180deg, #0b0b14 0%, rgba(11,11,20,0.78) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  overflowWrap: "anywhere",
  opacity: 0,
  transform: "translateY(14px)",
  animation: "heroTextIn 760ms cubic-bezier(0.16, 1, 0.3, 1) 160ms forwards",
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    animation: "none",
  },
};

export const leadSX = {
  color: "text.secondary",
  fontSize: { xs: "1.05rem", md: "1.15rem" },
  maxWidth: { xs: 360, sm: 620, md: 760 },
  width: "100%",
  mx: "auto",
  lineHeight: 1.6,
  letterSpacing: "-0.005em",
  mb: { xs: 5, md: 6 },
  opacity: 0,
  transform: "translateY(12px)",
  animation: "heroTextIn 720ms cubic-bezier(0.16, 1, 0.3, 1) 340ms forwards",
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    animation: "none",
  },
};

export const heroActionsSX = {
  width: "100%",
  opacity: 0,
  transform: "translateY(8px) scale(0.96)",
  animation: "heroCtaIn 620ms cubic-bezier(0.16, 1, 0.3, 1) 520ms forwards",
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    animation: "none",
  },
};

export const heroButtonSX = {
  width: { xs: "100%", sm: "auto" },
  minWidth: 160,
  borderRadius: 12,
  py: 1.4,
  px: 3,
  fontWeight: 600,
  fontSize: "1rem",
  transition:
    "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, border-color 200ms ease",
  "&:hover": {
    transform: "translateY(-2px)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "&:hover": { transform: "none" },
  },
};

export const titleSX = sectionTitleSX;

export const cardSX = {
  height: "100%",
  borderRadius: 4,
  p: { xs: 2.5, md: 3.5 },
  transition: "transform 300ms ease, border-color 300ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "primary.main",
  },
};
