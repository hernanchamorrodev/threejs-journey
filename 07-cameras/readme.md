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

#CAMERAS

abstract class
se supone que no se utiliza directamente

## Array camera
render the scene from multiples cameras on specific areas of the render

## Stereo Camera
render the scene through two cameras that mimic the eyes to create a parallax effect
Use with devices like VR headset, red and blue glasses or cardboard

## Cube camera
render 6 times
each one facing a different direction
render the surrounding for things like environment map, reflection or shadow map

## Orthographic camera
render the scene without perspective

different lack of perspective
falta de perspectiva

Objects has the same size regardless of their distance of the camera
regardless -> a pesar de todo

instead of a field of view, we provide how far the camera can see in each direction (left, right, top and bottom)

Cuando los objetos sean aplastados por el height
se debe solucionar de la siguiente manera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(
    -1 * aspectRatio,
    1 * aspectRatio,
    1,
    -1,
    0.1,
    100
)

## Custom Controls
control camera position with the mouse

primero escuchar a mousemove (evento) con addEventListener y devolver el event.clientX y el event.clientY para obtener las coordenadas en pantalla

estos valores estan en pixeles y deben ajustarse
buscamos el valor con una amplitud de 1 que pueda ser negativo o positivo



Orthographic + Perspective

## Perspective camera

1 Parameter
vertifcal vision angle (75°)
in degrees
also called fov (field of view)

2 Parameter
aspect ratio
width of the render divide by the height of the render

3 and 4 Parameter
near and far
how close or how far the camera can see
fuera de estos numeros los objetos no se veran

## Fly controls
habilita a mover la camara en el espacio con 3 ejes

## First person controls
como en FPS

## Orbit controls
como visto desde la orbita de la tierra

no se puede acceder desde la clase THREE.OrbitControls -> undefined
se importa el modulo desde los modulos de node

la clase necesita camara y el elemento del DOM para los eventos del mouse

target -> hacia donde mira
es un Vector3
controls.target.y = 2
controls.update()

Dampling
smooth the animation by adding some kind of acceleration and friction

habilitar damping con enableDaming en true


## Trackball controls
se puede ver en profundidad desde un punto fijo

## Transform controls
pero no hace nada con la camara

## Drag controls
muevo objetos de forma plana
