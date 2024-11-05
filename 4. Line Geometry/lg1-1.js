// Script to draw a line using LineBasicMaterial and BufferGeometry
import * as THREE from '../node_modules/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ffffff', 1);
document.body.appendChild(renderer.domElement);

camera.position.z = 3;

const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(-1, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

// Use this when using vertex colors
// Delete color in LineBasicMaterial or change it to white
// Change vertexColors to true
const colors = [
    1, 0, 0,
    0, 1, 0
];
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const linematerial = new THREE.LineBasicMaterial({
    color: '#0000ff',
    linewidth: 1,
    linecap: 'round',
    linejoin: 'bevel',
    vertexColors: false // disable vertex colors
});

const line = new THREE.Line(geometry, linematerial);
scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
