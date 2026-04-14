import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DEFAULT_SITE_URL = "https://my-portfolio-fh.vercel.app";
const OG_IMAGE_PATH = "/og-preview.png";

function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL;
  const runtimeUrl =
    typeof window !== "undefined" ? window.location.origin : DEFAULT_SITE_URL;
  return (envUrl || runtimeUrl || DEFAULT_SITE_URL).replace(/\/$/, "");
}

function setMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default function Seo() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language?.startsWith("en") ? "en" : "es";
    const siteUrl = getSiteUrl();
    const pageUrl = `${siteUrl}/`;
    const imageUrl = new URL(OG_IMAGE_PATH, pageUrl).toString();
    const title = t("seo.title");
    const description = t("seo.description");
    const ogDescription = t("seo.og_description");
    const imageAlt = t("seo.image_alt");

    document.documentElement.lang = language;
    document.title = title;
    setCanonical(pageUrl);

    setMeta("name", "description", description);
    setMeta("name", "author", "Facundo Herrera");
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", ogDescription);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", imageAlt);
    setMeta("property", "og:locale", t("seo.locale"));

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", ogDescription);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "twitter:image:alt", imageAlt);
  }, [i18n.language, t]);

  return null;
}
