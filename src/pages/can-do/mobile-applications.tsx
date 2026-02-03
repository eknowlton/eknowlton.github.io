import Head from "next/head";

import { SimpleLayout } from "@/components/SimpleLayout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mobile Application Development - Ethan Knowlton</title>
        <meta name="description" content="Mobile Application Development" />
      </Head>
      <SimpleLayout title="Mobile Application Development">
        <div className="mx-auto -mt-12 max-w-7xl sm:mt-0  xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-200">
                  Mobile applications are transforming the way businesses engage
                  with their audiences in a number of ways. Here are some ways
                  mobile applications are changing business engagement:
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-zinc-700">
                  <ul className="m-2">
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Improved Customer Experience</strong> Mobile
                      applications provide an opportunity for businesses to
                      offer a more personalized and convenient experience to
                      their customers. Mobile apps can be tailored to specific
                      customer preferences, such as location, purchase history,
                      and behavior, to provide relevant and targeted content.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Increased Accessibility</strong> Mobile
                      applications are accessible anytime, anywhere, making it
                      easier for customers to engage with businesses on the go.
                      Customers can access information, products, and services
                      from their mobile devices, without the need for a desktop
                      computer or physical location.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Real-time Communication</strong> Mobile
                      applications enable real-time communication between
                      businesses and their customers. This can include push
                      notifications, in-app messaging, and chatbots, allowing
                      businesses to respond to customer inquiries and feedback
                      quickly and efficiently.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Data Collection</strong> Mobile applications can
                      collect valuable data on customer behavior and
                      preferences, allowing businesses to gain insights into
                      their target audience. This data can be used to improve
                      products and services, personalize marketing campaigns,
                      and make more informed business decisions.
                    </li>
                    <li className="my-6 dark:text-zinc-300">
                      <strong>Competitive Advantage</strong> Mobile applications
                      can provide a competitive advantage for businesses that
                      adopt them early on. By offering a mobile app, businesses
                      can differentiate themselves from their competitors and
                      attract a younger, tech-savvy audience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      2021 Smartphone users
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      3.8 Billion
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Global mobile advertising market
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      $58.6 billion
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      Average daily time using mobile apps
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300">
                      4.2 Hours
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
