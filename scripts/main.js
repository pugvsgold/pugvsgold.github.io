


let myimage = document.querySelector('img');
myimage.onclick = function(){
let mysrc = myimage.getAttribute('src');
if(mysrc==='images/sample.png')
{
	myimage.setAttribute('src','images/sample2.png');
}
else if(mysrc==='images/sample2.png')
{
	myimage.setAttribute('src','images/carrr.png');
}
else if(mysrc==='images/carrr.png')
{
	myimage.setAttribute('src','images/emo3.png');
}
else if(mysrc==='images/emo3.png')
{
	myimage.setAttribute('src','images/Abstract_geometry.png');
}
else if(mysrc==='images/Abstract_geometry.png')
{
	myimage.setAttribute('src','images/sand_dunes.png');
}
else if(mysrc==='images/sand_dunes.png')
{
	myimage.setAttribute('src','images/interiorDesign.png');
}
else if(mysrc==='images/interiorDesign.png')
{
	myimage.setAttribute('src','images/ceiling_fan.png');
}
else if(mysrc==='images/ceiling_fan.png')
{
	myimage.setAttribute('src','images/apple.png');
}
else
{
	myimage.setAttribute('src','images/sample.png');
}
}
let myheading = document.querySelector('h1');
let mybutton = document.querySelector('button');
function setUserName() {
 let myName = prompt('please enter your name');
 if(!myName) {
   
   } else {
     localStorage.setItem('name', myName);
     myheading.textContent = 'mozilla is cool'+ myName;
   }  
}
if(!localStorage.getItem('name')) {
  
} else {
  let storedName = localStorage.getItem('name');
  myheading.textContent = 'Mozilla is cool, ' + storedName;
}
mybutton.onclick = function() {
  
}

