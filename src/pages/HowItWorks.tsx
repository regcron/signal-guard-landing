
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Exchange",
      description: "Securely link your Binance account with read-only API keys. This ensures security while allowing SignalGuard to execute trades on your behalf. Your funds always stay in your exchange account.",
      details: [
        "Generate API keys with trading permissions only",
        "No withdrawal access is ever required",
        "All keys are encrypted using bank-level security"
      ]
    },
    {
      number: 2,
      title: "Select Signal Sources",
      description: "Choose from our curated list of verified KOLs and signal providers with proven track records. Filter by performance metrics, trading style, or market focus to find the sources that match your strategy.",
      details: [
        "Browse leaderboards of top-performing traders",
        "View detailed performance metrics and history",
        "Follow multiple sources to diversify your signals"
      ]
    },
    {
      number: 3,
      title: "Set Risk Parameters",
      description: "Define your trading rules including position size, leverage, stop-loss and take-profit levels. SignalGuard will apply these automatically to every trade to ensure disciplined risk management.",
      details: [
        "Set percentage of account balance per trade",
        "Define maximum leverage per position",
        "Configure automatic stop-loss placement"
      ]
    },
    {
      number: 4,
      title: "Receive AI-Vetted Signals",
      description: "Our proprietary algorithm analyzes thousands of signals daily, scoring them for sentiment, confidence, and historical accuracy. Only the highest-quality signals reach your dashboard.",
      details: [
        "NLP sentiment analysis scores every signal",
        "Historical accuracy tracking improves results",
        "Pattern recognition identifies highest probability setups"
      ]
    },
    {
      number: 5,
      title: "Automated Execution",
      description: "When a high-confidence signal matches your criteria, SignalGuard can automatically execute the trade according to your pre-defined risk parameters, or notify you for manual approval.",
      details: [
        "Sub-second execution speed",
        "Choose between auto-trading or manual approval",
        "Real-time notification of trade execution"
      ]
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
              <h1 className="text-4xl font-bold mb-6 gradient-text">How SignalGuard Works</h1>
              <p className="text-xl text-muted-foreground">
                Our platform combines advanced AI signal analysis with seamless trading execution in five simple steps.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col gap-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
