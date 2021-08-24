// EXERCISE LEVEL 2

//1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2 First remove all the punctuations and change the string to array and count the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// let newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ');

// console.log(newText.length);

//3 In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.push('apples', 'chicken', 'eggs');

// shoppingCart.unshift('whiskey');

// console.log(shoppingCart);

//4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// if (countries.includes('Ethiopia')) {
//     console.log('ETHIOPIA');
// } else {
//     countries.push('Ethiopia');
// }

// console.log(countries);

//5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');

// console.log(webTechs);

// webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');

//6 Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

//EXERCISE LEVEL 3

//1

//Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// const agesSorted = ages.sort();

// console.log(agesSorted[0], agesSorted[agesSorted.length - 1]);

//Find the median age(one middle item or two middle items divided by two)

// console.log(agesSorted[Math.round(ages.length / 2)]);

//Find the average age(all items divided by number of items)

let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

console.log(Math.round(sum / ages.length));






