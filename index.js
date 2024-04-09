// 1. Two Sum
// function name(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return "not";
// }

// console.log(name([2, 7, 11, 15], 9));

// 9. Palindrome Number

// var x = 12121;

// function isPalindrome(x) {
//   const str = x.toString(); // Sonni stringga aylantiramiz
//   const len = str.length; // Sonning uzunligini olish
//   // Chapdan o'ngga va o'ngdan chapga qarab o'qish
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     console.log(str[i]);
//     if (str[i] !== str[len - i - 1]) {
//       return false; // Agar belgilar mos emas bo'lsa, false qaytariladi
//     }
//   }
//   return true; // Agar belgilar mos bo'lsa, true qaytariladi
// }
// console.log(isPalindrome(x));

// rim raqamlari

const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const input = "MCMXCIV";

const Rim = (input) => {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    const nextChar = input[i + 1];

    if (romanValues[currentChar] < romanValues[nextChar]) {
      sum -= romanValues[currentChar];
    } else {
      sum += romanValues[currentChar];
    }
  }

  return sum;
};

console.log(Rim(input));
