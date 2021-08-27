// EXERCISE LEVEL 1

//1 Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// };

// let i = 0;

// while (i < 11) {
//     console.log(i);
//     i++;
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 10)

//4 Write a loop that makes the following pattern using console.log(): ????????????????????????????????????????????????????????

// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let row = 1; row <= 6; row++) {
//     let pattern = '';
//     for (let i = 0; i < row; i++)
//         pattern += '#';
//     console.log(pattern);
// };

//5

// for (let i = 0; i < 11; i++) {
//     console.log(`${ i } x ${ i } = ${ i * i }`);
// };

//6

// for (let i = 0; i < 11; i++) {
//     console.log(i, Math.pow(i, 2), Math.pow(i, 3));
// }

//7 Use for loop to iterate from 0 to 100 and print only even numbers



// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// };

//8 Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i < 101; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// };

//9 Use for loop to iterate from 0 to 100 and print only prime numbers ??????????????????????????????????????????????????????????????????????

//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;

// for (let i = 0; i < 101; i++) {
//     sum += i;
// };

// console.log(sum);

//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumOdds = 0;
// let sumEvens = 0;

// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         sumEvens += i;
//     } else {
//         sumOdds += i;
//     }
// };

// console.log(sumEvens, sumOdds);

//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let evens = 0;
// let odds = 0;
// let arr = [];

// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         evens += i;
//     } else {
//         odds += i;
//     }
// };

// arr.push(evens, odds);

// console.log(arr);

// 13 Develop a small script which generate array of 5 random numbers

// let randomNums = [];

// for (let i = 0; i < 5; i++) {
//     randomNums.push(Math.ceil(Math.random() * 9));
// };

// console.log(randomNums);

// 14 Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let randomNums = [];

// for (let i = 5; randomNums.length < i;) {
//     let result = Math.floor(Math.random() * 10);
//     if (randomNums.indexOf(result) === -1) {
//         randomNums.push(result)
//     }
// };

// console.log(randomNums);

// 15 Develop a small script which generate a six characters random id:

let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

let randomId = '';

for (let i = 0; i < 5; i++) {
    let randomChar = Math.floor(Math.random() * chars.length);
    randomId += chars[randomChar];
};

console.log(randomId);




