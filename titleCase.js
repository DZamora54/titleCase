// Return a provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, also capitalize connecting words like "the" and "of".

// Take a string and put it into an array.
// Split array on " "
// Capitalize the 1st character of each item of the array
// Make sure all non initial characters of each item of the array are lower case
// Put the items of the array into a string with a " " between each item
// return the string

function titleCase(str) {
  var titleCaseString = [];
  inputString = str.split("");
  titleCaseString.push(inputString[0].toUpperCase());
  for (i = 0; i < inputString.length - 1; i++) {
    if (inputString[i] == " ") {
      titleCaseString.push(inputString[i + 1].toUpperCase());
    } else {
      titleCaseString.push(inputString[i + 1].toLowerCase());
    }
  }
  finalTitleCaseString = titleCaseString.join("");
  console.log(finalTitleCaseString);
  return titleCaseString;
}

titleCase("sHoRt aNd sToUt");
