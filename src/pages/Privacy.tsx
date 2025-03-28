
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Last updated: June 2023
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At SignalGuard, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you register for an account, subscribe to our service, or communicate with us. This may include:
              </p>
              <ul>
                <li>Personal information such as name, email address, and phone number</li>
                <li>Account information such as username and password</li>
                <li>Payment information (though we do not store complete credit card details)</li>
                <li>Exchange API keys (encrypted and with trading-only permissions)</li>
                <li>Usage data and preferences</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing and maintaining our service</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your requests and inquiries</li>
                <li>Improving our service and user experience</li>
                <li>Sending service notifications and updates</li>
                <li>Preventing fraud and enhancing security</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
              </ul>
              
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@signalguard.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
