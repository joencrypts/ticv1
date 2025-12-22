import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import { initToolbar } from '@21st-extension/toolbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load heavy components
const Ripple = lazy(() => import("@/components/ui/ripple").then(m => ({ default: m.Ripple })));

const queryClient = new QueryClient();

// Define your toolbar configuration
const stagewiseConfig = {
  plugins: [],
};

// Initialize the toolbar when your app starts
// Only initialize once and only in development mode
function setupStagewise() {
  if (import.meta.env.DEV) {
    initToolbar(stagewiseConfig);
  }
}

const App = () => {
  // Initialize toolbar on mount
  useEffect(() => {
    setupStagewise();
  }, []);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
          <Suspense fallback={null}>
            <Ripple />
          </Suspense>
        </div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
