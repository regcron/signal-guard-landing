
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowUpRight, Twitter, MessageSquare, Check, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for KOLs
const topKols = [
  {
    id: 1,
    name: "CryptoWhale",
    image: null,
    bio: "Full-time crypto trader since 2017. Specializing in Bitcoin and large caps.",
    platform: "Twitter",
    followers: "245K",
    winRate: "78%",
    roi: "+156%",
    trades: 245,
    subscription: "Pro",
    following: false
  },
  {
    id: 2,
    name: "EtherKing",
    image: null,
    bio: "Ethereum and DeFi specialist with technical analysis background.",
    platform: "Twitter",
    followers: "189K",
    winRate: "72%",
    roi: "+124%",
    trades: 312,
    subscription: "VIP",
    following: true
  },
  {
    id: 3,
    name: "AltcoinGuru",
    image: null,
    bio: "Finding the next 100x gems before they explode. Altcoin specialist.",
    platform: "Telegram",
    followers: "156K",
    winRate: "68%",
    roi: "+203%",
    trades: 178,
    subscription: "Pro",
    following: false
  },
  {
    id: 4,
    name: "SolanaTrader",
    image: null,
    bio: "Solana ecosystem expert. Trading SOL and Solana tokens since 2020.",
    platform: "Twitter",
    followers: "132K",
    winRate: "75%",
    roi: "+187%",
    trades: 193,
    subscription: "Free",
    following: true
  },
  {
    id: 5,
    name: "MacroView",
    image: null,
    bio: "Macro-focused trader considering global economic trends for crypto trades.",
    platform: "Telegram",
    followers: "98K",
    winRate: "82%",
    roi: "+134%",
    trades: 87,
    subscription: "VIP",
    following: false
  },
  {
    id: 6,
    name: "BitcoinMaxi",
    image: null,
    bio: "All Bitcoin, all the time. Spot and futures trading strategies.",
    platform: "Twitter",
    followers: "176K",
    winRate: "71%",
    roi: "+112%",
    trades: 143,
    subscription: "Pro",
    following: false
  },
];

const recentSignals = [
  {
    id: 1,
    trader: "CryptoWhale",
    pair: "BTC/USDT",
    action: "Buy",
    confidence: "94%",
    time: "1h ago",
    positive: true,
    message: "Bitcoin breaking out of key resistance at $29K. Targets: $31K, $33K, $36K with tight stop at $28.2K."
  },
  {
    id: 2,
    trader: "EtherKing",
    pair: "ETH/USDT",
    action: "Sell",
    confidence: "89%",
    time: "3h ago",
    positive: false,
    message: "Ethereum rejected at $1920 resistance zone. Short with targets $1820, $1740. Stop loss above $1950."
  },
  {
    id: 3,
    trader: "AltcoinGuru",
    pair: "SOL/USDT",
    action: "Buy",
    confidence: "82%",
    time: "5h ago",
    positive: true,
    message: "Solana showing strength against BTC. Long with targets $26, $28 and stop below $22.5."
  },
  {
    id: 4,
    trader: "SolanaTrader",
    pair: "XRP/USDT",
    action: "Buy",
    confidence: "76%",
    time: "8h ago",
    positive: true,
    message: "XRP forming a bull flag on the 4h chart. Entry: $0.52, targets: $0.58, $0.62, $0.75. Stop: $0.49."
  },
];

export default function Kols() {
  return (
    <>
      <SiteHeader />
      <main className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Top Traders</h1>
            <p className="text-muted-foreground">Discover and follow the best performing traders</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem checked>All Traders</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Twitter</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Telegram</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Pro Tier</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>VIP Tier</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Win Rate > 70%</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>ROI > 100%</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search traders..."
                className="pl-8 h-9 w-[200px] lg:w-[280px] bg-muted"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="traders" className="mb-8">
          <TabsList>
            <TabsTrigger value="traders">Top Traders</TabsTrigger>
            <TabsTrigger value="signals">Recent Signals</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          
          <TabsContent value="traders" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topKols.map((kol) => (
                <Card key={kol.id} className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          {kol.name.charAt(0)}
                        </div>
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            {kol.name}
                            {kol.platform === "Twitter" ? (
                              <Twitter className="h-4 w-4 ml-2 text-blue-400" />
                            ) : (
                              <MessageSquare className="h-4 w-4 ml-2 text-blue-400" />
                            )}
                          </CardTitle>
                          <CardDescription>{kol.followers} followers</CardDescription>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        kol.subscription === "VIP" 
                          ? "bg-primary/20 text-primary" 
                          : kol.subscription === "Pro" 
                          ? "bg-warning/20 text-warning" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {kol.subscription}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{kol.bio}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">Win Rate</span>
                        <span className="text-lg font-bold text-success">{kol.winRate}</span>
                      </div>
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">ROI (30d)</span>
                        <span className="text-lg font-bold text-success">{kol.roi}</span>
                      </div>
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">Trades</span>
                        <span className="text-lg font-bold">{kol.trades}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                    {kol.following ? (
                      <Button variant="secondary" size="sm" className="flex items-center">
                        <Check className="mr-1 h-3 w-3" /> Following
                      </Button>
                    ) : (
                      <Button size="sm">Follow</Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="signals" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recentSignals.map((signal) => (
                <div key={signal.id} className="signal-card">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        {signal.trader.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium">{signal.trader}</h3>
                        <div className="flex items-center mt-1">
                          <p className="text-sm font-medium">{signal.pair}</p>
                          <p className={`ml-2 text-sm font-bold px-2 py-0.5 rounded-full ${signal.positive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                            {signal.action}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{signal.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">AI Confidence</div>
                      <div className={`text-base font-bold ${parseInt(signal.confidence) > 85 ? 'text-success' : 'text-warning'}`}>
                        {signal.confidence}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm">
                    {signal.message}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border/50 flex justify-between">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" className={signal.positive ? 'bg-success hover:bg-success/90' : 'bg-danger hover:bg-danger/90'}>
                      {signal.positive ? 'Copy Buy' : 'Copy Sell'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="following" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topKols.filter(kol => kol.following).map((kol) => (
                <Card key={kol.id} className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          {kol.name.charAt(0)}
                        </div>
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            {kol.name}
                            {kol.platform === "Twitter" ? (
                              <Twitter className="h-4 w-4 ml-2 text-blue-400" />
                            ) : (
                              <MessageSquare className="h-4 w-4 ml-2 text-blue-400" />
                            )}
                          </CardTitle>
                          <CardDescription>{kol.followers} followers</CardDescription>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        kol.subscription === "VIP" 
                          ? "bg-primary/20 text-primary" 
                          : kol.subscription === "Pro" 
                          ? "bg-warning/20 text-warning" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {kol.subscription}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{kol.bio}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">Win Rate</span>
                        <span className="text-lg font-bold text-success">{kol.winRate}</span>
                      </div>
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">ROI (30d)</span>
                        <span className="text-lg font-bold text-success">{kol.roi}</span>
                      </div>
                      <div className="stats-card">
                        <span className="text-xs text-muted-foreground">Trades</span>
                        <span className="text-lg font-bold">{kol.trades}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                    <Button variant="secondary" size="sm" className="flex items-center">
                      <Check className="mr-1 h-3 w-3" /> Following
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {topKols.filter(kol => kol.following).length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">You're not following any traders yet</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Find and follow top traders to receive their trading signals and copy their trades automatically.
                  </p>
                  <Button>Discover Traders</Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </>
  );
}
