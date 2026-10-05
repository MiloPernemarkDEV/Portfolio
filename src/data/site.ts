export const site = {
  name: "Milo Pernemark",
  role: "Technical Artist & Game Programmer",
  heroGreeting: "Hi, I'm Milo.",
  heroFocus: "I bridge code and art through gameplay systems, rendering, tools, and technical VFX.",
  heroInvite:
    "",
  description:
    "Game programmer focused on C++, graphics, and game technology. Gameplay, engine systems, rendering, and technical tools, including Unreal, Niagara, and Vulkan.",
  email: "milosnya@gmail.com",
  github: "https://github.com/MiloPernemarkDEV",
  linkedin: "https://www.linkedin.com/in/milo-pernemark-a78235274/",
  school: "Forsbergs Skola",
  schoolUrl: "https://www.forsbergsskola.se/",
  photo: "/assets/milo.jpg",
} as const;

export const about = {
  heading: "About",
  text: "I'm a TA/Game programmer in Stockholm, I love building systems and making games look good and run fast.",
  education:
    "Alongside class I'm exploring shaders, VFX and graphics.",
  extra:
    "I am a calm and social person who enjoys meditation and coffee, id like to work in a team that values collaboration and creativity, and I am always eager to learn and grow as a game developer.",
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
  callout?: { label: string; text: string };
  prominent?: boolean;
  previewStart?: number;
  imagePosition?: string;
  breakdownImagePosition?: string;
  image?: string;
  imageAlt?: string;
  breakdownImageLast?: boolean;
  mediaBesideImage?: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "the-unseen",
    title: "The Unseen",
    featured: true,
    prominent: true,
    engine: "Unreal Engine 5",
    description:
      "Unreal Engine 5 Physcological Puzzle Game made by a team of me and 4 other students.",
    callout: {
      label: "VFX / Technical Art",
      text: "Niagara rain and dynamic weather effects",
    },
    technologies: ["Niagara", "Unreal Engine 5", "C++", "Technical Art", "Blueprints"],
    highlights: [
      "I made the dynamic weather system using Niagara, C++ and Blueprints",
      "Niagara glowing spirits VFX",
      "Board Puzzle in C++",
      "Type safe screen log macro",
    ],
    image: "/assets/projects/unseen.mp4",
    imageAlt: "The Unseen gameplay clip, including Niagara weather",
    previewStart: 23.5,
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
    id: "modular-house-kit",
    title: "Modular House Kit - Prototype",
    featured: true,
    role: "Technical Art",
    engine: "3ds Max",
    platform: "Unreal Engine 5",
    description:
      "",
    technologies: ["3ds Max", "Unreal Engine 5", "Substance Painter", "Trim Sheets"],
    highlights: [
      "Reusable wall, roof, door, and window modules assembled into a house",
      "UVs stacked onto shared trim strips so pieces reuse the same materials",
      "Two trim sheets, one painted in Substance Painter for plaster and wood, and one for stone, tile, and ground",
    ],
    image: "/assets/projects/modular-house/house.jpg",
    imageAlt: "Textured modular house kit assembled in Unreal Engine",
    breakdownImageLast: true,
    links: [],
  },
  {
    id: "dissolve-shader",
    title: "Dissolve Shader",
    featured: true,
    role: "Graphics / Shaders",
    engine: "Unity URP",
    platform: "PC",
    description:
      "Custom URP dissolve shader in HLSL.",
    technologies: ["HLSL", "Unity", "URP", "Shaders"],
    highlights: [
      "Dissolve shader using a noise texture and HLSL clip() to discard fragments based on a dynamic threshold.",
      "Can easily be used and triggered from game code to dissolve any mesh",
    ],
    image: "/assets/projects/dissolve-shader.mp4",
    imageAlt: "Unity dissolve shader eating through a mesh with a glowing edge",
    links: [],
  },
  {
    id: "portal-shader",
    title: "Portal Shader",
    featured: true,
    role: "Graphics / Shaders",
    engine: "Unity URP",
    platform: "PC",
    description:
      "Custom URP portal shader written in HLSL.",
    technologies: ["HLSL", "Unity", "URP", "Shaders"],
    highlights: [
      "Portal shader made in Unity, exploring concepts such as Fresnel effects, animated noise, and UV distortion."
    ],
    image: "/assets/projects/portal-shader.mp4",
    imageAlt: "Unity portal shader with a warped energy core and a bright fresnel rim",
    links: [],
  },
  {
    id: "energy-dice",
    title: "Energy Dice",
    featured: true,
    status: "Upcoming",
    role: "Graphics / Shaders",
    engine: "Unity URP",
    platform: "Mobile",
    description:
      "Chamfered dice with a custom opaque energy material for an upcoming mobile dice builder.",
    technologies: ["HLSL", "Unity", "URP", "3ds Max", "Shaders"],
    highlights: [
      "Dice modeled in 3ds Max by chamfering the vertices of a standard cube",
      "Opaque version of the projectile shader, with the core on the base color and the rim on the energy color",
    ],
    image: "/assets/projects/energy-dice.mp4",
    imagePosition: "center 73%",
    breakdownImagePosition: "natural",
    imageAlt: "Chamfered dice with an opaque energy shader in Unity",
    breakdownImageLast: true,
    mediaBesideImage: "/assets/projects/energy-dice/material.png",
    links: [],
  },
  {
    id: "telemetry-for-dummies",
    title: "Telemetry Gathering Plugin",
    featured: true,
    role: "Gameplay / Tools",
    engine: "Unreal Engine 5",
    platform: "PC",
    description:
      "Studio collaboration on an undisclosed Unreal title. I architected the API for easy integration and use",
    technologies: [
      "Unreal Engine 5",
      "C++",
      "AI",
      "Behavior Tree",
      "Plugins",
    ],
    highlights: [
      "World Subsystem packaged as a plugin, built to drop into other Unreal projects",
      "Auto tracks actor positions from project settings using class, tags, or the possessed pawn",
      "Designer friendly config so logging can be enabled without writing code",
    ],
    image: "/assets/projects/telemetry.mp4",
    imageAlt: "Telemetry Analytics Viewer showing player movement paths and event markers",
    links: [],
  },
  {
    id: "vulkan-raytracer",
    title: "Vulkan renderer",
    status: "In progress",
    featured: true,
    engine: "C++ / Vulkan",
    platform: "PC",
    description:
      "From scratch Vulkan renderer built to understand low level GPU rendering.",
    technologies: ["C++", "Vulkan", "GPU Rendering", "CMake"],
    highlights: [
      "GPU Device setup and mangement",
      "HLSL shaders compiled to SPIR-V with DXC",
      "ImGui viewport tooling over a triangle",
    ],
    image: "/assets/projects/vulkan-raytracer.png",
    imageAlt: "Vulkan ray tracer viewport showing a colored triangle",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiloPernemarkDEV/VulkanRenderer",
      },
    ],
  },
  {
    id: "melon-engine",
    title: "Melon Engine",
    featured: true,
    engine: "Custom / Vulkan",
    platform: "PC",
    description:
      "A open library for exploring core engine systems",
    technologies: ["C++23", "Vulkan", "Win32 API", "VMA", "Rust FFI", "CMake"],
    highlights: [
      "Win32 platform layer for window and utilities",
      "Arena allocator, logger, ",
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
    role: "Combat Programmer",
    engine: "Unity",
    platform: "PC",
    description:
      "Unity team project. I owned combat: data-driven weapons, ballistics, hit chance, feedback, plus player audio and animation.",
    technologies: ["Unity", "C#", "ScriptableObjects", "Gameplay"],
    highlights: [
      "Datadriven combat via ScriptableObject weapon and attack configs",
      "Ballistics with Box-Muller Gaussian spread",
      "Hit chance system and combat feedback",
      "Player audio and animation",
      "Custom EditorWindow with a unique ID generator for assets",
    ],
    image: "/assets/projects/uss-calliope.mp4",
    imageAlt: "USS Calliope gameplay clip",
    links: [
      {
        label: "Showcase Video",
        href: "https://www.youtube.com/watch?v=EgMWL9ezOO0",
      },
    ],
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
      "Unreal style AI in Unity: blackboards, behavior trees, and custom nodes",
    technologies: ["Unity", "C#", "AI", "Behavior Tree", "Blackboard"],
    highlights: [
      "Unreal style AI architecture implemented in Unity",
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
    id: "vectormath-pong",
    title: "Native Math Library & Pong",
    role: "Engine / Interop",
    engine: "Unity + C++",
    platform: "PC",
    description:
      "Native C++ math library used as a plugin in Unity to make a pong clone.",
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
      "Data oriented design for efficient memory management",
      "Simple AI state machine",
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
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
