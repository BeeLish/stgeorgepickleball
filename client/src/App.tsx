import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import EventsHub from "./pages/EventsHub";
import Home from "./pages/Home";
import VenuePage from "./pages/VenuePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events" component={EventsHub} />
      <Route path="/events/:slug" component={EventPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/venues/:slug" component={VenuePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <GoogleAnalytics />
      <ScrollToTop />
      <Router />
    </ErrorBoundary>
  );
}
