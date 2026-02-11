import Head from "next/head";
import Link from "next/link";

import { BlogSidebar } from "@/components/BlogSidebar";
import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { slugifyTag } from "@/lib/blog";

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(dateString),
  );
}

export default function BlogTagPage({
  tag,
  posts,
  tags,
  recentPosts,
}: {
  tag: { label: string; slug: string };
  posts: { slug: string; frontmatter: { title: string; date: string; description?: string; tags: string[] } }[];
  tags: { tag: string; count: number }[];
  recentPosts: { slug: string; title: string }[];
}) {
  return (
    <>
      <Head>
        <title>{tag.label} - Blog - Ethan Knowlton</title>
        <meta name="description" content={`Posts tagged with ${tag.label}.`} />
      </Head>
      <SimpleLayout title={tag.label} intro={`Posts tagged with ${tag.label}.`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <div className="mb-8">
              <Link href="/blog/tags" className="text-sm text-teal-500">
                ← All tags
              </Link>
            </div>
            <div className="space-y-16">
              {posts.map((post) => (
                <Card key={post.slug} className="group">
                  <Card.Title href={`/blog/${post.slug}`}>
                    {post.frontmatter.title}
                  </Card.Title>
                  {post.frontmatter.date && (
                    <Card.Eyebrow
                      as="time"
                      dateTime={post.frontmatter.date}
                      className="mt-2"
                    >
                      {formatDate(post.frontmatter.date)}
                    </Card.Eyebrow>
                  )}
                  {post.frontmatter.description && (
                    <Card.Description>{post.frontmatter.description}</Card.Description>
                  )}
                  {post.frontmatter.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((postTag) => (
                        <Link
                          key={`${post.slug}-${postTag}`}
                          href={`/blog/tags/${slugifyTag(postTag)}`}
                          className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                        >
                          {postTag}
                        </Link>
                      ))}
                    </div>
                  )}
                  <Card.Cta>Read article</Card.Cta>
                </Card>
              ))}
            </div>
          </div>
          <BlogSidebar tags={tags} recentPosts={recentPosts} />
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const { getAllTags, getPostsByTag, getAllPosts } = await import(
    "@/lib/blog.server",
  );
  const tags = getAllTags();
  const recentPosts = getAllPosts().slice(0, 5);
  const currentTag = tags.find((tag) => tag.slug === params.tag);

  if (!currentTag) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag: { label: currentTag.tag, slug: currentTag.slug },
      posts: getPostsByTag(params.tag),
      tags: tags.map((item) => ({ tag: item.tag, count: item.count })),
      recentPosts: recentPosts.map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
      })),
    },
  };
}

export async function getStaticPaths() {
  const { getAllTags } = await import("@/lib/blog.server");
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => ({ params: { tag: tag.slug } })),
    fallback: false,
  };
}
