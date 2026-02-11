import Head from "next/head";

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/SocialIcons";
import { SimpleLayout } from "../components/SimpleLayout";
import { SocialLink } from "../components/SocialLink";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ethan Knowlton</title>
        <meta name="description" content="Contact the Watertown Dev" />
      </Head>
      <SimpleLayout
        title="Reach Out to Ethan"
        intro="If you have some questions, or just would like to have a conversation, here is how you can reach out to me."
      >
        <dl className="mt-10 space-y-4 text-base leading-7 text-zinc-600">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <svg
                className="h-7 w-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </dt>
            <dd>
              <a
                className="hover:text-zinc-900 dark:text-zinc-300"
                href="tel:+1 (315) 775-8426"
              >
                (315) 775-8426
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <svg
                className="h-7 w-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </dt>
            <dd>
              <a
                className="hover:text-zinc-900 dark:text-zinc-300"
                href="mailto:eknowlton@gmail.com"
              >
                eknowlton@gmail.com
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex gap-6">
          <SocialLink
            href="https://twitter.com/p4cmanus3r"
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />
          <SocialLink
            href="https://github.com/eknowlton/"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://www.linkedin.com/in/eknowlton/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </SimpleLayout>
    </>
  );
}
