
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! We couldn't find that page</p>
          <div className="max-w-md mx-auto mb-8 p-6 border border-border rounded-lg bg-card/50">
            <p className="text-muted-foreground">
              The page you're looking for may have been moved, deleted, or never existed.
            </p>
          </div>
          <Link to="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default NotFound;
