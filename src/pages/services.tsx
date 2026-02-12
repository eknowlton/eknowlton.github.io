import Head from "next/head";

import { SimpleLayout } from "@/components/SimpleLayout";
import { useState } from "react";

import Link from "next/link";

export default function Uses() {
  const [tab, setTab] = useState("technical");

  return (
    <>
      <Head>
        <title>Uses - Ethan Knowlton</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="With over 15 years experience, I can help get the job done."
        intro="With experience in web development, mobile application, development, site reliability and cybersecurity."
      >
        <div className="inline-block rounded-md p-1 shadow dark:border-zinc-700">
          <div className="block">
            <nav className="flex space-x-4" aria-label="Tabs">
              <a
                href="#"
                className={`rounded-md hover:text-zinc-800 hover:dark:text-zinc-100 ${tab == "general"
                  ? "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-300"
                  : "text-zinc-400 dark:text-zinc-600"
                  } px-4 py-2 text-sm font-medium `}
                aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  setTab("general");
                }}
              >
                General
              </a>
              <a
                href="#"
                className={`rounded-md hover:text-zinc-100 ${tab == "technical"
                  ? "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-300"
                  : "text-zinc-400 dark:text-zinc-600"
                  } px-4 py-2 text-sm font-medium  hover:text-zinc-700`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab("technical");
                }}
              >
                Technical
              </a>
            </nav>
          </div>
        </div>

        {tab == "general" && (
          <div className="mt-12 divide-y divide-zinc-200 overflow-hidden rounded-lg bg-zinc-200 shadow dark:divide-zinc-500 dark:bg-zinc-900 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            <div className="group relative rounded-tl-lg rounded-tr-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset dark:bg-zinc-800 focus-within:dark:ring-zinc-500 sm:rounded-tr-none">
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  <Link
                    href="can-do/web-applications"
                    className="focus:outline-none"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Web Applications
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Web applications can help businesses work more efficiently,
                  make better decisions, and improve the customer experience. By
                  leveraging the power of technology, businesses can gain a
                  competitive edge and achieve their goals.
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
            <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset dark:bg-zinc-800 focus-within:dark:ring-zinc-500 sm:rounded-tr-lg">
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  <Link
                    href="can-do/mobile-applications"
                    className="focus:outline-none"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Mobile Applications
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Overall, mobile applications are transforming the way
                  businesses engage with their audiences, offering new
                  opportunities for personalized communication, data collection,
                  and customer experience. By leveraging the power of mobile
                  technology, businesses can create a more engaging and
                  effective customer experience, ultimately driving growth and
                  success.
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
            <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset dark:bg-zinc-800 focus-within:dark:ring-zinc-500">
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  <Link href="can-do/websites" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Web Sites
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  A website is an essential tool for any business looking to
                  establish an online presence, build credibility, and attract
                  and retain customers. By investing in a professional-looking
                  website, businesses can improve their marketing and sales
                  efforts, establish trust with potential customers, and
                  ultimately drive growth and success.
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
            <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset dark:bg-zinc-800 focus-within:dark:ring-zinc-500">
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  <Link
                    href="can-do/cybersecurity"
                    className="focus:outline-none"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Cybersecurity
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Cybersecurity is an increasingly relevant concern for
                  businesses due to the increased dependency on technology, the
                  sophistication of cyber attacks, the costly consequences of a
                  breach, compliance requirements, and the shift towards remote
                  work. By prioritizing cybersecurity and implementing best
                  practices for data protection, businesses can reduce the risk
                  of a breach and maintain customer trust.
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        )}

        {tab == "technical" && (
          <>
            <div className="mt-12 divide-y divide-zinc-200 overflow-hidden bg-white shadow dark:divide-zinc-900 dark:bg-zinc-800 rounded-lg">
              <div className="px-4 py-6 sm:px-6 bg-zinc-200 dark:bg-zinc-700">
                <h3 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-300">
                  Software
                </h3>
              </div>
              <div className="border-t border-zinc-300 dark:border-zinc-900">
                <dl className="divide-y divide-zinc-100 dark:divide-zinc-900">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Architecture
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Software architecture is vital as it provides a structured
                      blueprint for a system&apos;s components, enabling
                      effective collaboration, quality assurance, and risk
                      mitigation. It ensures the system&apos;s scalability,
                      maintainability, and performance, reducing costs and
                      fostering competitive advantage. Additionally, it allows
                      for adaptation to changing technology landscapes, making
                      it a fundamental pillar for successful software projects,
                      guiding their development, and safeguarding their
                      long-term success.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Prgramming & Development
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Programming and development involve the creative and
                      systematic process of crafting code to transform abstract
                      ideas into functional software applications. It&apos;s an
                      art of problem-solving, where we break down complex tasks
                      into manageable steps, write code that instructs computers
                      to perform specific tasks, and continuously refine and
                      optimize our solutions. Collaboration, learning, and
                      adaptability are key, as we work in teams, embrace new
                      technologies, and navigate evolving requirements.
                      It&apos;s a dynamic and rewarding journey where we strive
                      to create efficient, reliable, and user-friendly software
                      that meets the ever-changing needs of our users.
                      <div className="mt-3">
                        <Link
                          href="/projects"
                          className="text-sm font-medium text-teal-600 hover:text-teal-500"
                        >
                          See recent development work →
                        </Link>
                      </div>
                      <div className="flex flex-grow gap-2 flex-wrap mt-4 col-span-full ">
                        {[
                          "php",
                          "laravel",
                          "javascript",
                          "typescript",
                          "react",
                          "node",
                          "golang",
                          "ruby",
                          "rails",
                        ].map((tag) => {
                          return (
                            <span
                              key={tag}
                              className={`inline-flex items-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-800 dark:bg-zinc-500 dark:text-zinc-200 px-3 py-2`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Frontend Development
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Frontend development is crucial as it serves as the
                      user&apos;s gateway to digital experiences. It focuses on
                      creating intuitive, visually appealing, and responsive
                      interfaces that enhance user engagement and satisfaction.
                      A well-designed frontend not only delivers a seamless user
                      experience but also communicates the brand&apos;s identity
                      and values. It plays a pivotal role in bridging the gap
                      between complex backend functionalities and end-users,
                      making it a key driver of a product&apos;s success and
                      adoption in today&apos;s digital landscape.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-12 divide-y divide-zinc-200 overflow-hidden bg-white shadow dark:divide-zinc-900 dark:bg-zinc-800 rounded-lg">
              <div className="px-4 py-6 sm:px-6 bg-zinc-200 dark:bg-zinc-700">
                <h3 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-300">
                  Infrastructure
                </h3>
              </div>
              <div className="border-t border-zinc-300 dark:border-zinc-900">
                <dl className="divide-y divide-zinc-100 dark:divide-zinc-900">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-contain">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Kubernetes
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Kubernetes is crucial for modern infrastructure because it
                      provides a powerful orchestration and management platform
                      for containerized applications. It enables efficient
                      scaling, automated deployment, and seamless updates,
                      ensuring high availability and resource optimization. With
                      Kubernetes, organizations can abstract away underlying
                      infrastructure complexities, making it easier to manage
                      and maintain applications across diverse environments,
                      from on-premises data centers to public and hybrid clouds.
                      This agility and flexibility are vital in meeting the
                      demands of dynamic, rapidly evolving IT landscapes, making
                      Kubernetes a linchpin for modernizing and future-proofing
                      infrastructure.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Amazon Web Services
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Cloud computing and AWS (Amazon Web Services) are
                      indispensable for today&apos;s software companies because
                      they provide scalable, cost-effective, and flexible
                      infrastructure solutions. They empower businesses to
                      quickly provision resources, allowing for rapid
                      development, testing, and deployment of software. AWS, as
                      a leading cloud provider, offers a wide range of services,
                      from computing and storage to machine learning and
                      analytics, enabling companies to leverage cutting-edge
                      technologies without the need for extensive in-house
                      hardware and expertise. Furthermore, the cloud offers
                      global reach, high availability, and disaster recovery
                      capabilities, ensuring software companies can deliver
                      their services reliably to a global customer base.
                      Ultimately, AWS and cloud computing enhance agility,
                      reduce operational overhead, and enable innovation, making
                      them essential for staying competitive in today&apos;s
                      digital landscape.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      Docker
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Docker is pivotal for software companies and developer
                      onboarding because it streamlines application packaging
                      and deployment. It provides a consistent and isolated
                      environment for applications, eliminating the &quot;it
                      works on my machine&quot; problem. Docker&apos;s
                      portability simplifies the process of moving applications
                      between different development, testing, and production
                      environments, enhancing collaboration and reducing
                      compatibility issues. It accelerates onboarding by
                      allowing developers to quickly set up development
                      environments and work on projects without complex setup
                      procedures. Moreover, Docker containers facilitate
                      microservices architecture, enabling modular and scalable
                      application development, which aligns with modern software
                      development practices, making it an essential tool for
                      software companies and seamless developer integration.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-md font-medium text-zinc-900 dark:text-zinc-200">
                      CI / CD
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-100 sm:col-span-2 sm:mt-0">
                      Continuous Integration & Continuous Deployment is
                      indispensable for software companies because it automates
                      and accelerates the software development and delivery
                      lifecycle. It enables frequent and consistent code
                      integration, automated testing, and continuous deployment
                      to production, reducing the risk of integration conflicts
                      and human errors. This results in faster release cycles,
                      quicker time-to-market, and the ability to respond rapidly
                      to customer feedback and changing market demands. CI/CD
                      also promotes collaboration among development, testing,
                      and operations teams, fostering a culture of continuous
                      improvement and innovation.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </>
        )}
      </SimpleLayout>
    </>
  );
}
