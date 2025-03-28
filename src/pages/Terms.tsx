
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Terms() {
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
            <div className="prose prose-invert max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using SignalGuard, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                SignalGuard provides a platform for analyzing trading signals from various sources using artificial intelligence. Our service includes signal scoring, automated trading capabilities, and performance tracking.
              </p>
              
              <h2>3. Risk Disclosure</h2>
              <p>
                Cryptocurrency trading involves significant risk. Past performance is not indicative of future results. You should consider your financial situation and risk tolerance before trading cryptocurrency. SignalGuard does not guarantee profits or protection from losses.
              </p>
              
              <h2>4. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
              
              <h2>5. Subscription and Billing</h2>
              <p>
                Some features of SignalGuard require a paid subscription. By subscribing, you agree to pay the fees at the rates in effect when the charges are incurred. You can cancel your subscription at any time, but no refunds will be provided for any unused portion of the subscription period.
              </p>
              
              <h2>6. API Usage and Security</h2>
              <p>
                When connecting your exchange account via API keys, you should only provide API keys with trading permissions. Never provide keys with withdrawal access. SignalGuard encrypts all API keys but cannot guarantee complete security against all potential breaches.
              </p>
              
              <h2>7. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the SignalGuard platform are owned by SignalGuard and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, SignalGuard shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
              
              <h2>9. Termination</h2>
              <p>
                We may terminate or suspend your account and access to SignalGuard immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the jurisdiction in which SignalGuard is registered, without regard to its conflict of law provisions.
              </p>
              
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on the platform and updating the "Last Updated" date.
              </p>
              
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@signalguard.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
