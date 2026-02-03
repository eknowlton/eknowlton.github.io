import Head from "next/head";

import { Card } from "@/components/Card";
import { Section, SectionType } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import { ReactNode } from "react";

function ToolsSection({
  children,
  ...props
}: { children: ReactNode } & SectionType) {
  return (
    <Section {...props}>
      <ul role="list" className="grid w-full gap-6 ">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
  ...props
}: {
  title: string;
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <Card as="li" {...props}>
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ethan Knowlton</title>
        <meta
          name="description"
          content="Software, Hardware and Technology I use"
        />
      </Head>
      <SimpleLayout
        title="Software, Hardware & Technology I use"
        intro="If I could get paid to configure developer computers, I would."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="2022 Thinkpad X1 Carbon Extreme">
              Ive used Thinkpad laptops since I built my first website.
              I&apos;ll always recommend a thinkpad for its reliability and
              durability.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VIM">
              I&apos;m going to say it, VIM rocks. Its fast and simple and once
              you use it, its hard to lose it.
            </Tool>
            <Tool title="VSCode">
              VSCode is fast and lightweight so I try to use it when Im not in
              VIM.
            </Tool>
            <Tool title="Alacritty">
              I&apos;m a big fan of rust, and I like to use Alacritty terminal.
            </Tool>
            <Tool title="ASDF">
              Writing software with many different languages requires many
              different versions to be installed. If its not containerized then
              its installed with ASDF.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I&apos;m not much of a designer but when I do I love Figma.
            </Tool>
            <Tool title="Inkscape">
              This is a great opensource software for drawing vectors.
            </Tool>
            <Tool title="GIMP">
              Afte switching a linux daily driver, I havent used Photoshop in a
              long time and GIMP is my go-to alternative.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Servers">
            <Tool title="Proxmox">
              I&apos;ve been using Proxmox on three Xeon servers in my basement
              for a while now and its great.
            </Tool>
            <Tool title="Kubernetes">
              Some would say its overkill, but I manage most of my self hosted
              services using a four node ( 3 vm, 1 physical ) Kubernetes cluster
              I manage my self.
            </Tool>
            <Tool title="Docker">
              Great way to streamline development. A developer can pull a
              containerized repository and start building in minutes.
            </Tool>
            <Tool title="AWS">
              If Im not building in basement datacenter, I&apos;m building in
              AWS.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Joplin">
              For taking notes and keep track of projects.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Languages">
            <Tool title="PHP">Die hard PHP / Laravel programmer.</Tool>
            <Tool title="Ruby">
              Hard to not love such a beautiful language.
            </Tool>
            <Tool title="Typescript">
              My roots lacked types, but I&apos;ve grown to love them.
            </Tool>
            <Tool title="Go">Golang has grown on me.</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
