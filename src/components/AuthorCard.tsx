import Image from "next/image";
import clsx from "clsx";

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/SocialIcons";
import { SocialLink } from "@/components/SocialLink";
import avatarImage from "@/images/avatar.jpg";

const author = {
  name: "Ethan Knowlton",
  title: "Software engineer & security enthusiast",
  bio: "Building secure, reliable systems and sharing practical lessons from the field.",
  links: {
    twitter: "https://twitter.com/p4cmanus3r",
    github: "https://github.com/eknowlton/",
    linkedin: "https://www.linkedin.com/in/eknowlton/",
  },
};

export function AuthorCard({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        "mt-12 flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 sm:flex-row",
        className,
      )}
    >
      <div className="flex items-start">
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={avatarImage}
            alt={author.name}
            fill
            sizes="4rem"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {author.name}
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {author.title}
        </p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          {author.bio}
        </p>
        <div className="mt-4 flex gap-3">
          <SocialLink href={author.links.twitter} aria-label="Twitter" icon={TwitterIcon} />
          <SocialLink href={author.links.github} aria-label="GitHub" icon={GitHubIcon} />
          <SocialLink href={author.links.linkedin} aria-label="LinkedIn" icon={LinkedInIcon} />
        </div>
      </div>
    </section>
  );
}
