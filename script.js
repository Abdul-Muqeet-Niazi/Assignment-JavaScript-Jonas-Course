// Question 1
let country = "Pakistan";
let continent = "Europe (Ranked 3rd)";
let population = "231.4 Million";

console.log(country);
console.log(continent);
console.log(population);

// Data Types:

// String Value:
let variable = "Abdul Muqeet";
console.log(typeof variable);

// Number Value:
let variable_1 = 69;
console.log(typeof variable_1);

// Boolean Value:
let variable_2 = true;
console.log(typeof variable_2);

// Undefined Value:
let variable_3;
console.log(typeof variable_3);

// Null Value:
console.log(typeof null); //While Object is error and bug and it is not solved by the company of javasript due to some reasons.

// Question 2
let island = true;
let language;
console.log(typeof island);
console.log(typeof language);
console.log(typeof population);

// Question 3
let $language = "Pashto";
console.log(typeof $language);

const _language = "Urdu";
console.log(typeof _language);

var language_variable = "Pashto";
console.log(typeof language_variable);

language = 'portuguese';
const country_2 = 'Portugal';
const continent_3 = 'Europe';
let isIsland = false;
isIsland = true;
console.log(isIsland)

// Math Operator
let currentYear = 2023;

const abdulBirth = 2006;
console.log(currentYear - abdulBirth); //Add +

const sarahbirth = 2007;
console.log(abdulBirth + sarahbirth); //Sub -

const divideMoney = 50000 / 2; //Divide /
console.log(divideMoney);

const multiplyMoney = 50000 * 2; //Multiply *
console.log(multiplyMoney);

const exponentialValue = 2 ** 3; // 2^3
console.log(exponentialValue);

const firstName = "Abdul";
const lastName = "Muqeet";
console.log(firstName + ' ' + lastName); // (+ ' ' +) This is for space between alphabets
// Some operation is done in variable and some in console, I wanna show you that it can be done by both ways // 

// Assignment Operator 
let x;

x = 10 + 5; // 15 
x += 10; // This means that x = x + 10 // 25
x *= 4; // This means that x = x + 4 // 100
x /= 2; // This means that x = x + 2 // 50
x++; // This means that x = x + 1 // 51
x--; // This means that x = x - 1 // 50
x--; // This means that x = x - 1 // 49
console.log(x); // Shows the latest x value 

// Comparison Operator 
let abdulBirth_2 = 2006;
let sarahbirth_2 = 2007;
let pureAgeAbdul = currentYear - abdulBirth;
let pureAgeSarah = currentYear - sarahbirth;
console.log(pureAgeAbdul); // 17
console.log(pureAgeSarah); // 16


console.log(pureAgeAbdul > pureAgeSarah); // Greater than (Represents : Boolean)
console.log(pureAgeAbdul < pureAgeSarah); // less than (Represents : Boolean) For result of True you have to shift the variables // 
console.log(pureAgeAbdul >= pureAgeSarah); // Greater than or Equal to (Represents : Boolean)
console.log(pureAgeAbdul <= pureAgeSarah); // less than or Equal to (Represents : Boolean)

let y , z; // You can also assign these 2 variables at a time 
y = z = 20 + 30;
console.log(y , z);

console.log(currentYear - abdulBirth > currentYear - sarahbirth); // If javascript is a program that executes the code line by line, then why it does the sub operation of both sides then do comparison operator ? Think.
// Its all about (Order of Precendence) for understanding this, you have to visit "MDN Operator Precendence" in which precendence means higher demand or value to do the operation first.

// let averageYear = pureAgeAbdul - pureAgeSarah / 2;
// console.log(averageYear); 
// Now in this case you are thinking that the answer is 0.5 but its not bcz of order of precedence and the bracket precedence is too high than all of other precendence

let averageYear = (pureAgeAbdul - pureAgeSarah) / 2;
console.log(averageYear);