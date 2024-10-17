/* Grace Cunninghame 10/17/2024 */

// creating a variable with my full name as the string 
let myName = 'Gracalynn Cunningham';
// assigning the variable to the <p> tag with the id of p1
let para1 = document.getElementById('p1');

// overrides the text content in <p> to my name saved in a string
para1.textContent = myName;

/* BREAK */

// assigning numbers to two variables
let n1 = 13;
let n2 = 8;

// a variable that is the sum of the two above numbers
let numberSum = n1 + n2;

// overrides the text content in <p> with ID of p2 to the sum above
document.getElementById("p2").textContent = numberSum;

/* BREAK */

// a variable that is the product of the two above numbers
let numberMult = n1 * n2;

// overrides the text content in <p> with ID of p3 to the sum above
document.getElementById("p3").textContent = numberMult;

/* BREAK */

// a variable that concatenating an above number to the end of my name string
let myNameAddNum = myName + n1;

// overrides the text content in <p> with ID of p4 to the concatenation above
document.getElementById("p4").textContent = myNameAddNum;

/* BREAK */

// NaN
let myNameMultNum = myName * n2;

// overrides the text content in <p> with ID of p4 to the error variable NaN above
document.getElementById("p5").textContent = myNameMultNum;

/* BREAK */

// a variable that stores the boolean determination of whether my age is greater than the numberMult variable
let ageCompare = 26 > numberMult;

// overrides the text content in <p> with ID of p4 to the boolean determination above
document.getElementById("p6").textContent = ageCompare;
