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

let y, z; // You can also assign these 2 variables at a time 
y = z = 20 + 30;
console.log(y, z);

console.log(currentYear - abdulBirth > currentYear - sarahbirth); // If javascript is a program that executes the code line by line, then why it does the sub operation of both sides then do comparison operator ? Think.
// Its all about (Order of Precendence) for understanding this, you have to visit "MDN Operator Precendence" in which precendence means higher demand or value to do the operation first.

// let averageYear = pureAgeAbdul - pureAgeSarah / 2;
// console.log(averageYear); 
// Now in this case you are thinking that the answer is 0.5 but its not bcz of order of precedence and the bracket precedence is too high than all of other precendence

let averageYear = (pureAgeAbdul - pureAgeSarah) / 2;
console.log(averageYear);

// Challenge No. 1

let marksMass = 78;
let marksHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
const marksBMI = marksMass / marksHeight ** 2 + ' = ' + marksMass / (marksHeight * marksHeight);
const johnBMI = johnMass / johnHeight ** 2 + ' = ' + johnMass / (johnHeight * johnHeight);
const markHigherBMI = (marksBMI > johnBMI);
// console.log(johnBMI); This is for Checking Purpose
console.log(markHigherBMI);

// if/else Statement:
const age = 15;

if (age >= 18) {
    console.log(`Now, You are eligible to take the driving license`);
}
else {
    let yearRistriction = 18 - age;
    console.log(`Nah! You have to wait ${yearRistriction} years to get the driving license`)
}


let age_2 = 1991;
let century;
if (age_2 < 2000) {
    century = `20th Century`;
}
else {
    century = `21th Century`;
}
console.log(century);

// Challenge No. 2

let marksMass_1 = 78;
let marksHeight_1 = 1.69;
let johnMass_1 = 92;
let johnHeight_1 = 1.95;
const marksBMI_2 = marksMass_1 / marksHeight_1 ** 2 + ' = ' + marksMass_1 / (marksHeight_1 * marksHeight_1);
const johnBMI_2 = johnMass_1 / johnHeight_1 ** 2 + ' = ' + johnMass_1 / (johnHeight_1 * johnHeight_1);
if (marksBMI_2 > johnBMI_2) {
    console.log("Who has the higher BMI ? " + "Mark's BMI is higher than John's!")
}
else {
    console.log("Who has the higher BMI ? " + "John's BMI is higher than Mark's!")
}


// Manually Type Conversion:

let year = "1991";
console.log(year + 9); // This will concatenate the values
console.log(Number(year) + 9); // This will add the value bcz the "Number function" can change the variable into number So, Answer is 2000
console.log(typeof 2000); // In console you can check out the type of Number

console.log(String(2000), 2000)  // Here the "String Function" can change the number(2000) into string and individual (2000) represents number

// Type Coercion (Automatic Do Hidden Conversion) :

let year_2 = "1991" - 1; // Here you can see that in minus operator it doesn't concatinating and not giving the result of (NaN), Here javaScript doing coercion which means it can change the type conversion hiddenly (Change String into Number).
console.log(year_2);
console.log('23' * 2); // Same above statement for * 
console.log('22' / 2); // Same above statement for /

console.log("I'm " + 17 + " years old"); // Now here it also doing coercion, it is changing the Number(17) into String-(Hidden) So you see that it is more smarter than other languages 
console.log('1' + 1); // But Type Coercion is basically failed in Addition(+) it will doing concatination 
console.log(2 + 2 - "2" + "2" + 2) // 2+2-"2" makes 2 but + "2" will concate and it will continue concating all + values after (+ "2") until (-) come.

// Question 

let n = "99" + 9; // 999
n = n - 9;       // 999 - 9
console.log(n); // Answer 990

// Falsy Values: 
// There are 5 falsy values in JavaScript which are:  (0 , undefined , " " , NaN , False , null)

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(null));

// These are truthy values :
console.log(Boolean("Muqeet"));
console.log(Boolean({})); // Where {} is (object) and it is truthy value

// But we cant use this boolean operator as in top we have typed, this is a bad practice, And for Good Practice this boolean will automatically do type coercion in two scenarios 1) logical operator 2) logical context (means in if/else statement)

let money = 0; // 0 is falsy value so here Javascript do Type Coercion
if (money) {
    console.log(`You have to save it for buying Koenigsegg`)
}
else {
    console.log(`You have to came out from Matrix , Upgrading Yourself and to make money MAN!`)
}

// Double equal and Triple equal operator :

const age_3 = "18";

if (age_3 === 18) { } // Here triple equal means it is a strict operator (it will not print the value if a value is in string bcz the number after operator is Number(18) so if we put in age_3 as '18' so this is a string which means it can avoid this)
console.log(`You just became an adult :D (strict)`);
if (age_3 === 18) { } // Here it can avoid bcz on left side it is a string (only if when you put the number ('18') in above variable of age_3)
console.log(`You just became an adult :D (loose)`);

// But it cannot working due to some bugs here is another example below;

console.log(5 === 5);      // true
console.log(5 === '5');    // false (data type mismatch)
console.log(0.1 + 0.2 === 0.3); // false (precision error means [floating-point errors])

const obj1 = { prop: 'value' };
const obj2 = { prop: 'value' };
console.log(obj1 === obj2); // false (different object references)

// ------------------------------------------------------------------------------------------------------------------------- //
console.log(5 == 5);       // true
console.log(5 == '5');     // true (type coercion)
console.log(0.1 + 0.2 == 0.3); // False (precision error means [floating-point errors])
console.log(null == undefined); // true
console.log('' == 0);       // true (type coercion)

// ------------------------------------------------------------------------------------------------------------------------- //

const favourite = +prompt(`What is your favourite number ?`); // Here + command does to print only numbers if you write alphabet in the prompt or anything else it will take output as NaN 
console.log(favourite);
console.log(typeof favourite);

if (favourite === 69) {
    console.log(`COOL! That's what i thought`);
}
else if (favourite === favourite) {
    console.log(`Cool! ${favourite} is best number \n Why not 69 ?`); // Else if means (or or or) 
}
else {
    console.log(`Enter a Valid Number`);
}

// There is also an operator of !== which means not equal to 

// Boolean operators : &&(if anyone variable is false then result is false),  ||(if all variables are false then the result is false otherwise true ) !(invert the property, if variable is false then result is true and vice-versa)

const hasDrivingLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log(`He/She is able to Drive!`)
}
else {
    console.log(`Someone should drive bcz we dont want to die ☠️`)
}

// Challenge No. 3

const dolphin = 96 + 108 + 89 / 3;
const koalas = 88 + 91 + 110 / 3;
console.log(dolphin, koalas);

if (dolphin > koalas) {
    console.log(`Dolphin wins the trophy`);
}
else if (dolphin < koalas) {
    console.log(`Koalas wins the trophy`);
}
else if (dolphin === koalas) {
    console.log(`No one wins the trophy bcz of draw!`);
}

// ----------------------------------------------------------------------------------------------------------------------- //

const dolphin_2 = 97 + 112 + 101 / 3;
const koalas_2 = 109 + 95 + 123 / 3;
console.log(dolphin_2, koalas_2);

if (dolphin_2 > koalas_2 && dolphin_2 >= 100) {
    console.log(`Dolphin wins the trophy`);
}
else if (dolphin_2 < koalas_2 && koalas_2 >= 100) {
    console.log(`Koalas wins the trophy`);
}

// ----------------------------------------------------------------------------------------------------------------------- //

const dolphin_3 = 95 / 3;
const koalas_3 = 95 / 3;
console.log(dolphin_3, koalas_3);

if (dolphin_3 === koalas_3 && dolphin_3, koalas_3 >= 100) {
    console.log(`No one wins the trophy bcz of draw!`);
}
else {
    console.log(`Anyone have to gain score atleat 100`)
}

// Switch Statement :
// It is the type of statement which totally work just like if/else statement, and it is basically used for many condition to get rid of (else if) statement

const day = 'Sunday';

switch (day) {
    case 'Monday':
        console.log(`Preparing Notes for Assignment`);
        break; // if we dont apply break it will continue executing the lines means (Tuesday case)
    case 'Tuesday':
        console.log(`Doing Assignment`);
        break;
    case 'Wednesday':
        console.log(`Preparing for Practical`);
        break;
    case 'Thursday':
        console.log(`Practicing our courses`);
        break;
    case 'Friday':
        console.log(`Struggle from getting out of Matrix`);
        console.log(`Prepare for Namaz`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Enjoy the weekend with homies and friends`); // Now here we simply say that if the user type sunday or saturday it will gave the result of console.log
        break;
    default:
        console.log(`Enter a valid day!`)
        break;
}

// Expression and Statement :

// Expression :
// This is a term that result the values at its own

4 + 5
1991
true && false || !false

// Statement :
// This is a term that does not gave result at its own, so it depends on condition (Ex: if/else switch etc)

let num_2 = 20; // const doesn't work in this :)
if (num_2 > 18 ) {
    console.log(`You have chosen greater number`);
}

// In a simpler way the (words) are expression and (sentence) is a statement

console.log(`you number is ${num_2}`); // In template literals you cant put the all block of if/else code bcz javasvript knows it is a statement, and the whole template literal is basically an expression

// The Conditional (Ternary) operator:

const age_4 = 10;
age_4 >= 18 ? console.log(`Now you are an adult :D`) : console.log(`You have to wait ${18 - age_4} years to become an adult`); // Here (?) is "if" and (:) is "else" but you cant input again ratio sign and that is used for quick decisions
// Or
let age_5 = age_4 >= 18 ? `Now you are an adult :D` : `You have to wait ${18 - age_4} years to become an adult`;
console.log(age_5);
// Or
console.log(``)

// Original method of if/else:
if (age_4 >= 18) {
    console.log(`Now you are an adult :D`);
}
else {
    console.log(`You have to wait ${18 - age_4} years to become an adult`);
}

// Challenge No. 4:

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; 
console.log (`The bill was ${bill}, the tip was ${tip}%, and the total value is ${bill + tip}, but you have to pay only ${bill}.`);

