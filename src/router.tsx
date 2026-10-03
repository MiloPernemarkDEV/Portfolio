import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

function stripBase(pathname: string) {
  const base = import.meta.env.BASE_URL;
  if (base !== "/" && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length - 1);
  }
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  return pathname || "/";
}

export function currentPath() {
  return stripBase(window.location.pathname);
}

export function toHref(to: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (to.startsWith("#")) return `${base}/${to}`;
  if (to.startsWith("/")) return `${base}${to}`;
  return `${base}/${to}`;
}

interface RouteValue {
  path: string;
  navigate: (to: string) => void;
}

const RouteContext = createContext<RouteValue | null>(null);

export function RouteProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const sync = () => setPath(currentPath());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const navigate = (to: string) => {
    const href = toHref(to);
    const next = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (href !== next) {
      window.history.pushState(null, "", href);
    }
    setPath(currentPath());
  };

  return (
    <RouteContext.Provider value={{ path, navigate }}>{children}</RouteContext.Provider>
  );
}

export function useRoute() {
  const value = useContext(RouteContext);
  if (!value) throw new Error("useRoute must be used inside RouteProvider");
  return value;
}

export function AppLink({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const { path, navigate } = useRoute();
  const target = to.startsWith("#") ? `/${to}` : to;
  const stayOnPage = path === "/" && to.startsWith("#");

  return (
    <a
      href={stayOnPage ? to : toHref(target)}
      className={className}
      onClick={(event) => {
        onClick?.();
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }
        if (stayOnPage) return;
        event.preventDefault();
        navigate(target);
      }}
    >
      {children}
    </a>
  );
}
