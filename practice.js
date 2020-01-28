//FizzBuzz 3 ways
for (var i=1; i < 100; i++) {
	if (1 % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else if (i % 15 == 0) {
		console.log("FizzBuzz");
	} else console.log(i);
}

for (var i=1; i < 101; i++) {
	if (1 % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else if (i % 15 == 0) console.log("FizzBuzz");
	else console.log(i);
}

for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);


//Instantiate the Array Constuctor and pass in an array
var foo = new Array(1,2,3);
console.log(foo);


//dynamically add the value “bar” to the array “foo
foo = ["monday", "Tuesday", "Wednesday"]

foo.push("Thursday");
console.log (foo);

//OR

foo[foo.length] = "Thursday";
console.log(foo);


let arr1 = [9,13,1];
let arr2 = [6,2,4];


//Sort an array
arr1.sort();
console.log(arr1);

//Merge two arrays into one sorted array 2 ways
function mergeArrays (arr1, arr2) {
	//sorts the easy way using a built-in, but array is not what a human is looking for
	let arr3 = arr1.concat(arr2).sort();
	console.log(arr3);
}
mergeArrays(arr1, arr2);

function mergeArrs (arr1, arr2) {
	//sorts this the tidy way, using built-in methods and returns the array a human expects
	let arr3 = arr1.concat(arr2).sort(function(a, b){return a - b});
	console.log (arr3);
}
mergeArrs([29,13,31],[6,2,4]); 


//Do it without using the sort method
function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

mergeTwo(arr1, arr2);


//Emoty an Array - 3 ways
var array1 = [1, 22, 24, 46];
array1 = [];
console.log(array1);

var array1 = [1, 22, 24, 46];
array1.length=0;
console.log(array1);

var array1 = [1, 22, 24, 46];
array1.splice(0, array1.length)
console.log(array1);

//Find the max average of an array
// **Note that: If all the numbers were positive, then the whole array is the answer.**
// The first question for this problem should then be whether all the numbers are positive or not.
function findMaxAverage(nums, k) {
    
    var maxNow = 0;
    
    for (var i = 0; i < k; i++) {
        maxNow += nums[i];
    }
    
    var maxUpdate = maxNow;
    
    for (var j = k; j < nums.length; j++) {
        maxNow += (nums[j] - nums[j - k]);
        maxUpdate = Math.max(maxNow, maxUpdate);
    }
    return maxUpdate / k;
}










