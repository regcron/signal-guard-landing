
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Cookies() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-muted-foreground">
                Last updated: June 2023
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              
              <h2>How We Use Cookies</h2>
              <p>
                SignalGuard uses cookies for various purposes, including:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
                <li><strong>Analytical/performance cookies:</strong> These cookies allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</li>
                <li><strong>Functionality cookies:</strong> These cookies enable us to personalize content and remember your preferences (e.g., your choice of language or region).</li>
                <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and advertising more relevant to your interests.</li>
              </ul>
              
              <h2>Types of Cookies We Use</h2>
              
              <h3>Session Cookies</h3>
              <p>
                Session cookies are temporary cookies that are deleted when you close your browser. They are used to remember you during your visit to our website.
              </p>
              
              <h3>Persistent Cookies</h3>
              <p>
                Persistent cookies remain on your device after you close your browser. They help our website remember your preferences and settings for future visits.
              </p>
              
              <h2>Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
              </p>
              <ul>
                <li>Google Analytics cookies to analyze website traffic and usage</li>
                <li>Social media cookies to enable social sharing functionality</li>
                <li>Advertising cookies to deliver targeted advertisements</li>
              </ul>
              
              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser. To understand these settings, the following links may be helpful:
              </p>
              <ul>
                <li>Cookie settings in Chrome</li>
                <li>Cookie settings in Firefox</li>
                <li>Cookie settings in Internet Explorer</li>
                <li>Cookie settings in Safari</li>
              </ul>
              
              <h2>Changes to Our Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at privacy@signalguard.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
