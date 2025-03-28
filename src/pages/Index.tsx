
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Check, ArrowRight, Shield, TrendingUp, Zap, Layers, BarChart3, Users } from "lucide-react";

const features = [
  {
    title: "AI Signal Scoring",
    description: "Advanced NLP sentiment analysis with bullish/bearish confidence percentages and historical accuracy tracking.",
    icon: BarChart3
  },
  {
    title: "Multi-Source Analysis",
    description: "Aggregate trading signals from Twitter and Telegram to identify high-confidence opportunities.",
    icon: Layers
  },
  {
    title: "Performance Tracking",
    description: "Detailed metrics on win rates, ROI, and risk-adjusted returns for all KOLs you follow.",
    icon: TrendingUp
  },
  {
    title: "One-Click Execution",
    description: "Instantly execute trades based on signals with your custom risk management parameters.",
    icon: Zap
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to get started with signal analysis",
    features: [
      "3 signals per day",
      "Basic sentiment analysis",
      "Public KOL profiles",
      "Email notifications"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "$39",
    period: "/month",
    description: "Enhanced signal capabilities for serious traders",
    features: [
      "15 signals per day",
      "Priority signal access",
      "Advanced analytics dashboard",
      "Custom risk parameters",
      "Email & SMS alerts"
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "default" as const,
    highlight: true
  },
  {
    name: "VIP",
    price: "$199",
    period: "/month",
    description: "Maximum performance for professional traders",
    features: [
      "Unlimited signals",
      "Instant notifications",
      "Premium analytics suite",
      "Advanced risk controls",
      "24/7 priority support",
      "Exclusive KOL insights"
    ],
    buttonText: "Go VIP",
    buttonVariant: "default" as const
  }
];

export default function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background z-0"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-4">
                <Shield className="h-4 w-4 mr-2" />
                <span>Powered by advanced AI analysis</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
                Maximize Crypto Profits with AI-Powered Signals
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                SignalGuard analyzes thousands of trading signals from top crypto influencers, delivering only the highest confidence opportunities directly to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/signup">
                  <Button size="lg" className="min-w-[160px] group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="min-w-[160px]">
                    Explore Features
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-success mr-2"></div>
                  <span>5,000+ Signal Sources</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>$1.2B+ Volume Protected</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-warning mr-2"></div>
                  <span>10,000+ Active Traders</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Advanced Signal Technology</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our platform uses AI to analyze thousands of trading signals, delivering only the highest probability opportunities to your dashboard.
              </p>
            </div>
            
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
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">How SignalGuard Works</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Advanced signal analysis in just three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Connect Your Exchange</h3>
                <p className="text-muted-foreground">
                  Securely link your Binance account with read-only API access. Your funds always stay in your exchange.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Select Signal Sources</h3>
                <p className="text-muted-foreground">
                  Choose from our curated list of verified KOLs and signal providers with proven track records.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Receive Vetted Signals</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes and scores each signal, delivering only high-confidence opportunities to your dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Trusted by Traders Worldwide</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Hear from our community of successful traders
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-lg">Alex K.</CardTitle>
                      <p className="text-sm text-muted-foreground">Crypto Day Trader</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "SignalGuard has completely transformed my trading. The AI filtering saves me hours of research and the signal quality is exceptional."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-lg">Sarah M.</CardTitle>
                      <p className="text-sm text-muted-foreground">Investment Advisor</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The accuracy of SignalGuard's analysis is impressive. My clients' crypto portfolios have seen consistent growth since I started using it."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-lg">Mike T.</CardTitle>
                      <p className="text-sm text-muted-foreground">Retail Investor</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "As a part-time trader, SignalGuard gives me an edge I couldn't get otherwise. The VIP tier signals have been game-changing for my portfolio."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Choose Your Plan</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Select the plan that best fits your trading strategy and goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex flex-col ${plan.highlight ? 'border-primary shadow-lg shadow-primary/10' : 'border-border/50'}`}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-4 flex items-baseline text-foreground">
                      <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                      {plan.period && <span className="ml-1 font-medium text-muted-foreground">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.buttonVariant}>
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-30"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Start Trading with Confidence</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of traders already using SignalGuard to maximize their crypto profits.
              </p>
              <Link to="/signup">
                <Button size="lg" className="group">
                  Create Free Account 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
