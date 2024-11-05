import * as THREE from 'three';

// Setup scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create material and set properties
const material = new THREE.MeshBasicMaterial({
    color: 0xFFEA02,          // Set color
    wireframe: true,           // Enable wireframe mode
    wireframeLinewidth: 2,     // Set line width (may vary in effect depending on WebGL implementation)
    wireframeLinecap: 'round', // Set line cap style for wireframe
    wireframeLinejoin: 'round' // Set line join style for wireframe
});

// Create geometry and mesh
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
