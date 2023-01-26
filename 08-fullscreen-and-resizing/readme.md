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

# FULL SCREEN
get the viewport width and height

window.innerWidth
window.innerHeight

# HANDLE RESIZE
listen resize event for window

first update size
then camera
despues el aspect ratio
cuando se llama a este ultimo hay que actualizar con updateProjectionMatrix()
y el renderer