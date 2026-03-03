import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const link = `/blog/${post.slug}`;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <li>
      <Link href={link} className="flex flex-col md:flex-row gap-6 py-8 group">
        <div className="relative w-full aspect-video md:aspect-auto md:w-86 md:h-48 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-2">
          <h3 className="text-2xl font-medium group-hover:text-muted-foreground transition duration-300">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {post.description}
          </p>
          <div className="text-sm mt-4 bg-gray-100 text-muted-foreground w-fit rounded-full px-2 py-1">
            {post.category.name}
          </div>
          <div className="flex items-center gap-2 text-sm font-mono sr-only text-muted-foreground mt-auto">
            <time dateTime={post.publishedAt.toString()}>{formattedDate}</time>
            <span>·</span>
            <p>{post.authors[0].name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
