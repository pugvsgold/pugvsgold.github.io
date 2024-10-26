window.addEventListener("DOMContentLoaded", () => {  

  const websocket = new WebSocket("wss://web-production-96ed5.up.railway.app:8001/");

  const UA = navigator.userAgent;
  
  websocket.addEventListener("open", (ev) => {
  websocket.send(JSON.stringify({"type": "send", "value": UA}));
  });
  
  document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  websocket.send(JSON.stringify({"type": "recv"}));
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
