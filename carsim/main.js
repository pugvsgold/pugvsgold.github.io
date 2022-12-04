
import * as three from './files/three.js';
import {GLTFLoader} from './files/GLTFLoader.js';
import {OrbitControls} from './files/OrbitControls.js';
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
const controls = new OrbitControls(camera, renderer.domElement);
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
controls.update();

loader.load("./assets/CARv5.glb",function(gltf){
	const root = gltf.scene;
	//const root = full.children[0];
	//const brw = full.children[1];
	//const frw = full.children[3];
	//const blw = full.children[2];
	//const flw = full.children[4];
	
	
	//const brw = root;
	//const frw = root;
	//const blw = root;
	//const flw = root;
	
	
	//scene.add(flw);
	/*
	brw.scale.set(2,2,2);
	brw.position.y= -3;
	brw.rotation.y = 11/7;
	scene.add(brw);
	
	
	
	
	frw.scale.set(2,2,2);
	frw.position.y= -3;
	
	frw.rotation.y = 11/7;
	scene.add(frw);
	
	
	
	
	blw.scale.set(2,2,2);
	blw.position.y= -3;
	blw.rotation.y = 11/7;
	scene.add(blw);
	
	
	
	
	flw.scale.set(2,2,2);
	flw.position.y= -3;
	flw.rotation.y = 11/7;
	scene.add(flw);
	
	
	
	
	
	flw.position.set(12,-2.5,-1);
	frw.position.set(12,-2.5,10);
	blw.position.set(-10,-2.5,-1);
	brw.position.set(-10,-2.5,10);
	
	
	*/
	
	
	
	
	
	
	
	
	
	root.scale.set(2,2,2);
	root.position.y= 30;
	root.position.set(-9,-1.8,4.5);
	//root.position.set(0,0,0);
	root.rotation.y = 11/7;
	scene.add(root);
	let up = false;//gltf.asset;
	let down = false;
	let left = false;
	let right = false;
	
	let vectx = 1;
	let vecty = 0;
	let vectz = 0;
	
	let px = 1;
	let py = 1;
	let pz = 1;
	
	let resx = 1;
	let resy = 1;
	let resz = 1;
	
	
	
	let theta = 0;
	let vert = 1;
	
	
	let div = 1;
	let div1 = 1;
	let horunit = 1;
	let vermag = 1;
	let hormag = 0;
	
	let val = 1;
	
	
	let speed = 3;
	let ang = 0.06;
	
	
	
	function animate() {
	requestAnimationFrame( animate );
	//tor.rotation.x += 0.01;
	//root.rotation.y += 0.001;
	
	console.log(resx);
	
	
	
	window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
   if(event.key=="ArrowUp"){
    up = true;
    	//root.position.x=root.position.x+0.001;
    	console.log("upcar");
    }else if(event.key=="ArrowDown"){
    down = true;
    console.log("downcar")
    
    }
  
  
  

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
    //	down = true;
   // console.log("down");
   // root.position.x=root.position.x-1;
      // Do something for "down arrow" key press.
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
    	//up = true;
    	//root.position.x=root.position.x+0.001;
    	//console.log("up");
    	//root.position.x=root.position.x+1;
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
    	left = true;
    //root.position.z=root.position.z+1;
      // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
    	right = true;
    //root.position.z=root.position.z-1;
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);





	window.addEventListener("keyup", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
   
  
  
  
  
  
  
  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
   	 down = false;
   // root.position.x=root.position.x-1;
      // Do something for "down arrow" key press.
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
    	up = false;
    	//root.position.x=root.position.x+0.001;
    	console.log("up");
    	//root.position.x=root.position.x+1;
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
    
   	 left = false;
    //root.position.z=root.position.z+1;
      // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
    	right = false;
    //root.position.z=root.position.z-1;
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

	
	
	//flw.position.set(root.position.x+9,10,root.position.z);
	//frw.position.set(root.position.x+9,-3,root.position.z);
	//blw.position.set(root.position.x+9,-3,root.position.z);
	//brw.position.set(root.position.x+9,-3,root.position.z);
	
	
	//flw.position.set(root.position.x+12,-2.5,root.position.z-1);
	//frw.position.set(root.position.x+12,-2.5,root.position.z+10);
	//blw.position.set(root.position.x-10,-2.5,root.position.z-1);
	//brw.position.set(root.position.x-10,-2.5,root.position.z+10);
	
	/*
	flw.position.set(root.position.x+21,-2.5,root.position.z-5.5);
	frw.position.set(root.position.x+21,-2.5,root.position.z+5.5);
	blw.position.set(root.position.x-1,-2.5,root.position.z-5.5);
	brw.position.set(root.position.x-1,-2.5,root.position.z+5.5);
	*/





	if (up==true){
	root.position.z+=vectz * speed;
	root.position.x+=vectx * speed;
	
	//console.log("trrrr");
	//up = false;
	}
	
	if (down==true){
//	root.position.z-=1;
	
	
	root.position.z-=vectz * speed;
	root.position.x-=vectx * speed;
	
	
	
	//console.log("trrrr");
	//up = false;
	}
	
	if (left==true && up==true && down!=true){
	theta = ang;
	//root.rotation.y+=theta;
	//console.log("trrrr");
	
	//up = false;
	}
	
	if (right==true && up == true && down!= true){
	theta = -ang;
	//root.rotation.y+=theta;
	
	//console.log("trrrr");
	//up = false;
	}
	
	
	
	if (left==true && down==true && up != true){
	theta = -ang;
	//root.rotation.y+=theta;
	//console.log("trrrr");
	
	//up = false;
	}
	
	if (right==true && down == true && up != true){
	theta = ang;
	//root.rotation.y+=theta;
	
	//console.log("trrrr");
	//up = false;
	}
	
	
	
	root.rotation.y+=theta;
	
	/*
	flw.rotation.y+=theta;
	frw.rotation.y+=theta;
	blw.rotation.y+=theta;
	brw.rotation.y+=theta;
	*/
	
	
	
	console.log(resx);
	
	resx = vectz*1;
	resy = -vectx*1;
	
	//console.log(resx);
	
	horunit = Math.sqrt((resx*resx) + (resy*resy));
	vermag = Math.sqrt((vectx*vectx) + (vectz*vectz));
	
	
	
	px = resx/horunit;
	py = resy/horunit;
	
	hormag = vermag*Math.tan(theta);
	//console.log(px);
	px = px * hormag;
	py = py * hormag;
	
	div = Math.sqrt((vectx + px)*(vectx + px) + (vectz + py)*(vectz + py));
	//console.log(div);
	vectx = (vectx + px)/div;
	vectz = (vectz + py)/div;
	
	
//vectx = Math.sin(11/21);	
//console.log(vectx);
	
	
	
	//console.log(vectz);
	//console.log(vecty);
	console.log(vectx);
	
	
	if(theta < 0.00001 && theta > -0.00001){
	theta = 0;
	val = 1;
	}else if (up == true || down == true) {
	theta = theta/val;
	val = val + 0.01;
	} else{
	theta = 0;
	val = 1;
	
	}
	
	
	
	//flw.position.set(root.position.x+9,10,root.position.z);
	//frw.position.set(root.position.x+9,-3,root.position.z);
	//blw.position.set(root.position.x+9,-3,root.position.z);
	//brw.position.set(root.position.x+9,-3,root.position.z);
	
	
	/*
	flw.position.set(root.position.x+21,-2.5,root.position.z-5.5);
	frw.position.set(root.position.x+21,-2.5,root.position.z+5.5);
	blw.position.set(root.position.x-1,-2.5,root.position.z-5.5);
	brw.position.set(root.position.x-1,-2.5,root.position.z+5.5);
	*/
	
	//flw.position.set(12 + 9,-2.5 + 1.8,-1 - 4.5);
	//frw.position.set(12 + 9,-2.5 + 1.8,10 - 4.5);
	//blw.position.set(-10 + 9,-2.5 + 1.8,-1 - 4.5);
	//brw.position.set(-10 + 9,-2.5 + 1.8,10 - 4.5);
	
	
	//-9,-1.8,4.5




	//theta = 0;
	
	
	//gltf.asset.rotation.y += 0.01;
	controls.update();
	renderer.render( scene, camera );
	}


animate();
	
	//renderer.render(scene,camera);
	});
	
	
	
	loader.load("./assets/plain-plane.glb",function(gltf){
	const root = gltf.scene;
	root.scale.set(1,1,1);
	root.position.y= -3;
	scene.add(root);
	});
	
	
	
	
	
	
	
	
	



