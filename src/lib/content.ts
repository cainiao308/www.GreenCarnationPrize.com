import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

export type ExtraCss = "article" | "static" | null;

export type SitePage = {
  title: string;
  description: string;
  robots: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  extraCss: ExtraCss;
  html: string;
};

let cache: Record<string, SitePage> | null = null;

function loadPages() {
  if (!cache) {
    const file = join(process.cwd(), "src/data/pages.json");
    cache = JSON.parse(readFileSync(file, "utf8")) as Record<string, SitePage>;
  }
  return cache;
}

export function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function getPage(path: string) {
  return loadPages()[normalizePath(path)] ?? null;
}

export function getAllPaths() {
  return Object.keys(loadPages());
}

export function pageMetadata(page: SitePage): Metadata {
  const metadata: Metadata = {
    title: page.title,
    description: page.description || undefined,
    robots: page.robots || undefined,
    alternates: page.canonical ? { canonical: page.canonical } : undefined,
  };

  if (page.ogTitle || page.ogDescription || page.ogUrl) {
    metadata.openGraph = {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      type: page.ogType === "article" ? "article" : "website",
      url: page.ogUrl || page.canonical || undefined,
    };
  }

  return metadata;
}
