import { projects } from "./site";

// One Markdown file per breakdown: src/content/breakdowns/<project-id>.md
// Files stay out of the first page load and are fetched when a breakdown is opened.
const loaders = import.meta.glob<string>("../content/breakdowns/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

const markdownCache = new Map<string, string>();
const inflight = new Map<string, Promise<string | undefined>>();

function idFromPath(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.md$/, "");
}

function projectOrder(id: string) {
  const index = projects.findIndex((project) => project.id === id);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

export const breakdownIds = Object.keys(loaders)
  .map(idFromPath)
  .sort((a, b) => projectOrder(a) - projectOrder(b));

const idSet = new Set(breakdownIds);

export function hasBreakdown(id: string) {
  return idSet.has(id);
}

function loaderFor(id: string) {
  const match = Object.entries(loaders).find(([path]) => idFromPath(path) === id);
  return match?.[1];
}

export function cachedMarkdown(id: string) {
  return markdownCache.get(id);
}

export function loadBreakdown(id: string) {
  const cached = markdownCache.get(id);
  if (cached != null) return Promise.resolve(cached);

  const pending = inflight.get(id);
  if (pending) return pending;

  const load = loaderFor(id);
  if (!load) return Promise.resolve(undefined);

  const next = load()
    .then((markdown) => {
      markdownCache.set(id, markdown);
      return markdown;
    })
    .finally(() => {
      inflight.delete(id);
    });
  inflight.set(id, next);
  return next;
}

let pagePrefetch: Promise<unknown> | undefined;

export function prefetchBreakdown(id: string) {
  pagePrefetch ??= import("../components/BreakdownPage");
  void loadBreakdown(id);
}

export function prefetchAllBreakdowns() {
  for (const id of breakdownIds) prefetchBreakdown(id);
}
