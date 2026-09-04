export const site = {
  name: "Milo Pernemark",
  role: "Game Programmer",
  title: "C++ | C# | Gameplay Systems | AI | Engine Technology",
  description:
    "I write gameplay systems, AI, simulation, and engine code in C++ and C#. I care about how the pieces fit together under the engine, not just the feature on top.",
  email: "milosnya@gmail.com",
  github: "https://github.com/MiloPernemarkDEV",
  linkedin: "https://www.linkedin.com/in/milopernemark",
  resume: "/resume.pdf",
  school: "Forsbergs Skola",
  schoolUrl: "https://www.forsbergsskola.se/",
} as const;

export const internship = {
  headline:
    "Seeking a 40-week Game Programming Internship starting February 1st, 2027.",
  detail:
    "I'm studying Game Programming at Forsbergs and looking for an internship on real production systems like gameplay, AI, engine, and tools, with the chance to continue into employment afterward.",
  focusAreas: [
    "Gameplay Programming",
    "Systems Programming",
    "AI & Simulation",
    "C++ / C# Programming",
    "Engine & Tools Programming",
    "Graphics Programming",
  ],
} as const;

export const about = {
  heading: "A bit about me",
  text: "My name is Milo Pernemark. I'm 22, I live in Stockholm, and I'm from both Sweden/Finland and Spain.",
  education:
    "Alongside class work I'm building a Unity settlement sim and a Vulkan engine from scratch.",
  extra:
    "Apart from the technical work, I like to bring good energy to the people around me, and I love working in team projects.",
} as const;

export const skills = {
  languages: ["C++", "C", "C#"],
  technologies: [
    "Unreal Engine",
    "Unity",
    "Vulkan",
    "OpenGL",
    "CMake",
    "Git",
    "SQLite",
  ],
  concepts: [
    "Gameplay Systems",
    "AI & Behavior Trees",
    "Data-driven Design",
    "Memory Management",
    "Algorithms",
    "Debugging",
  ],
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  status?: string;
  featured?: boolean;
  technologies: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "goblin-settlement-sim",
    title: "Goblin Settlement Sim",
    status: "In progress",
    featured: true,
    description:
      "Unity simulation game still in development. I'm building the technical foundation myself to explore how AI and settlement gameplay can scale.",
    technologies: ["Unity", "C#", "AI", "Behavior Tree", "Simulation"],
    highlights: [
      "Custom AI framework inspired by Unreal's AI architecture",
      "Custom Behavior Tree, Blackboard, and node/execution system",
      "Event-driven gameplay through an EventRelay",
      "Simulation systems, UI plumbing, and data-driven setup",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/GoblinSettlementSimGame",
      },
    ],
  },
  {
    id: "melon-engine",
    title: "Melon Engine",
    status: "In progress",
    featured: true,
    description:
      "Custom game engine written from scratch in C++. Unfinished does not mean abandoned. I use it to work through engine architecture, Vulkan rendering, and Win32.",
    technologies: ["C++23", "Vulkan", "Win32 API", "VMA", "Rust FFI", "CMake"],
    highlights: [
      "Native Win32 window layer for window creation, events, and Vulkan surface extensions",
      "Vulkan instance and device setup, with VMA for GPU memory",
      "Core engine pieces: arena allocator, job system, math, ImGui",
      "FFI bridge so renderer code can be written in Rust or C++",
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
    id: "uss-calliope",
    title: "USS Calliope",
    status: "5-person team",
    featured: true,
    description:
      "Unity team project. I owned the combat system: data-driven weapons, ballistics, hit chance, combat feedback, plus player audio and animation.",
    technologies: ["Unity", "C#", "ScriptableObjects", "Gameplay"],
    highlights: [
      "Data-driven combat via ScriptableObject weapon and attack configs",
      "Ballistics with Box-Muller Gaussian spread",
      "Hit chance system and combat feedback",
      "Player audio and animation",
      "Custom EditorWindow with a unique ID generator for assets",
    ],
    image: "/assets/projects/calliope-final.png",
    imageAlt: "USS Calliope late-production vertical slice with HUD",
    links: [],
  },
  {
    id: "telemetry-for-dummies",
    title: "Telemetry For Dummies",
    status: "School × studio",
    description:
      "School project with an external studio on an undisclosed Unreal title. I built the playtest dog AI and turned in-game telemetry into a reusable plugin package.",
    technologies: [
      "Unreal Engine 5",
      "C++",
      "AI",
      "Behavior Tree",
      "Plugins",
    ],
    highlights: [
      "Dog AI: AI Controller, Perception sight, Behavior Tree, blackboard target, reacts to thrown meat",
      "AI actions written into the same telemetry log as the rest of the session",
      "Ported game telemetry into a UE plugin with a World Subsystem",
      "Automatic player and actor position sampling from project settings (class, tags, possessed pawn)",
    ],
    links: [],
  },
  {
    id: "the-unseen",
    title: "The Unseen",
    description:
      "Unreal C++ systems work: a node-based interaction puzzle architecture and compile-time debug utilities.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints"],
    highlights: [
      "Decoupled puzzle architecture with Board, Node, and Link actors",
      "Type-safe DebugUtility using variadic templates, stripped from shipping builds",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Forsbergs-Skola/HeliconUnrealOne/tree/main",
      },
    ],
  },
  {
    id: "vectormath-pong",
    title: "Native Math Library & Pong",
    description:
      "Unmanaged C++ math and physics running inside Unity through a DLL. Low-level code talking to C# without copies.",
    technologies: ["C++", "C#", "Unity", "P/Invoke"],
    highlights: [
      "DllImport exposing raw C++ structures to Unity",
      "LayoutKind.Sequential for zero-copy structure passing",
      "AABB collision and reflection handled entirely in the C++ backend",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/Vectormath_and_pong",
      },
    ],
  },
  {
    id: "raylib-arcade",
    title: "Native 2D Arcade",
    description:
      "Self-contained C++ arcade app in Raylib. Screen flow, collisions, and resources written by hand without an editor.",
    technologies: ["C++", "Raylib"],
    highlights: [
      "Explicit state machine for screen lifecycle",
      "Manual bounding-box intersection for actor overlaps",
      "Manual texture and audio allocation and teardown",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/mojo_picon_zombieHunter",
      },
    ],
  },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
