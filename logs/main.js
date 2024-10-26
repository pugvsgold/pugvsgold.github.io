window.addEventListener("DOMContentLoaded", () => {  

  const websocket = new WebSocket("wss://web-production-96ed5.up.railway.app/");

  const UA = navigator.userAgent;
  const loc = Navigator.geolocation;
  const uap = new UAParser();
  uap.setUA(UA);
  const result = uap.getResult();
  const d = new Date();
  
  
  websocket.addEventListener("open", (ev) => {
  websocket.send(JSON.stringify({"type": "send", "value": UA, "Browser":result.browser, "Device": result.device, "OS": result.os, "engine": result.engine.name, "architecture": result.cpu.architecture + document.referrer + d}));
  });
  
  document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  websocket.send(JSON.stringify({"type": "recv"}));
}
const vall = document.getElementById('inputstr').value;
  document.getElementById("button").onclick = function() {myclick()};
  function myclick() {
   websocket.send(JSON.stringify({"type": "send", "value": vall}));
}

const messages = document.createElement("ul");

  document.body.appendChild(messages);
  
    websocket.onmessage = ({ data }) => {
    const message = document.createElement("li");
    const content = document.createTextNode(data);
    message.appendChild(content);
    messages.appendChild(message);
  };

    
    
 });
