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

for (let row = 1; row <= 6; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
        pattern += '#';
    console.log(pattern);
};




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

//10







