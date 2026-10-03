## Fresnel
One of the concepts I had to learn for this shader was the Fresnel effect. The basic idea is that the effect becomes stronger when viewing a surface at a shallow, grazing angle.

``` View direction = normalize(camera position - fragment position) ```

``` Fresnel = 1.0 - saturate(dot(surface normal, view direction) ```

For every fragment, we calculate the view direction by normalizing the difference between the camera position and the fragment's interpolated position in world space.
Then to get the Fresnel we clamp the dot product of the surface normals and the view direction within 0-1 and invert the result. 

``` Edge color = portal color * Fresnel * edge brightness; ```

The Fresnel scalar is then used as a edge mask to emphasize the edge of the portal.  

## Noise-Based UV Distortion
Animated noise sample to warp the UV coordinates of another noise sample, producing the flowing effect.

## Full Shader
[View on GitHub](https://github.com/MiloPernemarkDEV/UnityShaderLab/blob/main/Assets/ShaderLab/Shaders/ProjectileShader.shader)