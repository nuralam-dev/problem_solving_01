// let word = "programming";
// let vowel = "aeiou";
// let count = 0;
// for (let i = 0; i < word.length; i++) {
//   let letter = word[i];
//   console.log(i, letter);
//   if (vowel.includes(letter)) {
//     console.log("its vowel");
//     count++;
//   }
// }
// console.log("count", count);

function countVowel(str) {
  let vowel = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log(i, letter);

    if (vowel.includes(letter)) {
      console.log("It's a vowel");
      count++;
    }
  }

  return count;
}

console.log(countVowel("hero"));