const string = "Hello world!";

// For looped Reversed String
function reverseString(str) {
  let stringToArray = [];

  for (let i = str.length; i >= 0; i--) {
    stringToArray.push(str[i]);
  }

  console.log(stringToArray.join(""));
  return stringToArray.join("");
}

reverseString(string);

// ES6 readable Reversed String
const reverseString2 = str => {
  let stringToArray = str.split("");

  let reversedArray = stringToArray.reverse();

  console.log(reversedArray.join(""));
  return reversedArray.join("");
};

reverseString2(string);

// One line reverse String

const reversedString3 = str => console.log([...str].reverse().join(""));

reversedString3(string);
