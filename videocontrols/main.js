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
let datee = new Date( month + ' ' + date +', 2023 ' + hours + ':' + minutes + ':00');

console.log(datee);
console.log(differ);
console.log(start);

myimage.onclick = function(){
console.log("clicked");
myimage.style.opacity = 0;
audi.play();

function myfunc(){
   while (1)
           {
              if (now < datee)
              {
                   now = new Date(Date.now());
              }
              else
              {
                 media.play();
                 break;
              }
           }

}


let now = new Date(Date.now());

differ = ((datee.getMinutes() * 60 + datee.getSeconds() ) * 1000 + datee.getMilliseconds())- ((now.getMinutes() * 60 + now.getSeconds() ) * 1000 + now.getMilliseconds());
diff.value = differ;
console.log(differ);

window.setTimeout(myfunc, 3000);
}

//  const messages = document.createElement("ul");

//  document.body.appendChild(messages);
 //   const message = document.createElement("li");
 //   const content = document.createTextNode(differ);
   // message.appendChild(content);
   // messages.appendChild(message);

});

