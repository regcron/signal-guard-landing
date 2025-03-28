
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
            <Card className="p-6 shadow-lg">
              <CardContent className="p-0">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At SignalGuard.xyz, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We collect information that you provide directly to us when you register for an account, subscribe to our service, or communicate with us. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Personal information such as name, email address, and phone number</li>
                      <li>Account information such as username and password</li>
                      <li>Payment information (though we do not store complete credit card details)</li>
                      <li>Exchange API keys (encrypted and with trading-only permissions)</li>
                      <li>Usage data and preferences</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Providing and maintaining our service</li>
                      <li>Processing transactions and sending related information</li>
                      <li>Responding to your requests and inquiries</li>
                      <li>Improving our service and user experience</li>
                      <li>Sending service notifications and updates</li>
                      <li>Preventing fraud and enhancing security</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">4. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">6. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Depending on your location, you may have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal information</li>
                      <li>Restriction or objection to processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">7. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">8. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@signalguard.xyz" className="text-primary hover:underline">privacy@signalguard.xyz</a>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
