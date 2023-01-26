import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 1
// mesh.position.y = 2
// mesh.position.z = 1
// mesh.scale.x = 2
// mesh.scale.y = 2
// mesh.scale.z = 3
// mesh.rotation.reorder('YZX')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = 3
// mesh.rotation.z = 5
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
        color: 'green'
    })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({
        color: 'red'
    })
)
cube2.position.set(0,0,1)
group.add(cube1)
group.add(cube2)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10
camera.position.y = 1
camera.position.x = 3
scene.add(camera)

// camera.lookAt(new THREE.Vector3(1, 0, 0))
// camera.lookAt(mesh.position)

// axes helper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)