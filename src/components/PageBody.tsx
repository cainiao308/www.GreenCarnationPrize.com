import type { SitePage } from "@/lib/content";

export default function PageBody({ page }: { page: SitePage }) {
  return (
    <>
      {page.extraCss ? <link rel="stylesheet" href={`/static/css/${page.extraCss}.css`} /> : null}
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
