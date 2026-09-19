import { useEffect } from "react";
import { Footer } from "@/components/clever/Footer";
import { Nav } from "@/components/clever/Nav";
import { useLenis } from "@/hooks/useLenis";

const sections = [
  {
    title: "1. Use of Our Website",
    paragraphs: [
      "The FABRIQUE website is provided for general information about our company, creative work, services, portfolio, projects, and activities.",
      "You agree to use this website only for lawful purposes and in a manner that does not:",
    ],
    items: [
      "Violate any applicable law or regulation;",
      "Infringe the rights of The FABRIQUE or any third party;",
      "Attempt to gain unauthorized access to our website, systems, or data;",
      "Interfere with the operation, security, or availability of the website;",
      "Use our content for fraudulent, misleading, or unauthorized commercial purposes.",
    ],
  },
  {
    title: "2. Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, all content appearing on this website—including but not limited to:",
    ],
    items: [
      "The FABRIQUE name and logo;",
      "Text and written content;",
      "Photographs and images;",
      "Videos and films;",
      "Graphics and illustrations;",
      "Animations and 3D content;",
      "Creative concepts and visual materials;",
      "Website design and layout;",
      "Other original materials;",
    ],
    after: [
      "is owned by or licensed to The FABRIQUE and is protected by applicable intellectual-property laws.",
      "You may view and access the content of this website for your personal or informational use.",
      "You may not reproduce, copy, modify, distribute, republish, sell, license, or commercially exploit our website content without prior written permission from The FABRIQUE.",
    ],
  },
  {
    title: "3. Portfolio and Third-Party Work",
    paragraphs: [
      "Our website may display creative work, campaigns, advertisements, films, photographs, brands, logos, or projects produced by The FABRIQUE for clients or other organizations.",
      "The appearance of third-party trademarks, logos, brands, or client work on our website does not necessarily mean that The FABRIQUE owns those trademarks or brands.",
      "Such materials remain the property of their respective owners and are displayed for portfolio, editorial, informational, or promotional purposes.",
    ],
  },
  {
    title: "4. Accuracy of Information",
    paragraphs: [
      "We make reasonable efforts to ensure that the information presented on this website is accurate and up to date.",
      "However, we do not guarantee that all information will always be complete, accurate, current, or free from errors.",
      "The FABRIQUE reserves the right to modify, update, remove, or change website content at any time without prior notice.",
    ],
  },
  {
    title: "5. Website Availability",
    paragraphs: [
      "We aim to keep our website accessible and operational. However, we do not guarantee that the website will always be available, uninterrupted, secure, or free from technical errors.",
      "The website may occasionally be unavailable due to maintenance, technical problems, updates, hosting issues, or circumstances beyond our reasonable control.",
    ],
  },
  {
    title: "6. External Links",
    paragraphs: [
      "Our website may contain links to third-party websites, platforms, social media accounts, or other external resources.",
      "These links are provided for convenience and informational purposes.",
      "The FABRIQUE does not control and is not responsible for the content, availability, security, privacy practices, or policies of third-party websites.",
      "Visiting external websites through links on our website is done at your own discretion.",
    ],
  },
  {
    title: "7. User Communications",
    paragraphs: [
      "If you contact The FABRIQUE through our website, including by email, contact forms, or other communication channels, you agree to provide information that is accurate and not misleading.",
      "You must not use our communication channels to submit unlawful, abusive, defamatory, fraudulent, threatening, or malicious content.",
    ],
  },
  {
    title: "8. Privacy",
    paragraphs: [
      "We respect the privacy of visitors to our website.",
      "Information that you voluntarily provide to us, such as your name, email address, company information, or other contact details, may be used to respond to your inquiries, communicate with you, and provide information about our services.",
      "We will handle personal information in accordance with applicable privacy and data-protection laws.",
    ],
  },
  {
    title: "9. Cookies and Website Technologies",
    paragraphs: [
      "Our website may use cookies or similar technologies to improve website functionality, understand website usage, analyze traffic, and enhance the user experience.",
      "Where required by applicable law, appropriate consent mechanisms may be used.",
      "You may also be able to manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
    ],
  },
  {
    title: "10. Disclaimer",
    paragraphs: [
      "The content of this website is provided for general informational purposes.",
      "Nothing on this website should be considered professional, legal, financial, or other specialized advice.",
      "The FABRIQUE does not guarantee that the information, materials, or content available through the website will meet your particular requirements or expectations.",
    ],
  },
  {
    title: "11. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, The FABRIQUE will not be liable for any direct, indirect, incidental, consequential, or other losses arising from or related to your use of, or inability to use, this website.",
      "This includes, without limitation, losses resulting from:",
    ],
    items: [
      "Website interruptions;",
      "Technical errors;",
      "Loss of data;",
      "Third-party websites or services;",
      "Reliance on information published on the website;",
      "Unauthorized access beyond our reasonable control.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    paragraphs: [
      "We may update these Terms and Policies from time to time to reflect changes to our website, services, legal requirements, or business practices.",
      "Any updated version will be published on this page with a revised “Last Updated” date.",
      "Your continued use of the website after changes are published constitutes your acceptance of the updated Terms and Policies.",
    ],
  },
  {
    title: "13. Governing Law",
    paragraphs: [
      "These Terms and Policies shall be governed by and interpreted in accordance with the laws of the Republic of Rwanda, unless otherwise required by applicable law.",
      "Any dispute relating to the use of this website shall be subject to the jurisdiction of the competent courts of Rwanda.",
    ],
  },
];

const TermsAndPoliciesPage = () => {
  useLenis(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-[1100px] px-6 pb-24 pt-36 md:pb-36 md:pt-44 lg:px-10">
        <header className="border-b border-foreground/15 pb-12 md:pb-16">
          <p className="eyebrow mb-5 text-primary">Last Updated: September 2026</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            Terms and Policies
          </h1>
          <div className="mt-8 max-w-4xl space-y-5 text-lg font-medium leading-relaxed text-foreground/75 md:text-xl">
            <p>Welcome to the website of The FABRIQUE (“The FABRIQUE”, “we”, “our”, or “us”).</p>
            <p>
              These Terms and Policies govern your use of our website and its content. By accessing or using this website,
              you agree to comply with these terms. If you do not agree with any part of these terms, please discontinue
              your use of the website.
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
            <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">14. Contact Us</h2>
            <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
              <p>If you have any questions regarding these Terms and Policies or the use of our website, you can contact us at:</p>
              <address className="not-italic font-bold text-foreground">
                The FABRIQUE<br />
                Kigali, Rwanda<br />
                Email: <a className="text-primary underline underline-offset-4" href="mailto:hello@thefabrique.rw">hello@thefabrique.rw</a>
              </address>
              <p>By accessing and using this website, you acknowledge that you have read, understood, and agree to these Terms and Policies.</p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default TermsAndPoliciesPage;