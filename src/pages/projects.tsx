import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import { SimpleLayout } from "@/components/SimpleLayout";
import JobShopWorks from "@/images/jobshop-works.png";
import BcrsV2Hero from "@/images/projects/bcrsv2-frame.png";
import BcrsV1Hero from "@/images/projects/bcrs-frame.png";

function ProjectCard({
  image,
  title,
  tags,
  url,
}: {
  image: StaticImageData;
  title: string;
  url?: string;
  tags: {
    tag: string;
    color?: string;
  }[];
}) {
  return (
    <li className="col-span-2 flex flex-col">
      <div className="justify-content flex flex-grow">
        <Image alt={title} src={image} className="m-auto justify-center" />
      </div>
      <div className="flex flex-col p-2">
        <span className="flex-grow text-xl font-bold dark:text-gray-100">
          {title}
        </span>
        {url && (
          <div>
            <a href={url}>{url}</a>
          </div>
        )}
        <div className="flex flex-grow justify-end gap-2 text-right">
          {tags &&
            tags?.length &&
            tags.map(({ tag, color = "zinc" }) => {
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center rounded-full bg-${color}-200 px-2.5 py-0.5 text-xs font-medium text-${color}-800 dark:bg-${color}-800 dark:text-${color}-200`}
                >
                  {tag}
                </span>
              );
            })}
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ethan Knowlton</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="What I've Done"
        intro="I’ve worked a bunch of fun projects over the years but here just a few examples."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          <ProjectCard
            image={JobShopWorks}
            title={"jobshop.works"}
            url="https://jobshop.works"
            tags={[
              {
                tag: "Laravel 12",
              },
              {
                tag: "ShadCN",
              },
              {
                tag: "React",
                color: "red",
              },
              {
                tag: "InertiaJS",
                color: "purple",
              },
              {
                tag: "AI",
                color: "yellow",
              },
            ]}
          />
          <ProjectCard
            image={BcrsV2Hero}
            title={"Mote BCRSv2"}
            tags={[
              {
                tag: "Android",
                color: "sky",
              },
              {
                tag: "iOS",
              },
              {
                tag: "Web",
              },
              {
                tag: "React",
                color: "red",
              },
            ]}
          />
          <ProjectCard
            image={BcrsV1Hero}
            title={"Mote BCRSv1"}
            tags={[
              {
                tag: "Android",
                color: "sky",
              },
              {
                tag: "iOS",
              },
              {
                tag: "Web",
              },
              {
                tag: "Ionic",
              },
            ]}
          />
        </ul>
      </SimpleLayout>
    </>
  );
}
