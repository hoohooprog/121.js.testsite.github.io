/* this revised addition uses template literals to display rather than concatenation, all else are equal and same */

//calculate the sum of two numbers, stored in variables, and display the result using a third variable.  

//variables to store numbers and their end result
var num1;
var num2;
var total;
 
num1 = 5;
num2 = 7;
total = num1 + num2;

document.write("Welcome to my calculator" + "<br>");
//document.write("The sum of " + num1 + " + " + num2 + " is : " + total);
document.write(`The sum of ${num1} + ${num2} is : ${total}`);

// reference code: https://www.tutorialspoint.com/how-to-add-a-number-and-a-string-in-javascript
