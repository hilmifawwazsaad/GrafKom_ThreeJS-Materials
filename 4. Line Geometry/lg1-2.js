// Script to draw a line using LineMaterial and LineGeometry
import * as THREE from '../node_modules/three/build/three.module.js';
import { Line2 } from '../node_modules/three/examples/jsm/lines/Line2.js';
import { LineMaterial } from '../node_modules/three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from '../node_modules/three/examples/jsm/lines/LineGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 1;

const points = [-1, 0, 0, 1, 0, 0];

const geometry = new LineGeometry();
geometry.setPositions(points);

const linematerial = new LineMaterial({
    color: 0x0000ff,
    linewidth: 1,
});
linematerial.resolution.set(window.innerWidth, window.innerHeight);

const line = new Line2(geometry, linematerial);
line.computeLineDistances();
scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
