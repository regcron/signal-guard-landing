
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
  // List of restricted countries
  const restrictedCountries = [
    "Afghanistan",
    "Algeria",
    "Bangladesh",
    "Bolivia",
    "China",
    "Cuba",
    "Ecuador",
    "Egypt",
    "Indonesia",
    "Iran",
    "Iraq",
    "Jordan",
    "Kyrgyzstan",
    "Morocco",
    "Nepal",
    "North Korea",
    "Pakistan",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Sudan",
    "Syria",
    "Turkey",
    "United States (certain states)",
    "Vietnam",
    "Zimbabwe"
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
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
                    <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using SignalGuard.xyz, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our service.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">2. Description of Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      SignalGuard provides a platform for analyzing trading signals from various sources using artificial intelligence. Our service includes signal scoring, automated trading capabilities, and performance tracking.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">3. Geographic Restrictions</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      SignalGuard.xyz is not available to residents of certain jurisdictions where cryptocurrency trading is restricted or prohibited by law. By accessing our platform, you confirm that you are not located in, and will not access the service from, any of the following countries or territories:
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                        {restrictedCountries.map((country, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            • {country}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This list may be updated from time to time as regulatory landscapes change. It is your responsibility to ensure compliance with your local laws and regulations before using our services.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">4. Risk Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cryptocurrency trading involves significant risk. Past performance is not indicative of future results. You should consider your financial situation and risk tolerance before trading cryptocurrency. SignalGuard does not guarantee profits or protection from losses.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">5. User Accounts</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">6. Subscription and Billing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Some features of SignalGuard require a paid subscription. By subscribing, you agree to pay the fees at the rates in effect when the charges are incurred. You can cancel your subscription at any time, but no refunds will be provided for any unused portion of the subscription period.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">7. API Usage and Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      When connecting your exchange account via API keys, you should only provide API keys with trading permissions. Never provide keys with withdrawal access. SignalGuard encrypts all API keys but cannot guarantee complete security against all potential breaches.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">8. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, features, and functionality of the SignalGuard platform are owned by SignalGuard.xyz and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">9. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, SignalGuard shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">10. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may terminate or suspend your account and access to SignalGuard immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">11. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by the laws of the jurisdiction in which SignalGuard is registered, without regard to its conflict of law provisions.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">12. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on the platform and updating the "Last Updated" date.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">13. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms, please contact us at <a href="mailto:legal@signalguard.xyz" className="text-primary hover:underline">legal@signalguard.xyz</a>.
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
