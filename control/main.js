const media = document.querySelector("video");
const audi = document.querySelector("audio");

let start = new Date(Date.now());
let hours = start.getHours();
let minutes = prompt("Enter time in minutes to start");
//let seconds = prompt("Enter time in seconds:  ");
let month = start.getMonth();
let date = start.getDate();
let differ = 0;
let diff = document.getElementById("difference");


let myimage = document.querySelector('button');




window.addEventListener("DOMContentLoaded", () => {
//let datee = new Date('May 29, 2023 19:15:00');
let datee = new Date( month + 1 + ' ' + date +', 2023 ' + hours + ':' + minutes + ':00');


try {
  wakeLock = await 
  navigator.wakeLock.request("screen");
}
finally {
	console.log("111");
}
	

myimage.onclick = function(){
console.log("clicked");
myimage.style.opacity = 0;
audi.play();

}


const websocket = new WebSocket("wss://socks-production.up.railway.app");

websocket.addEventListener("message", ({ data }) => {
	const evnt = JSON.parse(data);

	switch (evnt.type) {

		case "playy":
			media.play()
	}
});

});
