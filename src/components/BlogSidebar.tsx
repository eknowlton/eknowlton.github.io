import Link from "next/link";

import { slugifyTag } from "@/lib/blog";

export function BlogSidebar({
  tags,
  recentPosts,
}: {
  tags: { tag: string; count?: number }[];
  recentPosts: { slug: string; title: string }[];
}) {
  return (
    <aside className="space-y-10 lg:sticky lg:top-24">
      <section className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Tags
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.length === 0 && (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              No tags yet.
            </span>
          )}
          {tags.map((tag) => (
            <Link
              key={tag.tag}
              href={`/blog/tags/${slugifyTag(tag.tag)}`}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              {tag.tag}
              {typeof tag.count === "number" && (
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  {tag.count}
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Recent posts
        </h2>
        <ul className="mt-4 space-y-3 text-sm">
          {recentPosts.length === 0 && (
            <li className="text-zinc-500 dark:text-zinc-400">No posts yet.</li>
          )}
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-zinc-700 transition hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
