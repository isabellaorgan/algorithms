	// Can I assume I know what numbers are in the arrays?
	// Can I assume all numbers in both are positive?
	// Can I assume that at least one combination will result in 25?
	// Do you want a numeric response? (25)
	// Or a boolean? (T/F)
	// Loop thru each array adding each index to an index in the second array until a result of 25 is returned
	// Should the process end when the first result of 25 is returned or should it continue in the event that there is more than one combination that results in 25?


	// This is returning one pair result (i.e. indices 1,5 in arr3 that equal 25)

	// TO DO: Figure out how to get multiple results (in this ex. there are 5 potential pairs)
	// Test what happens with negative numbers
	// Figure out how to console log the result (25)
	// Figure out how to return a bool


let arr1 = [1,2,3,4,5];
let arr2 = [24,23,22,21,20];

// function twoSum(arr1, arr2) {
function twoSum(arr1, arr2, target_num) {
	//sorts this the tidy way, using built-in methods and returns the array a human expects
	let arr3 = arr1.concat(arr2).sort(function(a, b){
		return a - b
	});//[1, 2, 3, 4, 5, 20, 21, 22, 23, 24]

	let arr3 = [];

	//this is how we sort when we're not allowed to use built in methods
	function mergeSorted(arr1, arr2) {
	  let arr3 = [];
	  let index1 = 0;
	  let index2 = 0;
	  let current = 0;

	  while (current < (arr1.length + arr2.length)) {
	    let arr1Done = index1 >= arr1.length;
	    let arr2Done = index2 >= arr2.length;

	    if (!arr1Done && (arr2Done || (arr1[index1] < arr2[index2]))) {
	      arr3[current] = arr1[index1];
	      index1++;
	    } else {
	      arr3[current] = arr2[index2];
	      index2++;
	    }
	    current++
	  }
	  return arr3;
	}
	console.log(mergeSorted(arr1, arr2));

	//this function will check that all the elements are numbers if we want to do that
	let res = arr3.every(function(element) {
		return typeof element === 'number';
	});
	console.log(res);

	Use this solution for a single indexed pair, such as: [4,5] which are 5 & 20
	let map = [];
	let indexnum = []

	for (let x = 0; x < arr3.length; x++) {
		if (map[arr3[x]] != null) {
			var index = map[arr3[x]];
			indexnum[0] = index;
			indexnum[1] = x;
			break;
			} else {
				map[target_num - arr3[x]] = x;
				console.log(x);
		}
	}
	return indexnum;

	//use this solution to sum the value of each arrays index with the value of the index of the second array
	for (let i = 0; i < arr1.length; i++)
	arr3[i] = arr1[i] + arr2[i];
	return arr3;

 }
 console.log(twoSum([1,2,3,4,5],[24,23,22,21,20],25));

//this will return true or false, but will only find the first result
function sumTwo(arr1, arr2, target_num) {
	for (let i = 0; i < arr1.length; i++) {
  		for (let x=0; x < arr2.length; x++) {
		    if (arr1[i] + arr2[x] == 25) {
		      return true;
		    } else {
		    	return false;
		    }
		}
  	}
}
// returns t/f but stops at first result - If I remvoe else return false, it will 
// return true when if there is only one pair not at the beginning of the array
console.log(sumTwo([1,2,3,4,5],[4,3,2,21,0],25));

//these return the sum of each indexed pair
var arr1 = [1, 2, 3, 4];
var arr2 = [2, 3, 4, 5];
var arr3 = [];

for (i in arr1) {
	arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);//[3, 5, 7, 9]

var arr1 = [1, 2, 3, 4];
var arr2 = [2, 3, 4, 5];
var arr3 = [];
var i = 0;

for (; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}

console.log(arr3);//[3, 5, 7, 9]
























