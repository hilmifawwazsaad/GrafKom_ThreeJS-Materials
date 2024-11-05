import * as THREE from '../node_modules/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ffffff', 1);
document.body.appendChild(renderer.domElement);

camera.position.z = 3;

const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = [
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // front
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // back
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // top
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // bottom
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // right
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // left
]
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();