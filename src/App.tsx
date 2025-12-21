import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

import Plasma from "@/components/ui/Plasma";
import { initToolbar } from '@21st-extension/toolbar';
import { useEffect } from 'react';

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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
          <Plasma 
            color="#e0e0e0"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
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
