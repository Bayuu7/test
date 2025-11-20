import { Constants } from './core/Constants.js';
import { Camera } from './core/Camera.js';
import { Scene } from './core/Scene.js';
import { Renderer } from './core/Renderer.js';
import { Cube } from './core/Cube.js';

const canvas = document.getElementById('canvas');
const renderer = new Renderer(canvas);

const scene = new Scene();
const camera = new Camera(Constants.DEFAULTS.FOV, canvas.width/canvas.height, Constants.DEFAULTS.NEAR, Constants.DEFAULTS.FAR);

// Tambah cubes
const cube1 = new Cube([-2,0,0], [0.8,0.2,0.2]);
const cube2 = new Cube([0,0,0], [0.2,0.8,0.2]);
const cube3 = new Cube([2,0,0], [0.2,0.2,0.8]);
scene.add(cube1, cube2, cube3);

// Ground
const ground = new Cube([0,-1,0], [0.5,0.5,0.5], 10);
scene.add(ground);

// Lights
scene.lights.push({ type:'directional', position:[5,5,5] });
scene.lights.push({ type:'point', position:[0,3,0] });

// FPS counter
let lastTime = performance.now();
let frames = 0;

function animate() {
  const now = performance.now();
  frames++;
  if(now - lastTime >= 1000){
    document.getElementById('fps').innerText = `FPS: ${frames}`;
    frames = 0;
    lastTime = now;
  }

  // Orbit camera
  const t = performance.now() * 0.001;
  camera.position[0] = Math.sin(t) * 8;
  camera.position[2] = Math.cos(t) * 8;
  camera.position[1] = 4 + Math.sin(t*0.5);

  renderer.clear();
  scene.render(renderer, camera);
  requestAnimationFrame(animate);
}

animate();
