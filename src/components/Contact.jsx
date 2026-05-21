import { useState } from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import {
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import {
  sectionSX,
  sectionInnerSX,
  sectionLabelSX,
  sectionTitleSX,
} from "../styles";
import { useTranslation } from "react-i18next";
import useReveal from "../utils/useReveal.js";

const EMAIL = "facu.h_007@hotmail.com";

export default function Contact() {
  const { t } = useTranslation();
  const leftRef = useReveal();
  const rightRef = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Consulta de ${form.name || "portafolio"}`
    );
    const bodyLines = [
      form.name && `Nombre: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.budget && `Presupuesto: ${form.budget}`,
      form.message && `\n${form.message}`,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Box id="contact" component="section" sx={sectionSX}>
      <Box sx={sectionInnerSX}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Stack
            spacing={3}
            ref={leftRef}
            className="reveal reveal-left"
            sx={{ textAlign: "left" }}
          >
            <Stack spacing={0}>
              <Typography sx={sectionLabelSX}>
                {t("contactSection.label")}
              </Typography>
              <Typography component="h2" sx={sectionTitleSX}>
                {t("contactSection.title")}
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                maxWidth: 460,
              }}
            >
              {t("contactSection.lead")}
            </Typography>

            <Stack spacing={1.5} sx={{ pt: 1 }}>
              <Typography
                sx={{ color: "text.secondary", fontSize: "0.95rem" }}
              >
                {t("contactSection.find_me")}
              </Typography>
              <Stack direction="row" spacing={1.25}>
                <SocialButton
                  href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
                  label="LinkedIn"
                >
                  <LinkedInIcon />
                </SocialButton>
                <SocialButton
                  href="https://github.com/herrerafacu"
                  label="GitHub"
                >
                  <GitHubIcon />
                </SocialButton>
                <SocialButton href={`mailto:${EMAIL}`} label="Email">
                  <MailIcon />
                </SocialButton>
              </Stack>
            </Stack>
          </Stack>

          <Card
            ref={rightRef}
            className="reveal reveal-right"
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 0.5, fontSize: "1.25rem" }}
            >
              {t("contactSection.form_title")}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.95rem",
                mb: 3,
              }}
            >
              {t("contactSection.form_lead")}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.75,
              }}
            >
              <TextField
                fullWidth
                size="medium"
                placeholder={t("contactSection.form_name")}
                value={form.name}
                onChange={handleChange("name")}
                required
              />
              <TextField
                fullWidth
                type="email"
                placeholder={t("contactSection.form_email")}
                value={form.email}
                onChange={handleChange("email")}
                required
              />
              <TextField
                fullWidth
                placeholder={t("contactSection.form_subject")}
                value={form.subject}
                onChange={handleChange("subject")}
              />
              <TextField
                fullWidth
                placeholder={t("contactSection.form_budget")}
                value={form.budget}
                onChange={handleChange("budget")}
              />
            </Box>

            <TextField
              fullWidth
              multiline
              minRows={4}
              placeholder={t("contactSection.form_message")}
              value={form.message}
              onChange={handleChange("message")}
              sx={{ mt: 1.75 }}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent="space-between"
              sx={{ mt: 3 }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  borderRadius: 12 / 8,
                  minWidth: 160,
                  fontWeight: 600,
                }}
              >
                {t("contactSection.form_submit")}
              </Button>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.88rem",
                }}
              >
                {t("contactSection.form_or_email")}{" "}
                <Box
                  component="a"
                  href={`mailto:${EMAIL}`}
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {EMAIL}
                </Box>
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <IconButton
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      sx={{
        width: 44,
        height: 44,
        borderRadius: 2.5,
        border: "1px solid",
        borderColor: "divider",
        color: "text.primary",
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.03)"
            : "rgba(11,11,20,0.03)",
        "&:hover": {
          color: "primary.main",
          borderColor: "primary.main",
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(99,102,241,0.08)"
              : "rgba(99,102,241,0.06)",
        },
      }}
    >
      {children}
    </IconButton>
  );
}
