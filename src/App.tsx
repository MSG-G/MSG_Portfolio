import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to track page views on route changes
const PageViewTracker = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
