
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Blog() {
  const articles = [
    {
      title: "Top 5 Mistakes Traders Make When Following Signals",
      excerpt: "Learn the common pitfalls that can turn profitable signals into losing trades, and how to avoid them.",
      date: "June 15, 2023",
      readTime: "8 min read",
      categories: ["Trading", "Education"],
      image: "https://source.unsplash.com/random/800x600/?crypto,trading"
    },
    {
      title: "How AI is Revolutionizing Crypto Signal Analysis",
      excerpt: "Discover how machine learning and natural language processing are changing the way traders find profitable opportunities.",
      date: "May 28, 2023",
      readTime: "12 min read",
      categories: ["AI", "Technology"],
      image: "https://source.unsplash.com/random/800x600/?ai,technology"
    },
    {
      title: "Risk Management Strategies for Automated Trading",
      excerpt: "Essential risk management techniques to protect your capital when using automated trading systems.",
      date: "May 15, 2023",
      readTime: "10 min read",
      categories: ["Risk Management", "Trading"],
      image: "https://source.unsplash.com/random/800x600/?chart,finance"
    },
    {
      title: "The Psychology of Following Trading Signals",
      excerpt: "Understanding the emotional aspects of signal-based trading and how to maintain discipline.",
      date: "April 30, 2023",
      readTime: "7 min read",
      categories: ["Psychology", "Trading"],
      image: "https://source.unsplash.com/random/800x600/?mind,psychology"
    },
    {
      title: "The Rise of Crypto Key Opinion Leaders (KOLs)",
      excerpt: "How social media influencers are shaping crypto markets and what it means for traders.",
      date: "April 18, 2023",
      readTime: "9 min read",
      categories: ["Market Trends", "Social Media"],
      image: "https://source.unsplash.com/random/800x600/?social,media"
    },
    {
      title: "Comparing Signal Providers: Quality vs. Quantity",
      excerpt: "Why following fewer high-quality signals often outperforms a high volume of average calls.",
      date: "April 5, 2023",
      readTime: "11 min read",
      categories: ["Signal Analysis", "Strategy"],
      image: "https://source.unsplash.com/random/800x600/?quality,analysis"
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
              <h1 className="text-4xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, strategies, and news from the world of crypto trading signals
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {article.categories.map((category, i) => (
                        <Badge key={i} variant="secondary">{category}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="group p-0 h-auto">
                      Read Article 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
