window.addEventListener("DOMContentLoaded", () => {  

  const websocket = new WebSocket("ws://web-production-96ed5.up.railway.app:8001/");
  
  const UA = navigator.userAgent;
  
  websocket.addEventListener("open", (ev) => {
  websocket.send(JSON.stringify({"type": UA}));
  });
    
    
 });

  
