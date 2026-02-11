export type BlogFrontmatter = {
  title: string;
  date: string;
  description?: string;
  tags: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
};

export type BlogPostWithContent = BlogPost & {
  contentHtml: string;
};

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
