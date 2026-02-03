import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";

import gentuxLogo from "@/images/logos/generation-tux-logo.svg";
import kimmelAssociatesLogo from "@/images/logos/kimmel-associates-logo.png";
import knowbe4Logo from "@/images/logos/knowbe4-logo.png";
import dmsLogo from "@/images/logos/dms-logo.png";
import { ReactNode, SVGProps } from "react";

type SocialLink = {
  className?: string;
  href: string;
  children: ReactNode;
  icon: React.ElementType;
};

function SocialLink({ className, href, children, icon: Icon }: SocialLink) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

type Resume = {
  company: string;
  title: string;
  logo: any;
  start: string;
  end: string;
}[];

function Resume() {
  let resume: Resume = [
    {
      company: "Generation Tux",
      title: "Principal Software Engineer",
      logo: gentuxLogo,
      start: "Nov 2021",
      end: "Present",
    },
    {
      company: "Kimmel & Associates",
      title: "Software Engineer",
      logo: kimmelAssociatesLogo,
      start: "Mar 2018",
      end: "Nov 2021",
    },
    {
      company: "KnowBe4",
      title: "Software Engineer",
      logo: knowbe4Logo,
      start: "Jul 2017",
      end: "Jan 2018",
    },
    {
      company: "Digital Media Solutions",
      title: "Senior Developer",
      logo: dmsLogo,
      start: "Jun 2014",
      end: "May 2017",
    },
  ];

  return (
    <div className="mt-20 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Employers</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ethan Knowlton</title>
        <meta
          name="description"
          content="Ethan Knowlton is a seasoned software engineer with over a decade of experience in the information technology industry."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I live in New York, and I love building things.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Ethan Knowlton is a seasoned software engineer with over a
                decade of experience in the technology industry. He is currently
                working as a Principal Software Engineer at Generation Tux,
                where he is responsible for developing and maintaining
                high-performance software solutions that meet the needs of the
                industry along side a great team of developers.
              </p>
              <p>
                Ethan&apos;s expertise in software engineering has been honed
                through his previous roles at several leading technology
                companies, including Kimmel & Associates and KnowBe4, Inc. In
                these positions, he was responsible for developing software
                solutions that ranged from enterprise applications to mobile
                applications.
              </p>
              <p>
                Throughout his career, Ethan has been recognized for his ability
                to solve complex problems and deliver high-quality software
                solutions that meet the needs of clients and end-users alike. He
                is also passionate about staying up-to-date with the latest
                technologies and programming languages, and is an active member
                of several professional organizations, including the Linux
                Foundation and the Institute of Electrical and Electronics
                Engineers (IEEE).
              </p>
              <p>
                He is committed to delivering innovative software solutions that
                help businesses and organizations achieve their goals and is
                dedicated to advancing the field of software engineering through
                his work and participation in professional organizations.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/p4cmanus3r"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/eknowlton/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/eknowlton/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ethan@knowlton.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ethan@knowlton.dev
              </SocialLink>
              <SocialLink
                href="mailto:ethan@watertowndev.com"
                icon={MailIcon}
                className="mt-4"
              >
                ethan@watertowndev.com
              </SocialLink>
            </ul>
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
