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


Animation -> like stop motion
-Move object
-Take a picture
-Move the object a bit more
-Take a picture

update objects and do a render on each frame
window.requestAnimationFrame()
llama a una funcion que se provee en cada proximo frame
llamamos a la misma funciona en cada nuevo frame

¿Cuanto tiempo paso desde el ultimo tick?
 -> Date.now()

Metodo Clock
clock.getElapsedTime() -> tiempo transcurrido

more control, create tweens, create timelines -> gsap

GSAP
No es necesario invocar el requestAnimationFrame ya que lo hace para nuestras animaciones
gsap.to() -> crea una interpolacion
gsap.to(mesh.position, {duration: x, delay: x, x: x;})