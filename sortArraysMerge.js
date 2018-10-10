// Merge 2 sorted arrays into a single sorted array

var arr1 = [1, 3, 7, 9];
var arr2 = [0, 2, 4];

function mergeArrays(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result.sort();
}

// refactor to merge and sort without using a built in sort function

var arr1 = [1, 3, 7, 9];
var arr2 = [0, 2, 4];
function mergeArraysWithoutSort(arr1, arr2) {
    var newArray = [];
    for (var i = 0, j = 0; i == arr1.length && j == arr2.length; <> ) {
        if(arr1[i] < arr2[j]) {
            newArray.add(arr1[i]); i++;
            } else {
                newArray.add(arr2[j]); j++;
            }
        }
    }
    return newArray;
};

// This second solution was the one provided by the Amazon interviewer, and I really should have argued it more, as it DOES NOT 
// work as written, and I was turned down for this job after this interview. Even after I cleaned up the syntax errors in the 
// for loop, it throws multiple errors, from the function not being defined to illegal return statement to newArray.add 
// is not a function. I also searched for another solution to this that does not use the sort function, and was unable to find
// concise and readable that worked. It was also indicated that somehow my solution was not as efficient as it could be, yet
// I have been unable to find a more efficient solution that works. I'm sure it exists, but until I find a truly compelling reason
// to do this differently, I see no reason to explore further. The first solution is a good one.
