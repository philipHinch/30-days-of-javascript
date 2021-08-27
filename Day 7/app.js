//EXERCISE LEVEL 1

//1 Declare a function fullName and it print out your full name.

// function fullName() {
//     console.log('Philip Hinch');
// };

// fullName();

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName, lastName) {
//     console.log(firstName, lastName);
// };

// fullName('Philip', 'Hinch');

//3  Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// };

// addNumbers(4, 6);


//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle

// function areaOfRectangle(length, width) {
//     let area = length * width;
//     console.log(area);
// };

// areaOfRectangle(5, 3);

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width);
//     console.log(perimeter);
// };

// perimeterOfRectangle(5, 7);

//6, 7, 8, 9, 10, 11

//12 Temperature in °C can be converted to oF using this formula: °F = (°C x 9/5) + 32. Write a function which convert °C to °F convertCelciusToFahrenheit.

// function convertCToF(celcius) {
//     let fahrenheit = (celcius * 9 / 5) + 32;
//     console.log(fahrenheit);
// };

// convertCToF(30);

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// function calcBmi(age, weight, height) {
//     let heightMeters = height / 100;
//     if (age < 20) {
//         alert('Sorry you need to be 20 years or older to calculate your BMI')
//     } else if (weight > 150) {
//         alert('Jesus, you are fat as hell!!!!')
//     } else if (heightMeters > 2.5) {
//         alert('You must be a giant!!!')
//     } else {
//         let bmi = Math.round(weight / (Math.pow(heightMeters, 2)));
//         if (bmi < 18) {
//             document.write(`<br><br><br><br><h1 style="font-size:3rem; color:crimson">Your BMI is ${ bmi }. You are "Underweight"</h1>`);
//         } else if (bmi > 18 && bmi < 25) {
//             document.write(`<br><br><br><br><h1 style="font-size:3rem; color:crimson">Your BMI is ${ bmi }. Your have a "Normal weight" </h1>`);
//         } else if (bmi > 25 && bmi < 30) {
//             document.write(`<br><br><br><br><h1 style="font-size:3rem; color:crimson">Your BMI is ${ bmi }. You are "Overweight"</h1>`);
//         } else {
//             document.write(`<br><br><br><br><h1 style="font-size:3rem; color:crimson">Your BMI is ${ bmi }. You are "Obese"</h1>`);
//         }
//     }
// };

// calcBmi(30, 85, 187);

// EXERCISE LEVEL 3

//2 Write a function name rgbColorGenerator and it generates rgb colors.

// function rgbColorGenerator() {
//     let a;
//     let b;
//     let c;

//     switch (true) {
//         case a == undefined:
//             a = numGenerator();
//         case b == undefined:
//             b = numGenerator();
//         case c == undefined:
//             c = numGenerator();
//     }

//     console.log(`rgb(${ a },${ b },${ c })`);
// }

// function numGenerator() {
//     let num = Math.floor(Math.random() * 256);
//     return num;
// };

// rgbColorGenerator();

//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

let chars = 'abcdef0123456789';
let arr = [];

function addHex() {
    let hex = '';
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }
    arr.push('#' + hex)
};

function arrayOfHexaColors(num) {
    for (let i = 0; i < num; i++) {
        addHex()
    }
    console.log(arr);
};

arrayOfHexaColors(6);




