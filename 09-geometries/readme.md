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

# GEOMETRY
vertices en el espacio
y que tienen caras
que son creados con triangulos creados por vertices
se pueden usar en meshes y particulas
pueden guardar mas datos qeu solo las posiciones (uv coordinates, normals, colors or anything)

Todas las geometrias heredan de BufferGeometry
methods
translate, rotateX, normalize

## BOX GEOMETRY
width: size x
height: size y
depth: size z
widthSegments: subdivisions of x (cuantos triangulos componen una cara)
heightSegments:
depthSegments

1 -> 2 triangulos por cara
2 => 8 triangulos por cara

para ver triangulos wireframe:true en el material


## BUFFER GEOMETRY
store buffer geometry data

Float32Array -> data
Typed array
can only store floats
fixed length
easier to handle for the computer

