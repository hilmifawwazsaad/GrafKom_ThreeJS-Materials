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
points.push(new THREE.Vector3(1, 1, 0));
points.push(new THREE.Vector3(-1, 1, 0));
points.push(new THREE.Vector3(-1, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const lineMaterial = new THREE.LineDashedMaterial({
    color: '#0000ff',
    linewidth: 1,
    scale: 1,
    dashSize: 0.1,
    gapSize: 0.1,
});

const line = new THREE.Line(geometry, lineMaterial);
line.computeLineDistances();
scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();