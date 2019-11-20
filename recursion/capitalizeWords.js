// Write a function capitalize words which takes in an array of strings and returns a new array of capitalized string values of first array.

// const words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizeWords = array => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  const res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
};
