const scores = [
   0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93,
];

scores.find(function (val) {
   return val > 75;
});

scores.find(function (score) {
   return score !== 0 && score % 2 === 0;
});

const evenScores = scores.filter(function (score) {
   return score % 2 === 0;
});

const firstEvenScore = scores.findIndex(function (score) {
   return score !== 0 && score % 2 === 0;
});

scores.findIndex(function (score) {
   return score > 100;
});

//partition scores array with two subarrays. one with all 0s and one with all non-zero scores.

function partition(arr, pivot) {
   const pivotPoint = arr.findIndex(function (element) {
      return element > pivot;
   });
   const left = arr.slice(0, pivotPoint);
   const right = arr.slice(pivotPoint);
   return [left, right];
}

function myFind(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) return arr[i];
   }
}

myFind(scores, function (score) {
   return score > 91;
});

function myFindIndex(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) return i;
   }
   return -1;
}

myFindIndex(scores, function (score) {
   return score > 91;
});
