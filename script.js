var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var Button = document.getElementById("randomize");


function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}


setGradient();


function setRandomGrad() {
	function randomGen1() {
	  var n = (Math.random() * 0xfffff * 1000000).toString(16);
	  return '#' + n.slice(0, 6);
	};

	function randomGen2() {
	  var l = (Math.random() * 0xfffff * 1000000).toString(16);
	  return '#' + l.slice(0, 6);
	};

	Button.addEventListener("click", function () {
		color1.value = randomGen1();
		color2.value = randomGen2();
		setGradient();
	})
}


setRandomGrad();


color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

// function randomGen() {
// 	return console.log(Math.floor((Math.random() * 255) + 1));
// }

// randomGen();



// console.log(randomGen1() + " " + randomGen2());

