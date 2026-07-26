// problem 05 : Reverse a string

// let str = "programming";
// let reverseWord =""
// for (let i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];

//   reverseWord = reverseWord + letter;
// }
// console.log(reverseWord)
// console.log(str[0]);
// console.log(str.length);
// console.log(str[10]);

function reverseWord (word){
    let reverseWord= '';
for(let i= word.length - 1; i>=0 ; i--){
    let letter = word[i]
reverseWord += letter
}
return reverseWord
}
console.log(reverseWord("bangladesh"));