/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.
  - Order of events: click must return random numbers b/w 1 and 6
    generate random number/s
  - use Math.random and Math.ceil * 6

b. connect to the CSS files

c. create a function for 'clicked'    
 pushButton.onclick

2) Follow the steps in your pseudocode to write your code.
a - generate a random number between 1 - 6 and store to a variable, random1
*/  
  
var random1 = function () {
  console.log(Math.ceil(Math.random()*6))
  };

//b - generate a random number between 1 - 6 and store to a variable, random2

var random2 = function () {
  console.log(Math.ceil(Math.random()*6))
  };

 

/*c - combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
d - combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie */

firstDie.className = 'dice-' + random1;
secondDie.className = 'dice-' + random2;

/*e - get the first die by ID and update the CSS class name to firstDie 
  (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)
f - get the first die by ID and update the CSS class name to secondDie 
  (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)*/

var firstDie = document.getElementById("firstDie");
var secondDie = document.getElementById("secondDie");

//3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked
//(Hint: Use document.getElementById to reference the button, and set the value of the onclick property to specify what should happen.)

rollDice.onclick = function() {
  function random1() {
  return(Math.ceil(Math.random()*6))
  }
  function random2() {
  return(Math.ceil(Math.random()*6))
}
}

/*
(function rollDice() {
	var dieOne = document.getElementById('first-die');
	var dieTwo = document.getElementById('second-die');
	var rollButton = document.getElementById('roll-dice');
	
	rollButton.onclick = function() {
		var firstRoll = Math.round(Math.random() * (6-1) + 1);
		var secondRoll = Math.round(Math.random() * (6-1) + 1);
		
		dieOne.className = 'dice-' + firstRoll;
		dieTwo.className = 'dice-' + secondRoll;
	}
})();

*/ 