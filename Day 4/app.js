// EXERCISES LEVEL 2

//1

// let score = parseInt(prompt('What is your score?'));
// let grade;

// if (score >= 0 & score < 50) {
//     grade = 'F';
// } else if (score > 49 & score < 60) {
//     grade = 'D';
// } else if (score > 59 & score < 70) {
//     grade = 'C';
// } else if (score > 69 & score < 90) {
//     grade = 'B';
// } else if (score > 89 & score < 101) {
//     grade = 'A';
// };

// if (score >= 0 & score < 101) {
//     console.log(`Your grade is "${ grade }"`);
// } else {
//     alert('Error! Please enter a score between 0 and 100');
// };

//2

//3

//EXCERCISE LEVEL 3 

let days;

let input = prompt('Enter a month').toLowerCase();

if (input === 'january' || input === 'march' || input === 'may' || input === 'july' || input === 'august' || input === 'october' || input === 'december') {
    days = 31;
    alert(`${ input } has ${ days } days!`);
} else if (input === 'april' || input === 'june' || input === 'september' || input === 'november') {
    days = 30;
    alert(`${ input } has ${ days } days!`);
} else if (input === 'february') {
    days = 28;
    alert(`${ input } has ${ days } days and in every 4 years it has 29!`);
} else {
    alert('Enter a valid month!');
};


