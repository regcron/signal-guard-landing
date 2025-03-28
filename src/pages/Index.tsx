
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
import { Check } from "lucide-react";

const features = [
  {
    title: "AI Signal Scoring",
    description: "NLP sentiment analysis with bullish/bearish confidence percentages and historical accuracy tracking."
  },
  {
    title: "One-Click Copy Trading",
    description: "Automatically copy trades from top traders with your custom risk management rules."
  },
  {
    title: "Multi-Source Signals",
    description: "Aggregate and analyze trading signals from Twitter and Telegram."
  },
  {
    title: "Performance Tracking",
    description: "Track win rates, ROI, and other key metrics for traders you follow."
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to get started with copy trading",
    features: [
      "3 trades per day",
      "Basic signal alerts",
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
    description: "Enhanced trading capabilities for serious traders",
    features: [
      "15 trades per day",
      "Priority signal access",
      "Advanced analytics",
      "Custom risk rules",
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
      "Unlimited trades",
      "Instant signal notifications",
      "Premium analytics dashboard",
      "Advanced risk management",
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
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted opacity-50 z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
                AI-Powered Crypto Copy Trading
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Follow top traders, copy their winning strategies, and maximize your profits with our AI-driven social trading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/signup">
                  <Button size="lg" className="min-w-[160px]">Get Started</Button>
                </Link>
                <Link to="/kols">
                  <Button size="lg" variant="outline" className="min-w-[160px]">
                    Explore Traders
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-success mr-2"></div>
                  <span>5,000+ Traders</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>$1.2B+ Volume</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-warning mr-2"></div>
                  <span>10,000+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Powered by Advanced Technology</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our platform combines AI signal analysis with seamless trading execution to give you the edge in crypto markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
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
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Simple, powerful crypto copy trading in just three steps
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
                <h3 className="text-xl font-medium mb-2">Follow Top KOLs</h3>
                <p className="text-muted-foreground">
                  Browse our leaderboard of verified traders, analyze their performance, and choose who to follow.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Automate Your Trades</h3>
                <p className="text-muted-foreground">
                  Set your risk parameters and let our system automatically execute trades when your chosen KOLs make moves.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-muted/30">
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
              <h2 className="text-3xl md:text-4xl font-bold">Start Copy Trading Today</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of traders already using our platform to maximize their crypto profits.
              </p>
              <Link to="/signup">
                <Button size="lg">Create Free Account</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
