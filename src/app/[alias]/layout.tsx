import type { Metadata, ResolvingMetadata } from "next";
import getLinkData from "../utils/get-link";
import getAllAliases from "../utils/get-all-aliases";
import type { WithId, Document } from "mongodb";

type Props = {
  params: { alias: string } & WithId<Document>;
};

export async function generateStaticParams() {
  const allAliases = await getAllAliases();
  return allAliases.filter((data) => !!data.alias);
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

export async function generateMetadata(
  { params: { title, description, link } }: Props,
  resolveParent: ResolvingMetadata,
): Promise<Metadata> {
  const parent = await resolveParent;
  return {
    title: title || parent.title || "404",
    description: description || parent.description || "404",
    alternates: {
      canonical: link || parent.alternates?.canonical,
    },
    openGraph: {
      title,
      description,
      url: link || parent.openGraph?.url,
    },
  };
}
