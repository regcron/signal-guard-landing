
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
            <Card className="p-6 shadow-lg">
              <CardContent className="p-0">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">What Are Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      SignalGuard.xyz uses cookies for various purposes, including:
                    </p>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="font-semibold text-foreground">Essential cookies</h3>
                        <p className="text-muted-foreground">These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-foreground">Analytical/performance cookies</h3>
                        <p className="text-muted-foreground">These cookies allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-foreground">Functionality cookies</h3>
                        <p className="text-muted-foreground">These cookies enable us to personalize content and remember your preferences (e.g., your choice of language or region).</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-foreground">Targeting cookies</h3>
                        <p className="text-muted-foreground">These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and advertising more relevant to your interests.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Types of Cookies We Use</h2>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Session Cookies</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Session cookies are temporary cookies that are deleted when you close your browser. They are used to remember you during your visit to our website.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Persistent Cookies</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Persistent cookies remain on your device after you close your browser. They help our website remember your preferences and settings for future visits.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Google Analytics cookies to analyze website traffic and usage</li>
                      <li>Social media cookies to enable social sharing functionality</li>
                      <li>Advertising cookies to deliver targeted advertisements</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Managing Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser. To understand these settings, the following links may be helpful:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings in Chrome</a></li>
                      <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings in Firefox</a></li>
                      <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings in Internet Explorer</a></li>
                      <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings in Safari</a></li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Changes to Our Cookie Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@signalguard.xyz" className="text-primary hover:underline">privacy@signalguard.xyz</a>.
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
