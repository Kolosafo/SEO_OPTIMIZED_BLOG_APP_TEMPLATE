import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BookFlow, a platform that helps you absorb knowledge faster with AI-generated book summaries, key insights, and practical takeaways.",
  openGraph: {
    title: `About - ${SITE_CONFIG.title}`,
    description:
      "Learn about BookFlow, a platform that helps you absorb knowledge faster with AI-generated book summaries, key insights, and practical takeaways.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="py-14 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">About</h1>
          <p className="text-lg text-muted-foreground sr-only max-w-2xl mx-auto">
            Learn about BookFlow and our mission to make knowledge accessible to
            everyone.
          </p>
        </div>

        {/* Content */}
        <section className="space-y-6 leading-relaxed">
          <p className="text-muted-foreground">
            BookFlow helps you absorb knowledge faster with AI-generated book
            summaries, key insights, and practical takeaways. We believe that
            learning shouldn&apos;t be a chore, but a seamless part of your
            daily life.
          </p>
          <p className="text-muted-foreground">
            Our mission is to make knowledge accessible and digestible for
            everyone. In a world overflowing with information, BookFlow cuts
            through the noise to deliver the essence of the world&apos;s best
            books directly to you.
          </p>
          <p className="text-muted-foreground">
            Whether you&apos;re looking to grow your career, improve your
            relationships, or just learn something new, BookFlow is your
            companion for lifelong learning. We combine advanced AI technology
            with human-centric design to create a reading experience that is
            both efficient and enjoyable.
          </p>
        </section>
      </div>
    </div>
  );
}
