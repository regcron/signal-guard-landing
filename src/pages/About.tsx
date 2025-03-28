
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield } from "lucide-react";

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6 gradient-text">About SignalGuard</h1>
              <p className="text-xl text-muted-foreground">
                Our mission is to democratize access to high-quality trading signals and empower traders of all experience levels.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  SignalGuard was founded in 2023 by a team of crypto traders, data scientists, and software engineers who were frustrated by the noise and misinformation in crypto trading communities.
                </p>
                <p className="text-muted-foreground mb-6">
                  After losing money following unverified signals and dealing with information overload, our founders built the first version of SignalGuard as an internal tool to filter signal quality and track performance.
                </p>
                <p className="text-muted-foreground">
                  The results were so impressive that they decided to develop it into a full platform to help other traders navigate the complex world of crypto trading with confidence and clarity.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      We believe in complete transparency in signal tracking and performance metrics. All historical data is immutable and cannot be manipulated.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Security</h3>
                    <p className="text-muted-foreground">
                      Your funds and data security are our top priority. We use industry-leading encryption and never require withdrawal access to your exchange.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      We're committed to helping traders develop their skills and understanding of markets, not just providing signals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously improve our AI algorithms and platform features based on market developments and user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We're a diverse team of traders, engineers, and data scientists passionate about crypto.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-medium">Team Member</h3>
                  <p className="text-primary mb-2">Position</p>
                  <p className="text-muted-foreground text-sm">
                    Brief description about team member and their background in crypto trading or technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
