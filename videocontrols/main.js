const media = document.querySelector("video");
let hours = prompt("Enter time in hours:  ");
let minutes = prompt("Enter time in minutes:  ");
//let seconds = prompt("Enter time in seconds:  ");
let month = prompt("Enter month in text: ");
let date = prompt("Enter date: ");

//let sec = prompt("Enter time in seconds:  ");
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute audio on video
  media.muted = true;
}




let myimage = document.querySelector('button');
myimage.onclick = function(){
myimage.style.fontSize = "0px";
myimage.style.opacity = 0;
let start = new Date(Date.now());
//let datee = new Date('May 29, 2023 19:15:00');
let datee = new Date( month + ' ' + date +', 2023 ' + hours + ':' + minutes + ':00');
console.log(datee);

while ( datee > start) {
start = new Date(Date.now());
console.log("wait");
if ( datee <= start) {
media.play();
}
}


)
