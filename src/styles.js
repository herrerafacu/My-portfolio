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
  minHeight: "100vh",
  py: 0,
  px: { xs: 2, md: 3 },
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const titleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "clamp(1.8rem, 6vw, 2.6rem)",
    md: "clamp(2.2rem, 4.5vw, 3.2rem)",
  },
  lineHeight: 1.15,
  mb: 2,
};

export const heroTitleSX = {
  fontWeight: 800,
  fontSize: {
    xs: "clamp(2.2rem, 8vw, 3.2rem)",
    md: "clamp(3rem, 5vw, 4.2rem)",
  },
  lineHeight: 1.08,
  mb: 2,
};

export const leadSX = {
  color: "text.secondary",
  fontSize: { xs: 16, md: 18 },
  maxWidth: { xs: 680, md: 880 },
  mx: "auto",
};
