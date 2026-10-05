## Overview

The die is a chamfered cube modeled in 3ds Max. I adapted my projectile shader into an opaque material for the die, separating the base color of the energy core from the color of the Fresnel rim.

## References

I collected dice references in PureRef before modeling, mainly looking at how the faces remain readable when the corners are rounded.

![Dice references collected in PureRef](/assets/projects/energy-dice/pureref.png)

## Modelling

The mesh starts as a standard cube. I chamfered the vertices to round off the corners and give it the shape of a die.

![Chamfered cube in the 3ds Max viewport](/assets/projects/energy-dice/max-dice.png)

## Opaque

The original projectile shader is transparent. It uses alpha blending and does not write to the depth buffer, which works for a transparent projectile but not for a solid die.

`Render Type = Opaque`

`Blend One Zero`

`ZWrite On`

`Blend One Zero` makes the die fully opaque instead of blending it with objects behind it. Writing to the depth buffer ensures the die correctly occludes other objects. The fragment shader still outputs an alpha value, but it is not used for blending.

## Color Split

The projectile shader uses the energy color for both the flowing core and the Fresnel rim. For the die, I separated these into two colors.

`Core Color = Base Color * smoothstep(0.2, 0.8, noise)`

`Edge Color = Energy Color * Fresnel * Edge Brightness`

The base color drives the flowing energy across the surface, while the energy color is applied to the edges using the Fresnel mask.

## Fresnel

The Fresnel effect becomes especially visible on the chamfered corners of the die. It increases as the viewing angle becomes more parallel to the surface, causing the edges and corners to pick up more of the energy color.

`float fresnel = 1.0 - saturate(dot(normalWS, viewDirection));`

Because the corners have been chamfered instead of being perfectly sharp, the Fresnel effect spreads across the rounded transition between faces. This gives the die a darker base appearance while making the edges glow with the energy color.

## Material

The shader exposes multiple parameters, making it possible to create unique materials with different looks and effects, as shown in the video. Changing the noise texture can dramatically alter the appearance and movement of the VFX.

![Energy dice material using the shader in the Unity inspector](/assets/projects/energy-dice/material.png)

## Full Shader

[View on GitHub](https://github.com/MiloPernemarkDEV/UnityShaderLab/blob/main/Assets/ShaderLab/Shaders/EnergyDiceShader.shader)
