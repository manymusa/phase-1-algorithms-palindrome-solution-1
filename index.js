function reverseString(word){
  //reverses the string and returns it
  //convert array to string
  // const wordArray = word.split('');
  // //reverse array
  // const reverseWordArray = wordArray.reverse();
  // //convert array to string
  // const reverseWord = reverseWordArray.join('');
  // //return string
  // return reverseWord
  return word.split('').reverse().join('');
}




function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string is the same as the input
  //if the reversed string is the same as the input
  //return true
  // else
  //return false 

  const reversedWord =reverseString(word);
  return word === reversedWord;
  // if(reversedWord===word){
  //   return true;
  // } else{
  //   return false;
  // }
}

/* 
  Add your pseudocode here
*/
//isPalindrome takes a string a returns true if string is the same foward and backwards
//false if not

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
