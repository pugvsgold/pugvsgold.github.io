
import * as three from './files/three.js';
import {GLTFLoader} from './files/GLTFLoader.js';
import {OrbitControls} from './files/OrbitControls.js';
const loader = new GLTFLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer(  );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const material = new THREE.MeshStandardMaterial( { color: 0xc7c86f } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.scale.set(1, 1.3, 1);

//new

const controls = new OrbitControls(
camera, renderer.domElement );
///*
//const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
//const tor = new THREE.Mesh(geometry, material);

//scene.add(tor);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 15, 15);
scene.add(pointLight);
//*/
//new
camera.position.z = 30;
camera.position.y = 50;
camera.rotation.x = 60;
controls.update();


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let randx = [], randy = [];


for (let j = 0; j < 100; j++) {

	randx[j] = getRndInteger(0,13);
	randy[j] = getRndInteger(0,13);
}
let eggnos = 0;


//let ball = new THREE.Mesh();
loader.load("./assets/pythonv3.glb",function(gltf){
	const root = gltf.scene;
	//root.scale.set(1,1,1);
	//root.position.x= 2;
	const pbod = root.children[0];
	const phead = root.children[1];
	//scene.add(root);
	//const noi = root.clone();
	//noi.position.set(0,0,0);
	scene.add(phead);
	phead.rotation.y-=11/7
	//scene.add(pbod);
	//pbod.rotate.z+=90;
	
	const arr = [];//gltf.asset;
	var x = 1,y = 0;
	let up = true, down = false, left = false, right = false;
	let eggposx = randx[0]*2, eggposy = randy[0]*2;
	let eggno = 1;
	function animate() {
	requestAnimationFrame( animate );
	x = x+1;
	
	cube.position.set(eggposx, 0, eggposy);
	
	
	
		window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
    	if (up != true){
    		if (left==true){
    		phead.rotation.y+=11/7;
    		}
    		else if(right==true){
    		phead.rotation.y-=11/7;
    		}
    	down = true;
    	up = false;
    	left = false;
    	right = false;
    	
    	}
      // Do something for "down arrow" key press.
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
    	if (down != true){
    		if (left==true){
    		phead.rotation.y-=11/7;
    		}
    		else if(right==true){
    		phead.rotation.y+=11/7;
    		}
    	down = false;
    	up = true;
    	left = false;
    	right = false;
    		
    	}
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
    		if (up==true){
    		phead.rotation.y+=11/7;
    		}
    		else if(down==true){
    		phead.rotation.y-=11/7;
    		}
    	if (right != true){
        down = false;
    	up = false;
    	left = true;
    	right = false;
    		
    	}
      //root.position.z += 2;// Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
    	if (left != true){
    	    	if (down==true){
    		phead.rotation.y+=11/7;
    		}
    		else if(up==true){
    		phead.rotation.y-=11/7;
    		}
        down = false;
    	up = false;
    	left = false;
    	right = true;

    	}
      //root.position.z -= 2;// Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
    	//root.position.x += 2;
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
	
	
	
	
	
	
	if (x == 20) {
	//root.position.x += 2;
	//pbod.position.z += 2;
	x=1;
	
	if (eggposx == phead.position.x && eggposy == phead.position.z ) {
		eggposx = randx[eggno]*2;
		eggposy = randy[eggno]*2;
		
		cube.position.set(eggposx, 0, eggposy);
		console.log("eaten");
		console.log(eggposx);
		console.log(eggposy);
		
		arr[y] = pbod.clone();
		arr[y].position.set(0,0,0);
		scene.add(arr[y]);
		y= y + 1;
		
		eggno += 1;
		eggnos = eggnos + 1;
	}
	
	
	
	for (let i = 0; i < arr.length; i++) {
		if (i==arr.length-1) {
			arr[0].position.x=phead.position.x;
			arr[0].position.y=phead.position.y;
			arr[0].position.z=phead.position.z;
			arr[0].rotation.y=phead.rotation.y;
		//console.log(i);
		}
		else if (arr.length > 1) {
			arr[arr.length-1-i].position.x=arr[arr.length-2-i].position.x;
			arr[arr.length-1-i].position.y=arr[arr.length-2-i].position.y;
			arr[arr.length-1-i].position.z=arr[arr.length-2-i].position.z;
			arr[arr.length-1-i].rotation.y=arr[arr.length-2-i].rotation.y;
			//console.log(i);
		}
	}
	
			
	
		if (up == true){
		phead.position.z -= 2;
		} else if (down == true){
		phead.position.z += 2;
		} else if (left == true){
		phead.position.x -= 2;
		} else if (right ==true){
		phead.position.x += 2;
		}
	
	
	


	
	
	
	
	
	
	
	
	}
	
	//tor.rotation.x += 0.01;
	//root.rotation.y += 0.01;
	//gltf.asset.rotation.y += 0.01;
	controls.update();
	renderer.render( scene, camera );
	}


animate();
	
	//renderer.render(scene,camera);
	});
	

loader.load("./assets/platformv2.glb",function(gltf){
	const platform = gltf.scene;
	platform.scale.set(4,1,4);
	platform.position.set(0,-1,0);
	//root.position.x= 2;
	scene.add(platform);
	//const noi = root.clone();
	//noi.position.set(0,0,0);
	//scene.add(noi);
	//gltf.asset;
	//platform.position.x = root.position.z;

	
	//renderer.render(scene,camera);
	});
let gudds = [];
loader.load("./assets/guddu.glb",function(gltf){
	const guddu = gltf.scene;
	guddu.scale.set(1,1,1);
	guddu.position.set(randx[eggnos]*2,-1, randy[eggnos]*2);
	//root.position.x= 2;
	//scene.add(guddu);
	console.log(randx[eggnos]*2)
	
	//const noi = root.clone();
	//noi.position.set(0,0,0);
	//scene.add(noi);
	//gltf.asset;
	//platform.position.x = root.position.z;

	
	//renderer.render(scene,camera);
	});






