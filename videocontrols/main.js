const media = document.querySelector("video");
let hours = 19;
let minutes = 1;
let seconds = 1;


let myimage = document.querySelector('button');
myimage.onclick = function(){
myimage.style.fontSize = "0px";
myimage.style.opacity = 0;
myfunc();
}

function myfunc() {
let start = new Date(Date.now());
let datee = new Date('May 29, 2023 19:53:00');

while ( datee > start) {
start = new Date(Date.now());
console.log("wait");
}

media.play()

}
