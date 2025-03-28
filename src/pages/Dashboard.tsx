
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  BarChart,
  Bell,
  ArrowUp,
  ArrowDown,
  Plus,
  Settings,
  Info,
} from "lucide-react";

export default function Dashboard() {
  // Mock data - would be fetched from API in real app
  const portfolioValue = "$12,345.67";
  const portfolioChange = "+12.34%";
  const isPositive = true;

  const activeTrades = [
    { 
      id: 1, 
      pair: "BTC/USDT", 
      type: "Long", 
      entry: "$28,450", 
      current: "$29,230", 
      pnl: "+2.74%", 
      positive: true,
      trader: "CryptoWhale",
      time: "2h ago" 
    },
    { 
      id: 2, 
      pair: "ETH/USDT", 
      type: "Short", 
      entry: "$1,850", 
      current: "$1,810", 
      pnl: "+2.16%", 
      positive: true,
      trader: "EtherKing",
      time: "4h ago" 
    },
    { 
      id: 3, 
      pair: "SOL/USDT", 
      type: "Long", 
      entry: "$23.45", 
      current: "$22.85", 
      pnl: "-2.56%", 
      positive: false,
      trader: "SolanaTrader",
      time: "8h ago" 
    },
  ];

  const recentSignals = [
    {
      id: 1,
      trader: "CryptoWhale",
      pair: "BTC/USDT",
      action: "Buy",
      confidence: "92%",
      time: "2h ago",
      positive: true
    },
    {
      id: 2,
      trader: "EtherKing",
      pair: "ETH/USDT",
      action: "Sell",
      confidence: "87%",
      time: "4h ago",
      positive: false
    },
    {
      id: 3,
      trader: "SolanaTrader",
      pair: "SOL/USDT",
      action: "Buy",
      confidence: "78%",
      time: "8h ago",
      positive: true
    },
    {
      id: 4,
      trader: "AltcoinGuru",
      pair: "ADA/USDT",
      action: "Buy",
      confidence: "81%",
      time: "10h ago",
      positive: true
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your portfolio and trading activity</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Bell className="h-4 w-4" /> Alerts
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Settings className="h-4 w-4" /> Settings
            </Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioValue}</div>
              <div className={`flex items-center text-sm ${isPositive ? 'text-success' : 'text-danger'}`}>
                {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {portfolioChange} (30d)
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeTrades.length}</div>
              <div className="text-sm text-muted-foreground">
                Across {new Set(activeTrades.map(t => t.pair)).size} pairs
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5,678.90</div>
              <div className="text-sm text-muted-foreground">
                USDT on Binance
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trades">Active Trades</TabsTrigger>
            <TabsTrigger value="signals">Recent Signals</TabsTrigger>
            <TabsTrigger value="history">Trade History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Performance Chart</CardTitle>
                    <AreaChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>Your portfolio performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full flex items-center justify-center border border-dashed rounded-md">
                    <div className="text-muted-foreground flex flex-col items-center gap-2">
                      <BarChart className="h-8 w-8" />
                      <p>Performance Chart</p>
                      <p className="text-xs">(Mock visualization)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Top Copied Traders</CardTitle>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Traders you're currently copying</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "CryptoWhale", roi: "+42.3%", following: true },
                        { name: "EtherKing", roi: "+36.8%", following: true },
                        { name: "SolanaTrader", roi: "+28.5%", following: true },
                      ].map((trader, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                              {trader.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{trader.name}</p>
                              <p className="text-sm text-success">{trader.roi} (30d)</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Following</Button>
                        </div>
                      ))}
                      <Button variant="ghost" size="sm" className="w-full mt-2 flex items-center justify-center">
                        <Plus className="h-4 w-4 mr-1" /> Find More Traders
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Signals</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Latest trading signals from your followed traders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 scrollbar-hide">
                      {recentSignals.map((signal) => (
                        <div key={signal.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                          <div>
                            <p className="font-medium">{signal.trader}</p>
                            <div className="flex items-center">
                              <p className="text-sm">{signal.pair} - </p>
                              <p className={`text-sm ml-1 ${signal.positive ? 'text-success' : 'text-danger'}`}>
                                {signal.action}
                              </p>
                            </div>
                            <p className="text-xs text-muted-foreground">{signal.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Confidence</p>
                            <p className={`text-sm ${parseInt(signal.confidence) > 85 ? 'text-success' : 'text-warning'}`}>
                              {signal.confidence}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trades" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Trades</CardTitle>
                  <Button size="sm" variant="outline">Close All</Button>
                </div>
                <CardDescription>All your currently open positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="h-12 px-4 text-left align-middle font-medium">Pair</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Entry</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Current</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">PNL</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Trader</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Time</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeTrades.map((trade) => (
                        <tr key={trade.id} className="border-b border-border/50 last:border-0">
                          <td className="p-4 align-middle font-medium">{trade.pair}</td>
                          <td className={`p-4 align-middle ${trade.type === 'Long' ? 'text-success' : 'text-danger'}`}>
                            {trade.type}
                          </td>
                          <td className="p-4 align-middle">{trade.entry}</td>
                          <td className="p-4 align-middle">{trade.current}</td>
                          <td className={`p-4 align-middle font-medium ${trade.positive ? 'text-success' : 'text-danger'}`}>
                            {trade.pnl}
                          </td>
                          <td className="p-4 align-middle">{trade.trader}</td>
                          <td className="p-4 align-middle text-muted-foreground">{trade.time}</td>
                          <td className="p-4 align-middle text-right">
                            <Button size="sm" variant="destructive">Close</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="signals" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Signals</CardTitle>
                  <Button size="sm" variant="outline">Filter</Button>
                </div>
                <CardDescription>Latest trading signals from your followed traders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentSignals.map((signal) => (
                    <div key={signal.id} className="signal-card">
                      <div className="flex justify-between items-start">
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
                        <div className="text-right">
                          <div className="text-sm font-medium">AI Confidence</div>
                          <div className={`text-base font-bold ${parseInt(signal.confidence) > 85 ? 'text-success' : 'text-warning'}`}>
                            {signal.confidence}
                          </div>
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
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Trade History</CardTitle>
                  <Button size="sm" variant="outline">Export</Button>
                </div>
                <CardDescription>Your past trading activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="h-12 px-4 text-left align-middle font-medium">Pair</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Entry</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Exit</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">PNL</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Trader</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { 
                          id: 1, 
                          pair: "BTC/USDT", 
                          type: "Long", 
                          entry: "$27,450", 
                          exit: "$28,230", 
                          pnl: "+2.84%", 
                          positive: true,
                          trader: "CryptoWhale",
                          date: "May 10, 2023" 
                        },
                        { 
                          id: 2, 
                          pair: "ETH/USDT", 
                          type: "Short", 
                          entry: "$1,920", 
                          exit: "$1,810", 
                          pnl: "+5.73%", 
                          positive: true,
                          trader: "EtherKing",
                          date: "May 8, 2023" 
                        },
                        { 
                          id: 3, 
                          pair: "SOL/USDT", 
                          type: "Long", 
                          entry: "$22.45", 
                          exit: "$21.85", 
                          pnl: "-2.67%", 
                          positive: false,
                          trader: "SolanaTrader",
                          date: "May 5, 2023" 
                        },
                      ].map((trade) => (
                        <tr key={trade.id} className="border-b border-border/50 last:border-0">
                          <td className="p-4 align-middle font-medium">{trade.pair}</td>
                          <td className={`p-4 align-middle ${trade.type === 'Long' ? 'text-success' : 'text-danger'}`}>
                            {trade.type}
                          </td>
                          <td className="p-4 align-middle">{trade.entry}</td>
                          <td className="p-4 align-middle">{trade.exit}</td>
                          <td className={`p-4 align-middle font-medium ${trade.positive ? 'text-success' : 'text-danger'}`}>
                            {trade.pnl}
                          </td>
                          <td className="p-4 align-middle">{trade.trader}</td>
                          <td className="p-4 align-middle text-muted-foreground">{trade.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </>
  );
}
