import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageBody from "@/components/PageBody";
import { getPage, pageMetadata } from "@/lib/content";

export function generateMetadata(): Metadata {
  const page = getPage("/");
  return page ? pageMetadata(page) : {};
}

export default function HomePage() {
  const page = getPage("/");
  if (!page) notFound();
  return <PageBody page={page} />;
}
