import { projects } from "./site";

// One Markdown file per breakdown: src/content/breakdowns/<project-id>.md
const files = import.meta.glob("../content/breakdowns/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export interface Breakdown {
  id: string;
  markdown: string;
}

function idFromPath(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.md$/, "");
}

export const breakdowns: Breakdown[] = Object.entries(files)
  .map(([path, markdown]) => ({
    id: idFromPath(path),
    markdown,
  }))
  .sort((a, b) => {
    const order = (id: string) => {
      const index = projects.findIndex((project) => project.id === id);
      return index === -1 ? Number.MAX_SAFE_INTEGER : index;
    };
    return order(a.id) - order(b.id);
  });

export function breakdownById(id: string) {
  return breakdowns.find((breakdown) => breakdown.id === id);
}
