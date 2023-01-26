import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//resize event
window.addEventListener('resize', () => {
    // update object
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // update renderer -> change pixel ratio
    // pixel ratio 2 -> 4 times more pixels to render
    // pixel ratio 3 -> 9 times
    // good limit of 2
    // get current pixel ratio -> window.devicePixelRatio
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height)
})

// handle fullscreen
window.addEventListener('dblclick', () => 
{

    // prefixed versions for safari
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    // to know if we are already in fullscreen
    if(!document.fullscreenElement)
    {
        // go to the fullscreen -> requestFullscreen() on the element
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if (canvas.webkitFullscreenElement)
        {
            canvas.webkitRequestFullscreen()
        }
    } else 
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if (canvas.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
// controls.enable = false
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()