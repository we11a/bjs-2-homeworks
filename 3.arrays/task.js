function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((value, i)  => value === arr2[i]);
  return result;
}

function advancedFilter(arr) {
  let divisibleThree = arr.filter((i) => i > 0 && i % 3 == 0)
  let resultArr = divisibleThree.map((total) => total * 10);
  return resultArr;
}