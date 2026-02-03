import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Website Development - Ethan Knowlton</title>
        <meta name="description" content="Website Development" />
      </Head>
      <SimpleLayout title="Website Development">
        <div className="mx-auto -mt-12 max-w-7xl sm:mt-0  xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-200">
                  A website is an essential tool for any business looking to
                  establish an online presence, build credibility, and attract
                  and retain customers. By investing in a professional-looking
                  website, businesses can improve their marketing and sales
                  efforts, establish trust with potential customers, and
                  ultimately drive growth and success.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-zinc-700">
                  <ul className="m-2">
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Online Presence</strong> A website is a digital
                      storefront for your business that can be accessed 24/7
                      from anywhere in the world. Having a website enables
                      potential customers to find you online and learn more
                      about your products or services.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Credibility</strong> In today&apos;s digital age,
                      having a website is a sign of credibility and legitimacy.
                      A professional-looking website can help establish trust
                      with potential customers and make a positive first
                      impression.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Branding</strong> A website is an opportunity to
                      showcase your brand and differentiate your business from
                      competitors. You can use your website to display your
                      logo, colors, and messaging, and create a consistent brand
                      identity across all digital channels.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Marketing</strong> A website is a powerful
                      marketing tool that can be used to attract and retain
                      customers. You can use your website to showcase your
                      products or services, provide customer testimonials, and
                      share industry news and updates.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Sales</strong> A website can also serve as a sales
                      channel, allowing customers to purchase products or
                      services directly from your website. This can increase
                      revenue and streamline the sales process.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Judge credibility based on website design
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      75% of users
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Leave bad experiences
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      88% of online consumers
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Average time spent on website
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300 dark:text-zinc-300">
                      2 minutes & 17 seconds
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
