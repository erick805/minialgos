// Write a function collect strings which takes in a object and returns an array with all the string values.

// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }

// collectStrings(obj) => ["foo", "bar", "baz"])

const collectStrings = obj => {
  const stringsArr = [];

  const gatherStrings = o => {
    for (let key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  };

  gatherStrings(obj);

  return stringsArr;
};
