import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
const ProjectPage = lazy(() => import("./pages/ProjectPage.tsx"));
const WorksPage = lazy(() => import("./pages/WorksPage.tsx"));
const TermsAndPoliciesPage = lazy(() => import("./pages/TermsAndPoliciesPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
import { HelmetProvider } from "react-helmet-async";
import { PageSeo } from "./components/PageSeo";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageSeo />
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/terms-and-policies" element={<TermsAndPoliciesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
