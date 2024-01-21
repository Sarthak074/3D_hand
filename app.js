import * as THREE from "./three.js-master/build/three.module.js";

import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";

const canvas=document.querySelector('.webgl');//its important
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

// Load a GLB model
loader.load("assets/model.glb", (glb) => {
  const root=glb.scene;
  root.scale.set(0.2,0.4,0.2)
  root.position.set(1,2,-9)
  root.rotation.set(-1.2,3,28)
  scene.add(glb.scene);
});

const light=new THREE.DirectionalLight(0xff5f23, 1);
light.position.set(2,2,5);
scene.add(light);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
/* const express = require("express");
const app = express();

app.use(express.static("public", { type: "module" }));
app.use("/node_modules", express.static("node_modules"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 */