## Trim Sheets
The kit uses two trim sheets to save memory by avoiding texturing each individual pieces. The modules share the same trim sheets instead of using separate textures, which makes adding new pieces quick and simple.

![Wood and plaster trim open in Substance Painter](/assets/projects/modular-house/trim-substance.jpg)

Both of the sheets were textured in Substance Painter. We are dividing the texture into multiple parts, The upper band is the wall plaster, and the lower bands are the wood for the door, window, and frames.

![Stone, tile, and ground trim sheet](/assets/projects/modular-house/trim-sheet.jpg)

## Blockout
![The same house in Unreal before the trim textures](/assets/projects/modular-house/house-blockout.jpg)

Working with art requries quick iteration so as soon as the version 1 pieces were done i made a blockout in Unreal Engine, then from 3DS Max i can export a updated version of any of these fbxs and reimport them to unreal and they will be automatically updated in the scene.

## UV Unwrap
![A module unwrapped in 3ds Max onto horizontal trim strips](/assets/projects/modular-house/uv-unwrap.png)

In 3ds Max, I unwrap each module onto the trim sheets. Parts that use the same material are placed on the same strip, letting the walls, doors, and windows share the same textures.
