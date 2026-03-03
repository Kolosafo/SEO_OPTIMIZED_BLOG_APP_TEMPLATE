import { PageContainer } from "@/components/layout/container";
import { Prose } from "@/components/blog/prose";
import { SITE_CONFIG } from "@/constants/site";
import { getPosts, getSinglePost } from "@/lib/marble/queries";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const data = await getSinglePost(slug);
  const canonicalUrl = `https://www.getbookflow.com/blog/${slug}`;

  if (!data || !data.post) return {};

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: data.post.title,
    description: data.post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    twitter: {
      title: `${data.post.title}`,
      description: `${data.post.description || SITE_CONFIG.description}`,
      card: "summary_large_image",
      site: `${SITE_CONFIG.url}/${slug}`,
      images: [
        {
          url: data.post.coverImage,
          width: "1200",
          height: "630",
          alt: data.post.title,
        },
      ],
    },
    openGraph: {
      type: "article",
      url: canonicalUrl, 
      siteName: SITE_CONFIG.title,
      images: [
        {
          url: data.post.coverImage,
          width: "1200",
          height: "630",
          alt: data.post.title,
        },
      ],
      title: data.post.title,
      description: data.post.description,
      publishedTime: new Date(data.post.publishedAt).toISOString(),
      authors: [...data.post.authors.map((author) => author.name)],
    },
  };
}

export async function generateStaticParams() {
  const data = await getPosts();
  if (!data || !data.posts.length) return [];

  return data.posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const data = await getSinglePost(slug);
  if (!data || !data.post) return notFound();

  const formattedDate = new Date(data.post.publishedAt).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <PageContainer className="min-h-[calc(100vh-100px)] py-14 lg:py-20">
      <section className="space-y-6 lg:space-y-8 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-3xl font-medium tracking-tight lg:text-4xl">
            {data.post.title}
          </h1>
          <div className="flex items-center text-muted-foreground w-full gap-4">
            <time dateTime={data.post.publishedAt.toString()}>
              {formattedDate}
            </time>
            {/* <div className='flex items-center gap-2'>
                <Image
                src={data.post.authors[0].image}
                alt={data.post.authors[0].name}
                width={36}
                height={36}
                loading='eager'
                className='aspect-square shrink-0 size-8 rounded-full'
                />
              <p className='text-muted-foreground'>{data.post.authors[0].name}</p>
            </div> */}
          </div>
        </div>
        <div className="relative min-h-[360px] md:min-h-[400px] lg:min-h-[430px]">
          <Image
            src={data.post.coverImage}
            alt={data.post.title}
            loading="eager"
            fill
            className="object-cover size-full rounded-xl max-sm:max-h-[360px]"
          />
        </div>
        <Prose html={data.post.content} />
      </section>
    </PageContainer>
  );
}

export default Page;
