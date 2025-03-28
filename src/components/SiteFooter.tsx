
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-500"></div>
            <span className="ml-2 text-xl font-bold">CopyTrade</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            Automated crypto copy trading platform powered by AI. Follow top traders and copy their winning strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/signals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Signals
                </Link>
              </li>
              <li>
                <Link to="/kols" className="text-muted-foreground hover:text-foreground transition-colors">
                  KOLs
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
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CopyTrade Collective. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Trading involves risk. Invest responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
