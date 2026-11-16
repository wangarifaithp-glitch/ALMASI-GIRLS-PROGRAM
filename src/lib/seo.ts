interface PageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
}

export function updatePageMetadata({
  title,
  description,
  canonicalUrl,
}: PageMetadata) {
  document.title = title;

  const descriptionTag = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (descriptionTag) {
    descriptionTag.content = description;
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    document.head.append(meta);
  }

  const canonicalTag =
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
    document.createElement("link");
  canonicalTag.rel = "canonical";
  canonicalTag.href = canonicalUrl;
  if (!canonicalTag.isConnected) {
    document.head.append(canonicalTag);
  }
}
