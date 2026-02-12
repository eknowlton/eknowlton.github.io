import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Web Application Development - Ethan Knowlton</title>
        <meta name="description" content="Web Application Development" />
      </Head>
      <SimpleLayout title="Web Application Development">
        <div className="mx-auto -mt-12 max-w-7xl sm:mt-0  xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <div className="mt-3">
                  <Link
                    href="/projects"
                    className="text-sm font-medium text-teal-600 hover:text-teal-500"
                  >
                    See recent development work →
                  </Link>
                </div>
                <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-200">
                  Web applications can be powerful tools for businesses to
                  streamline their operations, increase efficiency, and
                  ultimately, succeed. Here are some ways web applications can
                  help empower a business:
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-zinc-700">
                  <ul className="m-2">
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Automation</strong> Web applications can automate
                      routine tasks and processes, such as data entry,
                      record-keeping, and report generation. This can save time
                      and reduce errors, freeing up employees to focus on
                      higher-value tasks.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Collaboration</strong> Web applications can enable
                      better collaboration and communication among team members,
                      even if they&apos;re working remotely. Tools such as
                      project management systems, video conferencing, and
                      instant messaging can help teams stay connected and work
                      more efficiently.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Data analysis</strong> Web applications can help
                      businesses collect, store, and analyze data to make
                      better-informed decisions. This can include tracking sales
                      and customer behavior, analyzing website traffic, and
                      monitoring social media activity.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Customer engagement</strong> Web applications can
                      help businesses engage with their customers in new and
                      innovative ways. For example, a business could develop a
                      web-based platform for customers to make reservations or
                      place orders online, reducing wait times and increasing
                      customer satisfaction.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Scalability</strong> Web applications can be
                      designed to scale with a business as it grows. This means
                      that as demand increases, the application can handle more
                      traffic and data without sacrificing performance.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80 ">
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Global mobile advertising market
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      $139.3 billion
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Websites on the internet
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      1.8 billion
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300 dark:text-zinc-300">
                      Global e-commerce market
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      $4.28 trillion
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
