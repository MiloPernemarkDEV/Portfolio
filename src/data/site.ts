export const site = {
  name: "Milo Pernemark",
  title: "Software Engineer | C++ | Systems & Game Technology",
  description:
    "I build high-performance software, game systems, and developer tools using C++, C#, and modern software engineering practices.",
  email: "milosnya@gmail.com",
  github: "https://github.com/MiloPernemarkDEV",
  linkedin: "https://www.linkedin.com/in/milopernemark",
  resume: "/resume.pdf",
  school: "Forsbergs Skola",
  schoolUrl: "https://www.forsbergsskola.se/",
} as const;

export const internship = {
  headline:
    "Seeking a 40-week Software Engineering Internship starting February 1st, 2027.",
  focusAreas: [
    "C++ Software Engineering",
    "Systems Programming",
    "Engine Programming",
    "Graphics Programming",
    "Backend Development",
    "Developer Tools",
  ],
} as const;

export const about = {
  text: "I am a software engineer focused on C++, systems programming, and interactive technology. My interests include engine architecture, graphics programming, backend systems, developer tools, and performance optimization.",
  education:
    "Currently studying Game Programming at Forsbergs, building a foundation in software engineering, engine systems, and interactive technology.",
} as const;

export const skills = {
  languages: ["C++", "C", "C#", "Python", "Rust", "Odin"],
  technologies: [
    "Unreal Engine",
    "Unity",
    "OpenGL",
    "Vulkan",
    "Git",
    "CMake",
    "SQLite",
    "Firebase",
  ],
  concepts: [
    "OOP",
    "Data Structures",
    "Algorithms",
    "Debugging",
    "Software Architecture",
    "Memory Management",
  ],
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "heatmapper",
    title: "Heatmapper",
    description:
      "Telemetry visualization tool that collects Unreal Engine gameplay data and displays interactive heatmaps.",
    technologies: [
      "C++",
      "OpenGL",
      "ImGui",
      "Unreal Engine",
      "Firebase Firestore",
      "REST API",
    ],
    highlights: [
      "Custom C++ application",
      "OpenGL renderer",
      "ImGui interface",
      "Backend communication",
      "Data visualization",
    ],
    image: "/assets/projects/melon-engine-editor.png",
    imageAlt: "Heatmapper telemetry visualization interface",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV",
      },
    ],
  },
  {
    id: "unreal-ai",
    title: "Unreal Engine AI System",
    description:
      "Modular AI system built with Unreal Engine C++ architecture.",
    technologies: [
      "C++",
      "Unreal Engine 5",
      "Behavior Trees",
      "AI Perception",
    ],
    highlights: [
      "AI systems",
      "Event-driven architecture",
      "Behavior trees",
      "Custom gameplay components",
    ],
    image: "/assets/projects/calliope-final.png",
    imageAlt: "Unreal Engine AI system gameplay screenshot",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Forsbergs-Skola/HeliconUnrealOne",
      },
    ],
  },
  {
    id: "graphics-engine",
    title: "Graphics / Engine Projects",
    description:
      "Low-level projects exploring rendering, engine architecture, and performance.",
    technologies: ["C++", "OpenGL", "Vulkan", "CMake"],
    highlights: [
      "Vulkan rendering pipeline",
      "Modular engine architecture",
      "Cross-language FFI bridge",
      "Performance-focused design",
    ],
    image: "/assets/projects/melon-engine-compute.png",
    imageAlt: "Graphics engine compute shader visualization",
    links: [
      {
        label: "Melon Engine",
        href: "https://github.com/MiloPernemarkDEV/MelonEngine",
      },
      {
        label: "All Repositories",
        href: "https://github.com/MiloPernemarkDEV?tab=repositories",
      },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
