
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">SignalGuard</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            AI-powered crypto trading signals with unmatched accuracy. Follow top traders and maximize your profits with our advanced signal analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t border-border/40">
        <div className="flex flex-col justify-between items-start">
          <p className="text-xs text-muted-foreground mb-4">
            &copy; {new Date().getFullYear()} SignalGuard.xyz. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground space-y-2 max-w-4xl">
            <p>
              Trading involves risk. Cryptocurrencies are highly volatile assets and can result in significant financial losses. 
              The content provided on SignalGuard.xyz is for informational purposes only and should not be considered as financial advice.
            </p>
            <p>
              Past performance is not indicative of future results. Signal accuracy metrics are based on historical data and are not guarantees of future performance.
              Always conduct your own research before making investment decisions and only trade with capital you can afford to lose.
            </p>
            <p>
              SignalGuard's AI analysis provides probability-based insights, but all trading decisions remain the sole responsibility of the user. 
              By using our platform, you acknowledge that you understand and accept these risks.
            </p>
            <p className="mt-4">
              SignalGuard is not available in certain jurisdictions. Please refer to our Terms of Service for details on restricted countries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
