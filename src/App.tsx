import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
const ProjectPage = lazy(() => import("./pages/ProjectPage.tsx"));
const WorksPage = lazy(() => import("./pages/WorksPage.tsx"));
const TermsAndPoliciesPage = lazy(() => import("./pages/TermsAndPoliciesPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
import { HelmetProvider } from "react-helmet-async";
import { PageSeo } from "./components/PageSeo";


const App = () => (
  <HelmetProvider>
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
  </HelmetProvider>
);

export default App;
