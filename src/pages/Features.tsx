
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield, BarChart3, Zap, Layers, TrendingUp, AlertTriangle, Bell, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "AI Signal Analysis",
      description: "Natural language processing algorithms analyze trading signals from social media and chat platforms, scoring them for sentiment and confidence.",
      icon: BarChart3
    },
    {
      title: "Multi-Source Aggregation",
      description: "Pull signals from Twitter, Telegram, and other platforms to get a comprehensive view of market sentiment.",
      icon: Layers
    },
    {
      title: "Performance Tracking",
      description: "Detailed metrics on win rates, ROI, and risk-adjusted returns for all KOLs and signal providers.",
      icon: TrendingUp
    },
    {
      title: "Instant Execution",
      description: "One-click trading execution with your pre-defined risk parameters through secure exchange API connections.",
      icon: Zap
    },
    {
      title: "Risk Management",
      description: "Set custom stop-losses, take-profits, and position sizes to ensure disciplined trading.",
      icon: AlertTriangle
    },
    {
      title: "Real-time Alerts",
      description: "Receive instant notifications for high-confidence trading opportunities via email, SMS, or push notifications.",
      icon: Bell
    },
    {
      title: "Bank-Level Security",
      description: "All exchange API connections are secured with encryption and read-only permissions to protect your funds.",
      icon: Lock
    },
    {
      title: "Signal Verification",
      description: "Tamper-proof storage of original signals ensures transparency and prevents manipulation.",
      icon: Shield
    }
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 gradient-text">Features</h1>
              <p className="text-xl text-muted-foreground">
                SignalGuard combines advanced AI technology with robust trading tools to give you an edge in crypto markets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
