import { Box, Stack, Typography, Chip } from "@mui/material";
import { sectionSX, titleSX } from "../styles";
import { Code as CodeIcon } from "@mui/icons-material";

export default function Skills({ skills }) {
  return (
    <Box id="skills" sx={{ ...sectionSX }}>
      <Stack spacing={2} sx={{ width: "100%" }} alignItems="center">
        <Typography sx={titleSX}>Stack y herramientas</Typography>
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
      </Stack>
    </Box>
  );
}
