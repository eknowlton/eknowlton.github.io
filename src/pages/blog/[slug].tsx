import Head from "next/head";
import Link from "next/link";

import { AuthorCard } from "@/components/AuthorCard";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { slugifyTag } from "@/lib/blog";

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(dateString),
  );
}

export default function BlogPost({
  post,
  tags,
  recentPosts,
}: {
  post: {
    slug: string;
    frontmatter: { title: string; date: string; description?: string; tags: string[] };
    contentHtml: string;
  };
  tags: { tag: string; count: number }[];
  recentPosts: { slug: string; title: string }[];
}) {
  return (
    <>
      <Head>
        <title>{post.frontmatter.title} - Ethan Knowlton</title>
        {post.frontmatter.description && (
          <meta name="description" content={post.frontmatter.description} />
        )}
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <div className="max-w-2xl">
              <Link href="/blog" className="text-sm text-teal-500">
                ← Back to blog
              </Link>
              <header className="mt-6">
                {post.frontmatter.date && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {formatDate(post.frontmatter.date)}
                  </p>
                )}
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {post.frontmatter.title}
                </h1>
                {post.frontmatter.description && (
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {post.frontmatter.description}
                  </p>
                )}
                {post.frontmatter.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <Link
                        key={`${post.slug}-${tag}`}
                        href={`/blog/tags/${slugifyTag(tag)}`}
                        className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </header>
            </div>
            <Prose
              className="mt-10"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            <AuthorCard />
          </div>
          <BlogSidebar tags={tags} recentPosts={recentPosts} />
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { getPostBySlug, getAllTags, getAllPosts } = await import(
    "@/lib/blog.server",
  );
  const post = await getPostBySlug(params.slug);
  const tags = getAllTags();
  const recentPosts = getAllPosts().slice(0, 5);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      tags: tags.map((tag) => ({ tag: tag.tag, count: tag.count })),
      recentPosts: recentPosts.map((item) => ({
        slug: item.slug,
        title: item.frontmatter.title,
      })),
    },
  };
}

export async function getStaticPaths() {
  const { getAllPosts } = await import("@/lib/blog.server");
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
