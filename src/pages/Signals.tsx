
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowUpDown, Filter, Calendar, Clock, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for signals
const allSignals = [
  {
    id: 1,
    trader: "CryptoWhale",
    pair: "BTC/USDT",
    action: "Buy",
    confidence: "94%",
    time: "1h ago",
    positive: true,
    message: "Bitcoin breaking out of key resistance at $29K. Targets: $31K, $33K, $36K with tight stop at $28.2K.",
    leverageRecommended: "10x",
    timeframe: "4h",
    source: "Twitter",
    status: "Open"
  },
  {
    id: 2,
    trader: "EtherKing",
    pair: "ETH/USDT",
    action: "Sell",
    confidence: "89%",
    time: "3h ago",
    positive: false,
    message: "Ethereum rejected at $1920 resistance zone. Short with targets $1820, $1740. Stop loss above $1950.",
    leverageRecommended: "5x",
    timeframe: "1h",
    source: "Twitter",
    status: "Open"
  },
  {
    id: 3,
    trader: "AltcoinGuru",
    pair: "SOL/USDT",
    action: "Buy",
    confidence: "82%",
    time: "5h ago",
    positive: true,
    message: "Solana showing strength against BTC. Long with targets $26, $28 and stop below $22.5.",
    leverageRecommended: "3x",
    timeframe: "1d",
    source: "Telegram",
    status: "Open"
  },
  {
    id: 4,
    trader: "SolanaTrader",
    pair: "XRP/USDT",
    action: "Buy",
    confidence: "76%",
    time: "8h ago",
    positive: true,
    message: "XRP forming a bull flag on the 4h chart. Entry: $0.52, targets: $0.58, $0.62, $0.75. Stop: $0.49.",
    leverageRecommended: "5x",
    timeframe: "4h",
    source: "Twitter",
    status: "Open"
  },
  {
    id: 5,
    trader: "BitcoinMaxi",
    pair: "BTC/USDT",
    action: "Buy",
    confidence: "91%",
    time: "12h ago",
    positive: true,
    message: "Bitcoin weekly close above 200MA is extremely bullish. Long with targets $32K, $34K, $38K. Stop below $28K.",
    leverageRecommended: "7x",
    timeframe: "1w",
    source: "Telegram",
    status: "Open"
  },
  {
    id: 6,
    trader: "MacroView",
    pair: "DOGE/USDT",
    action: "Sell",
    confidence: "73%",
    time: "1d ago",
    positive: false,
    message: "DOGE hitting resistance and likely to retrace. Short with targets $0.072, $0.068. Stop above $0.082.",
    leverageRecommended: "3x",
    timeframe: "12h",
    source: "Twitter",
    status: "Closed (Win)"
  },
  {
    id: 7,
    trader: "EtherKing",
    pair: "LINK/USDT",
    action: "Buy",
    confidence: "88%",
    time: "1d ago",
    positive: true,
    message: "Chainlink forming a cup and handle pattern. Long at $7.5 with targets $8.2, $9.0. Stop at $7.0.",
    leverageRecommended: "5x",
    timeframe: "4h",
    source: "Twitter",
    status: "Closed (Loss)"
  },
  {
    id: 8,
    trader: "AltcoinGuru",
    pair: "ADA/USDT",
    action: "Buy",
    confidence: "79%",
    time: "2d ago",
    positive: true,
    message: "Cardano breaking out of descending channel. Entry: $0.32, targets: $0.35, $0.39. Stop: $0.31.",
    leverageRecommended: "3x",
    timeframe: "1d",
    source: "Telegram",
    status: "Closed (Win)"
  },
];

export default function Signals() {
  const openSignals = allSignals.filter(signal => signal.status === "Open");
  const closedSignals = allSignals.filter(signal => signal.status.includes("Closed"));
  
  return (
    <>
      <SiteHeader />
      <main className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trading Signals</h1>
            <p className="text-muted-foreground">AI-analyzed signals from top traders</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem checked>All Pairs</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>BTC Only</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>ETH Only</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Altcoins</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Buy Signals</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Sell Signals</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Confidence > 80%</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ArrowUpDown className="h-4 w-4" /> Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem checked>Newest First</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Oldest First</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Highest Confidence</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>By Trader</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search signals..."
                className="pl-8 h-9 w-[200px] lg:w-[280px] bg-muted"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="open" className="mb-8">
          <TabsList>
            <TabsTrigger value="open">Open Signals ({openSignals.length})</TabsTrigger>
            <TabsTrigger value="closed">Closed Signals ({closedSignals.length})</TabsTrigger>
            <TabsTrigger value="followed">Following</TabsTrigger>
            <TabsTrigger value="executed">Executed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="open" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openSignals.map((signal) => (
                <div key={signal.id} className="signal-card">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
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
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" /> {signal.timeframe} Chart
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" /> {signal.time}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      Leverage: {signal.leverageRecommended}
                    </div>
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
          
          <TabsContent value="closed" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {closedSignals.map((signal) => (
                <div key={signal.id} className="signal-card relative">
                  <div className="absolute top-4 right-4">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      signal.status.includes("Win") 
                        ? "bg-success/20 text-success" 
                        : "bg-danger/20 text-danger"
                    }`}>
                      {signal.status}
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
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
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    {signal.message}
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" /> {signal.timeframe} Chart
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" /> {signal.time}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      Leverage: {signal.leverageRecommended}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border/50 flex justify-between">
                    <Button size="sm" variant="outline">View Analysis</Button>
                    <Button size="sm" variant="secondary">
                      <Check className="mr-1 h-3 w-3" /> Closed
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="followed" className="mt-6">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No followed signals yet</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Follow traders to receive their trading signals and copy trades automatically.
              </p>
              <Button>Find Traders to Follow</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="executed" className="mt-6">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No executed signals yet</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                When you copy trades from signals, they will appear here for easy tracking.
              </p>
              <Button>Explore Signals</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </>
  );
}
