import type { Metadata } from "next";

const seoMetadata: Metadata = {
  metadataBase: new URL("https://shrtm.in/"),
  title: "shrtm.in - Shorten URLs with ease",
  description:
    "Shorten your long URLs with shrtm.in and share them easily on social media. Fast, reliable, and free!",
  keywords: [],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "shrtm.in - Shorten URLs with ease",
    description:
      "Shorten your long URLs with shrtm.in and share them easily on social media. Fast, reliable, and free!",
  },
};

export default seoMetadata;
