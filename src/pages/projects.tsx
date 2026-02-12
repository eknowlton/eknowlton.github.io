import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import JobShopWorks from "@/images/jobshop-works.png";
import BcrsV2Hero from "@/images/projects/bcrsv2-frame.png";
import BcrsV1Hero from "@/images/projects/bcrs-frame.png";

type ProjectTag = {
  label: string;
  color?: "zinc" | "red" | "purple" | "yellow" | "sky" | "emerald";
};

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  href?: string;
  tags: ProjectTag[];
};

const tagStyles: Record<NonNullable<ProjectTag["color"]>, string> = {
  zinc: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200",
  yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200",
};

const projects: Project[] = [
  {
    title: "jobshop.works",
    description:
      "A modern hiring platform built to streamline skilled-trade recruiting and team workflows.",
    image: JobShopWorks,
    href: "https://github.com/eknowlton/simpletaskmanager",
    tags: [
      { label: "Laravel 12" },
      { label: "ShadCN", color: "purple" },
      { label: "React", color: "red" },
      { label: "InertiaJS", color: "purple" },
      { label: "AI", color: "yellow" },
    ],
  },
  {
    title: "Mote BCRSv2",
    description:
      "Next-generation mobile experience for behavioral capture and reporting with a unified stack.",
    image: BcrsV2Hero,
    href: "https://visitbeaches.org",
    tags: [
      { label: "Android", color: "sky" },
      { label: "iOS", color: "zinc" },
      { label: "Web", color: "emerald" },
      { label: "React", color: "red" },
    ],
  },
  {
    title: "Mote BCRSv1",
    description:
      "Original multi-platform app suite delivering fast data capture and clinician workflows.",
    image: BcrsV1Hero,
    tags: [
      { label: "Android", color: "sky" },
      { label: "iOS", color: "zinc" },
      { label: "Web", color: "emerald" },
      { label: "Ionic", color: "purple" },
    ],
  },
];

function Tag({ label, color = "zinc" }: ProjectTag) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tagStyles[color]}`}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          className="h-auto w-full"
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <Card.Title as="h2" className="text-lg">
          {project.href ? (
            <Link href={project.href} className="text-teal-600 hover:text-teal-500">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </Card.Title>
        <Card.Description>{project.description}</Card.Description>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={`${project.title}-${tag.label}`} {...tag} />
          ))}
        </div>
        {project.href && (
          <div className="mt-6 text-sm font-medium text-teal-600">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              Visit Project →
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ethan Knowlton</title>
        <meta
          name="description"
          content="A selection of projects showcasing web, mobile, and platform work."
        />
      </Head>
      <SimpleLayout
        title="Projects that shipped"
        intro="A curated set of client and product work across web and mobile platforms."
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}
