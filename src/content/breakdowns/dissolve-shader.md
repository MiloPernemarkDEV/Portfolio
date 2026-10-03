


## Noise Based Dissolve 
The dissolve is driven by a grayscale noise texture. Each fragment samples the texture and uses its value to determine wether that part of the mesh should remain visible.  

``` noise = SAMPLE_TEXTURE2D(noise texture, sampler, vertex uv)  ```

Using a texture as a mask gives the makes the dissolve irregular instead of a uniform transition across the mesh. 

## Fragment Clipping
The sampled noise is compared against a threshold using clip().

``` clip(noise - threshold) ```

This discards the crurrent fragment when the expression is below 0. As the threshold increases more fragments are discarded causing the mesh to dissapear according to the pattern of the noise texture. 

It was very intresting playing around with the fragments to adjust the appereance of a mesh, not something you think about everyday as a game programmer. 

## Dissolve Edge
To highlight the boundary between visible and dissolved areas, I calculate how close each noise value is to the current dissolve threshold.

``` float distance = abs(noise - dissolve) ```

``` float edge = 1.0 - smoothstep( 0.0, _EdgeWidth, distance ) ```

This produces a narrow mask around the dissolve boundary that is then used to add an emissive edge color. 

## How to integrate into a game 
The current shader animates the dissolve threshold internally using time and a speed multiplier. In a game, the dissolve threshold could instead be exposed as a material property and controlled from C#.

A gameplay event could then modify the threshold to trigger the effect, for example when an object is destroyed, spawned, or affected by an ability.

The material can be created from the Dissolve Shader and assigned to any compatible mesh that needs to use the effect.

## Full Shader
[View on GitHub](https://github.com/MiloPernemarkDEV/UnityShaderLab/blob/main/Assets/ShaderLab/Shaders/DissolveShader.shader)