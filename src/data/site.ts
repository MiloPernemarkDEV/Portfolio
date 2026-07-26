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
  image?: string;
  imageAlt?: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "melon-engine",
    title: "Melon Engine",
    description:
      "A modular Vulkan 1.3 graphics engine written from scratch in modern C++. Built to gain a deep, practical understanding of low-level hardware initialization, OS interaction, and the Win32 API.",
    technologies: ["C++20", "Vulkan 1.3", "Win32 API", "Rust FFI", "CMake"],
    highlights: [
      "Native Win32 window layer for window instantiation and renderer utilities",
      "FFI bridge for writing renderer code in both Rust and C++",
      "Decoupled architecture with layered static libraries",
      "Explicit Vulkan contexts, swapchains, and pipeline abstractions",
    ],
    image: "/assets/projects/melon-engine-editor.png",
    imageAlt: "Melon Engine editor viewport",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/MelonEngine",
      },
    ],
  },
  {
    id: "the-unseen",
    title: "The Unseen",
    description:
      "A modular, node-based interaction puzzle system alongside compile-time debug utilities built using Unreal Engine C++.",
    technologies: ["Unreal Engine 5", "C++", "Systems", "Blueprints"],
    highlights: [
      "Decoupled puzzle architecture with Board, Node, and Link actors",
      "Type-safe DebugUtility using variadic templates, stripped from shipping builds",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Forsbergs-Skola/HeliconUnrealOne",
      },
    ],
  },
  {
    id: "uss-calliope",
    title: "USS Calliope",
    description:
      "A collaborative 5-player group project where I developed core weapon ballistics, data-driven item management via ScriptableObjects, and workflow tools for designers.",
    technologies: ["Unity", "C#", "ScriptableObjects", "Editor Tools"],
    highlights: [
      "Box–Muller transforms for realistic weapon spread patterns",
      "Data-driven weapons using modular ScriptableObject configurations",
      "Custom EditorWindow utility with unique ID generator for assets",
    ],
    image: "/assets/projects/calliope-final.png",
    imageAlt: "USS Calliope late-production vertical slice with HUD",
    links: [
      {
        label: "View Script Source",
        href: "https://github.com/MiloPernemarkDEV/PortfolioPage",
      },
    ],
  },
  {
    id: "vectormath-pong",
    title: "Native Math Library & Pong Clone",
    description:
      "A technical exercise in cross-language communication, featuring a custom 2D math and physics library written in unmanaged C++ running inside Unity via DLL plugins.",
    technologies: ["C++", "C#", "Unity", "P/Invoke", "Native Plugins"],
    highlights: [
      "DllImport to expose raw C++ structures to Unity's managed environment",
      "LayoutKind.Sequential formatting for zero-copy structure passing",
      "AABB collision and reflection vectors handled entirely in the C++ backend",
    ],
    links: [
      {
        label: "View Plugin Source",
        href: "https://github.com/MiloPernemarkDEV/Vectormath_and_pong",
      },
    ],
  },
  {
    id: "raylib-arcade",
    title: "Native 2D Arcade Project",
    description:
      "A self-contained arcade application built using Raylib to practice core architectural patterns without relying on an all-in-one editor interface.",
    technologies: ["C++", "Raylib"],
    highlights: [
      "Explicit state machine for clean screen lifecycle transitions",
      "Manual bounding box intersection checks for actor overlaps",
      "Explicit resource lifecycle with manual texture and audio allocation",
    ],
    links: [
      {
        label: "View Raylib Source",
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
