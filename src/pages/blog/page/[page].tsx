import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { BlogSidebar } from "@/components/BlogSidebar";
import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { slugifyTag } from "@/lib/blog";

const POSTS_PER_PAGE = 5;

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(dateString),
  );
}

function TagPill({
  href,
  label,
  count,
}: {
  href: string;
  label: string;
  count?: number;
}) {
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

export default function BlogPage({
  posts,
  tags,
  recentPosts,
  currentPage,
  totalPages,
}: {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      description?: string;
      tags: string[];
      image?: string;
    };
  }[];
  tags: { tag: string; slug: string; count: number }[];
  recentPosts: { slug: string; title: string }[];
  currentPage: number;
  totalPages: number;
}) {
  const showPagination = totalPages > 1;

  return (
    <>
      <Head>
        <title>Blog - Page {currentPage} - Ethan Knowlton</title>
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
                  {post.frontmatter.image && (
                    <div className="mb-5 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={1200}
                        height={630}
                        className="h-auto w-full brightness-100 transition dark:brightness-75 dark:contrast-110"
                      />
                    </div>
                  )}
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
            {showPagination && (
              <nav className="mt-12 flex items-center justify-between text-sm">
                <div>
                  {currentPage < totalPages ? (
                    <Link
                      href={`/blog/page/${currentPage + 1}`}
                      className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition hover:border-zinc-300 hover:text-teal-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-teal-400"
                    >
                      ← Older posts
                    </Link>
                  ) : (
                    <span className="rounded-full border border-transparent px-4 py-2 text-zinc-400 dark:text-zinc-600">
                      ← Older posts
                    </span>
                  )}
                </div>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Page {currentPage} of {totalPages}
                </span>
                <div>
                  {currentPage > 1 ? (
                    <Link
                      href={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}
                      className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition hover:border-zinc-300 hover:text-teal-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-teal-400"
                    >
                      Newer posts →
                    </Link>
                  ) : (
                    <span className="rounded-full border border-transparent px-4 py-2 text-zinc-400 dark:text-zinc-600">
                      Newer posts →
                    </span>
                  )}
                </div>
              </nav>
            )}
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

export async function getStaticProps({ params }: { params: { page: string } }) {
  const { getAllPosts, getAllTags } = await import("@/lib/blog.server");
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Number(params.page);

  if (!Number.isFinite(currentPage) || currentPage < 2 || currentPage > totalPages) {
    return {
      notFound: true,
    };
  }

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return {
    props: {
      posts: pagePosts,
      tags: getAllTags(),
      recentPosts: allPosts.slice(0, 5).map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
      })),
      currentPage,
      totalPages,
    },
  };
}

export async function getStaticPaths() {
  const { getAllPosts } = await import("@/lib/blog.server");
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));

  const paths = Array.from({ length: totalPages }, (_, index) => index + 1)
    .filter((page) => page > 1)
    .map((page) => ({ params: { page: String(page) } }));

  return {
    paths,
    fallback: false,
  };
}
