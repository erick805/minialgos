// write a function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// TIME COMPLEXITY
// O(n)
// SPACE COMPLEXITY
// O(n + m)

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// TIME COMPLEXITY
// O(n)
// SPACE COMPLEXITY
// O(n + m)
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "cant be reversed";
  }
  str = str.split("");

  let returnStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    returnStr += str[i];
  }

  return returnStr;
}

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
