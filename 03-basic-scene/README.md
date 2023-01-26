# MINIMAL SCENE
-scene containing objects
-some objects
-a camera
-a render

##SCENE
like a container
-we put objects, models, lights in it
-ask Three to render

##OBJECTS
Things
-primitive geometries
-imported models
-particles
-lights
ex: red cube

## MESH
geometry (FORMA) + Material (COMO SE VE)
Hay que instanciar y mezclar tanto la forma como su Material
THREE.Mesh(geometry, Material)
despues se debe añadir a la escena
scene.add(mesh)

## GEOMETRY
THRE.BoxGeomtry(x,x,x)
parameters correspond to the box size

## camera
-not visible
-serve as point of view when doing render
-can have multiple and switch between them
-different types

FIRST PARAMETER
-- field of view
-vertical vision angle
-in degrees
-called fov

SECOND PARAMETER
Aspect ratio
the width of the render divided by the height of the render

## Renderer
Render scene from camera VIEW
Result draw into canvas
renderer.setSize -> update size of the renderer
renderer.render -> first RENDER -> parameters : scene, camera

camera dentro del cubo
como posicionarlo?
property position
-> x, y , z
-> hacia atras, hacia adelante con z

position
rotation
scale