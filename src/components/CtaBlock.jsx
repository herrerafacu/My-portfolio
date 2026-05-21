import { Box, Stack, Typography, Button } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import useReveal from "../utils/useReveal.js";
import facundoPhoto from "../assets/facundo.jpg";

export default function CtaBlock() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 3 },
        textAlign: "center",
        position: "relative",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "50%",
          zIndex: -1,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        },
      }}
    >
      <Stack
        ref={ref}
        className="reveal reveal-scale"
        spacing={3.5}
        alignItems="center"
        sx={{ maxWidth: 900, mx: "auto" }}
      >
        <Box
          sx={{
            position: "relative",
            width: 72,
            height: 72,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0) 70%)",
              zIndex: -1,
              filter: "blur(2px)",
            },
          }}
        >
          <Box
            component="img"
            src={facundoPhoto}
            alt="Facundo Herrera"
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 20%",
              border: "2px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(11,11,20,0.12)",
              boxShadow: "0 10px 28px rgba(99,102,241,0.4)",
              display: "block",
            }}
          />
        </Box>

        <Typography
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.6rem" },
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)"
                : "linear-gradient(180deg, #0b0b14 0%, rgba(11,11,20,0.78) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("ctaBlock.title")}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: 600,
            lineHeight: 1.55,
          }}
        >
          {t("ctaBlock.subtitle")}
        </Typography>

        <Button
          href="#contact"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 12 / 8,
            px: 3.5,
            py: 1.4,
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {t("ctaBlock.cta")}
        </Button>
      </Stack>
    </Box>
  );
}
