var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log ('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function makeRandomGradients() {
	// I found the code for how to generate a random hex. Initially, I was trying to assign the random color values with var = randomColor1 and 2,
	// but it didn't work. I learned you can reassign the values by using the same var's (as below)
	color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}); 
	color2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	setGradient(); 
}
// Yeah-this didn't work:
// function makeRandomGradients() {
// 	// var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
// 	// var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ randomColor1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
// 	+ ", " 
// 	+ randomColor2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }
button.addEventListener("click", makeRandomGradients);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.