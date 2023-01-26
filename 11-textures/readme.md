# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
# TEXTURES

## COLOR

## ALPHA
-grayscale
white visible
black not visible

## HEIGHT

## NORMAL

## AMBIENT OCCLUSION

## METALNESS

## ROUGHNESS


# PBR PRINCIPLES
Physically based rendering
for realistic reuslts

# LOAD TEXTURES

1.Getting url image
- src folder and import
- static and access directly

2.using native javascript
instance Image, listen to the load event and change its src 

3.transform to a texture to use

# TEXTURE LOADER
TextureLoader -> use load() to create texture
-can load multiple textures
-send 3 functions after the path
-load, progress, error

## Loading manager
mutualize events

 para saber el progreso del estado global de carga o cuando todo esta cargado

console.log(geometry.attributes.uv)
coordenadas uv wrapping cuando se usan primitivos. si creo mi propia geometria, tengo que especificar estas coordenadas

# Transfor texture

repeat -> vector 2 solo tiene x e y
rotation
offset


// filter and mipmapping
two types of filter algorithms: the minification filter and the magnification filter.

Minification filter  
The minification filter happens when the pixels of texture are smaller than the pixels of the render. In other words, the texture is too big for the surface, it covers.

You can change the minification filter of the texture using the minFilter property.

There are 6 possible values:

THREE.NearestFilter
THREE.LinearFilter
THREE.NearestMipmapNearestFilter
THREE.NearestMipmapLinearFilter
THREE.LinearMipmapNearestFilter
THREE.LinearMipmapLinearFilter
The default is THREE.LinearMipmapLinearFilter. If you are not satisfied with how your texture looks, you should try the other filters.



The texture gets all blurry because it's a very small texture on a very large surface.

While you might think this looks awful, it is probably for the best. If the effect isn't too exaggerated, the user will probably not even notice it.

You can change the magnification filter of the texture using the magFilter property.

There are only two possible values:

THREE.NearestFilter
THREE.LinearFilter
The default is THREE.LinearFilter.

If you test the THREE.NearestFilter, you'll see that the base image is preserved, and you get a pixelated texture:

One final word about all those filters is that THREE.NearestFilter is cheaper than the other ones, and you should get better performances when using it.

Only use the mipmaps for the minFilter property. If you are using the THREE.NearestFilter, you don't need the mipmaps, and you can deactivate them with colorTexture.generateMipmaps = false: