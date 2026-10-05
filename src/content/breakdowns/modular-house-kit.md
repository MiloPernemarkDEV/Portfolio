## Trim Sheets
The kit uses two trim sheets instead of texturing each piece individually, reducing texture memory. The modules share the same trim sheets, making it quick and simple to add new pieces. Beide sheets were textured in Substance Painter.

![Wood and plaster trim open in Substance Painter](/assets/projects/modular-house/trim-substance.jpg)

### Trim Sheet 1: Wood & Plaster
This sheet handles the main structural surfaces and architectural framing:
* **Upper Band (Wall Plaster):** Used for the seamless, tilable plaster surfaces on the walls.
* **Lower Bands (Wood Trim):** Used for structural elements like doors, windows, and decorative frames.

---

![Stone, tile, and ground trim sheet](/assets/projects/modular-house/trim-sheet.jpg)

### Trim Sheet 2: Stone, Tile & Ground
This sheet handles the heavy masonry and environment foundations:
* **Main Section (Stone):** Used for the structural stone walls and foundations.
* **Lower-Left Section (Roof Tile):** Dedicated to the roof tiles (remains unused for this prototype as the roof was not UV-unwrapped in time).
* **Right Corner (Stone Gravel):** A small tileable section of gravel for ground details and vertex blending transitions.

> **Key Takeaway:** A major lesson learned during this process was how critical it is to plan and maintain a consistent texel density across all sections when creating a combined trim sheet.

---

## Blockout in Unreal Engine
![The same house in Unreal before the trim textures](/assets/projects/modular-house/house-blockout.jpg)

Working with art requires quick iteration, so as soon as the first version of the pieces was finished, I created a blockout in Unreal Engine. From there, I could update any of the FBX files in 3ds Max and reimport them into Unreal, automatically updating the corresponding pieces in the scene.

---

## UV Unwrap
![A module unwrapped in 3ds Max onto horizontal trim strips](/assets/projects/modular-house/uv-unwrap.png)

In 3ds Max, I unwrap each module onto the trim sheets. Parts using the same material are mapped and aligned onto the corresponding horizontal strips, allowing the walls, doors, and windows to seamlessly share the same texture space.
