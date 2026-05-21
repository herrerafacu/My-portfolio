import { Stack, Typography } from "@mui/material";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Stack spacing={0.5} sx={{ mb: 2 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          color="primary"
          sx={{ fontWeight: 800, letterSpacing: 0 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1.15 }}>
        {title}
      </Typography>
    </Stack>
  );
}
