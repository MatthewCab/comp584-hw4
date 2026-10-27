/* SOLUTIONS */

/* ------------- Exercise 1 ---------------*/
var newVariable = 10;
if (newVariable == 10) {
    let testPhrase = "hello world";
    console.log(testPhrase);
};

/* ------------- Exercise 2 ---------------*/
let testString = `this is a test string`
let testNumber = 3.45;
let testBoolean = true;
console.log('test string: ' + testString + ', test floating number: ' + testNumber + ', test boolean: ' + testBoolean);

/* ------------- Exercise 3 ---------------*/
// currentScore will hold the value of 95
let currentScore = 95;
console.log(currentScore);

/* ------------- Exercise 4 ---------------*/
let numberString = '100';
var numberVal = 100;
if (numberString == numberVal){
    console.log("values compared using ( == )");
};
if (numberString === numberVal){
    console.log("values compared using ( === )");
};

/* ------------- Exercise 5 ---------------*/
let isWeekend = false;
let schedule;
isWeekend == true ? schedule = "Day off" : schedule = "Work day";
console.log("Schedule: " + schedule);

/* ------------- Exercise 6 ---------------*/
let userAge = 16;
if (userAge >= 18){
    console.log("Access Granted");
} else {
    console.log("Access Denied");
};

/* ------------- Exercise 7 ---------------*/
let hasPermission = true;
let itemCount = 3;
if (hasPermission == true && itemCount < 5){
    console.log("Ready to process");
};

/* ------------- Exercise 8 ---------------*/
for (let i = 1; i<=5; i++){
    console.log(i);
};

/* ------------- Exercise 9 ---------------*/
for(let i = 0; i<=9; i++){
    if(i == 7){
        console.log("This prints if i = 7, so loop was terminated early using break.");
        break;
    };
};

/* ------------- Exercise 10 ---------------*/
let counter = 10;
do {
    console.log("Running once");
} while (counter > 10);


/* ------------- Exercise 11 ---------------*/
function calculateArea(width, height){
    let result = width * height;
    return result;
};

let resultArea = calculateArea(5,10);
console.log("Area = " + resultArea);

/* ------------- Exercise 12 ---------------*/
var fruitList = ['Apple', 'Banana'];
// original array
console.log("Original array: ", fruitList); 
// add grape to end of array
fruitList.push('Grape');
// remove apple from array
console.log("Before shift: ", fruitList);
fruitList.shift();
console.log("After shift: ", fruitList);
// get index of banana
var result = fruitList.indexOf('Banana');
console.log("Index of banana is: " + result);

/* ------------- Exercise 13 ---------------*/
let originalData = [5, 3, 'hello', false, 'end'];
var copyData = originalData.slice();
console.log("Copy of array: ", copyData);

/* ------------- Exercise 14 ---------------*/
function Animal(species, sound){
    this.species = species;
    this.sound = sound;
};
const monkey = new Animal("Night Monkey", "ooh ooh ah ah");
console.log("Testing exercise 14: ", monkey);

/* ------------- Exercise 15 ---------------*/
// uses constructor function from exercise 14
const dog = new Animal("Canine", "Woof");
const cat = new Animal("Feline", "Meow");

var animalArray = [dog,cat];
console.log("Animal array: ", animalArray);

