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
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.05fr" },
            gap: { xs: 5, md: 9 },
            alignItems: "start",
          }}
        >
          <Stack
            spacing={3}
            ref={leftRef}
            className="reveal"
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

            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#22a06b",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {t("contactSection.availability")}
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.62,
                maxWidth: 440,
              }}
            >
              {t("contactSection.lead")}
            </Typography>

            <Stack spacing={1.5} sx={{ pt: 1 }}>
              <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                {t("contactSection.find_me")}
              </Typography>
              <Stack direction="row" spacing={1.25}>
                <SocialButton
                  href="https://www.linkedin.com/in/facundo-herrera-289a111b9/"
                  label="LinkedIn"
                >
                  <LinkedInIcon fontSize="small" />
                </SocialButton>
                <SocialButton
                  href="https://github.com/herrerafacu"
                  label="GitHub"
                >
                  <GitHubIcon fontSize="small" />
                </SocialButton>
                <SocialButton href={`mailto:${EMAIL}`} label="Email">
                  <MailIcon fontSize="small" />
                </SocialButton>
              </Stack>
            </Stack>
          </Stack>

          <Card
            ref={rightRef}
            className="reveal"
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 2.5, textAlign: "left" }}
          >
            <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "1.15rem" }}>
              {t("contactSection.form_title")}
            </Typography>
            <Typography
              sx={{ color: "text.secondary", fontSize: "0.92rem", mb: 3 }}
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
                size="small"
                placeholder={t("contactSection.form_name")}
                value={form.name}
                onChange={handleChange("name")}
                required
              />
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder={t("contactSection.form_email")}
                value={form.email}
                onChange={handleChange("email")}
                required
              />
              <TextField
                fullWidth
                size="small"
                placeholder={t("contactSection.form_subject")}
                value={form.subject}
                onChange={handleChange("subject")}
              />
              <TextField
                fullWidth
                size="small"
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
                sx={{ minWidth: 168, fontWeight: 500, whiteSpace: "nowrap" }}
              >
                {t("contactSection.form_submit")}
              </Button>
              <Typography sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                {t("contactSection.form_or_email")}{" "}
                <Box
                  component="a"
                  href={`mailto:${EMAIL}`}
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: 500,
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
        width: 42,
        height: 42,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        color: "text.secondary",
        "&:hover": {
          color: "text.primary",
          borderColor: "text.disabled",
          bgcolor: "transparent",
        },
      }}
    >
      {children}
    </IconButton>
  );
}
