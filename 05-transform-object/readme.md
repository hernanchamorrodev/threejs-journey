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


## TRANSFORM OBJECTS
camera y mesh poseen estas propiedades porque las heredan de OBJECT3D

4 properties
-position
-scale
-rotation
-quaternion

compiled in matrices

move objects
-x
-y
-z

position
length()
distanceTo(camera.position) -> distancia desde un objecto a otro
normalize() -> normalizar valores
sirve para funciones como length() en la que 1 es 1.88888888
 y esto lo normaliza

 se pueden modificar los valores de x, y, z de una vez con
 set()
mesh.position.set(0.7, 0.6, 1)

### AXES HELPER
se utiliza para colorear las lineas de los ejes
### SCALE OBJECTS
para escalar objetos

### ROTATE
para rotar objetos
se pueden rotar con rotation o quaternion, uno actualiza el otro
los valores de los axis son expresados en radians
la mitad de una rotation -> puede usarse Math.PI

gimbal lock
para solucionar este bloqueo por rotation se puee utilizar
reorder('xyz')

lookat()
rota el objeto para que -z enfrente al objetivo que se provee

### SCENE GRAPH
se pueden colocar objetos en Groups y utilizar position, rotation, y scale en esos grupos

Group class para esto




