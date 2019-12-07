/*
A strobogrammatic number is a number that looks like the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input: n = 2
Output: ["11", "69", "88", "96"]
*/

const findStrobogrammatic = n => {
  return helper(n, n);
};

const helper = (n, m) => {
  if (n === 0) return [""];
  if (n === 1) return ["0", "1", "8"];

  let list = helper(n - 2, m);
  const res = [];
  for (let i = 0; i < list.length; i++) {
    const s = list[i];

    if (n !== m) res.push("0" + s + "0");

    res.push("1" + s + "1");
    res.push("6" + s + "9");
    res.push("8" + s + "8");
    res.push("9" + s + "6");
  }

  return res;
};
