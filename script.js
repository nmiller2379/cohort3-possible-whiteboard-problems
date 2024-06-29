
// COUNT DIFFERENCE
// ================================================================================
// Given an array of distinct integers, count the number of pairs of integers that have a difference of k.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Input: An array of integers, and a single integer k. The array of integers will not be empty and will have at least one pair of integers.

// Output: The number of pairs of integers in the array that have a difference of k.

// Example
// Input: [1, 7, 5, 9, 2, 12, 3], 2 => Output: 4; [12, 17, 19, 11, 15, 3, 5, 1, 2, 10], 5 => Output: 6

// Algorithm
// 1. Initialize a variable count to 0
// 2. Iterate through the array
// 3. For each element in the array, iterate through the array again
// 4. If the absolute value of the difference between the two elements is equal to k, increment count
// 5. Return count

function countPairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n^2)

// Optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Create a set from the array
// 3. Iterate through the array
// 4. If the set contains the current element + k, increment count
// 5. Return count

function countPairsOptimized(arr, k) {
  let count = 0;
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + k)) {
      count++;
    }
  }
  return count;
}

console.log(countPairsOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)

// Another optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Initialize an empty object
// 3. Iterate through the array
// 4. Create property on object for each element in the array
// 5. Iterate over properties in the object
// 5. If the object contains the current element + k, increment count
// 6. Return count

function countPairsAnotherOptimized(arr, k) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (let prop in obj) {
    if (obj[Number(prop) + k]) {
      count++;
    }
  }
  return count;
}

console.log(countPairsAnotherOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)


// PILLARS
// ========================================================================================
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). There are 100 centimeters in a meter.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sample inputs and sample outputs: (1, 10, 10) => 0; (2, 20, 25) => 2000;

// 1. If numPill === 1
// a. return 0
// 2. ElseIf numPill === 2
// return dist * 100
// 3. Else
// a initialize pillarsThatCount to numPill - 1
// b initialize distanceCentimeters to dist * 100
// b initialize partialDistance to disttanceCentimeters * pillarsThatCount
// c initialize totalWidth to width * (numPill-2)
// return partialDistance + totalWidth

function pillars(numPill, dist, width) {
  if (numPill === 1) {
    return 0;
  } else if (numPill === 2) {
    return dist * 100;
  } else {
    const pillarsThatCount = numPill - 1; // Because there are (numPill - 1) gaps between pillars
    const distanceCentimeters = dist * 100;
    const partialDistance = distanceCentimeters * pillarsThatCount;
    const totalWidth = width * (numPill - 2); // Total width excluding the first and last pillar
    return partialDistance + totalWidth;
  }
}

console.log(pillars(1, 10, 10)); // return 0
console.log(pillars(2, 20, 25)); // return 2000
console.log(pillars(11, 15, 30)); // return 15270

// Other solutions
function pillars1(num_pill, dist, width) {
  // your code here
  return num_pill > 1
    ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width
    : 0;
}

console.log(pillars1(1, 10, 10)); // return 0
console.log(pillars1(2, 20, 25)); // return 2000
console.log(pillars1(11, 15, 30)); // return 15270

function pillars2(num_pill, dist, width) {
  if (num_pill === 1) {
    return 0;
  } else {
    let distance = dist * ((num_pill - 1) * 100);
    let pillars = num_pill - 2;
    return distance + width * pillars;
  }
}

console.log(pillars2(1, 10, 10)); // return 0
console.log(pillars2(2, 20, 25)); // return 2000
console.log(pillars2(11, 15, 30)); // return 15270


// UNDERGROUND MIN ===============================================================
// The Supreme Court has declared JavaScript's Math.min method unconstitutional. But we're rebels. We're going to keep finding the minimum value of a group of numbers. Implement your own funcction. The function should take 0 or more numbers and return the lowest.
// Constraints:
// Return NaN if either of the arguments is not a number.
// Treat null as 0.
// If the arguments are empty, return Infinity.
// Input: 0 or more numbers.
// Output: A number that is the lowest of the input numbers.
// Examples:
// min(1, 2, 3, 4, 5) => 1
// min(1) => 1
// min() => Infinity
// min(1, 'a') => NaN
// Algorithm
// 1. If there are no arguments, return Infinity
// 2. Create a variable to store the minimum number
// 3. Iterate through the arguments
// 4. If the current argument is not a number, return NaN
// 5. If the current argument is null, set it to 0
// 6. If the current argument is less than the minimum number, set the minimum number to the current argument
function min(...args) {
  if (args.length === 0) {
    return Infinity;
  }
  let min = args[0];
  for (const num of args) {
    if (typeof num !== "number") {
      return NaN;
    }
    if (num === null) {
      num = 0;
    }
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(min(1, 2, 3, 4, 5)); // 1
console.log(min(1)); // 1
console.log(min()); // Infinity
// Time complexity: O(n)

// Another solution
function min(...args) {
  if (args.length === 0) {
    return Infinity;
  }
  return args.reduce((min, num) => {
    if (typeof num !== "number") {
      return NaN;
    }
    if (num === null) {
      num = 0;
    }
    return num < min ? num : min;
  }, args[0]);
}
// Time complexity: O(n)

// MAXIMUM GAP =====================================================================================
// 
// Find the maximum difference between two elements in a sorted array.
// Constraints:
// The array will have at least two elements.
// The numbers in the array will be unique.
// The numbers in the array will be positive.
// Input: An array of integers.
// Output: An integer that is the maximum difference between two elements in the array.
// Examples:
// maxGap([1, 3, 5, 6, 8]) => 2
// maxGap([1, 10, 5]) => 5
// maxGap([1, 100, 5]) => 95
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the maximum difference
// 3. Iterate through the array
// 4. Find the difference between the current element and the next element
// 5. If the difference is greater than the maximum difference, set the maximum difference to the difference
// 6. Return the maximum difference
function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i + 1] - numbers[i];
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
console.log(maxGap([1, 3, 5, 6, 8])); // 2
console.log(maxGap([1, 10, 5])); // 5
console.log(maxGap([1, 100, 5])); // 95
// Time complexity: O(n log n)

// Another solution
function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers.reduce((maxDiff, num, i) => {
    const diff = numbers[i + 1] - num;
    return diff > maxDiff ? diff : maxDiff;
  }, 0);
}
// Time complexity: O(n log n)

// Another solution
const maximumGap = function (nums) {
  const n = nums.length;
  // Early exit if the array has less than 2 elements
  if (n < 2) {
    return 0;
  }
  // Early exit if the array has 2 elements
  if (n < 3) {
    return Math.abs(nums[0] - nums[1]);
  }
  // Find the maximum and minimum numbers in the array
  let maxNum = -Infinity;
  let minNum = +Infinity;
  // Iterate through the array to find the maximum and minimum numbers
  for (let i = 0; i < n; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }
  // If the maximum and minimum numbers are the same, return 0
  if (maxNum === minNum) {
    return 0;
  }
  // Create a variable to store the number of buckets
  const k = n - 1;
  const averageGap = (maxNum - minNum) / k;
  // Create arrays to store the minimum and maximum numbers in each bucket
  const minBuckets = new Array(k);
  const maxBuckets = new Array(k);
  // Initialize the first and last buckets
  minBuckets[0] = minNum;
  maxBuckets[0] = minNum;
  // Set min and max for the first and last buckets
  minBuckets[k - 1] = maxNum;
  maxBuckets[k - 1] = maxNum;
  // Iterate through the array to find the minimum and maximum numbers in each bucket
  for (let i = 0; i < n; i++) {
    // Skip the minimum and maximum numbers
    if (minNum === nums[i] || nums[i] === maxNum) {
      continue;
    }
    // Find the index of the current number in the array
    const j = Math.floor((nums[i] - minNum) / averageGap);
    // Update the minimum and maximum numbers in the bucket
    minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], nums[i]) : nums[i];
    maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], nums[i]) : nums[i];
  }
  // Declare variables to store the largest gap and the previous maximum index
  let largestGap = 0;
  let prevMaxIndex = 0;
  // Iterate through the buckets to find the largest gap
  for (let i = 1; i < n - 1; i++) {
    if (minBuckets[i]) {
      largestGap = Math.max(
        largestGap,
        minBuckets[i] - maxBuckets[prevMaxIndex]
      );
    }
    if (maxBuckets[i]) {
      prevMaxIndex = i;
    }
  }
  // Return the largest gap
  return largestGap;
};
console.log(maximumGap([1, 3, 5, 6, 8])); // 2
console.log(maximumGap([1, 10, 5])); // 5
console.log(maximumGap([1, 100, 5])); // 95
// Time complexity: O(n)


console.clear();
// PRODUCT OF MAXIMUMS OF ARRAY ==========================================================
// Given an array of integers, find the product of the k maximal numbers.
// Input: An array of numbers
// Output: A number that is the product of the k largest numbers in the array
// Examples
// ([1, 2, 3], 2) => 6
// ([4,3,5], 2) => 20
// ([10,8,7,9], 3), 720)
// ([8,6,4,6], 3), 288)
// ([10,2,3,8,1,10,4], 5), 9600)
// ([13,12,-27,-302,25,37,133,155,-14], 5)
// Algorithm:
// 1. Initialize const product to 1
// 1. Sort the array largest to smallest
// 2. Iterate through sorted array from start to k
// 3. Using compound multiplication multiply each integer by product
// 4. Return product
function maxProduct(arr, k) {
  let product = 1;
  const sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  for (let i = 0; i < k; i++) {
    product *= sortedArr[i];
  }
  return product;
}
console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([8, 6, 4, 6], 3));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, n) => acc * n);
}
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((produce, num) => produce * num, 1);
}
// Time complexity: O(n log n)
console.clear();
// MINIMUM STEPS ==========================================================
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Constraint:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once.
// K will always be reachable.
// Input: Array of positive integers, and a number.
// Output: A number counting the amount of steps it takes to add the smallest numbers in the array to reach or exceed K.
// Examples
// ([4, 6, 3], 7)) => 1
// ([10, 9, 9, 8], 17) => 1
// ([8, 9, 10, 4, 2], 23) => 3
// ([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) => 8
// ([4, 6, 3], 2) => 0
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the sum
// 3. Create a variable to store the number of steps
// 4. Iterate through the array
// 5. Add the current number to the sum
// 6. Increment the number of steps
// 7. If the sum is greater than or equal to K, return the number of steps
function minimumSteps(numbers, value) {
  const sortedArr = numbers.sort((a, b) => a - b);
  let sum = sortedArr[0];
  let steps = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sum >= value) {
      break;
    }
    sum += sortedArr[i];
    steps++;
  }
  return steps;
}
console.log(minimumSteps([4, 6, 3], 7)); // 1 [3, 4, 6]
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value){
  return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
}
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value){
  let arr = numbers.sort((a,b) => a - b)
  for(i=0;i < arr.length; i++){
    if(arr.slice(0,i+1).reduce((a,b) => a + b, 0) >= value){
      return i
      }
    }
  return i
}
// Time complexity: O(n^2)

// REMOVE NOISE FROM A STRING ==============================================================
// Given a string containing both letters and numbers, remove all the numbers from the string.
// Constraints:
// The string will contain at least one character.
// The string will contain at most 100 characters.
// The string will contain only letters and numbers.
// Input: A string containing both letters and numbers.
// Output: A string containing only letters, or undefined if there are no letters in the string.
// Examples:
// removeNumbers('a1b2c3') => 'abc'
// removeNumbers('1a2b3c') => 'abc'
// removeNumbers('123') => undefined
// Algorithm
// 1. Initialize const str = '';
// 2. Iterate through input string.
// a. check each character to see if it inccludes a number.
// a1. If it does not, use compound addition to add character to str
// 3. Return str
function removeNums(string) {
  let str = "";
  const pattern = /[0-9]/;
  for (const char of string) {
    if (!pattern.test(char)) {
      str += char;
    }
  }
  return str ? str : "undefined";
}
console.log(removeNums("a1b2c3"));
console.log(removeNums("123"));
console.log(removeNums("1a2b3c"));
console.log(removeNums("abc55"));
// Time complexity: O(n)
// Another solution
function removeNumbers(string) {
  return string.replace(/[0-9]/g, "");
}
// Time complexity: O(n)
// Another solution
function removeNumbers(string) {
  return string
    .split("")
    .filter((char) => isNaN(char))
    .join("");
}
// Time complexity: O(n)
console.clear();
// PRODUCT OF MAXIMUMS OF ARRAY ==========================================================
// Given an array of integers, find the product of the k maximal numbers.
// Input: An array of numbers
// Output: A number that is the product of the k largest numbers in the array
// Examples
// ([1, 2, 3], 2) => 6
// ([4,3,5], 2) => 20
// ([10,8,7,9], 3), 720)
// ([8,6,4,6], 3), 288)
// ([10,2,3,8,1,10,4], 5), 9600)
// ([13,12,-27,-302,25,37,133,155,-14], 5)
// Algorithm:
// 1. Initialize const product to 1
// 1. Sort the array largest to smallest
// 2. Iterate through sorted array from start to k
// 3. Using compound multiplication multiply each integer by product
// 4. Return product
function maxProduct(arr, k) {
  let product = 1;
  const sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  for (let i = 0; i < k; i++) {
    product *= sortedArr[i];
  }
  return product;
}
console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([8, 6, 4, 6], 3));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, n) => acc * n);
}
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((produce, num) => produce * num, 1);
}
// Time complexity: O(n log n)
console.clear();
// MINIMUM STEPS ==========================================================
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Constraint:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once.
// K will always be reachable.
// Input: Array of positive integers, and a number.
// Output: A number counting the amount of steps it takes to add the smallest numbers in the array to reach or exceed K.
// Examples
// ([4, 6, 3], 7)) => 1
// ([10, 9, 9, 8], 17) => 1
// ([8, 9, 10, 4, 2], 23) => 3
// ([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) => 8
// ([4, 6, 3], 2) => 0
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the sum
// 3. Create a variable to store the number of steps
// 4. Iterate through the array
// 5. Add the current number to the sum
// 6. Increment the number of steps
// 7. If the sum is greater than or equal to K, return the number of steps
function minimumSteps(numbers, value) {
  const sortedArr = numbers.sort((a, b) => a - b);
  let sum = sortedArr[0];
  let steps = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sum >= value) {
      break;
    }
    sum += sortedArr[i];
    steps++;
  }
  return steps;
}
console.log(minimumSteps([4, 6, 3], 7)); // 1 [3, 4, 6]
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value){
  return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
}
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value){
  let arr = numbers.sort((a,b) => a - b)
  for(i=0;i < arr.length; i++){
    if(arr.slice(0,i+1).reduce((a,b) => a + b, 0) >= value){
      return i
      }
    }
  return i
}
// Time complexity: O(n^2)