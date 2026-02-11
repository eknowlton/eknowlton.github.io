import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import { BlogFrontmatter, BlogPost, BlogPostWithContent, slugifyTag } from "@/lib/blog";

const blogDirectory = path.join(process.cwd(), "content", "blog");

function ensureArray(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map(String);
  }
  if (typeof value === "string") {
    return value.split(",").map((tag) => tag.trim()).filter(Boolean);
  }
  return [];
}

function normalizeFrontmatter(data: Record<string, unknown>, slug: string): BlogFrontmatter {
  return {
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    description: typeof data.description === "string" ? data.description : undefined,
    tags: ensureArray(data.tags),
    image: typeof data.image === "string" ? data.image : undefined,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];
  const fileNames = (fs.readdirSync(blogDirectory) as string[]).filter((file) =>
    file.endsWith(".md"),
  );

  const posts = fileNames.map((fileName: string) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: normalizeFrontmatter(data, slug),
    };
  });

  return posts.sort((a: BlogPost, b: BlogPost) => {
    const aTime = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const bTime = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return bTime - aTime;
  });
}

export function getAllTags(): { tag: string; count: number; slug: string }[] {
  const tagCounts = new Map<string, number>();

  getAllPosts().forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      count,
      slug: slugifyTag(tag),
    }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.tags.some((tag) => slugifyTag(tag) === tagSlug),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  return {
    slug,
    frontmatter: normalizeFrontmatter(data, slug),
    contentHtml: processedContent.toString(),
  };
}
