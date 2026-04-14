export const sectionSX = {
  width: "100%",
  py: { xs: 5, md: 7 },
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollMarginTop: "80px",
};

export const heroSX = {
  width: "100%",
  minHeight: { xs: "calc(100svh - 57px)", md: "calc(100vh - 65px)" },
  py: { xs: 6, md: 8 },
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
  color: "text.primary",
  position: "relative",
  isolation: "isolate",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: -1,
    pointerEvents: "none",
    opacity: 0.62,
    background:
      "linear-gradient(120deg, rgba(25,118,210,0.12) 0%, rgba(11,18,32,0) 34%, rgba(0,188,212,0.08) 58%, rgba(11,18,32,0) 100%)",
    backgroundSize: "220% 220%",
    animation: "heroGradientShift 18s ease-in-out infinite",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": {
      animation: "none",
    },
  },
};

export const heroContentSX = {
  width: "100%",
  maxWidth: { xs: 300, sm: 760, md: 1180 },
  minWidth: 0,
  position: "relative",
  zIndex: 1,
};

export const heroBadgeSX = {
  fontWeight: 700,
  opacity: 0,
  transform: "translateY(10px)",
  animation: "heroTextIn 650ms cubic-bezier(0.16, 1, 0.3, 1) 80ms forwards",
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    animation: "none",
  },
};

export const titleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "2rem",
    sm: "2.35rem",
    md: "3.2rem",
  },
  lineHeight: 1.15,
  mb: 2,
  color: "text.primary",
};

export const heroTitleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "1.8rem",
    sm: "3rem",
    md: "4.2rem",
  },
  lineHeight: 1.08,
  mb: 2,
  width: "100%",
  maxWidth: { xs: 300, sm: 760, md: 1180 },
  mx: "auto",
  color: "text.primary",
  overflowWrap: "anywhere",
  hyphens: "auto",
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
  fontSize: { xs: 16, md: 18 },
  maxWidth: { xs: 300, sm: 680, md: 880 },
  width: "100%",
  mx: "auto",
  overflowWrap: "break-word",
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
  maxWidth: 240,
  borderRadius: "8px",
  transition:
    "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, border-color 200ms ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 14px 32px rgba(25,118,210,0.28)",
  },
  "&:active": {
    transform: "translateY(0) scale(0.97)",
  },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "box-shadow 200ms ease, background-color 200ms ease",
    "&:hover": {
      transform: "none",
    },
    "&:active": {
      transform: "none",
    },
  },
};
