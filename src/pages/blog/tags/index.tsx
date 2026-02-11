import Head from "next/head";
import Link from "next/link";

import { BlogSidebar } from "@/components/BlogSidebar";
import { SimpleLayout } from "@/components/SimpleLayout";

export default function BlogTagsIndex({
  tags,
  recentPosts,
}: {
  tags: { tag: string; slug: string; count: number }[];
  recentPosts: { slug: string; title: string }[];
}) {
  return (
    <>
      <Head>
        <title>Tags - Ethan Knowlton</title>
        <meta name="description" content="Browse blog posts by tag." />
      </Head>
      <SimpleLayout title="Tags" intro="Explore posts by topic and discipline.">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tags/${tag.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              >
                {tag.tag}
                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  {tag.count}
                </span>
              </Link>
            ))}
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
  const { getAllTags, getAllPosts } = await import("@/lib/blog.server");
  const recentPosts = getAllPosts().slice(0, 5);

  return {
    props: {
      tags: getAllTags(),
      recentPosts: recentPosts.map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
      })),
    },
  };
}
