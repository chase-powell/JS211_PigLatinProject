'use strict';

// brings in the assert module for unit testing
// const assert = require('assert');
// brings in the readline module to access the command line
// const readline = require('readline');
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// GUI Tues 5/18/21
var generate = document.getElementById("word")
var result = document.getElementById("return")
document.getElementById("button").onclick = function(){
  result.value = pigLatin(generate.value)
  console.log("I got clicked.")
}

//1. car// ar + c + ay
//2. gratitude// // atitude + gr + ay
//3. egg// egg + yay
function pigLatin(word) {
  word = word.toLowerCase().trim()
  if(vowels(word.charAt(0))) {
    return word + 'yay'
  }else if(vowels(word.charAt(1))) {
    return word.slice(1) + word.charAt(0) + 'ay'
  }else if(vowels(word.charAt(2))) {
    return word.slice(2) + word.slice(0, 2) + 'ay'
  }
  }

  const vowels = (word) => {
    if(word.includes('a')
    || word.includes('e')
    || word.includes('i')
    || word.includes('o')
    || word.includes('u')) {
      return true
    } 

  console.log(vowels('eggs'))
  }
// expected output: true

// Case of starting with consonant
// remove all consonants before first vowel

//split word into array

  //Helpful methods could be "includes", "indexOf", "slice"


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }












// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
