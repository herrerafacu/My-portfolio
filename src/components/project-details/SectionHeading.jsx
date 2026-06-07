import { Stack, Typography } from "@mui/material";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Stack spacing={0.75} sx={{ mb: 2 }}>
      {eyebrow && (
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em" }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
