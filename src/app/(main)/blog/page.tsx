import { PageContainer } from "@/components/layout/container";
import PostCard from "@/components/blog/post-card";
import FeaturedPostCard from "@/components/blog/featured-post-card";
import { getPosts } from "@/lib/marble/queries";

export default async function BlogPage() {
  const data = await getPosts();
  if (!data || !data.posts) return <div>No posts yet</div>;

  // Find featured post (you can add a 'featured' field to Post type later)
  // For now, we'll just use the first post as featured if it exists
  const featuredPost = data.posts[0];
  const regularPosts = data.posts.slice(1);

  return (
    <div className="py-12">
      <PageContainer className="py-14 xl:max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex justify-between">
          <h1 className="text-4xl md:text-5xl mb-2">Blog</h1>
          <p className="text-muted-foreground self-end">
            The latest from BookFlow.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <FeaturedPostCard post={featuredPost} />
          </div>
        )}

        {/* Recent Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-medium mb-8">Recent Posts</h2>
            <ul className="max-w-4xl">
              {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </ul>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
