/* Grace Cunninghame 10/17/2024 */

// create and initialize a string variable named myName with your full name
let myName = 'Gracalynn Cunningham';
// create and initialize a variable named para1 and set it equal to document.getElementById("p1");
let para1 = document.getElementById('p1');

// set para1.textContent = myName
para1.textContent = myName;

/* BREAK */

// create and initialize two number variables with the names n1 and n2 using any numeric values desired
let n1 = 13;
let n2 = 8;

// create and initialize a variable named numberSum to add the two numbers using their variable names
let numberSum = n1 + n2;

// set document.getElementById("p2").textContent = numberSum;
document.getElementById("p2").textContent = numberSum;

/* BREAK */

// create and initialize a variable named numberMult to multiply the two numbers using their variable names.
let numberMult = n1 * n2;

// set document.getElementById("p3").textContent = numberMult;
document.getElementById("p3").textContent = numberMult;

/* BREAK */

// create and initialize a variable named myNameAddNum to add one of your numeric variables to the string variable
let myNameAddNum = myName + n1;

// set document.getElementById("p4").textContent = myNameAddNum;
document.getElementById("p4").textContent = myNameAddNum;

/* BREAK */

// create and initialize a variable named myNameMultNum to multiply one of your numeric variables to the string variable
let myNameMultNum = myName * n2;

// set document.getElementById("p5").textContent = myNameMultNum;
document.getElementById("p5").textContent = myNameMultNum;

/* BREAK */

// create and initialize a variable named ageCompare to compare your age (you can use a made-up, but realistic value) to the multiplication of your numeric variables (hint, use <, <=, >, or >= to do a comparison. The comparison will evaluate true or false).
let ageCompare = 26 > numberMult;

// set document.getElementById("p6").textContent = ageCompare;
document.getElementById("p6").textContent = ageCompare;
