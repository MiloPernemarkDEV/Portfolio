export const site = {
  name: "Milo Pernemark",
  role: "Game Programmer",
  heroGreeting: "Hi, I'm Milo.",
  heroFocus: "I build gameplay.",
  heroInvite:
    "C++ and C# for engines, graphics, AI, and tools — usually with a coffee within reach.",
  title: "C++ · C# · Unreal · Unity · Engine Technology",
  description:
    "Gameplay programmer working in C++ and C#. I build gameplay systems, AI, graphics, and engine code, and I care how it feels in the player's hands.",
  email: "milosnya@gmail.com",
  github: "https://github.com/MiloPernemarkDEV",
  linkedin: "https://www.linkedin.com/in/milo-pernemark-a78235274/",
  resume: "/resume.pdf",
  school: "Forsbergs Skola",
  schoolUrl: "https://www.forsbergsskola.se/",
  photo: "/assets/milo.jpg",
} as const;

export function publicUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export const internship = {
  headline:
    "Looking for a 40-week game programming internship from 1 February 2027.",
  detail:
    "I'm studying Game Programming at Forsbergs and want a production seat — gameplay, AI, engine, tools, or graphics — with a path to employment after.",
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
  heading: "About",
  text: "I'm a game programmer in Stockholm. I care about systems that feel right in the player's hands: combat and interaction, AI, graphics, and the engine code underneath.",
  education:
    "Alongside class I'm building a Unity AI behavior framework and a Vulkan engine from scratch.",
  extra:
    "I like shipping in a team. Coffee is usually within reach.",
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
  role?: string;
  engine?: string;
  platform?: string;
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
    id: "the-unseen",
    title: "The Unseen",
    featured: true,
    role: "Gameplay Programmer",
    engine: "Unreal Engine 5",
    platform: "PC",
    description:
      "Unreal C++. I built the node-based interaction puzzle architecture, a Niagara weather system, and compile-time debug utilities.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Niagara"],
    highlights: [
      "Decoupled puzzle architecture with Board, Node, and Link actors",
      "Dynamic weather system and Niagara rain",
      "Type-safe DebugUtility using variadic templates, stripped from shipping builds",
    ],
    image: "/assets/projects/unseen.mp4",
    imageAlt: "The Unseen gameplay clip",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Forsbergs-Skola/HeliconUnrealOne/tree/main",
      },
      {
        label: "Showcase Video",
        href: "https://www.youtube.com/watch?v=0Rc8_kRZEK0",
      },
    ],
  },
  {
    id: "uss-calliope",
    title: "USS Calliope",
    status: "5-person team",
    featured: true,
    role: "Combat Programmer",
    engine: "Unity",
    platform: "PC",
    description:
      "Unity team project. I owned combat: data-driven weapons, ballistics, hit chance, feedback, plus player audio and animation.",
    technologies: ["Unity", "C#", "ScriptableObjects", "Gameplay"],
    highlights: [
      "Data-driven combat via ScriptableObject weapon and attack configs",
      "Ballistics with Box-Muller Gaussian spread",
      "Hit chance system and combat feedback",
      "Player audio and animation",
      "Custom EditorWindow with a unique ID generator for assets",
    ],
    image: "/assets/projects/uss-calliope.mp4",
    imageAlt: "USS Calliope gameplay clip",
    links: [
      {
        label: "Contributions",
        href: "/assets/projects/uss-calliope-contributions.pdf",
      },
      {
        label: "Showcase Video",
        href: "https://www.youtube.com/watch?v=EgMWL9ezOO0",
      },
    ],
  },
  {
    id: "telemetry-for-dummies",
    title: "Telemetry Plugin",
    status: "School × studio",
    featured: true,
    role: "Gameplay / Tools",
    engine: "Unreal Engine 5",
    platform: "PC",
    description:
      "Studio collaboration on an undisclosed Unreal title. I shipped telemetry as a reusable plugin with automatic actor tracking so design could enable logging without writing code.",
    technologies: [
      "Unreal Engine 5",
      "C++",
      "AI",
      "Behavior Tree",
      "Plugins",
    ],
    highlights: [
      "World Subsystem packaged as a plugin, built to drop into other Unreal projects",
      "Auto-tracks actor positions from project settings using class, tags, or the possessed pawn",
      "Designer-friendly config so logging can be enabled without writing code",
      "Playtest dog AI writes into the same telemetry log as the rest of the session",
    ],
    image: "/assets/projects/telemetry.mp4",
    imageAlt: "Telemetry Analytics Viewer showing player movement paths and event markers",
    links: [],
  },
  {
    id: "unity-ai-behavior-framework",
    title: "Unity AI Behavior Framework",
    status: "In progress",
    featured: true,
    role: "AI / Systems",
    engine: "Unity",
    platform: "PC",
    description:
      "Unreal-style AI in Unity: blackboards, behavior trees, and custom nodes. Stress-tested at 5,000 NavMeshAgents at 60 fps.",
    technologies: ["Unity", "C#", "AI", "Behavior Tree", "Blackboard", "NavMesh"],
    highlights: [
      "Unreal-style AI architecture implemented in Unity",
      "Blackboard backed by a heterogeneous map so keys can hold different value types",
      "Behavior Trees and custom Behavior Tree nodes",
      "5 thousand NavMeshAgents with simple behavior at 60 fps",
    ],
    image: "/assets/projects/unity-ai-behavior-framework.mp4",
    imageAlt: "Unity AI Behavior Framework with thousands of NavMeshAgents",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/UnityAIBehaviorFramework",
      },
    ],
  },
  {
    id: "melon-engine",
    title: "Melon Engine",
    status: "In progress",
    featured: true,
    role: "Engine Programmer",
    engine: "Custom / Vulkan",
    platform: "PC",
    description:
      "Custom C++ engine. Vulkan rendering, Win32, memory, and jobs — unfinished on purpose, used to stay sharp on engine architecture.",
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
    id: "vectormath-pong",
    title: "Native Math Library & Pong",
    role: "Engine / Interop",
    engine: "Unity + C++",
    platform: "PC",
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
    role: "Gameplay Programmer",
    engine: "Raylib",
    platform: "PC",
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
