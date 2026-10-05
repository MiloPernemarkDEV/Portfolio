## Trim Sheets
The kit uses two trim sheets instead of texturing each piece individually, reducing texture memory. The modules share the same trim sheets, making it quick and simple to add new pieces.

![Wood and plaster trim open in Substance Painter](/assets/projects/modular-house/trim-substance.jpg)

Both sheets were textured in Substance Painter. The textures are divided into multiple sections: the upper band is used for the wall plaster, while the lower bands contain the wood used for the doors, windows, and frames.

![Stone, tile, and ground trim sheet](/assets/projects/modular-house/trim-sheet.jpg)
Here you can see the stone texture used by the walls, as well as the roof tile texture in the lower-left section of the trim sheet. Unfortunately, I did not have time to UV unwrap the roof for this prototype, so this section of the trim sheet remains unused.

In the right corner, there is also a small section of stone gravel. One thing I learned from this process was how important it is to maintain consistent texel density when creating a trim sheet.

## Blockout
![The same house in Unreal before the trim textures](/assets/projects/modular-house/house-blockout.jpg)

Working with art requires quick iteration, so as soon as the first version of the pieces was finished, I created a blockout in Unreal Engine. From there, I could update any of the FBX files in 3ds Max and reimport them into Unreal, automatically updating the corresponding pieces in the scene.

## UV Unwrap
![A module unwrapped in 3ds Max onto horizontal trim strips](/assets/projects/modular-house/uv-unwrap.png)

In 3ds Max, I unwrap each module onto the trim sheets. Parts using the same material are placed on the same strip, allowing the walls, doors, and windows to share the same textures.