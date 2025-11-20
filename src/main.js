import { Renderer } from './core/Renderer.js';
import { Scene } from './core/Scene.js';
import { Camera } from './core/Camera.js';
import { Mesh } from './core/Mesh.js';
import { Vec3 } from './core/Vec3.js';
import { Constants } from './core/Constants.js';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const renderer = new Renderer(canvas);
const scene = new Scene();
const camera = new Camera(Constants.DEFAULTS.FOV, window.innerWidth / window.innerHeight, Constants.DEFAULTS.NEAR, Constants.DEFAULTS.FAR);

// Buat cube sederhana
const cube = new Mesh();
cube.position = new Vec3(0, 0, -5);
scene.add(cube);

// Resize handler
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Animasi berputar
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
