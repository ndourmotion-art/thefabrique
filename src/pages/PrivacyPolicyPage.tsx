import { useEffect } from "react";
import { Footer } from "@/components/clever/Footer";
import { Nav } from "@/components/clever/Nav";
import { useLenis } from "@/hooks/useLenis";

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect information in the following ways when you visit and use our website.",
    ],
  },
  {
    title: "2. Personal Information",
    paragraphs: [
      "When visiting our services, we may collect the following personal information:",
    ],
    items: [
      "Name",
      "Email address",
      "Any other information you provide directly to us",
    ],
  },
  {
    title: "3. Usage Data",
    paragraphs: [
      "We may also collect information on how our service is accessed and used, including:",
    ],
    items: [
      "IP address",
      "Browser type",
      "Device information",
      "Pages visited and time spent on each page",
      "Other diagnostic data",
    ],
  },
  {
    title: "4. Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some parts of our service.",
    ],
  },
  {
    title: "5. How We Use Your Information",
    paragraphs: [
      "We use the collected data for various purposes:",
    ],
    items: [
      "To provide and maintain our service",
      "To notify you about changes to our service",
      "To allow you to participate in interactive features",
    ],
  },
  {
    title: "6. Sharing of Your Information",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy.",
      "We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
      "We may also disclose information when we believe in good faith that disclosure is necessary to protect our rights, comply with legal processes, or respond to lawful requests from public authorities.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "We take reasonable measures to protect the information we collect from loss, misuse, and unauthorized access.",
      "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Your Data Rights",
    paragraphs: [
      "Depending on your location, you may have the right to:",
    ],
    items: [
      "Access the personal information we hold about you;",
      "Request correction of inaccurate or incomplete information;",
      "Request deletion of your personal information;",
      "Withdraw consent to the processing of your data.",
    ],
    after: [
      "To exercise any of these rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children.",
      "If you believe that a child has provided us with personal information, please contact us and we will take steps to delete such information.",
    ],
  },
  {
    title: "10. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "Any updated version will be published on this page with a revised “Effective Date”.",
      "Your continued use of the website after changes are published constitutes your acceptance of the updated Privacy Policy.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "This Privacy Policy shall be governed by and interpreted in accordance with the laws of the Republic of Rwanda, unless otherwise required by applicable law.",
      "Any dispute relating to the use of this website shall be subject to the jurisdiction of the competent courts of Rwanda.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  useLenis(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-[1100px] px-6 pb-24 pt-36 md:pb-36 md:pt-44 lg:px-10">
        <header className="border-b border-foreground/15 pb-12 md:pb-16">
          <p className="eyebrow mb-5 text-primary">Effective Date: June 23, 2024</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            Privacy Policy
          </h1>
          <div className="mt-8 max-w-4xl space-y-5 text-lg font-medium leading-relaxed text-foreground/75 md:text-xl">
            <p>
              This Privacy Policy describes how The FABRIQUE (“The FABRIQUE”, “we”, “our”, or “us”) collects, uses, and
              protects information when you visit our website and use our services.
            </p>
            <p>
              By accessing or using our website, you consent to the collection and use of information as described in this
              Privacy Policy.
            </p>
          </div>
        </header>

        <div className="divide-y divide-foreground/15">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-5 py-10 md:grid-cols-[minmax(15rem,0.7fr)_1.3fr] md:gap-14 md:py-14">
              <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">{section.title}</h2>
              <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}

          <section className="grid gap-5 py-10 md:grid-cols-[minmax(15rem,0.7fr)_1.3fr] md:gap-14 md:py-14">
            <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">12. Contact Us</h2>
            <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
              <p>If you have any questions regarding this Privacy Policy or the use of our website, you can contact us at:</p>
              <address className="not-italic font-bold text-foreground">
                The FABRIQUE<br />
                Kigali, Rwanda<br />
                Email: <a className="text-primary underline underline-offset-4" href="mailto:hello@thefabrique.rw">hello@thefabrique.rw</a>
              </address>
              <p>By accessing and using this website, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
