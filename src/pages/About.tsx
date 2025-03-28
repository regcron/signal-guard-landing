
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Andy Bard",
    position: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "Andy has over 15 years of experience in quantitative finance, having previously led algorithmic trading teams at Goldman Sachs and Citadel. He was an early adopter of cryptocurrency trading in 2013. Andy founded SignalGuard to democratize access to sophisticated trading signals that were previously only available to institutional investors.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Steve Terran",
    position: "CTO",
    image: "/placeholder.svg",
    bio: "Steve is a technology leader with extensive experience in AI and machine learning. Before joining SignalGuard, he was the lead architect at a major crypto exchange and developed high-frequency trading systems for Wall Street firms. Steve specializes in natural language processing and sentiment analysis algorithms that power SignalGuard's core technology.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Elizabeth Chew",
    position: "Head of Marketing",
    image: "/placeholder.svg",
    bio: "Elizabeth brings over a decade of experience in fintech marketing and growth strategy. Prior to SignalGuard, she led marketing at several successful fintech startups and managed digital strategy at BlackRock. With experience as an investment advisor, Elizabeth combines financial expertise with marketing acumen to educate traders about the benefits of AI-powered signal analysis.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Nicolo Ruben",
    position: "Head of Product",
    image: "/placeholder.svg",
    bio: "Nicolo has spent his career at the intersection of finance and technology. As a former crypto hedge fund manager and product lead at Binance, he brings deep industry expertise to SignalGuard. Nicolo oversees product strategy and ensures that SignalGuard meets the needs of both novice and experienced traders.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Danny Teo",
    position: "Head of Data Science",
    image: "/placeholder.svg",
    bio: "Danny leads SignalGuard's data science team, bringing expertise from his previous roles at Quantitative hedge funds and crypto research firms. He pioneered several of the machine learning models that power SignalGuard's signal analysis engine. Danny is passionate about using data to bring transparency to crypto markets.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Yann Quelen",
    position: "Chief Compliance Officer",
    image: "/placeholder.svg",
    bio: "Yann has extensive experience in financial regulation and compliance, having served as legal counsel at major exchanges and fintech companies. With experience at the SEC, Yann ensures that SignalGuard maintains the highest standards of compliance while navigating the evolving regulatory landscape of cryptocurrency markets.",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

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
                  SignalGuard was founded in 2023 by a team of crypto traders, data scientists, and financial experts who were frustrated by the noise and misinformation in crypto trading communities.
                </p>
                <p className="text-muted-foreground mb-6">
                  After years of experience in traditional finance and crypto markets, our founders identified a critical gap in the market: the lack of reliable, verified trading signals backed by quantitative analysis.
                </p>
                <p className="text-muted-foreground mb-6">
                  They built the first version of SignalGuard as an internal tool to filter signal quality and track performance across various sources. The results were so impressive that they decided to develop it into a full platform to help other traders navigate the complex world of crypto trading.
                </p>
                <p className="text-muted-foreground">
                  Today, SignalGuard combines advanced AI with financial expertise to provide traders with signals they can trust, empowering them to make more informed decisions in volatile markets.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="space-y-6">
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-2">Transparency</h3>
                      <p className="text-muted-foreground">
                        We believe in complete transparency in signal tracking and performance metrics. All historical data is immutable and cannot be manipulated, allowing traders to make decisions based on verifiable information.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-2">Security</h3>
                      <p className="text-muted-foreground">
                        Your funds and data security are our top priority. We use industry-leading encryption and never require withdrawal access to your exchange accounts, ensuring your assets remain under your control at all times.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-2">Education</h3>
                      <p className="text-muted-foreground">
                        We're committed to helping traders develop their skills and understanding of markets, not just providing signals. Our platform includes educational resources and clear explanations of our analysis methodology.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        We continuously improve our AI algorithms and platform features based on market developments and user feedback. Our team is constantly researching new ways to extract valuable insights from market data.
                      </p>
                    </CardContent>
                  </Card>
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
                We're a diverse team of traders, engineers, and data scientists passionate about transforming how traders access and utilize market signals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="h-48 bg-primary/20 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-background"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {member.position}
                      </Badge>
                      <div className="flex justify-center mt-2 space-x-2">
                        <Button variant="ghost" size="icon" aria-label={`${member.name}'s LinkedIn`}>
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" aria-label={`${member.name}'s Twitter`}>
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
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
