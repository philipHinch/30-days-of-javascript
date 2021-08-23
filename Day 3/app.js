// EXERCISES LEVEL 2

//1 

// let b = prompt('Enter the base value');

// let h = prompt('Enter the height value');

// let area = (b * h) / 2;

// console.log(area);

//2 

// let a = parseInt(prompt('Enter the lenght of a'));

// let b = parseInt(prompt('Enter the lenght of b'));

// let c = parseInt(prompt('Enter the lenght of c'));

// let perimiter = a + b + c;

// console.log(perimiter);

//3 

// let length = parseInt(prompt('Enter rectangle length'));

// let width = parseInt(prompt('Enter rectangle width'));

// let area = length * width;

// let perimeter = (length + width) * 2;

// console.log(area, perimeter);

//4 

// let r = parseInt(prompt('Enter the radius'));

// let circleArea = Math.PI * Math.pow(r, 2);

// let circleCircumference = 2 * Math.PI * r;

// console.log(circleArea, circleCircumference);

//5

//6

//7

//8

//9 Write a script that prompts a user to enter hours and rate per hour. Calculate pay of the person?

// let rate = parseFloat(prompt('Enter the rate'));

// let hours = parseInt(prompt('Enter the hours'));

// let pay = rate * hours;

// console.log(pay);

//10 If the length of your name is greater than 7 say, your name is long else say your name is short.

// let name = 'Philip';

// console.log(name.length > 10 ? 'Name is long' : 'Name is short');


// let surname = 'Hinchsliff';

// surname.length >= 10 ? console.log('Surname is long') : console.log('Surname is short');

//11 Compare your first name length and your family name length and you should get this output.

// console.log(`Your first name, ${ name } is not longer than your family name, ${ surname }`);

//12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 30;

// let momAge = 55;

// let difference = Math.abs(momAge - myAge);

// console.log(`My mom is ${ difference } years older than me`);

//13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let birthYear = parseInt(prompt('Enter your birthyear'));

// let age = new Date().getFullYear() - birthYear;

// let difference = 18 - age;

// console.log(age >= 18 ? `You are ${ age }. You are old enough to drive.` : `You are ${ age }. You will be allowed to drive in ${ difference } years.`);

//14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume someone lives just hundred years.

// let secondsInYear = 31536000;

// let ageNow = parseInt(prompt('Enter your age')) * secondsInYear;

// let maxAge = 100 * secondsInYear;

// let difference = maxAge - ageNow;

// console.log(difference);

//15 Create a human readable time format using the Date time object -----> DD/MM/YYYY HH:mm

// let day = new Date().getDate();

// let month = new Date().getMonth() + 1;

// let year = new Date().getFullYear();

// let hour = new Date().getHours();

// let min = new Date().getMinutes();

// let secs = new Date().getSeconds();

// console.log(`${ day }/${ month }/${ year } ${ hour }:${ min }:${ secs }`);

// EXERCISE LEVEL 3

function getTime() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let secs = new Date().getSeconds();

    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    secs = secs < 10 ? '0' + secs : secs;

    console.log(`${ date }/${ month }/${ year } ${ hour }:${ min }:${ secs }`);
};

setInterval(function () {
    getTime();
}, 1000);

























