import { Prose } from "@/components/blog/prose";
import { PageContainer } from "@/components/layout/container";
import { getSinglePost } from "@/lib/marble/queries";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Book flow's privacy policy",
  openGraph: {
    title: "Privacy Policy",
    description: "Book flow's privacy policy",
  },
};

const PrivacyPage = async () => {
  const data = await getSinglePost("privacy");
  if (!data || !data?.post) return notFound();

  return (
    <div className="relative overflow-y-hidden">
      <div className="item-center flex justify-center py-4 md:py-6 lg:py-8">
        <Link href="/">
          <p className="font-semibold text-xl font-mono">BookFlow</p>
        </Link>
      </div>
      <PageContainer className="flex min-h-dvh flex-col items-center pt-10 pb-24 md:pt-14 lg:pb-40">
        <section className="mb-10 space-y-2">
          <h1 className="text-center text-3xl font-medium lg:text-4xl">
            {data.post.title}
          </h1>
          <p className="text-center text-sm text-gray-500">
            Last updated:{" "}
            {new Date(data.post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </section>
        <section>
          <Prose html={data.post.content} />
        </section>
      </PageContainer>
    </div>
  );
};

export default PrivacyPage;
