export function asRecord(value) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value
    : {};
}

export function localizeTechStack(items = [], localizedItems = {}) {
  const translations = asRecord(localizedItems);

  return items
    .map((item) => {
      if (typeof item === "string") return translations[item] ?? item;

      return translations[item.id] ?? item.label ?? item.title ?? item.id;
    })
    .filter(Boolean);
}

export function localizeStructuredItems(items = [], localizedItems = {}) {
  const translations = asRecord(localizedItems);

  return items.map((item, index) => {
    const id = typeof item === "string" ? item : item.id ?? `${index}`;
    const localized = translations[id];

    if (typeof item === "string") {
      if (typeof localized === "string") return { id, text: localized };
      return Object.keys(asRecord(localized)).length
        ? { id, ...asRecord(localized) }
        : { id, text: item };
    }

    if (typeof localized === "string") return { ...item, text: localized };
    return { ...item, ...asRecord(localized) };
  });
}

export function localizeDeployment(deployment, localizedDeployment = {}) {
  const base = asRecord(deployment);
  const localized = asRecord(localizedDeployment);

  if (!Object.keys(base).length) return null;

  return {
    ...base,
    ...localized,
    items: localizeStructuredItems(base.items, localized.items),
  };
}

export function hasProjectDetails(project) {
  return Boolean(
    project.screenshots?.length ||
      project.gallery?.length ||
      project.skills?.length ||
      project.highlights?.length ||
      project.security?.length ||
      project.deployment?.items?.length ||
      project.liveUrl
  );
}
