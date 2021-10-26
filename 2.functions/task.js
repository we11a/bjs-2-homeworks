// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = +Infinity;
  max = -Infinity;
  sum = 0;
  for(let i=0; i < arr.length; i++) {  
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum +=arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]); 
    }
  }
  return max; 
}

// Задание 3
function worker2(arr) {
  let subtract, minWorker2, maxWorker2;
  minworker2 = arr[0];
  maxworker2 = arr[0];
  for(let i=0; i < arr.length; i++) {
    if (arr[i] < minworker2) minworker2 = arr[i];
    if (arr[i] > maxworker2) maxworker2 = arr[i];
  }
  subtract = maxworker2 - minworker2;
  return subtract;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]); 
    }
  }
  return max; 
}
