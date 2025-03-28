
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, User, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // Will be replaced with actual auth state later

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-500"></span>
              <span className="ml-2 text-xl font-bold">CopyTrade</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link to="/signals" className="text-sm font-medium transition-colors hover:text-primary">
              Signals
            </Link>
            <Link to="/kols" className="text-sm font-medium transition-colors hover:text-primary">
              KOLs
            </Link>
            <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/account">Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background border-t",
        mobileMenuOpen ? "slide-in-from-top-80" : "hidden"
      )}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/dashboard"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/signals"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Signals
          </Link>
          <Link 
            to="/kols"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            KOLs
          </Link>
          <Link 
            to="/pricing"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          {isLoggedIn ? (
            <>
              <Link 
                to="/account"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
              <Link 
                to="/settings"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <Button className="mt-4">Logout</Button>
            </>
          ) : (
            <>
              <Link 
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full mt-4">Login</Button>
              </Link>
              <Link 
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full mt-2">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
