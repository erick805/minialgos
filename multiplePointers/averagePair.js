function averagePair(arr, avg) {
  if (avg > arr[arr.length - 1]) return false;
  if (!arr.length) return false;

  let left = 0;
  let right = arr.length - 1;
  //   let midPoint = Math.floor((right - left) / 2)

  while (right > left) {
    let testAvg = right + left / 2;
    if (testAvg === avg) return true;
    else if (testAvg < avg) left++;
    else right--;
  }
  return false;
}
