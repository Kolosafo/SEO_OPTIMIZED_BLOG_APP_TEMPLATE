import type { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostCardProps {
  post: Post;
}

export default function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  const link = `/blog/${post.slug}`;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <article className="w-full">
      <Link href={link} className="block group">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-6">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-medium mb-4 group-hover:text-muted-foreground transition-colors">
          {post.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-4 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center gap-2 sr-only text-sm text-muted-foreground font-mono">
          <time dateTime={post.publishedAt.toString()}>{formattedDate}</time>
          <span>·</span>
          <p>{post.authors[0].name}</p>
        </div>
      </Link>
    </article>
  );
}
