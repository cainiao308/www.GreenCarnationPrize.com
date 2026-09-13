import type { Metadata, Viewport } from "next";
import { getAdsenseConfig, shouldShowAds } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "The Green Carnation Prize",
  description: "The Green Carnation Prize — celebrating LGBTQ writing in the UK.",
  robots: "index,follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { client } = getAdsenseConfig();
  const showAds = shouldShowAds();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type="text/css" media="all" href="/css/twentyten.css" />
        <link rel="stylesheet" type="text/css" media="all" href="/css/site.css" />
        {client ? <meta name="google-adsense-account" content={client} /> : null}
        {showAds ? (
          <script
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`}
          />
        ) : null}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
