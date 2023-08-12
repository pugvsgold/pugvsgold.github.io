const media = document.querySelector("video");
let hours = prompt("Enter time in hours:  ");
let minutes = prompt("Enter time in minutes:  ");
//let seconds = prompt("Enter time in seconds:  ");
let month = prompt("Enter month in text: ");
let date = prompt("Enter date: ");
let differ = 0;
let diff = document.getElementById("difference");
//let sec = prompt("Enter time in seconds:  ");
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // The video element will autoplay with audio.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute audio on video
  media.muted = true;
}




let myimage = document.querySelector('button');
window.addEventListener("DOMContentLoaded", () => {
myimage.onclick = function(){
myimage.style.fontSize = "0px";
myimage.style.opacity = 0;
let start = new Date(Date.now());
//let datee = new Date('May 29, 2023 19:15:00');
let datee = new Date( month + ' ' + date +', 2023 ' + hours + ':' + minutes + ':00');
console.log(datee);
  console.log(differ

start = new Date(Date.now());

differ = datee.getSeconds() - start.getSeconds();
diff.value = differ;

if (datee < start)
{
media.play();
}


}

});

