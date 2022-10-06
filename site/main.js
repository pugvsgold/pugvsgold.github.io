
import * as three from './files/three.js';
import {GLTFLoader} from './files/GLTFLoader.js';
const loader = new GLTFLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/
//new
///*
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const tor = new THREE.Mesh(geometry, material);

//scene.add(tor);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 15, 15);
scene.add(pointLight);
//*/
//new
camera.position.z = 30;
camera.position.y = 5;
camera.rotation.x = -0.1;


loader.load("./assets/The_plan.glb",function(gltf){
	const root = gltf.scene;
	root.scale.set(2,2,2);
	root.position.y= -3;
	scene.add(root);
	//gltf.asset;
	function animate() {
	requestAnimationFrame( animate );
	//tor.rotation.x += 0.01;
	root.rotation.y += 0.01;
	//gltf.asset.rotation.y += 0.01;
	
	renderer.render( scene, camera );
	}


animate();
	
	//renderer.render(scene,camera);
	});



