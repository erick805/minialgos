// Hash Tables

// What makes a good hash?
// Fast(constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly.
// Deterministic (same input yields same output)

// simple hash function (only works on strings!)
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
