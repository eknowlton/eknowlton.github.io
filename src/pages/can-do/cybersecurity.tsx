import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Cybersecurity - Ethan Knowlton</title>
        <meta name="description" content="Cybersecurity" />
      </Head>
      <SimpleLayout title="Cybersecurity">
        <div className="mx-auto -mt-12 max-w-7xl sm:mt-0  xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-200">
                  Cybersecurity is an increasingly relevant concern for
                  businesses due to the increased dependency on technology, the
                  sophistication of cyber attacks, the costly consequences of a
                  breach, compliance requirements, and the shift towards remote
                  work. By prioritizing cybersecurity and implementing best
                  practices for data protection, businesses can reduce the risk
                  of a breach and maintain customer trust.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-200">
                  <ul className="m-2">
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Increased Dependency on Technology</strong> In
                      today&apos;s digital age, businesses rely heavily on
                      technology to operate and conduct transactions. As a
                      result, cybercriminals have more opportunities to exploit
                      vulnerabilities and steal sensitive information.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Increased Sophistication of Cyber Attacks</strong>{' '}
                      Cybercriminals are becoming more sophisticated in their
                      methods of attack, using advanced tactics such as
                      ransomware, phishing, and social engineering to gain
                      access to systems and data. These attacks can be difficult
                      to detect and can cause significant damage to a business.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Costly Consequences of a Breach</strong> A
                      cybersecurity breach can have costly consequences for a
                      business, including financial losses, damage to
                      reputation, and legal and regulatory penalties.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Compliance Requirements</strong> Many industries
                      are subject to strict data protection and privacy
                      regulations, such as the General Data Protection
                      Regulation (GDPR) in the European Union and the California
                      Consumer Privacy Act (CCPA) in the United States.
                      Businesses must comply with these regulations to avoid
                      penalties and maintain customer trust.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Remote Workforce</strong> The COVID-19 pandemic
                      has accelerated the shift towards remote work, increasing
                      the need for secure remote access and collaboration tools.
                      Businesses must ensure that their employees are trained on
                      best practices for cybersecurity and that their remote
                      work environments are secure.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Average time to identify breach
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      280 days
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Target small busineses
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      43% of threats
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Average cost of malware attack
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      $2.6 million
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
