// Hash Tables

// What makes a good hash?
// Fast(constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly.
// Deterministic (same input yields same output)

// simple hash function (only works on strings!)
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
