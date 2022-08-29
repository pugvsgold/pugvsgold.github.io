


let myimage = document.querySelector('img');
myimage.onclick = function(){
let mysrc = myimage.getAttribute('src');
if(mysrc==='images/sample.png')
{
	myimage.setAttribute('src','images/sample2.png');
}
else if(mysrc==='images/sample.png')
{
	myimage.setAttribute('src','images/sample.png');
}
else if()
{
	myimage.setAttribute('src','images/sample.png');
}
}
let myheading = document.querySelector('h1');
let mybutton = document.querySelector('button');
function setUserName() {
 let myName = prompt('please enter your name');
 if(!myName) {
   setUserName();
   } else {
     localStorage.setItem('name', myName);
     myheading.textContent = 'mozilla is cool'+ myName;
   }  
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myheading.textContent = 'Mozilla is cool, ' + storedName;
}
mybutton.onclick = function() {
  setUserName();
}

