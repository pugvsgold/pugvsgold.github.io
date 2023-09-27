const media = document.querySelector("video");
const audi = document.querySelector("audio");



let myimage = document.querySelector('button');




window.addEventListener("DOMContentLoaded", () => {


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
			media.play();
			audi.pause();
	}
});

});
