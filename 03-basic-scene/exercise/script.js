// mesh
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1)

// material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// mesh
const mesh = new THREE.Mesh(geometry, material)

// add mesh to the scene
scene.add(mesh)


// Temporary sizes
const sizes = {
    width: 800,
    height: 600
}
// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// set camera position z
camera.position.z = 5
camera.position.y = 2
camera.position.x = 2

// add camera to scene
scene.add(camera)

// retrieve canvas
const canvas = document.querySelector('.webgl')

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

// set size of the render
renderer.setSize(sizes.width, sizes.height)

// render
renderer.render(scene, camera)

console.log(THREE)