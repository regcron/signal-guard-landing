import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Pricing plan data
const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to get started with copy trading",
    features: [
      { text: "3 trades per day", tooltip: "Maximum number of copy trades you can execute daily" },
      { text: "Basic signal alerts", tooltip: "Email notifications for new signals" },
      { text: "Public KOL profiles", tooltip: "Access to view all trader profiles" },
      { text: "Email notifications", tooltip: "Get notified about trade executions" },
      { text: "Standard API latency", tooltip: "Regular priority for API requests" },
    ],
    limitations: [
      "No SMS alerts",
      "No custom risk rules",
      "No advanced analytics",
      "No revenue sharing",
    ],
    buttonText: "Current Plan",
    buttonVariant: "outline" as const,
    current: true
  },
  {
    name: "Pro",
    price: "$39",
    period: "/month",
    description: "Enhanced trading capabilities for serious traders",
    features: [
      { text: "15 trades per day", tooltip: "Maximum number of copy trades you can execute daily" },
      { text: "Priority signal access", tooltip: "Get signals before free tier users" },
      { text: "Advanced analytics", tooltip: "Detailed performance metrics and trade history" },
      { text: "Custom risk rules", tooltip: "Set your own stop loss, take profit, and leverage" },
      { text: "Email & SMS alerts", tooltip: "Real-time notifications via email and SMS" },
      { text: "Fast API latency", tooltip: "Higher priority for API requests (<1s)" },
      { text: "Follow up to 10 KOLs", tooltip: "Copy trades from up to 10 different traders" },
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "default" as const,
    highlight: true,
    current: false
  },
  {
    name: "VIP",
    price: "$199",
    period: "/month",
    description: "Maximum performance for professional traders",
    features: [
      { text: "Unlimited trades", tooltip: "No limit on the number of copy trades" },
      { text: "Instant signal notifications", tooltip: "Real-time alerts for all signals" },
      { text: "Premium analytics dashboard", tooltip: "Comprehensive performance tracking and insights" },
      { text: "Advanced risk management", tooltip: "Sophisticated risk control strategies" },
      { text: "24/7 priority support", tooltip: "Direct access to our support team" },
      { text: "Exclusive KOL insights", tooltip: "Private analysis and commentary from top traders" },
      { text: "Fastest API latency", tooltip: "Highest priority for API requests (<0.5s)" },
      { text: "Follow unlimited KOLs", tooltip: "No restrictions on how many traders you can follow" },
      { text: "20% KOL revenue share", tooltip: "Earn 20% of subscription fees from your followers" },
    ],
    buttonText: "Go VIP",
    buttonVariant: "default" as const,
    current: false
  }
];

// FAQ data
const faqs = [
  {
    question: "How does the copy trading system work?",
    answer: "Our platform monitors social media signals from top traders, analyzes them with AI for credibility and profitability, then executes trades automatically through your connected exchange account. You can set custom risk parameters to control position sizes, stop-losses, and take-profits."
  },
  {
    question: "Is there a free trial for Pro or VIP plans?",
    answer: "We offer a 7-day free trial for the Pro plan. This gives you full access to Pro features so you can experience the benefits before committing. The VIP plan does not include a free trial, but you can upgrade or downgrade your subscription at any time."
  },
  {
    question: "How secure is my exchange API connection?",
    answer: "Your API keys are encrypted using AWS KMS and stored securely. We only request the minimum permissions needed to execute trades (read and trade permissions), never withdrawal permissions. Your funds always remain in your exchange account."
  },
  {
    question: "Can I set my own risk parameters?",
    answer: "Yes! Pro and VIP users can customize position sizes, leverage limits, stop-loss percentages, and take-profit levels. This allows you to follow traders while managing risk according to your own strategy and comfort level."
  },
  {
    question: "What exchanges are supported?",
    answer: "We currently support Binance Futures with up to 10x leverage. We're actively working on adding support for more exchanges including Bybit, OKX, and others in the coming months."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time through your account settings. After cancellation, your plan will remain active until the end of the current billing period, then automatically downgrade to the Free tier."
  }
];

export default function Pricing() {
  return (
    <>
      <SiteHeader />
      <main className="container py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Pricing Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to maximize your trading potential
          </p>
        </div>

        <Tabs defaultValue="monthly" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex flex-col ${plan.highlight ? 'border-primary shadow-lg shadow-primary/10 relative overflow-hidden' : 'border-border/50'}`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-45 translate-x-2 translate-y-3">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
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
                          <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm">{feature.text}</span>
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                                  <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="max-w-xs">{feature.tooltip}</div>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </li>
                      ))}
                      
                      {plan.limitations && (
                        <>
                          <li className="pt-3 border-t border-border/50">
                            <span className="text-sm text-muted-foreground">Limitations:</span>
                          </li>
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="text-sm">{limitation}</span>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    {plan.current ? (
                      <Button className="w-full" variant={plan.buttonVariant} disabled>
                        {plan.buttonText}
                      </Button>
                    ) : (
                      <Button className="w-full" variant={plan.buttonVariant}>
                        {plan.buttonText}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="annual" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => {
                const annualPrice = plan.name === "Free" 
                  ? "$0" 
                  : `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}`;
                
                return (
                  <Card 
                    key={index} 
                    className={`flex flex-col ${plan.highlight ? 'border-primary shadow-lg shadow-primary/10 relative overflow-hidden' : 'border-border/50'}`}
                  >
                    {plan.highlight && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-45 translate-x-2 translate-y-3">
                          POPULAR
                        </div>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="mt-4 flex items-baseline text-foreground">
                        <span className="text-4xl font-extrabold tracking-tight">{annualPrice}</span>
                        {plan.name !== "Free" && <span className="ml-1 font-medium text-muted-foreground">/year</span>}
                      </div>
                      <CardDescription className="mt-2">
                        {plan.description}
                        {plan.name !== "Free" && (
                          <div className="mt-1 text-success font-medium">Save 20% with annual billing</div>
                        )}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                            <span className="text-sm">{feature.text}</span>
                            {feature.tooltip && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="max-w-xs">{feature.tooltip}</div>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </li>
                        ))}
                        
                        {plan.limitations && (
                          <>
                            <li className="pt-3 border-t border-border/50">
                              <span className="text-sm text-muted-foreground">Limitations:</span>
                            </li>
                            {plan.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start text-muted-foreground">
                                <span className="text-sm">{limitation}</span>
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </CardContent>
                    
                    <CardFooter>
                      {plan.current ? (
                        <Button className="w-full" variant={plan.buttonVariant} disabled>
                          {plan.buttonText}
                        </Button>
                      ) : (
                        <Button className="w-full" variant={plan.buttonVariant}>
                          {plan.buttonText}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center py-12 px-6 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20">
          <h2 className="text-3xl font-bold mb-4">Ready to start copy trading?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of traders already using our platform to maximize their crypto profits.
          </p>
          <Button size="lg" className="px-8">Get Started Today</Button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
