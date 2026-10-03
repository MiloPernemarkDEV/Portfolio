


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

```hlsl
Shader "Custom/DissolveShader"
{
    Properties
    {
        _BaseMap ("Base Map", 2D) = "white" {}
        _Color ("Color", Color) = (1,1,1,1)

        _Noise ("Noise", 2D) = "white" {}
        _DissolveAmount ("Dissolve Amount", Range(0,1)) = 0
        _EdgeWidth("Edge Width", Range(0, 0.5)) = 0.1
        _EdgeColor("Edge Color", Color) = (1, 1, 1, 1)
        _Speed("Speed", Range(0, 10)) = 1
        _Enabled("Enabled", Float) = 0
    }

    SubShader
    {
        Tags
        {
            "RenderType" = "Opaque"
            "RenderPipeline" = "UniversalPipeline"
        }

        Pass
        {
            HLSLPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionHCS : SV_POSITION;
                float2 uv : TEXCOORD0;
            };

            TEXTURE2D(_BaseMap);
            SAMPLER(sampler_BaseMap);

            TEXTURE2D(_Noise);
            SAMPLER(sampler_Noise);

            CBUFFER_START(UnityPerMaterial)

                float4 _BaseMap_ST;
                float4 _Color;
                float4 _EdgeColor;
                float _DissolveAmount;
                float _EdgeWidth;
                float _Speed;
            CBUFFER_END

            Varyings vert(Attributes IN)
            {
                Varyings OUT;

                OUT.positionHCS = TransformObjectToHClip(IN.positionOS.xyz);
                OUT.uv = TRANSFORM_TEX(IN.uv, _BaseMap);

                return OUT;
            }

            float4 frag(Varyings IN) : SV_Target
            {
                float noise = SAMPLE_TEXTURE2D(_Noise, sampler_Noise, IN.uv).r;

                float4 baseColor = SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, IN.uv);

                float dissolve = saturate(frac(_Time.y * _Speed));

                float distance = abs(noise - dissolve);
                float edge = 1.0 - smoothstep(0.0, _EdgeWidth, distance);
                edge *= step(0.001, dissolve);
                float3 color = baseColor.rgb + edge * _EdgeColor;

                clip(noise - dissolve);

                return float4(color, 1);
            }

            ENDHLSL
        }
    }
}
```
