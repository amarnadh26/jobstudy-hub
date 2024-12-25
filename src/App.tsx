import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs/it" element={<Index />} />
          <Route path="/jobs/non-it" element={<Index />} />
          <Route path="/jobs/remote" element={<Index />} />
          <Route path="/jobs/internships" element={<Index />} />
          <Route path="/roadmaps/it" element={<Index />} />
          <Route path="/roadmaps/non-it" element={<Index />} />
          <Route path="/roadmaps/beginner" element={<Index />} />
          <Route path="/news/it" element={<Index />} />
          <Route path="/news/trends" element={<Index />} />
          <Route path="/news/non-it" element={<Index />} />
          <Route path="/resources/study" element={<Index />} />
          <Route path="/resources/interview" element={<Index />} />
          <Route path="/resources/certifications" element={<Index />} />
          <Route path="/resources/tutorials" element={<Index />} />
          <Route path="/tools/resume" element={<Index />} />
          <Route path="/tools/assessment" element={<Index />} />
          <Route path="/tools/tracker" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;