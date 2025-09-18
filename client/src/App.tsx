import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlogPostPage from "@/pages/blog-post";
import NotFound from "@/pages/not-found";

function AppRouter() {
  // Configure router base for GitHub Pages deployment
  const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");
  
  return (
    <Router base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog/:id" component={BlogPostPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
