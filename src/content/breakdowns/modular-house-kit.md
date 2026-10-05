## Overview

This project was made in 3ds Max to learn more about the art production pipeline and environment art. Unfortunately, I did not have time to complete the full environment kit due to multiple school projects coming in, but I really enjoyed working on it and learned a lot about the process.

I definitely want to continue exploring environment art and create more environment focused work in the future.

## Modelling
I blocked out the roof with simple guide meshes so I could match the slope and pull exact measurements before modeling the real piece.

![Guide meshes used to measure the roof in 3ds Max](/assets/projects/modular-house/model-roof-guide.png)

The same roof corner in wireframe. This makes the edge flow easier to read and shows how the piece sits on the guide.

![Wireframe of the roof corner built from the guide](/assets/projects/modular-house/model-roof-wireframe.png)

I worked on each model individually, followed the exact measurements, and exported a collision mesh for every model using the UCX prefix so Unreal Engine automatically applies the collision.

![The modular pieces laid out one by one in 3ds Max](/assets/projects/modular-house/model-pieces.png)

## Trim Sheets
The kit uses two trim sheets instead of texturing each piece individually, reducing texture memory. The modules share the same trim sheets, making it quick and simple to add new pieces. Beide sheets were textured in Substance Painter.

![Wood and plaster trim open in Substance Painter](/assets/projects/modular-house/trim-substance.jpg)

### Trim Sheet 1: Wood & Plaster
This sheet handles the main structural surfaces and framing:
* **Upper Band Wall Plaster:** Used for the seamless, tilable plaster surfaces on the walls.
* **Lower Bands Wood Trim:** Used for structural elements like doors, windows, and decorative frames.

---

![Stone, tile, and ground trim sheet](/assets/projects/modular-house/trim-sheet.jpg)

### Trim Sheet 2: Stone, Tile & Ground
This sheet contains the textures used for tessellation:
* **Main Section Stone:** Used for the structural stone walls.
* **Lower Left Section Roof Tile:** Dedicated to the roof tiles, Unfortunately, I did not have time to UV unwrap the roof for this prototype, so this section of the trim sheet remains unused.
* **Right Corner Stone Gravel:** A small tileable section of gravel for subtle details.

> **Key Takeaway:** A major lesson learned during this process was how critical it is to plan and maintain a consistent texel density across all sections when creating a combined trim sheet.

---

## Blockout in Unreal Engine
![The same house in Unreal before the trim textures](/assets/projects/modular-house/house-blockout.jpg)

Working with art requires quick iteration, so as soon as the first version of the pieces was finished, I created a blockout in Unreal Engine. From there, I could update any of the FBX files in 3ds Max and reimport them into Unreal, automatically updating the corresponding pieces in the scene.

---

## UV Unwrap
![A module unwrapped in 3ds Max onto horizontal trim strips](/assets/projects/modular-house/uv-unwrap.png)

In 3ds Max, I unwrap each module onto the trim sheets. Parts using the same material are mapped and aligned onto the corresponding horizontal strips, allowing the walls, doors, and windows to seamlessly share the same texture space.
