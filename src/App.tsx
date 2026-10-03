import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { prefetchAllBreakdowns } from "./data/breakdowns";
import { RouteProvider, useRoute } from "./router";

const BreakdownPage = lazy(() => import("./components/BreakdownPage"));

function Page() {
  const { path } = useRoute();
  const [shown, setShown] = useState(path);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const first = useRef(true);

  useEffect(() => {
    const id = window.requestIdleCallback(() => prefetchAllBreakdowns(), { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }, []);

  useEffect(() => {
    if (path.startsWith("/breakdown/")) prefetchAllBreakdowns();
  }, [path]);

  useEffect(() => {
    if (path === shown) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(path);
      return;
    }
    setPhase("out");
    const timeout = window.setTimeout(() => setShown(path), 280);
    return () => window.clearTimeout(timeout);
  }, [path, shown]);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (shown === "/" && hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
    if (first.current) {
      first.current = false;
      return;
    }
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => setPhase("in"));
    });
    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, [shown]);

  const breakdownId = shown.match(/^\/breakdown\/([^/]+)$/)?.[1];

  return (
    <div
      className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        phase === "in"
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      {breakdownId ? (
        <Suspense fallback={null}>
          <BreakdownPage id={decodeURIComponent(breakdownId)} />
        </Suspense>
      ) : (
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouteProvider>
      <LoadingScreen />
      <Navbar />
      <Page />
      <Footer />
    </RouteProvider>
  );
}
