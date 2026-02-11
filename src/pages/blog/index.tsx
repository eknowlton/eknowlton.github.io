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

function TagPill({ href, label, count }: { href: string; label: string; count?: number }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
    >
      {label}
      {typeof count === "number" && (
        <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-[10px] text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          {count}
        </span>
      )}
    </Link>
  );
}

export default function BlogIndex({
  posts,
  tags,
}: {
  posts: { slug: string; frontmatter: { title: string; date: string; description?: string; tags: string[] } }[];
  tags: { tag: string; slug: string; count: number }[];
}) {
  const recentPosts = posts.slice(0, 5).map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
  }));

  return (
    <>
      <Head>
        <title>Blog - Ethan Knowlton</title>
        <meta
          name="description"
          content="Notes on software engineering, security, and building products."
        />
      </Head>
      <SimpleLayout
        title="Writing and notes"
        intro="Thoughts on software engineering, cybersecurity, and shipping resilient systems."
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
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
                      {post.frontmatter.tags.map((tag) => (
                        <TagPill
                          key={`${post.slug}-${tag}`}
                          href={`/blog/tags/${slugifyTag(tag)}`}
                          label={tag}
                        />
                      ))}
                    </div>
                  )}
                  <Card.Cta>Read article</Card.Cta>
                </Card>
              ))}
            </div>
          </div>
          <BlogSidebar
            tags={tags.map((tag) => ({ tag: tag.tag, count: tag.count }))}
            recentPosts={recentPosts}
          />
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  const { getAllPosts, getAllTags } = await import("@/lib/blog.server");

  return {
    props: {
      posts: getAllPosts(),
      tags: getAllTags(),
    },
  };
}
